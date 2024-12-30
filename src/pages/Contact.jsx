import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaWhatsappSquare,
  FaTelegram,
  FaPhoneSquare,
  FaHome,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div className="w-full min-h-screen  flex items-center justify-center py-10 px-6">
      <div className="w-full max-w-7xl">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-[#2C3E50] mb-8">
          Contact Us
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {/* Contact Information Section */}
          <motion.div
            className="bg-white rounded-lg shadow-md overflow-hidden relative group p-6"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-xl md:text-2xl font-bold text-[#2C3E50] mb-4">
              Get in Touch
            </h2>
            <p className="text-md md:text-lg text-[#72BF78] font-semibold mb-4">
              We would love to hear from you!
            </p>

            {/* Contact Details */}
            <div className="space-y-4">
              <div className="flex items-center text-gray-600">
                <FaHome className="mr-3 text-2xl text-indigo-500" />
                <p>1234 Main Street, City, Country</p>
              </div>
              <div className="flex items-center text-gray-600">
                <FaPhoneSquare className="mr-3 text-2xl text-indigo-500" />
                <p>+123 456 7890</p>
              </div>
            </div>

            <motion.div
              className="absolute top-4 right-4 flex space-x-3 opacity-0 group-hover:opacity-100 transition duration-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {/* Social Media Icons */}
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-500 hover:text-pink-700"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:text-blue-900"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://wa.me/11234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-500 hover:text-green-700"
              >
                <FaWhatsappSquare size={24} />
              </a>
              <a
                href="https://t.me/username"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700"
              >
                <FaTelegram size={24} />
              </a>
            </motion.div>
          </motion.div>

          {/* Contact Form Section */}
          <motion.div
            className="bg-white rounded-lg shadow-md overflow-hidden relative group p-6"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-xl md:text-2xl font-bold text-[#2C3E50] mb-4">
              Send Us a Message
            </h2>

            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="text-gray-600 font-semibold">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="text-gray-600 font-semibold">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="text-gray-600 font-semibold"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Your message"
                  required
                />
              </div>

              <button
                type="submit"
                className="bg-[#72BF78] text-white px-6 py-2 rounded-full hover:bg-[#5FAF66] transition"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
