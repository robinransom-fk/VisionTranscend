import { motion } from "framer-motion";
import { fadeIn, fadeInDelay, pageTransition } from "@/lib/animations";
import ContactForm from "@/components/ui/contact-form";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={pageTransition}
    >
      <section className="relative h-[50vh] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-brand-black/70 to-brand-black/40 z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1557425955-df376b5903c8?auto=format&fit=crop&q=80&w=1770"
            alt="Contact HundredX" 
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
            Connect with Us
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-white/90 mb-10 max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Begin your journey to create extraordinary spaces that redefine what is possible.
          </motion.p>
        </div>
      </section>
      
      <section className="py-24 bg-brand-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row mb-16">
            <motion.div 
              className="lg:w-1/2 lg:pr-16 mb-12 lg:mb-0"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <span className="block w-20 h-0.5 bg-brand-brown mb-6"></span>
              <h2 className="font-playfair text-3xl md:text-4xl mb-6">Get in Touch</h2>
              <p className="text-lg mb-10">
                We'd love to hear about your vision and explore how we can bring it to life. Whether you're interested in a new development, seeking a strategic partnership, or simply want to learn more about HundredX, our team is ready to assist you.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                <div className="flex flex-col">
                  <div className="flex items-center mb-4">
                    <Mail className="text-brand-brown mr-3 h-5 w-5" />
                    <h3 className="font-playfair text-xl">Email Us</h3>
                  </div>
                  <a href="mailto:info@hundredx.in" className="hover:text-brand-brown transition duration-300">info@hundredx.in</a>
                </div>
                
                <div className="flex flex-col">
                  <div className="flex items-center mb-4">
                    <Phone className="text-brand-brown mr-3 h-5 w-5" />
                    <h3 className="font-playfair text-xl">Call Us</h3>
                  </div>
                  <a href="tel:+XXXXXXXXXXXX" className="hover:text-brand-brown transition duration-300">+XXX-XXX-XXXX</a>
                </div>
                
                <div className="flex flex-col">
                  <div className="flex items-center mb-4">
                    <MapPin className="text-brand-brown mr-3 h-5 w-5" />
                    <h3 className="font-playfair text-xl">Visit Us</h3>
                  </div>
                  <address className="not-italic">
                    HundredX Headquarters<br />
                    123 Visionary Avenue<br />
                    Mumbai, India
                  </address>
                </div>
                
                <div className="flex flex-col">
                  <div className="flex items-center mb-4">
                    <Clock className="text-brand-brown mr-3 h-5 w-5" />
                    <h3 className="font-playfair text-xl">Office Hours</h3>
                  </div>
                  <p>Monday - Friday: 9AM - 6PM<br />Saturday: By appointment</p>
                </div>
              </div>
              
              <div>
                <h3 className="font-playfair text-xl mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 rounded-full border border-brand-black/30 flex items-center justify-center hover:border-brand-brown hover:text-brand-brown transition duration-300">
                    <svg
                      className="h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full border border-brand-black/30 flex items-center justify-center hover:border-brand-brown hover:text-brand-brown transition duration-300">
                    <svg
                      className="h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full border border-brand-black/30 flex items-center justify-center hover:border-brand-brown hover:text-brand-brown transition duration-300">
                    <svg
                      className="h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full border border-brand-black/30 flex items-center justify-center hover:border-brand-brown hover:text-brand-brown transition duration-300">
                    <svg
                      className="h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="lg:w-1/2 bg-brand-lightgray p-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInDelay(0.2)}
            >
              <h3 className="font-playfair text-2xl mb-6">Send Us a Message</h3>
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Contact;
