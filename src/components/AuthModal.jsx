import { useState, useEffect } from 'react';
import { FaTimes, FaUser, FaEnvelope, FaLock, FaGamepad, FaGithub, FaFacebook, } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { motion, AnimatePresence } from "framer-motion";

const AuthModal = ({ isOpen, onClose, isLogin }) => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [captchaValue, setCaptchaValue] = useState('');
  const [generatedCaptcha, setGeneratedCaptcha] = useState('');
  const [captchaError, setCaptchaError] = useState('');

  // Generate random CAPTCHA
  const generateCaptcha = () => {
    const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let captcha = '';
    for (let i = 0; i < 6; i++) {
      captcha += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setGeneratedCaptcha(captcha);
  };

  // Initialize CAPTCHA on mount and modal open
  useEffect(() => {
    if (isOpen && !isLogin) {
      generateCaptcha();
    }
  }, [isOpen, isLogin]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let isValid = true;

    // Password validation for registration
    if (!isLogin) {
      if (password !== confirmPassword) {
        setPasswordError('Passwords do not match');
        isValid = false;
      } else {
        setPasswordError('');
      }

      // CAPTCHA validation
      if (captchaValue !== generatedCaptcha) {
        setCaptchaError('Invalid CAPTCHA');
        isValid = false;
        generateCaptcha();
      } else {
        setCaptchaError('');
      }
    }

    if (isValid) {
      // Proceed with form submission
      console.log('Form submitted successfully');
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-lg overflow-y-auto py-8"
        >
          {/* Background Animation */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
            <div className="absolute w-96 h-96 bg-primary/20 rounded-full filter blur-3xl -top-20 -left-20 animate-pulse" />
            <div className="absolute w-96 h-96 bg-secondary/20 rounded-full filter blur-3xl -bottom-20 -right-20 animate-pulse delay-1000" />
          </div>

          {/* Modal Content */}
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            className="bg-black/80 border border-white/10 rounded-2xl p-8 w-full max-w-md relative backdrop-blur-xl mx-4 overflow-y-auto max-h-[90vh]"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
            >
              <FaTimes className="text-xl" />
            </button>

            {/* Logo and Title */}
            <div className="text-center mb-8">
              <div className="flex items-center justify-center gap-2 mb-3">
                <FaGamepad className="text-4xl text-primary animate-pulse" />
                <h1 className="text-3xl font-bold text-white">
                  Game<span className="text-primary">HUB</span>
                </h1>
              </div>
              <h2 className="text-2xl font-bold text-white">
                {isLogin ? "Welcome Back!" : "Join the Community"}
              </h2>
              <p className="text-white/60 mt-2">
                {isLogin
                  ? "Enter your credentials to access your account"
                  : "Create your account and start your gaming journey"}
              </p>
            </div>

            {/* Form */}
            <form className="space-y-5" onSubmit={handleSubmit}>
              {!isLogin && (
                <>
                  <div className="relative">
                    <label className="block text-sm font-medium text-white/80 mb-1">
                      Username
                    </label>
                    <div className="relative">
                      <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-white/50" />
                      <input
                        type="text"
                        className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300"
                        placeholder="Enter your username"
                        required
                      />
                    </div>
                  </div>

                  {/* Date of Birth Fields */}
                  <div className="relative">
                    <label className="block text-sm font-medium text-white/80 mb-1">
                      Date of Birth
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      <select 
                        className="bg-primary border border-white/10 rounded-lg text-background py-3 px-4 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                        required
                      >
                        <option value="">Day</option>
                        {[...Array(31)].map((_, i) => (
                          <option key={i + 1} value={i + 1}>{i + 1}</option>
                        ))}
                      </select>
                      <select 
                        className="bg-primary border border-white/10 rounded-lg text-background py-3 px-4 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                        required
                      >
                        <option value="">Month</option>
                        {['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'].map((month, i) => (
                          <option key={i} value={i + 1}>{month}</option>
                        ))}
                      </select>
                      <select 
                        className="bg-primary border border-white/10 rounded-lg text-background py-3 px-4 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                        required
                      >
                        <option value="">Year</option>
                        {[...Array(90)].map((_, i) => {
                          const year = new Date().getFullYear() - i;
                          return <option key={year} value={year}>{year}</option>;
                        })}
                      </select>
                    </div>
                  </div>
                </>
              )}

              <div className="relative">
                <label className="block text-sm font-medium text-white/80 mb-1">
                  Email
                </label>
                <div className="relative">
                  <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-white/50" />
                  <input
                    type="email"
                    className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>

              <div className="relative">
                <label className="block text-sm font-medium text-white/80 mb-1">
                  Password
                </label>
                <div className="relative">
                  <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-white/50" />
                  <input
                    type="password"
                    className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
              </div>

              {!isLogin && (
                <>
                  <div className="relative">
                    <label className="block text-sm font-medium text-white/80 mb-1">
                      Confirm Password
                    </label>
                    <div className="relative">
                      <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-white/50" />
                      <input
                        type="password"
                        className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300"
                        placeholder="Confirm your password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                      />
                    </div>
                    {passwordError && (
                      <p className="text-red-500 text-sm mt-1">{passwordError}</p>
                    )}
                  </div>

                  {/* CAPTCHA */}
                  <div className="relative">
                    <label className="block text-sm font-medium text-white/80 mb-1">
                      CAPTCHA Verification
                    </label>
                    <div className="flex items-center gap-2">
                      <div className="bg-white/10 p-3 rounded-lg flex-grow text-center font-mono text-white select-none">
                        {generatedCaptcha}
                      </div>
                      <button
                        type="button"
                        onClick={generateCaptcha}
                        className="p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                      >
                        ↺
                      </button>
                    </div>
                    <input
                      type="text"
                      className="w-full mt-2 px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300"
                      placeholder="Enter the CAPTCHA code"
                      value={captchaValue}
                      onChange={(e) => setCaptchaValue(e.target.value)}
                      required
                    />
                    {captchaError && (
                      <p className="text-red-500 text-sm mt-1">{captchaError}</p>
                    )}
                  </div>
                </>
              )}

              {isLogin && (
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="remember"
                      className="w-4 h-4 rounded border-white/20 bg-white/5 text-primary focus:ring-primary"
                    />
                    <label htmlFor="remember" className="ml-2 text-white/60">
                      Remember me
                    </label>
                  </div>
                  <a href="#" className="text-primary hover:text-primary/80 transition-colors">
                    Forgot password?
                  </a>
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 px-4 py-3 rounded-lg text-white font-medium transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] hover:shadow-lg hover:shadow-primary/25"
              >
                {isLogin ? "Login" : "Create Account"}
              </button>

              <div className="text-center text-white/60 text-sm">
                {isLogin ? "Don't have an account? " : "Already have an account? "}
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    // You'll need to add logic to toggle between login/register
                  }}
                  className="text-primary hover:text-primary/80 transition-colors font-medium"
                >
                  {isLogin ? "Sign up" : "Sign in"}
                </button>
              </div>
            </form>

            {/* Social Login Options */}
            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-white/10"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-black/80 text-white/60">Or continue with</span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-4">
                <button className="flex justify-center items-center py-2.5 px-4 border border-white/10 rounded-lg hover:bg-white/5 transition-all duration-300 group">
                  <FcGoogle className="text-xl group-hover:scale-110 transition-transform" />
                </button>
                <button className="flex justify-center items-center py-2.5 px-4 border border-white/10 rounded-lg hover:bg-white/5 transition-all duration-300 group">
                  <FaGithub className="text-xl text-white group-hover:scale-110 transition-transform" />
                </button>
                <button className="flex justify-center items-center py-2.5 px-4 border border-white/10 rounded-lg hover:bg-white/5 transition-all duration-300 group">
                  <FaFacebook className="text-xl text-blue-500 group-hover:scale-110 transition-transform" />
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AuthModal;