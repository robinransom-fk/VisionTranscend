import { motion } from "framer-motion";
import { Link } from "wouter";
import { fadeIn, fadeInDelay } from "@/lib/animations";

interface FeatureSectionProps {
  id: string;
  title: string;
  content: string[];
  image: string;
  imageAlt: string;
  isReversed?: boolean;
  linkText?: string;
  linkUrl?: string;
}

const FeatureSection = ({
  id,
  title,
  content,
  image,
  imageAlt,
  isReversed = false,
  linkText,
  linkUrl
}: FeatureSectionProps) => {
  return (
    <section id={id} className={`py-24 ${isReversed ? 'bg-brand-lightgray' : 'bg-brand-white'}`}>
      <div className="container mx-auto px-6">
        <div className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center`}>
          <div className={`lg:w-1/2 ${isReversed ? 'pl-0 lg:pl-16' : 'pr-0 lg:pr-16'} mb-12 lg:mb-0`}>
            <motion.span 
              className="block w-20 h-0.5 bg-brand-brown mb-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            />
            
            <motion.h2 
              className="font-playfair text-3xl md:text-4xl mb-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInDelay(0.1)}
            >
              {title}
            </motion.h2>
            
            {content.map((paragraph, index) => (
              <motion.p 
                key={index}
                className="text-lg mb-6 last:mb-0"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInDelay(0.2 + index * 0.1)}
              >
                {paragraph}
              </motion.p>
            ))}
            
            {linkText && linkUrl && (
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInDelay(0.4)}
              >
                <Link 
                  href={linkUrl}
                  className="btn-text"
                >
                  <span>{linkText}</span>
                  <svg
                    className="ml-1 h-5 w-5"
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
                </Link>
              </motion.div>
            )}
          </div>
          
          <motion.div 
            className={`lg:w-1/2 relative h-80 md:h-96 lg:h-[500px] w-full ${isReversed ? 'mt-12 lg:mt-0' : ''}`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInDelay(0.3)}
          >
            <img 
              src={image}
              alt={imageAlt}
              className="object-cover w-full h-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
