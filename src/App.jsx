import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import Home from "./pages/Home";
import About from "./pages/About";
import Rooms from "./pages/Rooms";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Meals from "./pages/Meals";
import Login from "./pages/Login";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Background from "./components/Background";

const App = () => {
  const location = useLocation();

  const pageVariants = {
    initial: {
      opacity: 0,
      x: "100%",
    },
    in: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 200, damping: 30 },
    },
    out: {
      opacity: 0,
      x: "-100%",
      transition: { type: "spring", stiffness: 200, damping: 30 },
    },
  };

  return (
    <>
      <Background />
      <NavBar />
      <motion.div
        key={location.key} // key ensures that animation is triggered on route change
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        style={{ position: "relative" }}
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/meals" element={<Meals />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </motion.div>
      <Footer />
    </>
  );
};

export default App;
