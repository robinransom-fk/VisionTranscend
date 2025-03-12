import { motion } from "framer-motion";
import { Link } from "wouter";
import { ChevronDown } from "lucide-react";
import { fadeIn, fadeInDelay } from "@/lib/animations";

const HeroSection = () => {
  return (
    <section className="relative h-screen overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-black/70 to-brand-black/40 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1770"
          alt="Luxury real estate development" 
          className="object-cover w-full h-full"
        />
      </div>
      
      <div className="relative z-20 container mx-auto px-6 h-full flex flex-col justify-center">
        <motion.div 
          className="max-w-3xl"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <motion.h1 
            className="font-playfair text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6"
            variants={fadeIn}
          >
            Where Vision <span className="italic">Transcends</span> Time
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl"
            variants={fadeInDelay(0.1)}
          >
            Real estate is more than just buildings—it's a living canvas where legacies are written. At HundredX, we transform bold ideas into enduring works of art that captivate the present and inspire the future.
          </motion.p>
          
          <motion.div variants={fadeInDelay(0.2)}>
            <Link 
              href="/contact"
              className="btn-primary"
            >
              <span>Begin Your Legacy</span>
              <svg
                className="ml-2 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Link>
          </motion.div>
        </motion.div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white">
          <motion.a 
            href="#feature-1"
            className="inline-block"
            animate={{ y: [0, 10, 0] }}
            transition={{ 
              repeat: Infinity, 
              duration: 1.5, 
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
