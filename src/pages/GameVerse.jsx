import { motion } from "framer-motion";

const GameVerse = () => {
  // Variants untuk animasi on scroll
  const cardVariants = {
    offscreen: {
      opacity: 0,
      y: 50,
      filter: "blur(10px)",
    },
    onscreen: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

  return (
    <section className="info-section flex flex-col relative w-4/5 mt-28 mx-auto max-w-[1200px] px-4 md:px-6 lg:px-0">
      {/* Header */}
      <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-0">Featured Games</h3>
      <p className="text-gray-500 max-w-[400px] mt-1 leading-6 text-sm md:text-base">
        The most highlighted games throughout history, from triple A games to cute robot-themed games
      </p>
      {/* Cards Grid */}
      <div className="info-cards grid grid-cols-1 sm:grid-cols-2 gap-5 mt-8 md:grid-cols-2 lg:grid-cols-2">
        {/* Card List */}
        {[
          {
            title: "Black Myth Wukong",
            description: "Black Myth: Wukong is an action role-playing game by Chinese indie developer Game Science.",
            video: "/feature-3.mp4",
            span: "col-span-2",
          },
          {
            title: "Astro Bot",
            description: "Astro Bot is a series of platform and augmented reality games developed by Team Asobi.",
            video: "/feature-2.mp4",
            span: "row-span-2 h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[83vh]",
          },
          {
            title: "Red Dead Redemption 2",
            description: "Red Dead Redemption 2 is a 2018 action-adventure video game developed and published by Rockstar Games.",
            video: "/feature-1.mp4",
            span: "",
          },
          {
            title: "God Of War",
            description: "God of War is an action-adventure video game franchise created by David Jaffe and developed by Santa Monica Studio.",
            video: "/feature-4.mp4",
            span: "",
          },
          {
            title: "Ghost Of Tsushima",
            description: "Ghost of Tsushima is a 2020 action-adventure and stealth video game developed by Sucker Punch.",
            video: "/feature-5.mp4",
            span: "",
          },
          {
            title: "Sekiro: Shadows Die Twice",
            description: "Sekiro: Shadows Die Twice is an action-adventure video game developed by FromSoftware and published by Activision.",
            video: "/feature-6.mp4",
            span: "",
          },
        ].map((game, index) => (
          <motion.div
            key={index}
            className={`card relative h-[50vh] sm:h-[60vh] md:h-[45vh] lg:h-[40vh] overflow-hidden rounded-2xl border border-primary transition duration-500 hover:shadow-lg hover:border-transparent hover:bg-gradient-to-br hover:from-cyan-500 hover:via-purple-500 hover:to-pink-500 hover:text-white ${game.span}`}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariants}
          >
            <h1 className="absolute top-4 left-5 text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-green-400 to-blue-500 bg-clip-text text-transparent">
              {game.title}
            </h1>
            <p className="absolute top-20 left-5 text-gray-400 max-w-[250px] text-sm md:text-base hover:text-white">
              {game.description}
            </p>
            <video src={game.video} autoPlay loop muted playsInline className="w-full h-full object-cover"></video>
            <button className="absolute bottom-5 left-5 px-4 sm:px-6 py-2 sm:py-3 border border-gray-300 bg-black text-gray-400 rounded-2xl shadow-md hover:shadow-xl hover:opacity-70 transition duration-300 hover:bg-white hover:text-black">
              BUY
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default GameVerse;