import { motion } from "framer-motion";
import { pageTransition } from "@/lib/animations";
import StorySection from "@/components/our-story/StorySection";

const OurStory = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={pageTransition}
    >
      <section className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-brand-black/70 to-brand-black/40 z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=1770"
            alt="Our Story - HundredX" 
            className="object-cover w-full h-full"
          />
        </div>
        
        <div className="relative z-20 container mx-auto px-6 h-full flex flex-col justify-center items-center text-center">
          <motion.h1 
            className="font-playfair text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Our Story
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-white/90 mb-10 max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            A journey built upon timeless craftsmanship, strategic innovation, and an unyielding commitment to excellence.
          </motion.p>
        </div>
      </section>
      
      <StorySection />
    </motion.div>
  );
};

export default OurStory;
