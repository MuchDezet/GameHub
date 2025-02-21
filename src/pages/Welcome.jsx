import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

const Welcome = () => {
  const controls = useAnimation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector(".welcomesection");
      if (section) {
        const { top } = section.getBoundingClientRect();
        setIsVisible(top < window.innerHeight * 0.75);
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isVisible) {
      controls.start({ opacity: 1, y: 0, filter: "blur(0px)" });
    }
  }, [isVisible, controls]);

  return (
    <motion.section
      className="welcomesection min-h-screen flex flex-col items-center justify-center text-white mt-20 sm:mt-32 md:mt-40 relative overflow-hidden"
      initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
      animate={controls}
      transition={{ duration: 1.5, ease: "easeInOut" }}
    >
      {/* Welcome Text */}
      <motion.h1
        className="font-bold text-6xl sm:text-7xl md:text-8xl max-w-[90%] sm:max-w-[80%] md:max-w-[1150px] text-center my-6 uppercase animated-gradient-text"
        initial={{ opacity: 0, y: 50 }}
        animate={isVisible ? { opacity: 1, y: 0, scale: 1.05 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
        whileHover={{ scale: 1.1 }}
      >
        Discovered The World With the Game
      </motion.h1>

      {/* Stones Image with Floating and Scaling Animation */}
      <motion.img
        src="./img/stones.png"
        alt="stones-image"
        className="absolute mt-[15%] sm:mt-[20%] md:mt-[22%] w-[250px] sm:w-[350px] md:w-[500px]"
        animate={{ y: [0, -20, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Image Box with Dynamic Expansion & Parallax Effect */}
      <motion.div
        className="image-box w-[300px] sm:w-[360px] md:w-[400px] h-[400px] sm:h-[510px] rounded-[30px] sm:rounded-[50px] overflow-hidden flex items-center justify-center autoTakeFull shadow-lg"
        initial={{ width: "300px", height: "400px", borderRadius: "30px", opacity: 0, y: 50 }}
        animate={isVisible ? { width: "100%", height: "100vh", borderRadius: "0px", opacity: 1, y: 0 } : {}}
        transition={{ duration: 2.5, ease: "easeInOut" }}
        whileHover={{ scale: 1.02 }}
      >
        <motion.img
          src="./img/about.webp"
          alt="about-image"
          className="w-full h-full object-cover"
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        />
      </motion.div>

      {/* Decorative Background Elements */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/50 to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />
    </motion.section>
  );
};

export default Welcome;