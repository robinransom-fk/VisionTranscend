import { motion } from "framer-motion";
import { fadeInDelay } from "@/lib/animations";
import { Founder } from "@/types";

interface FounderCardProps {
  founder: Founder;
  delay?: number;
}

const FounderCard = ({ founder, delay = 0 }: FounderCardProps) => {
  return (
    <motion.div 
      className="flex flex-col items-center text-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInDelay(delay)}
    >
      <div className="w-40 h-40 rounded-full overflow-hidden mb-6">
        <img 
          src={founder.image}
          alt={founder.name}
          className="w-full h-full object-cover"
        />
      </div>
      <h4 className="font-playfair text-xl mb-2">{founder.name}</h4>
      <p className="text-brand-brown mb-4">{founder.title}</p>
      <p className="text-base max-w-md mx-auto">
        {founder.bio}
      </p>
    </motion.div>
  );
};

export default FounderCard;
