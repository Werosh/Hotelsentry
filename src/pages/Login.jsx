import React, { useState } from "react";
import { FaUserInjured, FaUnlockAlt, FaUserPlus } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { motion } from "framer-motion";

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen ">
      <motion.div
        className={`bg-white p-8 rounded-lg shadow-2xl w-full max-w-sm transition-all duration-500 ${
          isSignUp ? "bg-blue-100" : "bg-white"
        }`}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-center text-3xl font-bold text-gray-800 mb-6">
          {isSignUp ? "Sign Up" : "Login"}
        </h2>

        <form>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="flex items-center text-gray-600 text-sm mb-2"
            >
              <FaUserInjured className="mr-2 text-gray-700" />
              Username
            </label>
            <input
              type="text"
              id="username"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your username"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="flex items-center text-gray-600 text-sm mb-2"
            >
              <FaUnlockAlt className="mr-2 text-gray-700" />
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your password"
              required
            />
          </div>

          {isSignUp && (
            <div className="mb-4">
              <label
                htmlFor="email"
                className="flex items-center text-gray-600 text-sm mb-2"
              >
                <MdEmail className="mr-2 text-gray-700" />
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter your email"
                required
              />
            </div>
          )}

          <motion.button
            type="submit"
            className="w-full p-3 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isSignUp ? "Sign Up" : "Login"}
          </motion.button>
        </form>

        <div className="mt-4 text-center text-sm">
          <p className="text-gray-600">
            {isSignUp ? (
              <>
                Already have an account?{" "}
                <span
                  onClick={() => setIsSignUp(false)}
                  className="text-indigo-500 cursor-pointer hover:underline"
                >
                  Login
                </span>
              </>
            ) : (
              <>
                Don&apos;t have an account?{" "}
                <span
                  onClick={() => setIsSignUp(true)}
                  className="text-indigo-500 cursor-pointer hover:underline"
                >
                  Sign Up
                </span>
              </>
            )}
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
