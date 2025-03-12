import { motion } from "framer-motion";
import { Link } from "wouter";
import { fadeIn, fadeInDelay, pageTransition } from "@/lib/animations";
import { ADVANTAGES } from "@/lib/constants";

const HundredXAdvantage = () => {
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
            src="https://images.unsplash.com/photo-1606744824163-985d376605aa?auto=format&fit=crop&q=80&w=1932"
            alt="The HundredX Advantage" 
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
            The HundredX Advantage
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-white/90 mb-10 max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            An invitation to join a legacy of visionary excellence where each collaboration becomes a celebration of innovation and mastery.
          </motion.p>
        </div>
      </section>
      
      <section className="py-24 bg-brand-white">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <span className="block w-20 h-0.5 bg-brand-brown mx-auto mb-6"></span>
            <h2 className="font-playfair text-3xl md:text-5xl mb-6">An Invitation to Distinction</h2>
            <p className="text-xl max-w-3xl mx-auto">
              Choosing HundredX is an invitation to join a legacy of visionary excellence where each collaboration becomes a celebration of innovation and mastery.
            </p>
          </motion.div>
          
          <div className="max-w-4xl mx-auto mb-20">
            <motion.p 
              className="text-lg mb-10"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInDelay(0.1)}
            >
              Our approach transforms ideas into enduring symbols of success, crafted with a passion that defies the ordinary. From concept to completion, we harness world-class expertise and inventive strategies to create spaces that resonate with both purpose and beauty.
            </motion.p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16 gap-x-12">
              {ADVANTAGES.map((advantage, index) => (
                <motion.div 
                  key={advantage.id}
                  className="relative pl-16"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInDelay(0.1 + index * 0.1)}
                >
                  <div className="absolute left-0 top-0 text-3xl font-playfair text-brand-brown">
                    {advantage.number}
                  </div>
                  <h3 className="font-playfair text-2xl mb-4">{advantage.title}</h3>
                  <p className="text-lg">
                    {advantage.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
          
          <motion.div 
            className="bg-brand-lightgray p-12 text-center max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInDelay(0.3)}
          >
            <h3 className="font-playfair text-2xl mb-6">Ready to Experience the HundredX Difference?</h3>
            <p className="text-lg mb-8">
              Our team of visionaries is ready to transform your ideas into remarkable realities. Let's create something extraordinary together.
            </p>
            <Link href="/contact">
              <a className="btn-primary">
                <span>Start a Conversation</span>
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
              </a>
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default HundredXAdvantage;
