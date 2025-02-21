import { FaShoppingCart, FaUser, FaSignInAlt, FaUserPlus, FaBars } from "react-icons/fa";
import { useState } from "react";
import AuthModal from "./AuthModal";
import { Link } from "react-router-dom"; // Import Link dari react-router-dom

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoginMode, setIsLoginMode] = useState(true);

  const handleLoginClick = () => {
    setIsLoginMode(true);
    setIsModalOpen(true);
  };

  const handleRegisterClick = () => {
    setIsLoginMode(false);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <header className="absolute top-0 left-0 right-0 z-50 backdrop-blur-sm bg-black/20 border-b border-white/10 overflow-hidden">
        <div className="container mx-auto flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <div>
            <Link
              to="/"
              className="font-secondary text-2xl font-bold text-primary hover:text-primary/80 transition-colors"
            >
              GameHub
            </Link>
          </div>

          {/* Navigation (Desktop only) */}
          <nav className="hidden md:flex gap-6 font-primary text-lg items-center">
            <Link to="/" className="text-white/90 hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/product-list" className="text-white/90 hover:text-primary transition-colors">
              GameVerse
            </Link>
            <Link to="/tournament" className="text-white/90 hover:text-primary transition-colors">
              Tournament
            </Link>
            <Link to="/call-center" className="text-white/90 hover:text-primary transition-colors">
              Call Center
            </Link>
            <Link to="/cart">
              <FaShoppingCart className="text-primary text-xl cursor-pointer hover:text-primary/80 transition-colors" />
            </Link>
          </nav>

          {/* Icons */}
          <div className="flex items-center gap-4">
            {/* Hamburger Menu for Mobile */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white text-xl cursor-pointer"
            >
              <FaBars />
            </button>

            {/* Login Button */}
            <button
              onClick={handleLoginClick}
              className="hidden md:flex items-center gap-1 bg-primary/20 hover:bg-primary/30 px-4 py-2 rounded-lg text-sm transition-all duration-300 backdrop-blur-md border border-primary/30"
            >
              <FaSignInAlt />
              <span>Login</span>
            </button>

            {/* Register Button */}
            <button
              onClick={handleRegisterClick}
              className="hidden md:flex items-center gap-1 bg-primary/20 hover:bg-primary/30 px-4 py-2 rounded-lg text-sm transition-all duration-300 backdrop-blur-md border border-primary/30"
            >
              <FaUserPlus />
              <span>Register</span>
            </button>

            {/* User Icon */}
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-primary/30 transition-all duration-300 backdrop-blur-md border border-white/20">
              <FaUser className="text-white text-xl cursor-pointer" />
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/80 backdrop-blur-sm absolute top-20 left-0 right-0 z-40">
            <nav className="flex flex-col gap-4 px-6 py-4">
              <Link to="/" className="text-white/90 hover:text-primary transition-colors">
                Home
              </Link>
              <Link to="/gameverse" className="text-white/90 hover:text-primary transition-colors">
                GameVerse
              </Link>
              <Link to="/tournament" className="text-white/90 hover:text-primary transition-colors">
                Tournament
              </Link>
              <Link to="/call-center" className="text-white/90 hover:text-primary transition-colors">
                Call Center
              </Link>
              <Link to="/cart">
                <FaShoppingCart className="text-primary text-xl cursor-pointer hover:text-primary/80 transition-colors" />
              </Link>
            </nav>
          </div>
        )}
      </header>

      {/* Auth Modal */}
      <AuthModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        isLogin={isLoginMode}
      />
    </>
  );
};

export default Header;