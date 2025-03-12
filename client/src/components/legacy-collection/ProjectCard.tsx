import { motion } from "framer-motion";
import { Link } from "wouter";
import { fadeInDelay, imageHover } from "@/lib/animations";
import { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  delay?: number;
}

const ProjectCard = ({ project, delay = 0 }: ProjectCardProps) => {
  return (
    <motion.div 
      className="group relative h-[450px] overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInDelay(delay)}
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10"></div>
        <motion.img 
          src={project.image}
          alt={project.title}
          className="object-cover w-full h-full"
          initial="rest"
          whileHover="hover"
          variants={imageHover}
        />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
        <h4 className="font-playfair text-2xl mb-2 text-white">{project.title}</h4>
        <p className="text-brand-brown mb-4">{project.category}</p>
        <motion.div 
          className="max-h-0 overflow-hidden transition-all duration-500 group-hover:max-h-40"
          initial={{ maxHeight: 0 }}
          whileHover={{ maxHeight: 160 }}
          transition={{ duration: 0.5 }}
        >
          <p className="mb-4 text-white/80">
            {project.shortDescription}
          </p>
          <Link href={`/projects/${project.id}`}>
            <a className="inline-flex items-center text-brand-brown hover:text-brand-brown/80 transition duration-300">
              <span>View Project</span>
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
            </a>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
