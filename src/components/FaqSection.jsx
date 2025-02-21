import { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Line, OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion';

// Particles Component
const Particles = () => {
  const particlesCount = 5000;
  const positions = useMemo(() => {
    const posArray = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount; i++) {
      posArray[i * 3] = (Math.random() - 0.5) * 10;
      posArray[i * 3 + 1] = (Math.random() - 0.5) * 10;
      posArray[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return posArray;
  }, []);

  const pointsRef = useRef();
  useFrame(() => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += 0.0005;
    }
  });

  return (
    <Points ref={pointsRef} positions={positions}>
      <PointMaterial transparent color="#00ffff" size={0.02} sizeAttenuation depthWrite={false} />
    </Points>
  );
};

// Light Lines Component
const LightLines = () => {
  const lines = useMemo(() => Array.from({ length: 10 }, () => [
    [(Math.random() - 0.5) * 10, (Math.random() - 0.5) * 10, (Math.random() - 0.4) * 10],
    [(Math.random() - 0.5) * 10, (Math.random() - 0.5) * 10, (Math.random() - 0.4) * 10]
  ]), []);

  return lines.map((line, index) => <Line key={index} points={line} color="#ff00ff" lineWidth={1} />);
};

// Main FaqSection Component
const FaqSection = () => {
  const faqs = [
    { question: "How do I purchase a game on Game Hub?", answer: "To purchase a game on Game Hub, first create an account or log in. Browse the game catalog and select the game you want. Add it to your cart, proceed to checkout, and choose a payment method. Once payment is successful, you can download and play the game from your library." },
    { question: "What payment methods are available?", answer: "Game Hub supports various payment methods, including credit/debit cards, PayPal, digital wallets like GoPay and OVO, and bank transfers. Ensure your payment method is active before making a purchase." },
    { question: "Can I get a refund if I'm not satisfied with my purchase?", answer: "Yes, Game Hub has a refund policy within a specific timeframe after purchase. The conditions include not playing the game for more than two hours and requesting a refund within 14 days of purchase." },
    { question: "How do I join a tournament on Game Hub?", answer: "Game Hub regularly hosts tournaments for various games. To join, visit the tournament page, choose an ongoing tournament, and register. Ensure you meet participation requirements such as ranking and qualifications. Then, follow the schedule and rules set for the tournament." },
    { question: "Are there prizes for tournament winners?", answer: "Yes! Tournament winners on Game Hub can receive cash prizes, game vouchers, exclusive merchandise, and even opportunities to join professional eSports teams." },
    { question: "How can I stay updated on upcoming tournaments?", answer: "You can check the latest tournament schedules directly on the Game Hub website under the 'Events & Tournaments' section. Additionally, follow Game Hub's official social media accounts for updates on upcoming tournaments." }
  ];

  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) => setOpenIndex(openIndex === index ? null : index);

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center px-4 md:px-8 lg:px-16 py-12 overflow-hidden">
      {/* Background with Particles and Gradient */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <Particles />
          <LightLines />
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.3} />
          <OrbitControls enableZoom={false} />
        </Canvas>
      </div>

      {/* Content FAQ */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }} 
        viewport={{ once: true }}
        className="relative z-10 text-white max-w-3xl w-full text-center p-6"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-4 cursor-pointer border-b border-gray-500 text-left"
              onClick={() => toggleFAQ(index)}
            >
              <h3 className="text-lg font-semibold">{faq.question}</h3>
              {openIndex === index && <p className="text-sm text-gray-300 mt-2">{faq.answer}</p>}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default FaqSection;
