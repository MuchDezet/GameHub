import  { useState } from "react";
import { FaTrash, FaPlus, FaMinus } from "react-icons/fa";

const Cart = () => {
  // Data contoh game yang dibeli
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "The Witcher 3: Wild Hunt",
      price: 250000,
      quantity: 1,
      image: "img/product-1.png",
    },
    {
      id: 2,
      name: "Cyberpunk 2077",
      price: 300000,
      quantity: 1,
      image: "https://via.placeholder.com/100",
    },
    {
      id: 3,
      name: "Elden Ring",
      price: 600000,
      quantity: 1,
      image: "https://via.placeholder.com/100",
    },
  ]);

  // Fungsi untuk menambah jumlah item
  const increaseQuantity = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Fungsi untuk mengurangi jumlah item
  const decreaseQuantity = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  // Fungsi untuk menghapus item dari keranjang
  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  // Hitung total harga
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // Diskon contoh (10%)
  const discount = totalPrice * 0.1;
  const finalPrice = totalPrice - discount;

  return (
    <div className="min-h-screen bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Keranjang Belanja</h1>

        {/* Daftar Item di Keranjang */}
        <div className="bg-gray-800 shadow-md rounded-lg overflow-hidden">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between p-6 border-b border-gray-700 last:border-b-0 transition-all hover:bg-gray-700"
            >
              <div className="flex items-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded-lg"
                />
                <div className="ml-4">
                  <h2 className="text-xl font-semibold">{item.name}</h2>
                  <p className="text-gray-400">Rp {item.price.toLocaleString()}</p>
                </div>
              </div>

              {/* Tombol untuk mengatur jumlah */}
              <div className="flex items-center gap-4">
                <button
                  onClick={() => decreaseQuantity(item.id)}
                  className="bg-gray-700 text-white px-3 py-1 rounded-lg hover:bg-gray-600 transition-colors"
                >
                  <FaMinus />
                </button>
                <span className="mx-4">{item.quantity}</span>
                <button
                  onClick={() => increaseQuantity(item.id)}
                  className="bg-gray-700 text-white px-3 py-1 rounded-lg hover:bg-gray-600 transition-colors"
                >
                  <FaPlus />
                </button>
              </div>

              {/* Harga total per item */}
              <p className="text-xl font-semibold">
                Rp {(item.price * item.quantity).toLocaleString()}
              </p>

              {/* Tombol hapus item */}
              <button
                onClick={() => removeItem(item.id)}
                className="text-red-500 hover:text-red-600 transition-colors"
              >
                <FaTrash className="text-xl" />
              </button>
            </div>
          ))}
        </div>

        {/* Ringkasan Pesanan */}
        <div className="mt-8 bg-gray-800 shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Ringkasan Pesanan</h2>

          {/* Detail Harga */}
          <div className="space-y-3">
            <div className="flex justify-between">
              <p className="text-gray-400">Total Harga</p>
              <p className="text-lg">Rp {totalPrice.toLocaleString()}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-400">Diskon (10%)</p>
              <p className="text-lg text-green-500">- Rp {discount.toLocaleString()}</p>
            </div>
            <div className="flex justify-between border-t border-gray-700 pt-3">
              <p className="text-gray-400">Harga Akhir</p>
              <p className="text-2xl font-semibold">
                Rp {finalPrice.toLocaleString()}
              </p>
            </div>
          </div>

          {/* Tombol Lanjut ke Pembayaran */}
          <button className="w-full bg-blue-600 text-white py-3 rounded-lg mt-6 hover:bg-blue-700 transition-colors">
            Lanjut ke Pembayaran
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;