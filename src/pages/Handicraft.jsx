import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import ReviewCarousel from "../components/ReviewCarousel";


const Handicraft = () => {
    const { currency } = useContext(ShopContext);

    return (
        <div className="bg-gradient-to-r from-yellow-200 to-orange-300 py-12">
            {/* Introduction Section */}
            <div className="text-center px-4 sm:px-10 md:px-20 mb-12">
                <p className="text-3xl sm:text-4xl  text-gray-800 mb-4">
                    India is a land of diverse cultures and rich traditions, with handicrafts reflecting its vibrant lifestyles. Crafted by over 20 million artisans, these eco-friendly creations support livelihoods and contribute to the economy. Made using simple tools and locally sourced materials, each piece tells the story of India&apos;s craftsmanship.
                </p>
            </div>

            {/* Handicraft Products Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 px-4 sm:px-10 md:px-20">
                {/* Product 1 */}
                <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    <img
                        src="https://thebimba.com/cdn/shop/products/madhubani-painting-mockup-2033.png?v=1654051169"
                        alt="Madhubani Painting"
                        className="w-full h-auto object-cover"
                    />
                    <div className="p-4">
                        <h1 className="text-xl font-semibold text-gray-800">Madhubani Painting</h1>
                        <h2 className="text-lg text-gray-600">{currency}4000</h2>
                        <p className="text-sm text-gray-500 mt-2">
                            Madhubani Painting is an ancient art form originating from Bihar, India. Known for its intricate patterns and vibrant colors, this painting is traditionally created using natural dyes and pigments, often depicting folklore, deities, and nature.
                        </p>
                    </div>
                </div>

                {/* Product 2 */}
                <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    <img
                        src="https://www.dharmashop.com/cdn/shop/files/07-12_SB_RC_ML_WM-8_2000x.jpg?v=1720623139"
                        alt="Tibetan Meditation Bowl"
                        className="w-full h-auto object-cover"
                    />
                    <div className="p-4">
                        <h1 className="text-xl font-semibold text-gray-800">Tibetan Meditation Bowl</h1>
                        <h2 className="text-lg text-gray-600">{currency}12000</h2>
                        <p className="text-sm text-gray-500 mt-2">
                            Tibetan Meditation Bowls are used in meditation and spiritual practices. These handcrafted bowls produce soothing sounds that aid in mindfulness and relaxation. Each bowl is made with great precision and is a true reflection of Tibetan culture.
                        </p>
                    </div>
                </div>

                {/* Product 3 */}
                <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    <img
                        src="https://tribalartindia.com/wp-content/uploads/2021/08/Animal-surrounding-Bana-Tribal-Painting.jpg "
                        alt="Gond Painting"
                        className="w-full h-auto object-cover"
                    />
                    <div className="p-4">
                        <h1 className="text-xl font-semibold text-gray-800">Gond Painting</h1>
                        <h2 className="text-lg text-gray-600">{currency}7000</h2>
                        <p className="text-sm text-gray-500 mt-2">
                            Gond Painting is a tribal art form from the Gond community in Madhya Pradesh. The vibrant colors and intricate patterns often depict nature, animals, and local folklore, showcasing the deep connection between the artists and the natural world.
                        </p>
                    </div>
                </div>

                {/* Product 4 */}
                <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    <img
                        src="https://www.shilpsutra.com/cdn/shop/products/rang-darpan-_1_8de14a8e-6a81-48ae-b824-3050410aa4d9.jpg?v=1701014708&width=1600"
                        alt="Punjabi Jutti"
                        className="w-full h-auto object-cover"
                    />
                    <div className="p-4">
                        <h1 className="text-xl font-semibold text-gray-800">Punjabi Jutti</h1>
                        <h2 className="text-lg text-gray-600">{currency}800</h2>
                        <p className="text-sm text-gray-500 mt-2">
                            Punjabi Jutti is a traditional footwear, often handcrafted with vibrant embroidery. These shoes are made using leather and are designed for both comfort and style, making them an iconic part of Punjab&lsquo;s rich cultural heritage.
                        </p>
                    </div>
                </div>

                {/* Product 5 */}
                <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    <img
                        src="https://www.tribesindia.com/wp-content/uploads/2022/01/1-5.png"
                        alt="Dhokra Art"
                        className="w-full h-auto object-cover"
                    />
                    <div className="p-4">
                        <h1 className="text-xl font-semibold text-gray-800">Dhokra Art</h1>
                        <h2 className="text-lg text-gray-600">{currency}5000</h2>
                        <p className="text-sm text-gray-500 mt-2">
                            Dhokra Art is a traditional metal casting technique, which uses the lost-wax method. Originating from the tribal communities of central India, these handcrafted metal artifacts often represent figures of animals, gods, and goddesses, showcasing the timeless craftsmanship.
                        </p>
                    </div>
                </div>
            </div>

            <h2 className="text-center text-xl font-semibold mt-12 text-gray-800">More coming soon...</h2>

            {/* Artisans Section */}
            <div className="text-center py-12 px-4 sm:px-10 md:px-20">
                <h3 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-6">
                    Get to know about our artisans
                </h3>
                <ReviewCarousel />
               

            </div>
        </div>
    );
};

export default Handicraft;
