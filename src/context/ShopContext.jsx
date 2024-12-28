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
  const currency = '₹';
  const delivery_fee = 10;
  const [search, setSearch] = useState('')
  const [showSearch, setShowSearch] = useState(false)
  const [cartItems, setCartItems] = useState({})
  const navigate = useNavigate()
  const clothData = [
    {
      productId: 'a12',
      name: 'Jodhpuri Suit',
      price: '5,499',
      sizes: ["M", "L", "XL"],
      description: 'A royal suit with intricate embroidery, often worn for formal occasions and royal gatherings.',
      image: 'https://theethnic.co/cdn/shop/files/6_226ea63d-09c4-4df8-9dbe-2d56e8da32dd.jpg?v=1687507914&width=500',
    },
    {
      productId: 'a13',
      name: 'Chaniya Choli',
      price: '3,499',
      sizes: ["M", "L", "XL"],
      description: 'A vibrant and colorful outfit, consisting of a chaniya (skirt), choli (blouse), and dupatta, traditionally worn during dances and festivals.',
      image: 'https://images.cbazaar.com/images/black-faux-georgette-chaniya-choli-with-artful-embroidery-kutch-work-ghswe14-u.jpg',
    },
    {
      productId: 'c2',
      name: 'Salwar Kameez',
      price: '2,499',
      sizes: ["M", "L", "XL"],
      description: 'A timeless outfit featuring a long tunic (kameez) paired with loose trousers (salwar). This versatile and elegant ensemble is perfect for everyday wear or festive occasions.',
      image: 'https://www.biba.in/dw/image/v2/BKQK_PRD/on/demandware.static/-/Sites-biba-product-catalog/default/dwdc21e21d/images/ss24/skdassorted7473ss24ind_1.jpg?sw=502&sh=753',
    },  
    {

      productId: 'c1',
      name: 'Kurta-Pajama',
      price: '1,199',
      sizes: ["M", "L", "XL"],
      description: 'A classic combination of a kurta and pajama. The kurta is a long tunic with detailed embroidery, perfect for casual outings, religious ceremonies, or festivals. The pajama adds comfort and elegance to the look.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnmdl118D64-nQdbR76v2wx21L8mKED2EudA&s',
    },
   
    {
      productId: 'c3',
      name: 'Churidar',
      price: '1,799',
      sizes: ["M", "L", "XL"],
      description: 'The churidar is a tightly fitting trouser worn with a kameez or tunic. Its elegance and formality make it a great choice for special occasions, weddings, or cultural events.',
      image: 'https://medias.utsavfashion.com/media/catalog/product/cache/1/small_image/295x/040ec09b1e35df139433887a97daa66f/b/d/bdw49.jpg',
    },
    {
      productId: 'c4',
      name: 'Lungi',
      price: '699',
      sizes: ["M", "L", "XL"],
      description: 'A traditional garment from South India, the lungi is a simple piece of cloth wrapped around the waist, offering comfort and breathability. Ideal for casual wear and hot climates.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8jhCShdg2iiYK3AC8Sq4545oG27ir6XzYXQ&s',
    },
    {
      productId: 'c5',
      name: 'Dupatta',
      price: '999',
      sizes: ["One Size"],
      description: 'A long scarf or shawl worn over the shoulder, often paired with salwar kameez or lehengas. This elegant accessory adds a touch of grace and modesty to the outfit.',
      image: 'https://medias.utsavfashion.com/media/catalog/product/cache/1/small_image/295x/040ec09b1e35df139433887a97daa66f/b/a/banarasi-dupatta-in-fuchsia-v1-bup175_2.jpg',
    },
    {
      productId: 'c10',
      name: 'Brocade Kimono',
      price: '6,499',
      sizes: ["M", "L", "XL"],
      description: 'A fusion garment that blends the traditional kimono design with Indian brocade fabrics. The brocade kimono is a luxurious choice for special events and celebrations.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLV99BMAvmTTDbaqAbCk15qGaLSQ00j7ybkA&s',
    },
    {
      productId: 'c11',
      name: 'Kanjivaram Saree',
      price: '19,999',
      sizes: ["One Size"],
      description: 'A premium silk saree from Tamil Nadu, known for its intricate golden zari work. Worn during weddings and significant events, the Kanjivaram saree is a symbol of tradition and elegance.',
      image: 'https://img.perniaspopupshop.com/catalog/product/k/a/KAST052203_2.jpg?impolicy=listingimagedesktop',
    },
    {
      productId: 'c12',
      name: 'Phulkari Embroidered Dress',
      price: '2,499',
      sizes: ["M", "L", "XL"],
      description: 'This dress features the traditional Phulkari embroidery, known for its vibrant floral patterns. A perfect choice for casual wear and cultural festivals, embodying the rich heritage of Punjab.',
      image: 'https://cdn0.weddingwire.in/article/9805/original/1280/jpg/75089-phulkari-embroidery-mr-and-mrs-planner-suit.jpeg',
    },
    {
      productId: 'c14',
      name: 'Madhubani Print Dress',
      price: '3,499',
      sizes: ["M", "L", "XL"],
      description: 'A dress adorned with vibrant Madhubani prints, showcasing intricate floral, animal, and mythological designs. A unique fusion of art and fashion, perfect for casual wear or cultural festivals.',
      image: 'https://ethnicrace.com/wp-content/uploads/2023/05/Buy-Madhubani-Printed-White-Indian-Evening-Gown-1.webp',
    },

    {
      productId: 'a9',
      name: 'Anarkali Dress',
      price: '3,999',
      sizes: ["M", "L", "XL"],
      description: 'A beautiful traditional dress with a fitted bodice and a flowing skirt, perfect for weddings and formal occasions.',
      image: 'https://www.biba.in/dw/image/v2/BKQK_PRD/on/demandware.static/-/Sites-biba-product-catalog/default/dw3ed21a76/images/aw23/skdjhilmil8883aw23grn_1.jpg?sw=502&sh=753',
    },
    {
      productId: 'a10',
      name: 'Banarasi Saree',
      price: '7,999',
      sizes: ["One Size"],
      description: 'A luxurious saree known for its intricate patterns and use of zari thread, ideal for weddings and festive occasions.',
      image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR8A9zT2NFNfeFS3-C0TrYMaJwwlPDETVUh7prsk4yZeIhEtxtHeVKmV2_5Qy7f8S5Gwiso5EOBAMFBwxgiTBvfm0oenVB6OOVc97cwV58E6xwG5yZ7TDM1',
    },
    {
      productId: 'a11',
      name: 'Cotton Kurta-Pajama',
      price: '999',
      sizes: ["M", "L", "XL"],
      description: 'A lightweight cotton kurta and pajama set, perfect for casual wear during summer or spring festivals.',
      image: 'https://manyavar.scene7.com/is/image/manyavar/KFN172_326-Teal+Blue.3013_24-08-2024-18-32:417-520?&dpr=on,2',
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

  const getCartAmount = () => {
    let totalAmount = 0;
    for (const items in cartItems) {
      let itemInfo = products.find((product) => (product._id === items))
      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            totalAmount += itemInfo.price * cartItems[items][item]
          }
        } catch (error) {

        }
      }
    }
    return totalAmount;
  }


  const value = { products, currency, delivery_fee, search, setSearch, showSearch, setShowSearch, addToCart, cartItems, getCartCount, updateQuantity, getCartAmount, navigate, clothData }
  return (
    <ShopContext.Provider value={value}>
      {props.children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider