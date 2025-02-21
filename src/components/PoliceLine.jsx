import { motion } from "framer-motion";

const PoliceLine = () => {
  return (
    <div className="absolute text-9xl font-extrabold w-[200%] h-40 bg-primary transform -rotate-45 overflow-hidden pointer-events-none"
      style={{ top: '20%', left: '-50%' }}>
      
      <motion.div 
        className="absolute whitespace-nowrap"
        animate={{
          x: [0, -1000],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          },
        }}
      >
        {[...Array(20)].map((_, i) => (
          <span key={i} className="inline-block px-4 text-[#000000] font-cyber">
            GAMEHUB • TOURNAMENT ZONE • 
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default PoliceLine;
