import { motion } from "framer-motion";
import { fadeInDelay, imageReveal, scaleUp, slideInLeft } from "@/lib/animations";
import { Founder } from "@/types";
import { Linkedin, Twitter } from "lucide-react";

interface FounderCardProps {
  founder: Founder;
  delay?: number;
}

const FounderCard = ({ founder, delay = 0 }: FounderCardProps) => {
  return (
    <motion.div 
      className="flex flex-col items-center text-center group"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeInDelay(delay)}
    >
      {/* Image with reveal effect */}
      <motion.div 
        className="relative w-48 h-48 mb-8 overflow-hidden"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="absolute inset-0 rounded-full border-2 border-brand-brown/20 overflow-hidden shadow-lg">
          <motion.div
            className="w-full h-full overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={imageReveal}
          >
            <img 
              src={founder.image}
              alt={founder.name}
              className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-110"
            />
          </motion.div>
          
          {/* Hover overlay with social links */}
          <motion.div 
            className="absolute inset-0 bg-brand-brown/50 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-4 transition-opacity duration-500"
          >
            <motion.a 
              href="#" 
              className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-brand-brown transition-transform duration-300 hover:scale-110"
              whileHover={{ y: -3 }}
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </motion.a>
            <motion.a 
              href="#" 
              className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-brand-brown transition-transform duration-300 hover:scale-110"
              whileHover={{ y: -3 }}
              aria-label="Twitter"
            >
              <Twitter size={18} />
            </motion.a>
          </motion.div>
        </div>
        
        {/* Decorative element */}
        <motion.div 
          className="absolute -z-10 w-48 h-48 rounded-full border border-brand-brown/30 -bottom-1 -right-1"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: delay + 0.2 }}
          viewport={{ once: true }}
        ></motion.div>
      </motion.div>
      
      {/* Title with underline animation */}
      <motion.div
        className="mb-6"
        variants={scaleUp}
      >
        <h4 className="font-playfair text-2xl mb-1">{founder.name}</h4>
        <motion.div 
          className="h-0.5 w-0 bg-brand-brown mx-auto"
          initial={{ width: 0 }}
          whileInView={{ width: "40%" }}
          transition={{ duration: 0.6, delay: delay + 0.3 }}
          viewport={{ once: true }}
        ></motion.div>
        <p className="text-brand-brown mt-2 font-medium">{founder.title}</p>
      </motion.div>
      
      {/* Bio text with slide in animation */}
      <motion.p 
        className="text-base max-w-md mx-auto leading-relaxed"
        variants={slideInLeft}
        custom={delay + 0.4}
      >
        {founder.bio}
      </motion.p>
    </motion.div>
  );
};

export default FounderCard;
