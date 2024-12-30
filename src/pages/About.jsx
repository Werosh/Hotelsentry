import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="w-full min-h-screen  py-10 px-6 flex items-center justify-center">
      <motion.div
        className="bg-white p-10 rounded-lg shadow-xl w-full max-w-3xl "
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-8">
          <motion.h2
            className="text-4xl font-extrabold text-gray-800"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            About Us
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            We are a passionate team dedicated to creating innovative solutions
            that make life easier and more enjoyable.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Mission Section */}
          <motion.div
            className="bg-gray-50 p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold text-gray-700">
              Our Mission
            </h3>
            <p className="text-gray-600 mt-2">
              Our mission is to innovate and deliver products that enhance user
              experience, making everyday tasks simpler and more efficient.
            </p>
          </motion.div>

          {/* Values Section */}
          <motion.div
            className="bg-gray-50 p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold text-gray-700">Our Values</h3>
            <ul className="text-gray-600 mt-2 space-y-2">
              <li>Integrity and transparency in everything we do</li>
              <li>Continuous innovation and improvement</li>
              <li>Customer-centric approach for maximum satisfaction</li>
            </ul>
          </motion.div>
        </div>

        {/* Footer Section */}
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <p className="text-gray-600">
            &copy; 2024, All rights reserved. Designed with care.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
