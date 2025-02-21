import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FaPlay, FaSearch ,FaInfoCircle, FaShoppingCart, FaTimes, FaStar, FaHeart } from "react-icons/fa";

const products = [
  { 
    title: "Cyberpunk 2077", 
    desc: "$69.99", 
    src: "img/product-1.png", 
    price: 59.99,
    rating: 4.7,
    sold: 15000,
    publisher: "CD Projekt Red",
    genre: "Action RPG"
  },
  { 
    title: "Elden Ring", 
    desc: "$69.99", 
    src: "img/product-2.jpg", 
    price: 49.99,
    rating: 4.9,
    sold: 20000,
    publisher: "FromSoftware",
    genre: "Action RPG"
  },
  { 
    title: "Horizon Forbidden West", 
    desc: "$69.99", 
    src: "img/product-3.png", 
    price: 69.99,
    rating: 4.8,
    sold: 18000,
    publisher: "Guerrilla Games",
    genre: "Action Adventure"
  },
  { 
    title: "Spider-Man 2", 
    desc: "$69.99", 
    src: "img/product-4.png", 
    price: 59.99,
    rating: 4.6,
    sold: 25000,
    publisher: "Insomniac Games",
    genre: "Action Adventure"
  },
  { 
    title: "Ghost of Tsushima", 
    desc: "$69.99", 
    src: "img/product-5.png", 
    price: 39.99,
    rating: 4.9,
    sold: 22000,
    publisher: "Sucker Punch",
    genre: "Action Adventure"
  },
  {
    title: "Call of Duty: MW 2",
    desc: "$69.99",
    src: "img/product-6.png",
    price: 69.99,
    rating: 4.8,
    sold: 30000,
    publisher: "Activision",
    genre: "First-Person Shooter"
  },
  {
    title: "Call of Duty: MW 3",
    desc: "$69.99",
    src: "img/product-7.png",
    price: 69.99,
    rating: 4.7,
    sold: 28000,
    publisher: "Activision",
    genre: "First-Person Shooter"
  },
  {
    title: "Call of Duty: Black Ops 6",
    desc: "$69.99",
    src: "img/product-8.png",
    price: 69.99,
    rating: 4.6,
    sold: 25000,
    publisher: "Activision",
    genre: "First-Person Shooter"
  },
  {
    title: "Astro Bot",
    desc: "$69.99",
    src: "img/product-9.png",
    price: 49.99,
    rating: 4.8,
    sold: 12000,
    publisher: "Sony Interactive Entertainment",
    genre: "Platform"
  },
  {
    title: "Red Dead Redemption 2",
    desc: "$69.99",
    src: "img/product-10.png",
    price: 59.99,
    rating: 4.9,
    sold: 35000,
    publisher: "Rockstar Games",
    genre: "Action Adventure"
  },
  {
    title: "God of War",
    desc: "$69.99",
    src: "img/product-11.png",
    price: 49.99,
    rating: 4.9,
    sold: 32000,
    publisher: "Sony Interactive Entertainment",
    genre: "Action Adventure"
  },
  {
    title: "Black Myth: Wukong",
    desc: "$69.99",
    src: "img/product-12.png",
    price: 59.99,
    rating: 4.7,
    sold: 15000,
    publisher: "Game Science",
    genre: "Action RPG"
  },
  {
    title: "Only Up",
    desc: "$69.99",
    src: "img/product-13.png",
    price: 19.99,
    rating: 4.3,
    sold: 8000,
    publisher: "SCKR Games",
    genre: "Platform"
  },
  {
    title: "Naruto x Boruto",
    desc: "$69.99",
    src: "img/product-14.png",
    price: 49.99,
    rating: 4.5,
    sold: 20000,
    publisher: "Bandai Namco",
    genre: "Fighting"
  },
  {
    title: "FIFA 25",
    desc: "$69.99",
    src: "img/product-15.png",
    price: 69.99,
    rating: 4.7,
    sold: 40000,
    publisher: "EA Sports",
    genre: "Sports"
  },
  {
    title: "NBA 25",
    desc: "$69.99",
    src: "img/product-16.png",
    price: 69.99,
    rating: 4.6,
    sold: 35000,
    publisher: "2K Sports",
    genre: "Sports"
  },
  {
    title: "Battlefield V",
    desc: "$69.99",
    src: "img/product-17.png",
    price: 59.99,
    rating: 4.7,
    sold: 28000,
    publisher: "EA",
    genre: "First-Person Shooter"
  },
  {
    title: "Far Cry",
    desc: "$69.99",
    src: "img/product-18.png",
    price: 49.99,
    rating: 4.5,
    sold: 25000,
    publisher: "Ubisoft",
    genre: "First-Person Shooter"
  },
    {
    title: "Call of Duty: Black Ops 6",
    desc: "$69.99",
    src: "img/product-8.png",
    price: 69.99,
    rating: 4.6,
    sold: 25000,
    publisher: "Activision",
    genre: "First-Person Shooter"
  },
  {
    title: "Astro Bot",
    desc: "$69.99",
    src: "img/product-9.png",
    price: 49.99,
    rating: 4.8,
    sold: 12000,
    publisher: "Sony Interactive Entertainment",
    genre: "Platform"
  },
  {
    title: "Red Dead Redemption 2",
    desc: "$69.99",
    src: "img/product-10.png",
    price: 59.99,
    rating: 4.9,
    sold: 35000,
    publisher: "Rockstar Games",
    genre: "Action Adventure"
  },
  {
    title: "God of War",
    desc: "$69.99",
    src: "img/product-11.png",
    price: 49.99,
    rating: 4.9,
    sold: 32000,
    publisher: "Sony Interactive Entertainment",
    genre: "Action Adventure"
  },
  {
    title: "Black Myth: Wukong",
    desc: "$69.99",
    src: "img/product-12.png",
    price: 59.99,
    rating: 4.7,
    sold: 15000,
    publisher: "Game Science",
    genre: "Action RPG"
  },
  {
    title: "Only Up",
    desc: "$69.99",
    src: "img/product-13.png",
    price: 19.99,
    rating: 4.3,
    sold: 8000,
    publisher: "SCKR Games",
    genre: "Platform"
  },
  {
    title: "Naruto x Boruto",
    desc: "$69.99",
    src: "img/product-14.png",
    price: 49.99,
    rating: 4.5,
    sold: 20000,
    publisher: "Bandai Namco",
    genre: "Fighting"
  },
  {
    title: "FIFA 25",
    desc: "$69.99",
    src: "img/product-15.png",
    price: 69.99,
    rating: 4.7,
    sold: 40000,
    publisher: "EA Sports",
    genre: "Sports"
  },
  {
    title: "NBA 25",
    desc: "$69.99",
    src: "img/product-16.png",
    price: 69.99,
    rating: 4.6,
    sold: 35000,
    publisher: "2K Sports",
    genre: "Sports"
  },
  {
    title: "Battlefield V",
    desc: "$69.99",
    src: "img/product-17.png",
    price: 59.99,
    rating: 4.7,
    sold: 28000,
    publisher: "EA",
    genre: "First-Person Shooter"
  },
  {
    title: "Battlefield V",
    desc: "$69.99",
    src: "img/product-17.png",
    price: 59.99,
    rating: 4.7,
    sold: 28000,
    publisher: "EA",
    genre: "First-Person Shooter"
  },
  {
    title: "Battlefield V",
    desc: "$69.99",
    src: "img/product-17.png",
    price: 59.99,
    rating: 4.7,
    sold: 28000,
    publisher: "EA",
    genre: "First-Person Shooter"
  },
  {
    title: "Battlefield V",
    desc: "$69.99",
    src: "img/product-17.png",
    price: 59.99,
    rating: 4.7,
    sold: 28000,
    publisher: "EA",
    genre: "First-Person Shooter"
  },
  {
    title: "Far Cry",
    desc: "$69.99",
    src: "img/product-18.png",
    price: 49.99,
    rating: 4.5,
    sold: 25000,
    publisher: "Ubisoft",
    genre: "First-Person Shooter"
  }
];

const ProductList = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [hoveredGame, setHoveredGame] = useState(null);
  const navigate = useNavigate();

  return (
    <main className="min-h-screen pt-16 pb-20 relative">
      {/* Background Image Layer */}
      <div 
        className="fixed inset-0 bg-black transition-all duration-700 ease-in-out bg-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: hoveredGame ? `url(${hoveredGame})` : 'none',
          opacity: hoveredGame ? 0.3 : 1,
        }}
      />

      <section className="max-w-7xl mx-auto px-4 py-8 relative z-10">
        
        
        <AnimatePresence mode="wait">
          {selectedIndex !== null ? (
            <motion.div
              key="fullscreen"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="fixed inset-0 bg-black/95 z-50 overflow-y-auto"
            >
              
              {/* Close Button */}
              <motion.button
                onClick={() => setSelectedIndex(null)}
                className="absolute top-4 right-4 text-white p-2 rounded-full bg-black/50 hover:bg-black/70 z-50"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                
                <FaTimes size={24} />
              </motion.button>

              <div className="container mx-auto px-4 py-8">
                <div className="flex flex-col lg:flex-row gap-8">
                  {/* Product Image */}
                  <motion.div 
                    className="lg:w-2/3"
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <img
                      src={products[selectedIndex].src}
                      alt={products[selectedIndex].title}
                      className="w-full rounded-lg shadow-2xl"
                    />
                  </motion.div>

                  {/* Product Info */}
                  <motion.div 
                    className="lg:w-1/3 text-white"
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <h1 className="text-4xl font-bold mb-4">{products[selectedIndex].title}</h1>
                    
                    <div className="flex items-center gap-4 mb-6">
                      <div className="flex items-center">
                        <FaStar className="text-yellow-400" />
                        <span className="ml-1">{products[selectedIndex].rating}</span>
                      </div>
                      <span className="text-gray-400">|</span>
                      <span>{products[selectedIndex].sold.toLocaleString()} sold</span>
                    </div>

                    <div className="bg-white/10 p-6 rounded-lg mb-6">
                      <p className="text-3xl font-bold text-green-400 mb-4">
                        {products[selectedIndex].desc}
                      </p>
                      <div className="space-y-2 text-gray-300">
                        <p>Publisher: {products[selectedIndex].publisher}</p>
                        <p>Genre: {products[selectedIndex].genre}</p>
                      </div>
                    </div>

                    <div className="flex gap-4 mb-6">
                      <motion.button
                        className="flex-1 px-6 py-3 bg-green-500 text-black rounded-lg flex items-center justify-center gap-2 font-bold"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <FaShoppingCart /> Add to Cart
                      </motion.button>
                      <motion.button
                        className="p-3 bg-white/10 rounded-lg"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <FaHeart className="text-red-500" size={24} />
                      </motion.button>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <motion.button
                        className="px-6 py-3 bg-blue-500 text-white rounded-lg flex items-center justify-center gap-2"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <FaPlay /> Start Game
                      </motion.button>
                      <motion.button
                        className="px-6 py-3 bg-gray-700 text-white rounded-lg flex items-center justify-center gap-2"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => navigate(`/product-detail/${selectedIndex}`)}
                      >
                        <FaInfoCircle /> More Info
                      </motion.button>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ) : 
          (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-8xl font-bold text-white text-center glitch-text mb-24">GAMEVERSE</h2>
              
              <div className="flex justify-center gap-4 mb-24 border-b border-gray-700 pb-6"></div>
              {/* Search Bar Cyberpunk - Posisi di Kanan */}
              <div className="flex justify-end mb-12">
                 <div className="relative w-1/2 max-w-md">
                  <input
                    type="text"
                    placeholder="Search for a game..."
                    className="w-full px-5 py-3 text-lg text-secondary bg-gray-900 border border-secondary rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-neon-cyan placeholder-neon-yellow"
                  />

    <FaSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-primary text-2xl" />
  </div>
</div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                
                {products.map((product, index) => (
                  <motion.div
                    key={index}
                    className="bg-white/5 rounded-xl overflow-hidden cursor-pointer group"
                    whileHover={{ scale: 1.02 }}
                    onHoverStart={() => setHoveredGame(product.src)}
                    onHoverEnd={() => setHoveredGame(null)}
                    onClick={() => setSelectedIndex(index)}
                  >
                    
                    <div className="relative aspect-video">
                      <img
                        src={product.src}
                        alt={product.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    </div>
                    <div className="p-4 bg-black/50 backdrop-blur-sm">
                      <h3 className="text-xl font-semibold text-white mb-2">{product.title}</h3>
                      <div className="flex items-center justify-between">
                        <p className="text-green-400 font-bold">{product.desc}</p>
                        <div className="flex items-center text-yellow-400">
                          <FaStar className="mr-1" />
                          <span className="text-white">{product.rating}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </main>
  );
};

export default ProductList;