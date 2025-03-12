import { motion } from "framer-motion";
import { Link } from "wouter";
import { fadeIn, fadeInDelay, staggerChildren } from "@/lib/animations";
import { ADVANTAGES } from "@/lib/constants";

const AdvantageSection = () => {
  return (
    <section id="advantage" className="py-24 bg-brand-lightgray">
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
            An Invitation to Distinction
          </motion.h2>
          
          <motion.p 
            className="text-xl max-w-3xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInDelay(0.2)}
          >
            Choosing HundredX is an invitation to join a legacy of visionary excellence where each collaboration becomes a celebration of innovation and mastery.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          {ADVANTAGES.slice(0, 2).map((advantage, index) => (
            <motion.div 
              key={advantage.id}
              className="flex flex-col"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInDelay(0.1 * index)}
            >
              <div className="flex items-start mb-6">
                <div className="text-3xl text-brand-brown mr-4">{advantage.number}</div>
                <div>
                  <h3 className="font-playfair text-2xl mb-4">{advantage.title}</h3>
                  <p className="text-lg">
                    {advantage.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
          
          {ADVANTAGES.slice(2, 4).map((advantage, index) => (
            <motion.div 
              key={advantage.id}
              className="flex flex-col"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInDelay(0.2 + 0.1 * index)}
            >
              <div className="flex items-start">
                <div className="text-3xl text-brand-brown mr-4">{advantage.number}</div>
                <div>
                  <h3 className="font-playfair text-2xl mb-4">{advantage.title}</h3>
                  <p className="text-lg">
                    {advantage.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInDelay(0.3)}
        >
          <Link href="/contact">
            <a className="btn-primary">
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
            </a>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default AdvantageSection;
