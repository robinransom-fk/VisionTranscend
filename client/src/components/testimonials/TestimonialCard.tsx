import { motion } from "framer-motion";
import { fadeInDelay } from "@/lib/animations";
import { Testimonial } from "@/types";

interface TestimonialCardProps {
  testimonial: Testimonial;
  delay?: number;
}

const TestimonialCard = ({ testimonial, delay = 0 }: TestimonialCardProps) => {
  return (
    <motion.div 
      className="p-10 bg-brand-lightgray"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInDelay(delay)}
    >
      <div className="text-4xl text-brand-brown mb-6">"</div>
      <p className="text-lg mb-8">
        {testimonial.quote}
      </p>
      <div className="flex items-center">
        <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
          <img 
            src={testimonial.image}
            alt={testimonial.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <p className="font-medium">{testimonial.name}</p>
          <p className="text-sm text-brand-brown">{testimonial.title}, {testimonial.company}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
