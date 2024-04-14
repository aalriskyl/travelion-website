import React, { useState } from "react";
import { BsPerson } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { FaFacebook, FaPinterest, FaTwitter, FaYoutube } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleNav = () => {
    setNav(!nav);
    setDropdownVisible(!dropdownVisible); // Toggle dropdown visibility
  };

  const handleCloseDropdown = () => {
    setNav(false); // Close hamburger menu
    setDropdownVisible(false); // Close dropdown
  };

  return (
    <div className="flex w-full justify-between items-center h-20 px-2 absolute z-10 text-white">
      <div>
        <h1 className="px-2">Travelion</h1>
      </div>
      <ul className="hidden md:flex items-center">
        <li>Home</li>
        <li>Travel</li>
        <li>Book</li>
        <li>Gallery</li>
      </ul>
      <div className="hidden md:flex">
        <BsPerson size={30} />
        {/* <button className= 'bg-blue-500 px-8 mx-auto'/> */}
      </div>
      {/* Hamburger */}
      <div onClick={handleNav} className="md:hidden z-10">
        {nav ? <AiOutlineClose className='text-black' size={20} /> : <HiOutlineMenuAlt4 size={20} />}
      </div>
      {/* Mobile UI Dropdown */}
      {dropdownVisible && (
        <div className="absolute text-black left-0 top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col">
          <ul>
            <h1>Travelion</h1>
            <li className="border-b">Home</li>
            <li className="border-b">Travel</li>
            <li className="border-b">Book</li>
            <li className="border-b">Gallery</li>
            <div className="flex flex-col">
              <button className="my-6">Search</button>
              <button>Account</button>
            </div>
            <div className="flex justify-between my-6">
              <FaFacebook className="icon" />
              <FaTwitter className="icon" />
              <FaYoutube className="icon" />
              <FaPinterest className="icon" />
            </div>
          </ul>
        </div>
      )}
      {/* Overlay to close dropdown when clicking outside */}
      {dropdownVisible && (
        <div
          onClick={handleCloseDropdown}
          className="fixed inset-0 opacity-50 z-50"
        ></div>
      )}
    </div>
  );
};

export default Navbar;
