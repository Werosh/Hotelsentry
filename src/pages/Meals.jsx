import React, { useState } from "react";
import { motion } from "framer-motion"; // Import motion

const Meals = () => {
  const [selectedMeals, setSelectedMeals] = useState({
    breakfast: [],
    lunch: [],
    dinner: [],
    highTea: [],
  });
  const [roomNumber, setRoomNumber] = useState("");
  const [members, setMembers] = useState(1);
  const [orderConfirmed, setOrderConfirmed] = useState(false);

  // Sample meal options with images and prices
  const mealOptions = {
    breakfast: [
      {
        id: 1,
        name: "Pancakes",
        description: "Fluffy pancakes with syrup and fruits.",
        price: "$5.99",
        image:
          "https://www.tastesoflizzyt.com/wp-content/uploads/2023/12/sourdough-pancakes-23.jpg",
      },
      {
        id: 2,
        name: "Eggs Benedict",
        description: "Poached eggs on an English muffin with hollandaise.",
        price: "$7.99",
        image:
          "https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_4:3/k%2FPhoto%2FRecipes%2F2024-04-eggs-benedict%2Feggs-benedict-333_1",
      },
      {
        id: 3,
        name: "Smoothie Bowl",
        description: "A refreshing bowl with fruits, nuts, and granola.",
        price: "$6.49",
        image:
          "https://www.superhealthykids.com/wp-content/uploads/2019/12/Mango-Smoothie-Bowl-1.jpeg",
      },
    ],
    lunch: [
      {
        id: 1,
        name: "Grilled Chicken Salad",
        description: "Grilled chicken with a fresh vegetable salad.",
        price: "$8.99",
        image:
          "https://www.dinneratthezoo.com/wp-content/uploads/2020/12/grilled-chicken-salad-4.jpg",
      },
      {
        id: 2,
        name: "Veggie Burger",
        description: "A delicious plant-based burger with fries.",
        price: "$9.49",
        image:
          "https://www.thespruceeats.com/thmb/e-lll-PpJ5F-MF4C57LYag3IAB8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/easy-vegan-black-bean-veggie-burgers-3377008-hero-05-f7c0f0d9865e48b6be52a4c76ee22438.jpg",
      },
      {
        id: 3,
        name: "Sushi Rolls",
        description: "Fresh sushi with assorted fillings.",
        price: "$12.99",
        image:
          "https://int.japanesetaste.com/cdn/shop/articles/how-to-make-makizushi-sushi-rolls-japanese-taste.jpg?v=1707914944&width=600",
      },
    ],
    dinner: [
      {
        id: 1,
        name: "Steak and Potatoes",
        description: "Tender steak with mashed potatoes and veggies.",
        price: "$15.99",
        image:
          "https://cdn.shopify.com/s/files/1/0746/4960/0283/files/sticky-steak-and-potatoes.jpg?v=1720190545",
      },
      {
        id: 2,
        name: "Seafood Pasta",
        description: "Pasta with a creamy seafood sauce.",
        price: "$13.49",
        image:
          "https://www.allrecipes.com/thmb/CMcPpeu7wP5nAlKBmLK0a-hRyPc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/203961_Seafood-Marinara-Pasta_ddmfs_4x3_1407-58129948d5ee43cca761fa122d0dbf67.jpg",
      },
      {
        id: 3,
        name: "Vegetable Stir-fry",
        description: "A mix of sautéed vegetables served with rice.",
        price: "$10.99",
        image:
          "https://images.themodernproper.com/billowy-turkey/production/posts/VegetableStirFry_10.jpg?w=1200&q=82&auto=format&fit=crop&dm=1703377361&s=dcc5b387ddf86e293603e6c4adeba792",
      },
    ],
    highTea: [
      {
        id: 1,
        name: "Assorted Finger Sandwiches",
        description: "Light sandwiches with a variety of fillings.",
        price: "$4.99",
        image:
          "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEipfG8okmEpahrvwg3mNsx_0iirTk0JjcEKYOBP_kl6ai1CeAcyEa-mFqhLXmCfn22Xer9TOHPca7oXLX6-a8o4BgsRa2YzFK8ndEXsjmssM_vEapClfTv9fD9DLUdGjsjsjsBXFF74qdxC/s1600/Tea+party+sandwiches.jpg",
      },
      {
        id: 2,
        name: "Scones with Jam and Cream",
        description: "Freshly baked scones with clotted cream and jam.",
        price: "$3.49",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrN3s2fAs-_wb2vfGXUi7SBvvslHwQjVlBCw&s",
      },
      {
        id: 3,
        name: "Tea Cakes",
        description: "Soft, spongy cakes served with a cup of tea.",
        price: "$2.99",
        image:
          "https://www.thepkpway.com/wp-content/uploads/2019/01/martinos-bakery-original-tea-cakes-6f.jpg",
      },
    ],
  };

  const handleMealSelect = (mealType, mealName) => {
    setSelectedMeals((prev) => {
      const isSelected = prev[mealType].includes(mealName);
      const updatedMeals = isSelected
        ? prev[mealType].filter((meal) => meal !== mealName)
        : [...prev[mealType], mealName];
      return { ...prev, [mealType]: updatedMeals };
    });
  };

  const handleConfirmOrder = () => {
    if (
      roomNumber &&
      members > 0 &&
      Object.values(selectedMeals).some((mealType) => mealType.length > 0)
    ) {
      setOrderConfirmed(true);
    } else {
      alert("Please fill in all fields and select at least one meal.");
    }
  };

  return (
    <div className="container p-6 mx-auto">
      <motion.h1
        className="text-3xl font-bold text-center text-[#2C3E50] mb-8 mt-[60px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Select Your Meal
      </motion.h1>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {["breakfast", "lunch", "dinner", "highTea"].map((mealType) => (
          <motion.div
            key={mealType}
            className="p-6 bg-white rounded-lg shadow-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h2 className="text-xl font-bold text-[#2C3E50] mb-4 capitalize">
              {mealType}
            </h2>

            <ul className="space-y-4">
              {mealOptions[mealType].map((meal) => (
                <motion.li
                  key={meal.id}
                  className="flex items-center space-x-4"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <input
                    type="checkbox"
                    id={meal.id}
                    name={mealType}
                    value={meal.name}
                    checked={selectedMeals[mealType].includes(meal.name)}
                    onChange={() => handleMealSelect(mealType, meal.name)}
                    className="w-5 h-5 text-indigo-500"
                  />
                  <div className="flex items-center space-x-4">
                    <img
                      src={meal.image}
                      alt={meal.name}
                      className="object-cover w-16 h-16 rounded-md"
                    />
                    <div>
                      <p className="font-semibold text-gray-600">{meal.name}</p>
                      <p className="text-sm text-gray-500">
                        {meal.description}
                      </p>
                      <p className="font-semibold text-gray-800">
                        {meal.price}
                      </p>
                    </div>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <div className="mt-6">
        <div className="mb-4">
          <label
            htmlFor="roomNumber"
            className="block text-lg font-medium text-gray-700"
          >
            Room Number:
          </label>
          <motion.input
            type="text"
            id="roomNumber"
            value={roomNumber}
            onChange={(e) => setRoomNumber(e.target.value)}
            className="w-full p-2 mt-2 border border-gray-300 rounded-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="members"
            className="block text-lg font-medium text-gray-700"
          >
            Number of Members:
          </label>
          <motion.input
            type="number"
            id="members"
            value={members}
            onChange={(e) => setMembers(Math.max(1, e.target.value))}
            className="w-full p-2 mt-2 border border-gray-300 rounded-md"
            min="1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
        </div>

        <motion.button
          onClick={handleConfirmOrder}
          className="w-full p-3 mt-4 text-lg font-semibold text-white bg-blue-500 rounded-md"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Confirm Order
        </motion.button>
      </div>

      {orderConfirmed && (
        <motion.div
          className="mt-8 text-lg font-semibold text-center text-green-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <p>Your order has been confirmed!</p>
          <p>Room Number: {roomNumber}</p>
          <p>Members: {members}</p>
          <p>
            Meals Selected:{" "}
            {Object.keys(selectedMeals)
              .map(
                (mealType) =>
                  `${mealType}: ${selectedMeals[mealType].join(", ")}`
              )
              .join(" | ")}
          </p>
        </motion.div>
      )}
    </div>
  );
};

export default Meals;
