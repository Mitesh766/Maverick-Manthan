import { assets } from "../assets/assets";

const OurPolicy = () => {
    return (
        <div className="bg-gradient-to-r from-yellow-200 to-orange-300 py-20">
            <div className="flex flex-col sm:flex-row justify-between sm:justify-around gap-10 sm:gap-6 px-4 sm:px-12 text-center">
                {/* Exchange Policy Section */}
                <div className="flex flex-col items-center gap-4">
                    <img
                        src={assets.exchange_icon}
                        className="w-16 h-16 sm:w-20 sm:h-20 mb-4 transition-transform transform hover:scale-110"
                        alt="Exchange Icon"
                    />
                    <p className="text-lg font-semibold text-gray-800">Our Exchange Policy</p>
                    <p className="text-gray-500 text-sm sm:text-base">
                        We offer hassle-free exchange on all products.
                    </p>
                </div>

                {/* Return Policy Section */}
                <div className="flex flex-col items-center gap-4">
                    <img
                        src={assets.quality_icon}
                        className="w-16 h-16 sm:w-20 sm:h-20 mb-4 transition-transform transform hover:scale-110"
                        alt="Quality Icon"
                    />
                    <p className="text-lg font-semibold text-gray-800">7 Days Return Policy</p>
                    <p className="text-gray-500 text-sm sm:text-base">
                        We provide a 7-day free return policy for your satisfaction.
                    </p>
                </div>

                {/* Customer Support Section */}
                <div className="flex flex-col items-center gap-4">
                    <img
                        src={assets.support_img}
                        className="w-16 h-16 sm:w-20 sm:h-20 mb-4 transition-transform transform hover:scale-110"
                        alt="Support Icon"
                    />
                    <p className="text-lg font-semibold text-gray-800">Best Customer Support</p>
                    <p className="text-gray-500 text-sm sm:text-base">
                        Our support team is available 24/7 to assist you.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default OurPolicy;
