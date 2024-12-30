import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  IoMdArrowDroprightCircle,
  IoMdArrowDropleftCircle,
} from "react-icons/io";

const images = [
  {
    url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWx8ZW58MHx8MHx8fDA%3D",
    alt: "Welcome",
    description:
      "",
  },
  
  {
    url: "https://images.pexels.com/photos/133920/pexels-photo-133920.jpeg?cs=srgb&dl=pexels-donaldtong94-133920.jpg&fm=jpg",
    alt: "Scenic mountain view from hotel balcony",
    description:
      "Wake up to breathtaking views of the mountains right from your private balcony. Perfect for nature lovers looking to reconnect with the outdoors.",
  },
  {
    url: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D",
    alt: "Gourmet dinner at the restaurant",
    description:
      "Indulge in an unforgettable dining experience at our award-winning restaurant, offering a menu crafted with the finest seasonal ingredients.",
  },
  {
    url: "https://images.pexels.com/photos/19641822/pexels-photo-19641822.jpeg?cs=srgb&dl=pexels-jonathanborba-19641822.jpg&fm=jpg",
    alt: "Spa treatment in a tranquil setting",
    description:
      "Relax and rejuvenate in our world-class spa. Enjoy soothing treatments designed to melt away your stress and leave you feeling refreshed and revitalized.",
  },
  {
    url: "https://media.architecturaldigest.com/photos/598cb9ad5f33bd7d13f70a54/16:9/w_2580,c_limit/Hotel%20du%20Cap%20Eden%20Roc.JPG",
    alt: "Swimming pool with panoramic ocean view",
    description:
      "Take a dip in our stunning infinity pool overlooking the ocean. Enjoy refreshing drinks and a peaceful atmosphere as you unwind by the water.",
  },
  {
    url: "https://vistapointe.net/images/rooftop-10.jpg",
    alt: "Beautiful sunrise from the hotel rooftop",
    description:
      "Start your day with a spectacular sunrise view from our rooftop terrace. The perfect place to sip coffee and enjoy the first light of day.",
  },
  {
    url: "https://images.pexels.com/photos/19596872/pexels-photo-19596872.jpeg?cs=srgb&dl=pexels-jonathanborba-19596872.jpg&fm=jpg",
    alt: "Yoga session with ocean view",
    description:
      "Unwind with a morning yoga session by the beach. Our certified instructors will guide you through peaceful poses while you enjoy the sound of the waves.",
  },
  {
    url: "https://www.innahura.com/wp-content/uploads/2023/01/INN_private-dining-1.jpg",
    alt: "Private candlelit dinner on the beach",
    description:
      "Experience a romantic candlelit dinner on the beach, where the sounds of the ocean complement the delectable flavors of our gourmet cuisine.",
  },
  {
    url: "https://images.unsplash.com/photo-1504652517000-ae1068478c59?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdGVsJTIwbmlnaHR8ZW58MHx8MHx8fDA%3D",
    alt: "Night view of the hotel exterior",
    description:
      "Our hotel glows beautifully at night, offering a warm and inviting ambiance. The perfect place to relax after a day full of adventures.",
  },
  {
    url: "https://www.venetianlasvegas.com/adobe/dynamicmedia/deliver/dm-aid--d161a1a7-0f53-4e2b-a89d-a4956148dc64/king-bed-1-1920x1080.jpg?quality=65&preferwebp=true",
    alt: "Luxury hotel suite with king-size bed",
    description:
      "Experience the ultimate comfort in our luxurious suites, complete with plush king-size beds, sophisticated decor, and stunning views of the city.",
  },
  {
    url: "https://mrwallpaper.com/images/hd/a-vibrant-and-inviting-4k-gym-packed-with-modern-fitness-equipment-um7q0e4c2fvjns4u.jpg",
    alt: "Modern fitness center",
    description:
      "Stay in shape during your stay with access to our fully equipped fitness center. From cardio to strength training, we have everything you need to stay fit.",
  },
];

const featuresData = [
  {
    title: "Eco-Friendly Rooms",
    text: "Relax in our sustainable, luxurious rooms. We prioritize eco-conscious practices to minimize our environmental impact, including energy-efficient lighting, water conservation, and locally sourced materials.",
    img: "https://png.pngtree.com/background/20240413/original/pngtree-eco-friendly-living-room-with-vertical-garden-and-green-walls-in-picture-image_8481162.jpg",
  },
  {
    title: "Organic Cuisine",
    text: "Taste the freshness of farm-to-table meals. Our chefs use locally sourced, organic ingredients to create delectable dishes that showcase the region's culinary heritage. We also offer vegetarian, vegan, and gluten-free options.",
    img: "https://c4.wallpaperflare.com/wallpaper/147/545/208/nature-basket-apples-grapes-wallpaper-preview.jpg",
  },
  {
    title: "Serene Activities",
    text: "Rejuvenate with yoga, nature walks, and spa treatments. Our curated activities are designed to promote relaxation and well-being. Explore our hiking trails, take a guided meditation class, or indulge in a soothing massage.",
    img: "https://c0.wallpaperflare.com/preview/831/890/552/adventure-leisure-activities-nature-water.jpg",
  },
];

const testimonials = [
  {
    quote:
      "The best getaway experience! The rooms were cozy, and the cuisine was delightful. I felt completely rejuvenated.",
    author: "Emily Johnson",
  },
  {
    quote:
      "Amazing activities and a serene environment. Highly recommend Serenity Hotel for a relaxing vacation.",
    author: "David Lee",
  },
  {
    quote:
      "From the moment we arrived, we were treated with exceptional hospitality. The staff went above and beyond to make our stay memorable.",
    author: "Sarah Rodriguez",
  },
];

const Home = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  const handleNext = () =>
    setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
  const handlePrevious = () =>
    setCurrentImage((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );

  return (
    <motion.div
      className="w-full min-h-screen flex flex-col justify-between items-center overflow-x-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      {/* Hero Section with Image Slider */}
      <div className="relative w-full h-[60vh] md:h-[70vh] lg:h-[80vh] overflow-hidden mt-[70px]">
        <AnimatePresence>
          <motion.img
            key={currentImage}
            src={images[currentImage].url}
            alt={images[currentImage].alt}
            className="w-full h-full object-cover absolute"
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />
        </AnimatePresence>
        <div className="absolute bottom-10 left-0 w-full bg-black/50 p-6 text-white">
          <h2 className="text-2xl font-bold mb-2">
            {images[currentImage].alt}
          </h2>
          <p className="text-lg">{images[currentImage].description}</p>
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-between w-full p-4">
          <motion.button
            whileHover={{ scale: 1.1 }}
            onClick={handlePrevious}
            className="rounded-full bg-black/30 hover:bg-black/50 p-3 transition"
          >
            <IoMdArrowDropleftCircle className="text-white text-4xl" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            onClick={handleNext}
            className="rounded-full bg-black/30 hover:bg-black/50 p-3 transition"
          >
            <IoMdArrowDroprightCircle className="text-white text-4xl" />
          </motion.button>
        </div>
      </div>

      {/* Features Section */}
      <motion.section className="container mx-auto py-16 px-6">
        <h2 className="text-4xl font-bold text-center text-[#2C3E50] mb-12">
          Our Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {featuresData.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <img
                src={feature.img}
                alt={feature.title}
                className="w-full h-48 object-cover rounded-md mb-4 transition-transform duration-300 ease-in-out hover:scale-110"
              />
              <h3 className="text-xl font-semibold text-[#2C3E50] mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-700">{feature.text}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section className="container mx-auto py-16 px-6 ">
        <h2 className="text-4xl font-bold text-center text-[#2C3E50] mb-12">
          Testimonials
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-gray-100 rounded-lg p-6 shadow-md"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <p className="text-lg italic text-gray-700 mb-4">
                "{testimonial.quote}"
              </p>
              <p className="text-gray-600 font-semibold">
                - {testimonial.author}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </motion.div>
  );
};

export default Home;
