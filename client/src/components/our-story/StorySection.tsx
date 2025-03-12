import { motion } from "framer-motion";
import { fadeIn, fadeInDelay, staggerChildren } from "@/lib/animations";
import FounderCard from "./FounderCard";
import PhilosophyCard from "./PhilosophyCard";
import { FOUNDERS, PHILOSOPHIES } from "@/lib/constants";

const StorySection = () => {
  return (
    <section className="py-24 bg-brand-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span 
            className="block w-20 h-0.5 bg-brand-brown mx-auto mb-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          />
          
          <motion.h2 
            className="font-playfair text-3xl md:text-5xl mb-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInDelay(0.1)}
          >
            A Tradition of Mastery, A Future of Artistry
          </motion.h2>
          
          <motion.p 
            className="text-xl max-w-3xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInDelay(0.2)}
          >
            Where Vision Meets Legacy
          </motion.p>
        </div>
        
        <motion.div 
          className="max-w-4xl mx-auto mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInDelay(0.3)}
        >
          <p className="text-lg mb-6">
            At HundredX, we believe real estate is more than just structures—it's about shaping the future while honoring the past. Our journey is built upon a foundation of timeless craftsmanship, strategic innovation, and an unyielding commitment to excellence. We do not simply construct buildings; we create enduring landmarks that inspire generations.
          </p>
          <p className="text-lg">
            Our founders, with decades of collective experience, saw beyond the conventional limits of real estate. They envisioned spaces that do not just exist but evolve—spaces that tell stories, elevate lifestyles, and redefine the very essence of living and working environments.
          </p>
        </motion.div>
        
        <motion.h3 
          className="font-playfair text-2xl md:text-3xl mb-12 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          Meet Our Visionaries
        </motion.h3>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerChildren}
        >
          {FOUNDERS.map((founder, index) => (
            <FounderCard 
              key={founder.id}
              founder={founder}
              delay={0.1 * index}
            />
          ))}
        </motion.div>
        
        <motion.div 
          className="mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInDelay(0.3)}
        >
          <h3 className="font-playfair text-2xl md:text-3xl mb-8 text-center">Built on Experience, Driven by Innovation</h3>
          <p className="text-lg mb-6 max-w-4xl mx-auto">
            HundredX was born from the belief that extraordinary spaces require extraordinary thinking. Our team brings together industry veterans, creative strategists, and bold visionaries, each dedicated to pioneering transformative developments.
          </p>
          <p className="text-lg max-w-4xl mx-auto">
            We have spent years perfecting the balance between art and engineering, function and aesthetics, vision and execution. From luxury residences to commercial hubs, each project is a testament to our expertise in designing experiences that enhance life, foster connections, and create value.
          </p>
        </motion.div>
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInDelay(0.4)}
        >
          <h3 className="font-playfair text-2xl md:text-3xl mb-8 text-center">Our Philosophy: Creating Beyond the Ordinary</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {PHILOSOPHIES.map(philosophy => (
              <PhilosophyCard key={philosophy.id} philosophy={philosophy} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StorySection;
