import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./pages/Hero";
import Welcome from "./pages/Welcome";
import GameVerse from "./pages/GameVerse";
import Products from "./pages/Products";
import ProductList from "./pages/ProductList";
import Cart from "./components/Cart"; // Pastikan ini diimpor
import Info from "./pages/InfoTournament";
import FaqSection from "./components/FaqSection";
import Footer from "./pages/Footer";
import "./index.css";

function App() {
  return (
    <Router>
      <div className="min-h-screen overflow-x-hidden text-white">
        <Header /> {/* Header tetap di semua halaman */}

        <main>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <Welcome />
                  <GameVerse />
                  <Products />
                  <Info />
                  <FaqSection />
                </>
              }
            />
            <Route path="/product-list" element={<ProductList />} />
            <Route path="/cart" element={<Cart />} /> {/* Route untuk halaman Cart */}
          </Routes>
        </main>

        <Footer /> {/* Footer tetap di semua halaman */}
      </div>
    </Router>
  );
}

export default App;