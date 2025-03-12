import { motion } from "framer-motion";
import { Link } from "wouter";
import { fadeInDelay, imageHover, imageReveal, buttonHover } from "@/lib/animations";
import { Project } from "@/types";
import { ArrowRight, Plus } from "lucide-react";

interface ProjectCardProps {
  project: Project;
  delay?: number;
}

const ProjectCard = ({ project, delay = 0 }: ProjectCardProps) => {
  return (
    <motion.div 
      className="group relative h-[450px] overflow-hidden rounded-sm"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeInDelay(delay)}
    >
      {/* Background and image */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-10 opacity-80 group-hover:opacity-100 transition-opacity duration-700"
        ></motion.div>
        <motion.div
          className="w-full h-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={imageReveal}
        >
          <motion.img 
            src={project.image}
            alt={project.title}
            className="object-cover w-full h-full scale-100 group-hover:scale-110 transition-transform duration-[1.2s] ease-out"
          />
        </motion.div>
      </div>

      {/* Floating decorator element */}
      <motion.div
        className="absolute top-6 right-6 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        initial={{ rotate: 0 }}
        whileHover={{ rotate: 90 }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-12 h-12 rounded-full border border-brand-brown/30 flex items-center justify-center text-brand-brown">
          <Plus className="w-6 h-6" />
        </div>
      </motion.div>
      
      {/* Content */}
      <motion.div 
        className="absolute bottom-0 left-0 right-0 p-8 z-20 transform translate-y-0 group-hover:translate-y-0 transition-transform duration-700"
      >
        <motion.div 
          initial={{ y: 0 }}
          whileHover={{ y: -4 }}
          transition={{ duration: 0.4 }}
        >
          <h4 className="font-playfair text-2xl mb-1 text-white">{project.title}</h4>
          <div className="w-10 h-0.5 bg-brand-brown mb-4 transform origin-left scale-0 group-hover:scale-100 transition-transform duration-700 delay-100"></div>
          <p className="text-brand-brown mb-4">{project.category}</p>
        </motion.div>
        
        <motion.div 
          className="overflow-hidden"
          initial={{ height: 0, opacity: 0 }}
          whileInView={{ height: "auto", opacity: 1 }}
          transition={{ 
            height: { duration: 0.5, delay: 0.2 },
            opacity: { duration: 0.5, delay: 0.3 } 
          }}
          viewport={{ once: true }}
        >
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="hidden group-hover:block"
          >
            <p className="mb-5 text-white/80 leading-relaxed">
              {project.shortDescription}
            </p>
            
            <motion.div
              initial="rest"
              whileHover="hover"
              whileTap="tap"
            >
              <Link 
                href={`/projects/${project.id}`}
                className="inline-flex items-center text-brand-brown hover:text-white transition-colors duration-500 relative"
              >
                <motion.span 
                  variants={buttonHover}
                  className="relative z-10"
                >
                  View Project
                </motion.span>
                <motion.div
                  className="absolute bottom-0 left-0 h-[1px] w-0 bg-brand-brown group-hover:w-full transition-all duration-500"
                ></motion.div>
                <motion.div
                  className="ml-2 w-7 h-7 rounded-full border border-brand-brown flex items-center justify-center overflow-hidden"
                  variants={buttonHover}
                >
                  <ArrowRight className="w-4 h-4" />
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;
