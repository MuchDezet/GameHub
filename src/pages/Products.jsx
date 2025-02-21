import PoliceLine from "../components/PoliceLine";
import { motion } from "framer-motion";
import { FaArrowRight, FaStar, FaCartPlus, FaStarHalf } from "react-icons/fa";
import { useState } from "react";
import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";

const products = [
  { title: "Cyberpunk 2077", desc: "$69.99", src: "img/product-1.png", price: 59.99, rating: 4.7 },
  { title: "Elden Ring", desc: "$69.99.", src: "img/product-2.jpg", price: 49.99, rating: 4.9 },
  { title: "Horizon Forbidden West", desc: "$69.99", src: "img/product-3.png", price: 69.99, rating: 4.8 },
  { title: "Spider-Man 2", desc: "$69.99", src: "img/product-4.png", price: 59.99, rating: 4.6 },
  { title: "Ghost of Tsushima", desc: "$69.99", src: "img/product-5.png", price: 39.99, rating: 4.9 },
  { title: "Call of Duty: Modern Warfare 2", desc: "$69.99", src: "img/product-6.png", price: 69.99, rating: 4.8 },
  { title: "Call of Duty: Modern Warfare 3", desc: "$69.99", src: "img/product-7.png", price: 69.99, rating: 4.7 },
  { title: "Call of Duty: Black Ops 6", desc: "$69.99", src: "img/product-8.png", price: 69.99, rating: 4.6 },
  { title: "Astro Bot", desc: "$69.99", src: "img/product-9.png", price: 49.99, rating: 4.8 },
  { title: "Red Dead Redemption 2", desc: "$69.99", src: "img/product-10.png", price: 59.99, rating: 4.9 },
  { title: "God of War", desc: "$69.99", src: "img/product-11.png", price: 49.99, rating: 4.9 },
  { title: "Black Myth: Wukong", desc: "$69.99", src: "img/product-12.png", price: 59.99, rating: 4.7 },
  { title: "Only Up", desc: "$69.99", src: "img/product-13.png", price: 19.99, rating: 4.3 },
  { title: "Naruto x Boruto", desc: "$69.99", src: "img/product-14.png", price: 49.99, rating: 4.5 },
  { title: "FIFA 25", desc: "$69.99", src: "img/product-15.png", price: 69.99, rating: 4.7 },
  { title: "NBA 25", desc: "$69.99", src: "img/product-16.png", price: 69.99, rating: 4.6 },
  { title: "Battlefield V", desc: "$69.99", src: "img/product-bfv.png", price: 59.99, rating: 4.7 },
  { title: "Far Cry", desc: "$69.99", src: "img/product-farcry.png", price: 49.99, rating: 4.5 }
];

const RatingStars = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.3;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
  return (
    <div className="flex items-center text-neon-orange">
      {[...Array(fullStars)].map((_, i) => (
        <FaStar key={`full-${i}`} />
      ))}
      {hasHalfStar && (
        <div className="relative w-4">
          <FaStar className="text-neon-gray absolute" />
          <FaStarHalf className="text-neon-orange relative" />
        </div>
      )}
      {[...Array(emptyStars)].map((_, i) => (
        <FaStar key={`empty-${i}`} className="text-neon-gray" />
      ))}
      <span className="ml-2">({rating.toFixed(1)})</span>
    </div>
  );
};

RatingStars.propTypes = {
  rating: PropTypes.number.isRequired,
};

const Products = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate(); // State untuk menampilkan semua produk

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  // Variants untuk animasi on scroll
  const cardVariants = {
    offscreen: {
      y: 50,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

  return (
    <section className="product-section w-full mx-auto mt-20 sm:mt-28 md:mt-36 relative text-neon-green">
      {/* Header */}
      <motion.h3
        className="text-6xl sm:text-7xl md:text-8xl font-bold text-neon-cyan text-center mb-10 sm:mb-16 md:mb-20 bg-transparent glitch-text"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        GameVerse
      </motion.h3>

      {/* Grid Produk */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 mx-4 sm:mx-7">
  <PoliceLine />
  {products.slice(0, 16).map((product, index) => (
    <motion.div
      key={index}
      className="product-card bg-black rounded-xl overflow-hidden border border-primary relative"
      whileHover={{ scale: 1.05 }}
      onHoverStart={() => setHoveredIndex(index)}
      onHoverEnd={() => setHoveredIndex(null)}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.2 }}
      variants={cardVariants}
    >
      {/* Image Container */}
      <div className="aspect-[16/9] w-full relative">
        <img
          src={product.src}
          alt={product.title}
          className="w-full h-full object-cover"
        />
        {hoveredIndex === index && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 bg-black/40 flex items-center justify-center backdrop-blur-sm"
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 bg-neon-cyan text-black rounded-lg shadow-cyber flex items-center gap-2 font-medium"
              onClick={() => addToCart(product)}
            >
              <FaCartPlus /> Quick Add
            </motion.button>
          </motion.div>
        )}
      </div>
      {/* Content Container */}
      <div className="p-4 bg-dark-gray">
        <h4 className="text-white font-medium text-base sm:text-lg mb-1">{product.title}</h4>
        <p className="text-neon-yellow hover:text-neon-cyan text-xs sm:text-sm mb-2">{product.desc}</p>
        <RatingStars rating={product.rating} />
      </div>
    </motion.div>
  ))}
</div>

      {/* Load More Button */}
      <div>
      {/* Load More Button */}
      <div className="mt-6 sm:mt-8 mr-4 sm:mr-7 flex justify-end">
        <motion.button
          className="flex items-center gap-2 px-4 sm:px-5 py-2 bg-neon-pink text-background rounded-lg shadow-lg hover:bg-neon-yellow transition duration-300 text-xs sm:text-sm"
          whileHover={{ scale: 1.1 }}
          onClick={() => navigate("/product-list")} // Navigasi ke halaman ProductList
        >
          <FaArrowRight /> Load More
        </motion.button>
      </div>
    </div>
    </section>
  );
};

export default Products;