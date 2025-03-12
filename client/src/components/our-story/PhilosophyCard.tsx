import { motion } from "framer-motion";
import { fadeIn, scaleUp, buttonHover } from "@/lib/animations";
import { Philosophy } from "@/types";
import { ExternalLink } from "lucide-react";

interface PhilosophyCardProps {
  philosophy: Philosophy;
}

const PhilosophyCard = ({ philosophy }: PhilosophyCardProps) => {
  return (
    <motion.div 
      className="relative p-8 bg-white border border-slate-200/20 shadow-md group overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeIn}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700 bg-[radial-gradient(circle_at_center,rgba(200,150,100,0.5),transparent_70%)]"></div>
      
      {/* Decorative border line */}
      <motion.div 
        className="absolute top-0 left-0 right-0 h-1 bg-brand-brown origin-left"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      ></motion.div>
      
      {/* Icon with animation */}
      <motion.div 
        className="relative mb-6"
        variants={scaleUp}
      >
        <div className="w-14 h-14 rounded-full bg-brand-brown/10 flex items-center justify-center text-brand-brown mb-2">
          {philosophy.icon}
        </div>
        <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full border border-brand-brown transform scale-0 group-hover:scale-100 transition-transform duration-500"></div>
      </motion.div>
      
      {/* Content */}
      <h4 className="font-playfair text-2xl mb-4 relative">
        {philosophy.title}
        <motion.div
          className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-brown/30"
          initial={{ width: 0 }}
          whileInView={{ width: "30%" }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        ></motion.div>
      </h4>
      
      <p className="text-gray-700 leading-relaxed mb-6">{philosophy.description}</p>
      
      {/* Hover card action */}
      <motion.div
        className="flex items-center text-brand-brown opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500"
        initial="rest"
        whileHover="hover"
        whileTap="tap"
      >
        <motion.span
          variants={buttonHover}
          className="font-medium cursor-pointer"
        >
          Learn More
        </motion.span>
        <motion.div
          variants={buttonHover}
          className="ml-2"
        >
          <ExternalLink size={16} />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default PhilosophyCard;
