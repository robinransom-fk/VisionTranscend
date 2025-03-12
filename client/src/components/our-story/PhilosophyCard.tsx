import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";
import { Philosophy } from "@/types";

interface PhilosophyCardProps {
  philosophy: Philosophy;
}

const PhilosophyCard = ({ philosophy }: PhilosophyCardProps) => {
  return (
    <motion.div 
      className="p-8 bg-brand-lightgray"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeIn}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="text-brand-brown text-2xl mb-4">{philosophy.icon}</div>
      <h4 className="font-playfair text-xl mb-4">{philosophy.title}</h4>
      <p>{philosophy.description}</p>
    </motion.div>
  );
};

export default PhilosophyCard;
