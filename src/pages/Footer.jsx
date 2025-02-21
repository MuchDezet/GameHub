import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaDiscord, 
  FaInstagram, 
  FaTwitter, 
  FaGithub, 
  FaShoppingCart,
  FaFacebook,
  FaLinkedin,
  FaSignInAlt,
  FaUserPlus,
  FaPaperPlane,
  FaPhone
} from 'react-icons/fa';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    setEmail('');
  };

  return (
    <footer className="bg-[#FFD700] text-black py-8 sm:py-12 relative">
      {/* Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {/* Company Info */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl sm:text-5xl font-bold">GameHub</h1>
          <p className="mt-4 text-sm sm:text-base text-gray-800">
            GameHub is a leading gaming marketplace platform that provides gamers with everything they need in one place. We provide a complete digital ecosystem that allows users to buy, sell, and trade games, accounts, and various digital items safely and easily.
          </p>
          <div className="flex gap-4 mt-4">
            {[FaShoppingCart, FaSignInAlt, FaUserPlus].map((Icon, index) => (
              <a 
                key={index} 
                href="#" 
                className="text-black hover:text-gray-700 transition-colors duration-300"
              >
                <Icon size={24} />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-2 gap-4 sm:gap-6"
        >
          <div>
            <h3 className="font-bold text-lg mb-3">Company</h3>
            <ul className="space-y-2 text-sm sm:text-base">
              <li><a href="/product-list" className="hover:underline">HOME</a></li>
              <li><a href="#" className="hover:underline">GAMEVERSE</a></li>
              <li><a href="#" className="hover:underline">SHOP</a></li>
              <li><a href="#" className="hover:underline">Careers</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-3">Resources</h3>
            <ul className="space-y-2 text-sm sm:text-base">
              <li><a href="#" className="hover:underline">Docs</a></li>
              <li><a href="#" className="hover:underline">Support</a></li>
              <li><a href="#" className="hover:underline">Forum</a></li>
              <li><a href="#" className="hover:underline">Projects</a></li>
            </ul>
          </div>
        </motion.div>

        {/* Newsletter, Social, and Call Center */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3 className="font-bold text-lg mb-4">Subscribe to Our Newsletter</h3>
          <form onSubmit={handleSubmit} className="relative flex items-center">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-lg bg-white border border-black/10 focus:outline-none focus:ring-2 focus:ring-black/20 transition-all duration-300 text-sm sm:text-base"
              required
            />
            <button
              type="submit"
              className="absolute right-2 bg-black text-white p-2 rounded-full hover:bg-gray-800 transition-colors duration-300"
            >
              <FaPaperPlane size={16} />
            </button>
          </form>
          <h3 className="font-bold text-lg mt-6">Follow Us</h3>
          <div className="flex gap-4 mt-3 flex-wrap">
            {[FaDiscord, FaInstagram, FaTwitter, FaGithub, FaFacebook, FaLinkedin].map((Icon, index) => (
              <a 
                key={index} 
                href="#" 
                className="text-black hover:text-gray-700 transition-colors duration-300"
              >
                <Icon size={24} />
              </a>
            ))}
          </div>
          <h3 className="font-bold text-lg mt-6">Call Center</h3>
          <div className="flex items-center gap-2 mt-2">
            <FaPhone size={20} className="text-black" />
            <p className="text-sm sm:text-base">+1 (234) 567-890</p>
          </div>
        </motion.div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 sm:mt-12 pt-4 sm:pt-6 border-t border-black/10 text-center text-sm sm:text-base">
        <p>©2024 GAMEHUB | <a href="#" className="hover:underline">Terms</a> | <a href="#" className="hover:underline">Privacy</a></p>
      </div>
    </footer>
  );
};

export default Footer;