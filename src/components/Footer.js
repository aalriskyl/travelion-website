import React from "react";
import { FaFacebook, FaPinterest, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full bg-gray-100 py-16">
      <div className="max-w-[1240px] mx-auto flex flex-col px-4">
        <div className="sm:flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4 sm:mb-0">Travelion</h1>
          <div className="flex space-x-4">
            <FaFacebook className="icon" />
            <FaTwitter className="icon" />
            <FaYoutube className="icon" />
            <FaPinterest className="icon" />
          </div>
        </div>
        <div className="flex justify-between mt-8">
          <ul className="flex flex-col space-y-2 sm:space-y-0 sm:flex-row sm:space-x-4 text-gray-700">
            <li className="hover:text-gray-900 cursor-pointer text-m">About</li>
            <li className="hover:text-gray-900 cursor-pointer text-m">Partnership</li>
            <li className="hover:text-gray-900 cursor-pointer text-m">Careers</li>
            <li className="hover:text-gray-900 cursor-pointer text-m">Newsroom</li>
          </ul>
          <ul className="flex flex-col space-y-2 sm:space-y-0 sm:flex-row sm:space-x-4 text-gray-700">
            <li className="hover:text-gray-900 cursor-pointer text-m">Advertising</li>
            <li className="hover:text-gray-900 cursor-pointer text-m">Contact</li>
            <li className="hover:text-gray-900 cursor-pointer text-m">Terms</li>
            <li className="hover:text-gray-900 cursor-pointer text-m">Privacy</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
