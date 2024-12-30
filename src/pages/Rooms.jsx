import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaRegHeart, FaHeart, FaBookmark } from "react-icons/fa";
import { IoBookmarkOutline } from "react-icons/io5";

const Rooms = () => {
  const [likedRooms, setLikedRooms] = useState([]);
  const [bookmarkedRooms, setBookmarkedRooms] = useState([]);
  const [activeRoom, setActiveRoom] = useState(null);

  const toggleLike = (id) => {
    setLikedRooms((prev) =>
      prev.includes(id) ? prev.filter((roomId) => roomId !== id) : [...prev, id]
    );
  };

  const toggleBookmark = (id) => {
    setBookmarkedRooms((prev) =>
      prev.includes(id) ? prev.filter((roomId) => roomId !== id) : [...prev, id]
    );
  };

  const rooms = [
    {
      id: 1,
      title: "Deluxe Suite",
      price: "$150/night",
      description: "A luxurious suite with stunning city views.",
      image:
        "https://c4.wallpaperflare.com/wallpaper/159/802/513/room-interior-home-house-wallpaper-preview.jpg",
    },
    {
      id: 2,
      title: "Ocean View Room",
      price: "$200/night",
      description: "Enjoy breathtaking ocean views from your room.",
      image: "https://c1.wallpaperflare.com/preview/854/104/23/room-beach-view-beach-view-room-beach-thailand-beach.jpg",
    },
    {
      id: 3,
      title: "Standard Room",
      price: "$100/night",
      description: "A cozy room perfect for solo travelers.",
      image: "https://images.wallpaperscraft.com/image/single/room_bed_comfort_64345_3840x2160.jpg",
    },
    {
      id: 4,
      title: "Presidential Suite",
      price: "$400/night",
      description: "Experience unmatched luxury and comfort.",
      image: "https://c4.wallpaperflare.com/wallpaper/74/457/102/life-room-interior-home-wallpaper-preview.jpg",
    },
  ];

  const openModal = (room) => {
    setActiveRoom(room);
  };

  const closeModal = () => {
    setActiveRoom(null);
  };

  return (
    <div className="w-full min-h-screen  py-10 px-6 ">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-[#2C3E50] mb-8 mt-[60px]">
        Available Rooms
      </h1>
      <div
        className={` grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto  ${
          activeRoom ? "filter blur-sm" : ""
        }`}
      >
        {rooms.map((room) => (
          <motion.div
            key={room.id}
            className="bg-white rounded-lg shadow-md overflow-hidden relative group"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={room.image}
              alt={room.title}
              className="w-full h-48 sm:h-56 md:h-64 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="p-4">
              <h2 className="text-xl md:text-2xl font-bold text-[#2C3E50]">
                {room.title}
              </h2>
              <p className="text-md md:text-lg text-[#72BF78] font-semibold">
                {room.price}
              </p>
              <motion.div
                className="absolute top-4 right-4 flex space-x-3 opacity-0 group-hover:opacity-100 transition duration-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <div
                  className="cursor-pointer text-xl sm:text-2xl"
                  onClick={() => toggleLike(room.id)}
                >
                  {likedRooms.includes(room.id) ? (
                    <FaHeart className="text-red-500" />
                  ) : (
                    <FaRegHeart className="text-gray-500" />
                  )}
                </div>
                <div
                  className="cursor-pointer text-xl sm:text-2xl"
                  onClick={() => toggleBookmark(room.id)}
                >
                  {bookmarkedRooms.includes(room.id) ? (
                    <FaBookmark className="text-yellow-500" />
                  ) : (
                    <IoBookmarkOutline className="text-gray-500" />
                  )}
                </div>
              </motion.div>
            </div>
            <motion.div
              className="absolute bottom-0 left-0 w-full bg-[#C4D7E0] text-center py-2 text-[#2C3E50] font-medium cursor-pointer opacity-0 group-hover:opacity-100"
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.5 }}
              onClick={() => openModal(room)}
            >
              Tap to View Details
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      {activeRoom && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white rounded-lg shadow-lg w-11/12 max-w-lg p-6 text-center"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
          >
            <img
              src={activeRoom.image}
              alt={activeRoom.title}
              className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-md mb-4"
            />
            <h2 className="text-2xl md:text-3xl font-bold text-[#2C3E50] mb-2">
              {activeRoom.title}
            </h2>
            <p className="text-md md:text-lg text-[#72BF78] font-semibold mb-4">
              {activeRoom.price}
            </p>
            <p className="text-gray-600 mb-6">{activeRoom.description}</p>
            <button
              className="bg-[#72BF78] text-white px-6 py-2 rounded-full hover:bg-[#5FAF66] transition"
              onClick={closeModal}
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Rooms;
