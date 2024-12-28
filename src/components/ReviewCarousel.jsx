import { useState, useEffect } from "react";
import { useLocation } from "react-router"; // Import useLocation

const ReviewCarousel = () => {
    const location = useLocation(); // Get the current location
    const reviews = [
        `Madhubani artist Ramesh from Bihar: Ramesh Jha, an eighth-generation Madhubani artist from Bihar, preserves his 300-year-old family tradition. Using natural dyes and intricate designs, his paintings embody heritage and storytelling. Globally admired, each piece celebrates culture and craftsmanship. Owning his art supports a legacy, blending tradition with timeless beauty for your spaces.`,
        `Kamala Devi, a master Eri and Muga silk artisan from Assam, weaves tradition and devotion into timeless art. Using eco-friendly techniques, her designs mirror Assam’s natural beauty. By choosing her creations, you support heritage and a craftswoman’s dreams. Wear a story, carry a legacy, and celebrate Assam’s elegance.`,
        `Ravindra Reddy from Nimmalakunta preserves Andhra Pradesh’s ancient leather puppet craft. Handcrafted from goat leather and inspired by epics, his puppets reflect cultural heritage and timeless storytelling. By owning his art, you support a legacy of intricate craftsmanship and bring home a piece of living history.`
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [scrollingForward, setScrollingForward] = useState(true); // Track scrolling direction

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => {
                if (scrollingForward) {
                    // Moving forward
                    if (prevIndex === reviews.length - 1) {
                        setScrollingForward(false); // Reverse direction
                        return prevIndex - 1;
                    }
                    return prevIndex + 1;
                } else {
                    // Moving backward
                    if (prevIndex === 0) {
                        setScrollingForward(true); // Reverse direction
                        return prevIndex + 1;
                    }
                    return prevIndex - 1;
                }
            });
        }, 3000); // Change review every 3 seconds
        return () => clearInterval(interval); // Cleanup interval on unmount
    }, [reviews.length, scrollingForward]); // Dependency array now includes scrollingForward

    // Hide the carousel on the /login route
    if (location.pathname === "/login") {
        return null;
    }

    return (
        <div className="relative w-full h-[90vh] mx-auto overflow-hidden flex">
            <div className="relative w-full h-full rounded-lg shadow-lg bg-gradient-to-r from-pink-500 to-orange-600 flex flex-wrap">
                <div
                    className="flex transition-transform duration-700 ease-in-out"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {reviews.map((review, index) => (
                        <div
                            key={index}
                            className="w-full h-full flex-shrink-0 flex justify-center items-center text-white px-6 sm:px-10 md:px-20"
                        >
                            <div className="text-center text-2xl md:text-3xl font-bold leading-relaxed tracking-wide">
                                {review}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Arrow Navigation */}
            <div className="absolute top-1/2 left-4 transform -translate-y-1/2 cursor-pointer text-white text-3xl">
                <span onClick={() => setCurrentIndex(currentIndex === 0 ? reviews.length - 1 : currentIndex - 1)}>&#10094;</span>
            </div>
            <div className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer text-white text-3xl">
                <span onClick={() => setCurrentIndex(currentIndex === reviews.length - 1 ? 0 : currentIndex + 1)}>&#10095;</span>
            </div>

            {/* Dots Navigation */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                {reviews.map((_, index) => (
                    <div
                        key={index}
                        className={`w-4 h-4 rounded-full ${
                            currentIndex === index ? "bg-white" : "bg-gray-400"
                        } cursor-pointer`}
                        onClick={() => setCurrentIndex(index)}
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default ReviewCarousel;
