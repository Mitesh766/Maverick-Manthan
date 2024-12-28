/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";

const Product = () => {
  const { clothId } = useParams();
  const { clothData, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);

  const [size, setSize] = useState('');

  const fetchProductData = async () => {
    clothData.map((item) => {
      if (item.productId === clothId) {
        setProductData(item);
        return null;
      }
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [clothId, clothData]);

  return productData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      {/* Product Data */}
      <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 px-4 sm:px-12">
        {/* -----------------------Product Images------------------- */}
        <div className="flex-1 flex justify-center items-center">
          <img src={productData.image} className="w-full max-w-lg h-auto object-cover rounded-lg shadow-lg" />
        </div>

        {/* ----------------------Product Info---------------------------------- */}
        <div className="flex-1 flex flex-col">
          <h1 className="text-2xl sm:text-3xl font-semibold mt-2">{productData.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            {[...Array(4)].map((_, index) => (
              <img key={index} className="w-4" src={assets.star_icon} alt="star" />
            ))}
            <img className="w-4" src={assets.star_dull_icon} alt="empty star" />
            <p className="pl-2">(122)</p>
          </div>
          <p className="mt-5 text-3xl font-semibold">{currency}{productData.price}</p>
          <p className="mt-5 text-gray-600">{productData.description}</p>

          {/* Size Selection */}
          <div className="flex flex-col gap-4 my-8">
            <p className="text-lg font-medium">Select Size</p>
            <div className="flex gap-2 flex-wrap">
              {productData.sizes.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setSize(item)}
                  className={`border py-2 px-4 rounded-full ${item === size ? 'bg-orange-500 text-white border-orange-500' : 'bg-gray-200'}`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={() => addToCart(productData._id, size)}
            className="bg-black text-white px-8 py-3 text-sm rounded-lg mt-6 hover:bg-gray-700 transition-colors"
          >
            ADD TO CART
          </button>

          <hr className="mt-8" />

          {/* Additional Information */}
          <div className="text-sm text-gray-500 mt-5">
            <p>100% Original Product</p>
            <p>Cash on delivery is available on this product</p>
            <p>Easy return and exchange policy within 7 days</p>
          </div>
        </div>
      </div>

      {/* -------------------Description & Review Section----------------------- */}
      <div className="mt-20 px-4 sm:px-12">
        <div className="flex border-b">
          <b className="px-5 py-3 text-sm font-medium cursor-pointer">Description</b>
          <p className="px-5 py-3 text-sm cursor-pointer">Reviews (122)</p>
        </div>
        <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-600 mt-4">
          <p>
            An e-commerce website is an online platform that facilitates the buying and selling of products or services
            over the internet. It serves as a virtual marketplace where businesses and individuals can showcase their
            products, interact with customers, and conduct transactions without the need for a physical presence. E-commerce
            websites have gained immense popularity due to their convenience, accessibility, and the global reach they offer.
          </p>
          <p>
            E-commerce websites typically display products or services along with detailed descriptions, images, prices, and
            any available variations (e.g., sizes, colors). Each product usually has its own dedicated page with relevant
            information.
          </p>
        </div>
      </div>
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;
