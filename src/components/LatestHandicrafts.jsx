import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

const LatestHandicraftProducts = () => {
    const { currency } = useContext(ShopContext);

    const products = [
        {
            id: 1,
            image: "https://thebimba.com/cdn/shop/products/madhubani-painting-mockup-2033.png?v=1654051169",
            name: "Madhubani Painting",
            price: 4000,
            description:
                "Madhubani Painting is an ancient art form originating from Bihar, India. Known for its intricate patterns and vibrant colors, this painting is traditionally created using natural dyes and pigments, often depicting folklore, deities, and nature.",
        },
        {
            id: 2,
            image: "https://www.dharmashop.com/cdn/shop/files/07-12_SB_RC_ML_WM-8_2000x.jpg?v=1720623139",
            name: "Tibetan Meditation Bowl",
            price: 12000,
            description:
                "Tibetan Meditation Bowls are used in meditation and spiritual practices. These handcrafted bowls produce soothing sounds that aid in mindfulness and relaxation. Each bowl is made with great precision and is a true reflection of Tibetan culture.",
        },
        {
            id: 3,
            image: "https://tribalartindia.com/wp-content/uploads/2021/08/Animal-surrounding-Bana-Tribal-Painting.jpg",
            name: "Gond Painting",
            price: 7000,
            description:
                "Gond Painting is a tribal art form from the Gond community in Madhya Pradesh. The vibrant colors and intricate patterns often depict nature, animals, and local folklore, showcasing the deep connection between the artists and the natural world.",
        },
    ];

    return (
        <div className="py-12">
            {/* Introduction Section */}
            <div className="text-center px-4 sm:px-10 md:px-20 mb-12">
                <h2 className="text-2xl font-bold text-center mb-6">Latest Handicraft Products</h2>
            </div>

            {/* Handicraft Products Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 px-4 sm:px-10 md:px-20">
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="bg-gradient-to-b from-yellow-100 via-orange-100 to-amber-200 shadow-xl rounded-lg overflow-hidden w-full h-[400px] flex flex-col transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl"
                    >
                        {/* Image Section */}
                        <div className="overflow-hidden h-[250px] bg-white flex items-center justify-center">
                            <img
                                className="hover:scale-110 transition-transform ease-in-out duration-500 object-cover h-full w-auto"
                                src={product.image}
                                alt={product.name}
                            />
                        </div>
                        {/* Product Info Section */}
                        <div className="p-4 text-center">
                            <p className="text-lg font-extrabold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-orange-500">
                                {product.name}
                            </p>
                            <p className="text-sm font-semibold text-gray-700">
                                {currency}
                                {product.price}
                            </p>
                            <p className="text-sm text-gray-600 mt-2 truncate">{product.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LatestHandicraftProducts;
