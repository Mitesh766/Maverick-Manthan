const Footer = () => {
    return (
        <div className="bg-gradient-to-r from-yellow-200 to-orange-200 py-10">
            {/* Main Content Section */}
            <div className="flex flex-col sm:grid grid-cols-1 md:grid-cols-3 gap-10 my-10 text-sm px-4 sm:px-12">
                {/* Brand Info Section */}
                <div className="flex flex-col gap-4 sm:gap-6">
                    <h1 className="text-3xl sm:text-4xl font-extrabold text-center sm:text-left text-red-600">PARAMPARA</h1>
                    <p className="text-gray-600 text-center sm:text-left">
                        PARAMPARA brings you traditional clothes from all over the world. Our collections are inspired by centuries-old craftsmanship and culture, beautifully crafted to add elegance to your wardrobe.
                    </p>
                </div>

                {/* Company Info Section */}
                <div className="flex flex-col gap-6">
                    <p className="text-xl font-medium mb-4 text-center sm:text-left text-red-600">COMPANY</p>
                    <ul className="flex flex-col gap-3 text-gray-600 text-center sm:text-left">
                        <li className="hover:text-orange-600 cursor-pointer">Home</li>
                        <li className="hover:text-orange-600 cursor-pointer">About Us</li>
                        <li className="hover:text-orange-600 cursor-pointer">Delivery</li>
                        <li className="hover:text-orange-600 cursor-pointer">Privacy Policy</li>
                    </ul>
                </div>

                {/* Contact Info Section */}
                <div className="flex flex-col gap-6">
                    <p className="text-xl font-medium mb-4 text-center sm:text-left text-red-600">GET IN TOUCH</p>
                    <ul className="flex flex-col gap-3 text-gray-600 text-center sm:text-left">
                        <li className="hover:text-orange-600 cursor-pointer">91 7665086956</li>
                        <li className="hover:text-orange-600 cursor-pointer">paramparaaajki@gmail.com</li>
                       
                    </ul>
                </div>
            </div>

            {/* Footer Bottom Section */}
            <div className="text-center py-5     ">
                <hr className="border-gray-400" />
                <p className="text-sm text-gray-600 mt-3">© 2024 PARAMPARA - All Rights Reserved</p>
            </div>
        </div>
    );
};

export default Footer;
