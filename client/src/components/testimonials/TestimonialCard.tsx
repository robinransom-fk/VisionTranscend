import { motion } from "framer-motion";
import { fadeInDelay, scaleUp, slideIn } from "@/lib/animations";
import { Testimonial } from "@/types";
import { Quote } from "lucide-react";

interface TestimonialCardProps {
  testimonial: Testimonial;
  delay?: number;
}

const TestimonialCard = ({ testimonial, delay = 0 }: TestimonialCardProps) => {
  return (
    <motion.div 
      className="relative p-10 bg-gradient-to-b from-brand-lightgray to-white border border-slate-200/20 shadow-sm rounded-sm hover:shadow-lg transition-shadow duration-500"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={fadeInDelay(delay)}
      whileHover={{ y: -5 }}
      transition={{ y: { duration: 0.3 } }}
    >
      {/* Decorative elements */}
      <motion.div 
        className="absolute top-6 right-8 text-brand-brown/10"
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: delay + 0.3 }}
        viewport={{ once: true }}
      >
        <Quote size={60} />
      </motion.div>
      
      <motion.div 
        className="w-12 h-1 bg-brand-brown/30 mb-8"
        initial={{ width: 0 }}
        whileInView={{ width: 48 }}
        transition={{ duration: 0.7, delay: delay + 0.1 }}
        viewport={{ once: true }}
      ></motion.div>
      
      <motion.p 
        className="text-lg mb-8 italic relative z-10"
        variants={slideIn}
        custom={delay + 0.2}
      >
        "{testimonial.quote}"
      </motion.p>
      
      <motion.div 
        className="flex items-center"
        variants={fadeInDelay(delay + 0.4)}
      >
        <motion.div 
          className="w-14 h-14 rounded-full overflow-hidden mr-5 border-2 border-brand-brown/20"
          variants={scaleUp}
          custom={delay + 0.5}
        >
          <img 
            src={testimonial.image}
            alt={testimonial.name}
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div>
          <p className="font-medium font-playfair">{testimonial.name}</p>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 0.7, delay: delay + 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-sm text-brand-brown">{testimonial.title}, <span className="font-semibold">{testimonial.company}</span></p>
          </motion.div>
        </div>
      </motion.div>
      
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(200,200,200,0.1),transparent_70%)]"></div>
    </motion.div>
  );
};

export default TestimonialCard;
