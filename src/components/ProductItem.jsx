/* eslint-disable react/prop-types */

import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router";

const ProductItem = ({ productId, image, name, price, description }) => {
    const { currency } = useContext(ShopContext);
    
    return (
        <Link className="text-gray-800 cursor-pointer" to={`/clothing/${productId}`}>
            <div className="bg-gradient-to-b from-yellow-100 via-orange-100 to-amber-200 shadow-xl rounded-lg overflow-hidden w-full h-[400px] flex flex-col transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl">
                {/* Image Section */}
                <div className="overflow-hidden h-[250px] bg-white flex items-center justify-center">
                    <img
                        className="hover:scale-110 transition-transform ease-in-out duration-500 object-cover h-full w-auto"
                        src={image}
                        alt={name}
                    />
                </div>
                {/* Product Info Section */}
                <div className="p-4 text-center">
                    <p className="text-lg font-extrabold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-orange-500">
                        {name}
                    </p>
                    <p className="text-sm font-semibold text-gray-700">
                        {currency}
                        {price}
                    </p>
                    <p className="text-sm text-gray-600 mt-2 truncate">{description}</p>
                </div>
            </div>
        </Link>
    );
};

export default ProductItem;
