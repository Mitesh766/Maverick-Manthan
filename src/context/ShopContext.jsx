/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { use } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
export const ShopContext = createContext()

const ShopContextProvider = (props) => {
    const currency = '$';
    const delivery_fee = 10;
    const [search, setSearch] = useState('')
    const [showSearch, setShowSearch] = useState(false)
    const [cartItems, setCartItems] = useState({})
    const navigate= useNavigate()
    const clothData = [
        {
          productId: 'a1',
          name: 'Anarkali',
          price: '₹3,000 - ₹8,000',
          sizes: ["M", "L", "XL"],
          category: "Women’s Clothing",
          subCategory: "Kurtas",
          description:
            'A beautiful Anarkali dress, perfect for weddings and formal events, made with rich fabric and delicate embroidery.',
          image:
            'https://medias.utsavfashion.com/media/catalog/product/cache/1/small_image/295x/040ec09b1e35df139433887a97daa66f/e/m/embroidered-georgette-anarkali-suit-in-red-v1-kch8719.jpg',
        },
        {
          productId: 'a2',
          name: 'Banarasi Saree',
          price: '₹3,000 - ₹12,000',
          sizes: ["M", "L", "XL"],
          category: "Women’s Clothing",
          subCategory: "Sarees",
          description:
            'A luxurious Banarasi saree made with authentic silk, featuring intricate brocade work.',
          image:
            'https://medias.utsavfashion.com/media/catalog/product/cache/1/small_image/295x/040ec09b1e35df139433887a97daa66f/b/a/banarasi-saree-in-fuchsia-v1-sew7315.jpg',
        },
        {
          productId: 'a3',
          name: 'Cotton Kurta-Pajama',
          price: '₹1,500 - ₹4,000',
          sizes: ["M", "L", "XL"],
          category: "Men’s Clothing",
          subCategory: 'Kurtas',
          description: 'A simple yet elegant cotton kurta-pajama set, ideal for day-to-day wear.',
          image:
            'https://manyavar.scene7.com/is/image/manyavar/SDES1009_322-Wine_301.1309_29-07-2024-17-40:283x395',
        },
        {
          productId: 'a4',
          name: 'Jodhpuri Suit',
          price: '₹8,000 - ₹20,000',
          sizes: ["M", "L", "XL"],
          category: "Men’s Clothing",
          subCategory: 'Suit',
          description:
            'A royal Jodhpuri suit with detailed embroidery, crafted from high-quality fabric.',
          image:
            'https://manyavar.scene7.com/is/image/manyavar/CTSD1325V_306-Dark+Blue_701.0720_29-07-2024-22-03:283x395',
        },
        {
          productId: 'a5',
          name: 'Chaniya Choli',
          price: '₹5,000 - ₹15,000',
          sizes: ["M", "L", "XL"],
          category: "Women’s Clothing",
          subCategory: 'Ethnic Wear',
          description:
            'A colorful and festive Chaniya Choli made from premium cotton or silk with elaborate mirror work.',
          image:
            'https://manyavar.scene7.com/is/image/manyavar/SKT4874-418-ORANGE+(1)_16-04-2024-12-46:283x395',
        },
      ];
      

    const addToCart = async (itemId, size) => {

        if (!size) {
            toast.error('Select Product Size')
            return
        }

        let cartData = structuredClone(cartItems)
        if (cartData[itemId]) {
            if (cartData[itemId][size]) {
                cartData[itemId][size] += 1
            }
            else {
                cartData[itemId][size] = 1
            }
        }
        else {
            cartData[itemId] = {};
            cartData[itemId][size] = 1;
        }
        setCartItems(cartData)
    }

    const getCartCount = () => {
        let totalCount = 0;
        for (const itemId in cartItems) {

            for (const size in cartItems[itemId]) {
                try {
                    if (cartItems[itemId][size] > 0) {
                        totalCount += cartItems[itemId][size];
                    }
                } catch (error) {
                    console.error(error);
                }
            }

        }
        return totalCount;
    };

    const updateQuantity = async (itemId, size, quantity) => {
        let cartData = structuredClone(cartItems)
        cartData[itemId][size] = quantity
        setCartItems(cartData)
    }

    const getCartAmount =  () => {
        let totalAmount = 0;
        for(const items in cartItems){
            let itemInfo=products.find((product)=>(product._id === items))
            for(const item in cartItems[items]){
                try {
                    if(cartItems[items][item]>0){
                        totalAmount+=itemInfo.price*cartItems[items][item]
                    }
                } catch (error) {
                    
                }
            }
        }
        return totalAmount;
    }


    const value = { products, currency, delivery_fee, search, setSearch, showSearch, setShowSearch, addToCart, cartItems, getCartCount, updateQuantity,getCartAmount,navigate,clothData }
    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider