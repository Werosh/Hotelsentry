import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Gallery = () => {
  const images = [
    [
      { src: "https://digitalguest.com/wp-content/uploads/2023/07/wellness-hotel-activities-for-the-guests-1024x576.jpg", width: "340px", height: "240px" },
      { src: "https://media.istockphoto.com/id/1136247293/photo/child-with-mother-in-swimming-pool-holiday-resort.jpg?s=612x612&w=0&k=20&c=zAFudOmgoSbmvitRn-Xi1h1hyvhUyjF-OWWpkFidPS0=", width: "340px", height: "240px" },
      { src: "https://www.sripanwa.com/images/gallery/gallery-sri-panwa-luxury-hotel-vacation-activities-in-phuket-1.jpg", width: "340px", height: "240px" }
    ],
    [
      { src: "https://digitalguest.com/wp-content/uploads/2023/07/hotel-activites-to-enjoy-family-spa-and-pool.jpg", width: "250px", height: "200px" },
      { src: "https://cdn-5d68e683f911c80950255463.closte.com/wp-content/uploads/2019/05/hotel-activities.slide_.244.jpg", width: "250px", height: "200px" },
      { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8qK2YvlOw0u2awh8e2PIy4ilHfjfK0U5ma2-sJEL4G842YtNlVsw4WszixkKrfCagq-U&usqp=CAU", width: "250px", height: "200px" }
    ],
    [
      { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsspCAw9yZb9kpvMhM7Ngrqo3O-4ZXGZ-mKw&s", width: "300px", height: "300px" },
      { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk7FOiMiAfKKCwtMFVxbk0FuvXKNxni126Bw&s", width: "300px", height: "300px" },
      { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyhtiUstwIBJhdskBtkUtR2h2AtdNL8AIFIQ&s", width: "300px", height: "300px" }
    ],
    [
      { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN2R5_L9hwTNe97NYnP-bhqwYCUNeVqf3ylw&s", width: "280px", height: "180px" },
      { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmdq-29givFJaRgYp2N5kekn0VaRLWHkQMaw&s", width: "280px", height: "180px" },
      { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStD4t48o1IWLZBVMl6mxW85CqpwlHYu5GeIQ&s", width: "280px", height: "180px" }
    ]
    
  ];

  const { ref: galleryRef, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div className="w-full min-h-screen  flex flex-col items-center py-10">
      <h1 className="text-4xl font-bold text-[#2C3E50] mb-8 mt-[60px]">Gallery</h1>
      <motion.div
        className="flex flex-col space-y-10 w-11/12 max-w-6xl"
        ref={galleryRef}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {images.map((row, rowIndex) => (
          <div key={rowIndex} className="flex flex-wrap justify-center gap-6">
            {row.map((image, colIndex) => (
              <motion.div
                key={colIndex}
                className="relative overflow-hidden rounded-lg shadow-lg group"
                style={{
                  width: image.width,
                  height: image.height,
                }}
                initial={{ y: 10 }}
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <img
                  src={image.src}
                  alt={`Gallery item row ${rowIndex + 1} col ${colIndex + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </motion.div>
            ))}
          </div>
        ))}
      </motion.div>
      <motion.button
        className="mt-10 px-6 py-3 bg-[#C4D7E0] text-[#2C3E50] font-semibold rounded-full shadow-md hover:shadow-lg hover:scale-105 transition"
        whileHover={{ scale: 1.1 }}
      >
        Load More
      </motion.button>
    </div>
  );
};

export default Gallery;
