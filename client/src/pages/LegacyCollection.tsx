import { motion } from "framer-motion";
import { Link } from "wouter";
import { fadeIn, fadeInDelay, pageTransition } from "@/lib/animations";
import ProjectCard from "@/components/legacy-collection/ProjectCard";
import { PROJECTS } from "@/lib/constants";

const LegacyCollection = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={pageTransition}
    >
      <section id="legacy-collection" className="py-24 bg-black text-white">
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
              A Portfolio of the Immaculate
            </motion.h2>
            
            <motion.p 
              className="text-xl max-w-3xl mx-auto"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInDelay(0.2)}
            >
              Every masterpiece begins with a vision. The HundredX Legacy Collection is a curated gallery of landmark developments that stand as a testament to the art of real estate.
            </motion.p>
          </div>
          
          <motion.div 
            className="max-w-4xl mx-auto mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInDelay(0.3)}
          >
            <h3 className="font-playfair text-2xl md:text-3xl mb-8 text-center">Where Timeless Design Meets Purpose</h3>
            <p className="text-lg mb-6">
              Imagine walking through halls that echo with timeless elegance, where every detail is meticulously designed to evoke both beauty and purpose. HundredX is not just about constructing buildings; we craft experiences, ensuring that each development enhances communities, fosters connections, and redefines industry benchmarks.
            </p>
            <p className="text-lg mb-6">
              Each project within our portfolio embodies:
            </p>
            <ul className="list-none space-y-3 mb-6">
              <li className="flex items-center">
                <span className="text-brand-brown mr-2">•</span>
                <span><strong>Strategic Vision</strong> – A development approach that aligns with evolving market demands and consumer aspirations.</span>
              </li>
              <li className="flex items-center">
                <span className="text-brand-brown mr-2">•</span>
                <span><strong>Unparalleled Craftsmanship</strong> – Every element, from the foundation to the finishing touches, reflects the highest standards of excellence.</span>
              </li>
              <li className="flex items-center">
                <span className="text-brand-brown mr-2">•</span>
                <span><strong>Sustainable Innovation</strong> – Thoughtfully designed spaces that prioritize environmental responsibility and long-term value.</span>
              </li>
            </ul>
          </motion.div>
          
          <motion.h3 
            className="font-playfair text-2xl md:text-3xl mb-8 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInDelay(0.1)}
          >
            A Testament to Innovation, Passion & Excellence
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {PROJECTS.map((project, index) => (
              <ProjectCard 
                key={project.id}
                project={project}
                delay={0.1 * index}
              />
            ))}
          </div>
          
          <motion.div 
            className="text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInDelay(0.4)}
          >
            <Link href="/contact">
              <a className="btn-secondary">
                <span>Begin Your Legacy Project</span>
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

export default LegacyCollection;
