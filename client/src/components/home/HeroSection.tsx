import { motion } from "framer-motion";
import { Link } from "wouter";
import { ChevronDown } from "lucide-react";
import { fadeIn, fadeInDelay, letterReveal, letterAnimation, imageReveal, buttonHover, parallaxY } from "@/lib/animations";
import { useEffect, useState } from "react";

// Component to animate text letter by letter for luxury feel
const AnimatedText = ({ text, className }: { text: string, className?: string }) => {
  return (
    <motion.span
      className={className}
      variants={letterReveal}
      initial="hidden"
      animate="visible"
    >
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          variants={letterAnimation}
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.span>
  );
};

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
    <section className="relative h-screen overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-black/70 to-brand-black/40 z-10"></div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={imageReveal}
          className="w-full h-full"
        >
          <motion.div
            custom={scrollY}
            animate="parallax"
            variants={parallaxY(0.15)}
            className="w-full h-full"
          >
            <img 
              src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1770"
              alt="Luxury real estate development" 
              className="object-cover w-full h-full scale-110"
            />
          </motion.div>
        </motion.div>
      </div>
      
      <div className="relative z-20 container mx-auto px-6 h-full flex flex-col justify-center">
        <motion.div 
          className="max-w-3xl"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6 overflow-hidden">
            <AnimatedText 
              text="Where Vision" 
              className="block" 
            />
            <AnimatedText 
              text="Transcends" 
              className="block italic" 
            />
            <AnimatedText 
              text="Time" 
              className="block" 
            />
          </h1>
          
          <motion.p 
            className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl"
            variants={fadeInDelay(0.7)}
          >
            Real estate is more than just buildings—it's a living canvas where legacies are written. At HundredX, we transform bold ideas into enduring works of art that captivate the present and inspire the future.
          </motion.p>
          
          <motion.div 
            variants={fadeInDelay(0.9)}
            whileHover="hover"
            whileTap="tap"
          >
            <Link 
              href="/contact"
              className="btn-primary inline-flex items-center relative overflow-hidden group"
            >
              <motion.span 
                className="relative z-10"
                variants={buttonHover}
              >Begin Your Legacy</motion.span>
              <motion.span 
                className="absolute inset-0 w-full h-full bg-brand-brown/20 transform scale-x-0 origin-left transition-transform group-hover:scale-x-100 duration-500"
              ></motion.span>
              <motion.svg
                className="ml-2 h-5 w-5 relative z-10 transition-transform group-hover:translate-x-1 duration-300"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                variants={buttonHover}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </motion.svg>
            </Link>
          </motion.div>
        </motion.div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white">
          <motion.a 
            href="#feature-1"
            className="inline-block hover:text-brand-brown transition-colors duration-300"
            animate={{ 
              y: [0, 10, 0],
              opacity: [0.8, 1, 0.8]
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 2,
              ease: "easeInOut" 
            }}
          >
            <ChevronDown className="h-8 w-8" />
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
