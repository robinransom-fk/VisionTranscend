import { useParams, Link } from "wouter";
import { motion } from "framer-motion";
import { fadeIn, fadeInDelay, pageTransition } from "@/lib/animations";
import { PROJECTS } from "@/lib/constants";
import { getProjectById } from "@/lib/utils";
import { ArrowLeft, Award, MapPin, Calendar, Square } from "lucide-react";

const ProjectDetails = () => {
  const { id } = useParams();
  const project = getProjectById(id || "", PROJECTS);

  if (!project) {
    return (
      <div className="flex flex-col items-center justify-center py-32 px-6 text-center">
        <h1 className="text-3xl font-playfair mb-4">Project Not Found</h1>
        <p className="mb-8">The project you're looking for doesn't exist or has been moved.</p>
        <Link href="/legacy-collection">
          <a className="btn-primary">Return to Legacy Collection</a>
        </Link>
      </div>
    );
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={pageTransition}
    >
      <section className="relative h-[70vh] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-brand-black/70 to-brand-black/40 z-10"></div>
          <img 
            src={project.image}
            alt={project.title} 
            className="object-cover w-full h-full"
          />
        </div>
        
        <div className="relative z-20 container mx-auto px-6 h-full flex flex-col justify-end pb-16">
          <Link href="/legacy-collection">
            <a className="inline-flex items-center text-white hover:text-brand-brown transition duration-300 mb-6">
              <ArrowLeft className="mr-2 h-5 w-5" />
              <span>Back to Legacy Collection</span>
            </a>
          </Link>
          
          <motion.h1 
            className="font-playfair text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-4"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            {project.title}
          </motion.h1>
          
          <motion.p 
            className="text-xl text-white/90"
            initial="hidden"
            animate="visible"
            variants={fadeInDelay(0.1)}
          >
            {project.category}
          </motion.p>
        </div>
      </section>
      
      <section className="py-16 bg-brand-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-2/3 lg:pr-16">
              <motion.h2 
                className="font-playfair text-3xl mb-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
              >
                A Vision Realized, A Legacy Built
              </motion.h2>
              
              <motion.p 
                className="text-lg mb-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInDelay(0.1)}
              >
                {project.description}
              </motion.p>
              
              <motion.h3 
                className="font-playfair text-2xl mb-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInDelay(0.2)}
              >
                Architectural & Design Excellence
              </motion.h3>
              
              <motion.div 
                className="mb-12"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInDelay(0.3)}
              >
                <p className="italic text-lg mb-6">
                  "The details are not the details. They make the design." – Charles Eames
                </p>
                
                <p className="mb-6">
                  {project.title} is a striking blend of architectural grandeur and functional design, creating an immersive experience that resonates with residents, professionals, and visitors alike.
                </p>
                
                <div className="mt-6">
                  <h4 className="font-medium mb-3">Architectural Style:</h4>
                  <p className="mb-6">{project.architecturalStyle}</p>
                  
                  {project.keyFeatures && (
                    <>
                      <h4 className="font-medium mb-3">Key Features:</h4>
                      <ul className="list-disc pl-5 mb-6">
                        {project.keyFeatures.map((feature, index) => (
                          <li key={index} className="mb-1">{feature}</li>
                        ))}
                      </ul>
                    </>
                  )}
                  
                  {project.sustainability && (
                    <>
                      <h4 className="font-medium mb-3">Sustainability Focus:</h4>
                      <ul className="list-disc pl-5 mb-6">
                        {project.sustainability.map((item, index) => (
                          <li key={index} className="mb-1">{item}</li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              </motion.div>
              
              <motion.div 
                className="text-center lg:text-left"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInDelay(0.4)}
              >
                <Link href="/contact">
                  <a className="btn-primary">
                    <span>Start Your Project</span>
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
            
            <motion.div 
              className="lg:w-1/3 mt-12 lg:mt-0"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInDelay(0.2)}
            >
              <div className="bg-brand-lightgray p-8">
                <h3 className="font-playfair text-2xl mb-6">Project Overview</h3>
                
                <div className="space-y-6">
                  {project.location && (
                    <div className="flex items-start">
                      <MapPin className="text-brand-brown mr-4 mt-1 h-5 w-5" />
                      <div>
                        <h4 className="font-medium mb-1">Location</h4>
                        <p>{project.location}</p>
                      </div>
                    </div>
                  )}
                  
                  <div className="flex items-start">
                    <Calendar className="text-brand-brown mr-4 mt-1 h-5 w-5" />
                    <div>
                      <h4 className="font-medium mb-1">Completion Year</h4>
                      <p>{project.completionYear}</p>
                    </div>
                  </div>
                  
                  {project.builtArea && (
                    <div className="flex items-start">
                      <Square className="text-brand-brown mr-4 mt-1 h-5 w-5" />
                      <div>
                        <h4 className="font-medium mb-1">Total Built-Up Area</h4>
                        <p>{project.builtArea}</p>
                      </div>
                    </div>
                  )}
                  
                  {project.recognitions && project.recognitions.length > 0 && (
                    <div className="flex items-start">
                      <Award className="text-brand-brown mr-4 mt-1 h-5 w-5" />
                      <div>
                        <h4 className="font-medium mb-1">Recognitions & Awards</h4>
                        <ul className="list-disc pl-5">
                          {project.recognitions.map((recognition, index) => (
                            <li key={index} className="mb-1">{recognition}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default ProjectDetails;
