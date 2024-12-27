import { useState, useEffect } from "react";
import { useLocation } from "react-router"; // Import useLocation
import { assets } from "../assets/assets";

const ImageCarousel = () => {
    const location = useLocation(); // Get the current location
    const images = [
        `${assets.img1}`,
        `${assets.img2}`,
        `${assets.img3}`,
        `${assets.img4}`,
        `${assets.img5}`,
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // Change image every 3 seconds
        return () => clearInterval(interval); // Cleanup interval on unmount
    }, [images.length]);

    // Hide the carousel on the /login route
    if (location.pathname === "/login") {
        return null;
    }

    return (
        <div className="relative w-full mx-auto">
            <div className="relative overflow-hidden rounded-lg shadow-lg">
                <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {images.map((image, index) => (
                        <div key={index} className="w-full h-full flex-shrink-0">
                            <img
                                src={image}
                                alt={`Traditional Clothing ${index + 1}`}
                                className="w-full h-1/3 object-cover rounded-lg"
                            />
                        </div>
                    ))}
                </div>
            </div>
            <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                {images.map((_, index) => (
                    <div
                        key={index}
                        className={`w-3 h-3 rounded-full ${
                            currentIndex === index ? "bg-white" : "bg-gray-400"
                        } cursor-pointer`}
                        onClick={() => setCurrentIndex(index)}
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default ImageCarousel;
