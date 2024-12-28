/* eslint-disable no-unused-vars */
import { Link, NavLink } from 'react-router'; // Ensure using the correct import from react-router-dom
import { useState, useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const { setShowSearch, getCartCount } = useContext(ShopContext);

  return (
    <div className="w-full  flex justify-between items-center py-5 px-4 sm:px-10 bg-gradient-to-r from-yellow-100 to-orange-50 font-medium shadow-md">
      {/* Logo Section */}
      <Link to="/" className="text-2xl font-bold text-orange-800 whitespace-nowrap hover:text-orange-600 transition-all">
        𝔭α尺α𝐌ｐค𝔯卂
      </Link>

      {/* Navigation Links (Desktop) */}
      <ul className="hidden sm:flex gap-6 text-sm text-gray-800">
        <NavLink to="/" className="hover:text-orange-600 transition-colors">
          HOME
        </NavLink>
        <NavLink to="/clothing" className="hover:text-orange-600 transition-colors">
          CLOTHING
        </NavLink>
        <NavLink to="/knowyourculture" className="hover:text-orange-600 transition-colors">
          HERITAGE
        </NavLink>
        <NavLink to="/handicraft" className="hover:text-orange-600 transition-colors">
          HANDICRAFT
        </NavLink>
       
      </ul>

      {/* Icons Section */}
      <div className="flex items-center gap-6">
        {/* Profile Icon with Dropdown */}
        <div className="group relative">
          <Link to="/login">
            <img
              className="w-5 cursor-pointer hover:scale-110 transition-transform"
              src={assets.profile_icon}
              alt="Profile"
            />
          </Link>
          <div className="hidden group-hover:block absolute dropdown-menu right-0 pt-4">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-white text-gray-600 rounded shadow-lg">
              <p className="cursor-pointer hover:text-orange-600">My Profile</p>
              <p className="cursor-pointer hover:text-orange-600">Orders</p>
              <p className="cursor-pointer hover:text-orange-600">Logout</p>
            </div>
          </div>
        </div>

        {/* Cart Icon */}
        <Link to="/cart" className="relative">
          <img
            src={assets.cart_icon}
            className="w-5 cursor-pointer hover:scale-110 transition-transform"
            alt="Cart"
          />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-orange-700 text-white rounded-full text-[8px]">
            {getCartCount()}
          </p>
        </Link>

        {/* Menu Icon for Mobile */}
        <img
          src={assets.menu_icon}
          onClick={() => setVisible(true)}
          className="w-5 cursor-pointer sm:hidden hover:scale-110 transition-transform"
          alt="Menu"
        />
      </div>

      {/* Sidebar Menu (Mobile) */}
      <div
        className={`absolute top-0 bottom-0 right-0 bg-white shadow-lg transition-all overflow-hidden z-10 ${
          visible ? 'w-64' : 'w-0'
        }`}
      >
        <div className="flex flex-col text-gray-800">
          <div onClick={() => setVisible(false)} className="flex items-center gap-4 p-4 border-b cursor-pointer">
            <img className="h-4 rotate-180" src={assets.dropdown_icon} alt="Back" />
            <p>Back</p>
          </div>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-3 px-6 border-b hover:bg-orange-100"
            to="/"
          >
            HOME
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-3 px-6 border-b hover:bg-orange-100"
            to="/clothing"
          >
            CLOTHING
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-3 px-6 border-b hover:bg-orange-100"
            to="/knowyourculture"
          >
            HERITAGE
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-3 px-6 border-b hover:bg-orange-100"
            to="/handicraft"
          >
            HANDICRAFT
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-3 px-6 border-b hover:bg-orange-100"
            to="/about"
          >
            ABOUT
          </NavLink>
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
