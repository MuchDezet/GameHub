import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { FaTrophy, FaCalendar, FaDollarSign, FaInfoCircle } from "react-icons/fa";
import PropTypes from "prop-types";
import PoliceLine from "../components/PoliceLine"; // Import PoliceLine dari file terpisah

const tournaments = [
  {
    id: 1,
    name: "The International 2024",
    game: "Dota 2",
    date: "October 12-27, 2024",
    prize: "$40,000,000",
    description: "The biggest Dota 2 tournament returns with an unprecedented prize pool. Witness the clash of titans as 18 teams battle through the most prestigious event in esports history.",
    image: "img/tour3.png",
    status: "Upcoming",
    teams: 18,
    location: "Seattle, USA",
    highlights: ["Record-breaking prize pool", "New hero reveal", "All-Star match"]
  },
  {
    id: 2,
    name: "Valorant Champions Tour 2024",
    game: "Valorant",
    date: "September 1-17, 2024",
    prize: "$2,000,000",
    description: "The pinnacle of Valorant competitive gaming. Top teams from each region compete in this high-stakes tactical shooter tournament.",
    image: "img/tour2.png",
    status: "Qualifier Phase",
    teams: 16,
    location: "Los Angeles, USA",
    highlights: ["New map debut", "Special agent reveal", "Team skins release"]
  },
  {
    id: 3,
    name: "M6 World Championship",
    game: "Mobile Legends",
    date: "December 1-15, 2024",
    prize: "$3,000,000",
    description: "The most prestigious Mobile Legends tournament returns bigger than ever. Watch as teams from across the globe compete for glory.",
    image: "img/tour1.jpg",
    status: "Registration Open",
    teams: 16,
    location: "Jakarta, Indonesia",
    highlights: ["Exclusive in-game rewards", "Live orchestra performance", "New hero showcase"]
  },
  {
    id: 4,
    name: "PUBG Mobile Global Championship",
    game: "PUBG Mobile",
    date: "November 5-26, 2024",
    prize: "$4,000,000",
    description: "The ultimate battle royale showdown featuring the world's best PUBG Mobile teams competing for supremacy.",
    image: "img/tour4.jpeg",
    status: "Coming Soon",
    teams: 24,
    location: "Dubai, UAE",
    highlights: ["New map preview", "Celebrity showmatch", "Exclusive skins"]
  },
  {
    id: 5,
    name: "Chess.com Global Championship",
    game: "Chess",
    date: "August 15-30, 2024",
    prize: "$1,000,000",
    description: "The future of chess meets esports in this revolutionary tournament format featuring rapid and blitz games.",
    image: "img/tour5.jpg",
    status: "Qualification Round",
    players: 16,
    location: "Virtual Event",
    highlights: ["AI analysis integration", "New game format", "Grandmaster commentary"]
  },
  {
    id: 6,
    name: "Club World Cup '25",
    game: "Chess",
    date: "August 15-30, 2024",
    prize: "$1,000,000",
    description: "The future of chess meets esports in this revolutionary tournament format featuring rapid and blitz games.",
    image: "img/tour6.png",
    status: "Qualification Round",
    players: 16,
    location: "Virtual Event",
    highlights: ["AI analysis integration", "New game format", "Grandmaster commentary"]
  }
  
];

const TournamentCard = ({ tournament }) => {
  const [isHovered, setIsHovered] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      scale: isHovered ? 1.05 : 1,
      transition: { duration: 0.3 }
    });
  }, [isHovered, controls]);

  return (
    <motion.div
      className="relative bg-background rounded-lg overflow-hidden border border-neon-cyan/30"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      animate={controls}
    >
      <div className="relative h-48 overflow-hidden">
        <PoliceLine />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
        <img
          src={tournament.image}
          alt={tournament.name}
          className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute top-4 right-4 z-20">
          <span className="px-3 py-1 bg-neon-pink/80 text-white rounded-full text-sm">
            {tournament.status}
          </span>
        </div>
      </div>

      <div className="p-6 relative z-20">
        <h3 className="text-2xl font-bold text-neon-cyan mb-2">{tournament.name}</h3>
        
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="flex items-center gap-2 text-neon-yellow">
            <FaCalendar />
            <span className="text-sm">{tournament.date}</span>
          </div>
          <div className="flex items-center gap-2 text-neon-green">
            <FaDollarSign />
            <span className="text-sm">{tournament.prize}</span>
          </div>
          <div className="flex items-center gap-2 text-neon-orange">
            <FaTrophy />
            <span className="text-sm">{tournament.teams || tournament.players} {tournament.teams ? 'Teams' : 'Players'}</span>
          </div>
          <div className="flex items-center gap-2 text-neon-purple">
            <FaInfoCircle />
            <span className="text-sm">{tournament.location}</span>
          </div>
        </div>

        <p className="text-gray-300 mb-4">{tournament.description}</p>

        <div className="space-y-2">
          <h4 className="text-neon-yellow font-bold">Tournament Highlights:</h4>
          <ul className="list-disc list-inside space-y-1 text-gray-300">
            {tournament.highlights.map((highlight, index) => (
              <li key={index} className="text-sm">{highlight}</li>
            ))}
          </ul>
        </div>

        <motion.button
          className="mt-4 w-full py-2 bg-neon-cyan text-black font-bold rounded-lg hover:bg-neon-yellow transition-colors duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Register Now
        </motion.button>
      </div>
    </motion.div>
  );
};
TournamentCard.propTypes = {
  tournament: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    game: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    prize: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    teams: PropTypes.number,
    players: PropTypes.number,
    location: PropTypes.string.isRequired,
    highlights: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

const InfoTournament = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br  text-white relative overflow-hidden">
      <PoliceLine />
      
      <header className="relative z-10 pt-20 pb-10">
        <motion.div 
          className="container mx-auto text-center px-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl font-bold text-neon-cyan mb-4 glitch-text">
            Cyber Tournament Zone
          </h1>
          <p className="text-xl text-neon-yellow">
            Where Legends Rise and Glory Awaits
          </p>
        </motion.div>
      </header>

      <main className="container mx-auto px-4 py-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {tournaments.map((tournament) => (
            <TournamentCard key={tournament.id} tournament={tournament} />
          ))}
        </div>
      </main>
      
    </div>
  );
};

export default InfoTournament;