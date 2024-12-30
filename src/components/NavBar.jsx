import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { TbHomeSpark } from "react-icons/tb";
import { RiBlueskyFill } from "react-icons/ri";
import { FaBed } from "react-icons/fa6";
import { IoMdPhotos } from "react-icons/io";
import { RiContactsBook3Fill } from "react-icons/ri";
import { HiUserGroup } from "react-icons/hi2";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdBackspace } from "react-icons/md";
import { GiHotMeal } from "react-icons/gi";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const colors = {
    primary: "bg-[#FEFF9F]",
    secondary: "text-[#72BF78]",
    hover: "hover:text-[#A0D683]",
  };

  const navLinks = [
    { name: "Home", to: "/", Icon: TbHomeSpark },
    { name: "Meals", to: "/meals", Icon: GiHotMeal },
    { name: "Rooms", to: "/rooms", Icon: FaBed },
    { name: "About Us", to: "/about", Icon: RiBlueskyFill },
    { name: "Gallery", to: "/gallery", Icon: IoMdPhotos },
    { name: "Contact", to: "/contact", Icon: RiContactsBook3Fill },
    { name: "Login", to: "/login", Icon: HiUserGroup },
  ];

  // Function to close the menu after a link is clicked
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={`shadow-lg ${colors.primary} fixed w-full z-10`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
        <motion.div
          className="text-2xl font-bold text-[#72BF78]"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          Serenity Hotel
        </motion.div>
        <div className="hidden md:flex space-x-8 text-lg">
          {navLinks.map(({ name, to, Icon }, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              className={`flex items-center space-x-2 ${colors.hover} ${colors.secondary}`}
            >
              <Icon size={20} />
              <Link to={to}>{name}</Link>
            </motion.div>
          ))}
        </div>
        <button
          className="md:hidden text-2xl text-[#72BF78]"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <MdBackspace /> : <GiHamburgerMenu />}
        </button>
      </div>
      {isMenuOpen && (
        <motion.div
          className="md:hidden flex flex-col space-y-4 p-4 bg-[#D3EE98] text-[#72BF78] shadow-md"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {navLinks.map(({ name, to, Icon }, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              onClick={handleLinkClick} // Close the menu when a link is clicked
              className={`flex items-center space-x-3 ${colors.hover}`}
            >
              <Icon size={20} />
              <Link to={to}>{name}</Link>
            </motion.div>
          ))}
        </motion.div>
      )}
    </nav>
  );
};

export default NavBar;
