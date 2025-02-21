import { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Hero = () => {
  const videoRef = useRef(null);
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });

  useEffect(() => {
    // Animasi blur saat refresh
    controls.start({ filter: "blur(10px)", opacity: 0 });
    setTimeout(() => {
      controls.start({ filter: "blur(0px)", opacity: 1, transition: { duration: 2 } });
    }, 100);
  }, [controls]);

  useEffect(() => {
    if (inView) {
      controls.start({ filter: "blur(0px)", opacity: 1, transition: { duration: 1 } });
    } else {
      controls.start({ filter: "blur(10px)", opacity: 0, transition: { duration: 0.5 } });
    }
  }, [inView, controls]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const startTime = 19;
    const endTime = 88;
    const onLoadedMetadata = () => {
      video.currentTime = startTime;
      video.play();
    };
    const checkTime = () => {
      if (video.currentTime >= endTime) {
        video.currentTime = startTime;
        video.play();
      }
    };
    video.addEventListener("loadedmetadata", onLoadedMetadata);
    video.addEventListener("timeupdate", checkTime);
    return () => {
      video.removeEventListener("loadedmetadata", onLoadedMetadata);
      video.removeEventListener("timeupdate", checkTime);
    };
  }, []);

  return (
    <motion.div
      ref={ref}
      className="min-h-screen bg-black overflow-hidden"
      animate={controls}
    >
      <section className="relative h-screen flex items-center justify-center text-white">
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>

        {/* Background Video */}
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-1"
        >
          <source src="/1dz.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Content */}
        <div className="relative z-10 text-center px-4">
          {/* Judul */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4">
            Unleash Your Gaming Experience
          </h1>

          {/* Deskripsi */}
          <p className="text-lg sm:text-xl md:text-2xl mb-8">
            Discover games that define your journey.
          </p>

          {/* Tombol */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="hero-btn border-secondary text-base sm:text-lg">
              Explore Games Now
            </button>
            <button className="hero-btn border-primary text-base sm:text-lg">
              Join Our Community
            </button>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Hero;