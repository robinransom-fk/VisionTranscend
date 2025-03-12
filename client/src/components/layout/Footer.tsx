import { Link } from "wouter";
import { motion } from "framer-motion";
import { LinkedinIcon, InstagramIcon, TwitterIcon, Facebook, Mail, Phone } from "lucide-react";
import { NAVIGATION_LINKS, CURRENT_YEAR } from "@/lib/constants";
import { fadeIn, fadeInDelay } from "@/lib/animations";

const Footer = () => {
  return (
    <footer className="py-12 bg-brand-black text-white/70">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h4 className="font-playfair text-xl text-white mb-6">HundredX</h4>
            <p className="mb-6">
              Real estate is more than just buildings—it's a living canvas where legacies are written.
            </p>
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInDelay(0.1)}
          >
            <h4 className="font-playfair text-lg text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {NAVIGATION_LINKS.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="hover:text-brand-brown transition duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInDelay(0.2)}
          >
            <h4 className="font-playfair text-lg text-white mb-6">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail className="text-brand-brown h-5 w-5 mr-3 mt-1" />
                <span>info@hundredx.in</span>
              </li>
              <li className="flex items-start">
                <Phone className="text-brand-brown h-5 w-5 mr-3 mt-1" />
                <span>+XXX-XXX-XXXX</span>
              </li>
            </ul>
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInDelay(0.3)}
          >
            <h4 className="font-playfair text-lg text-white mb-6">Social Media</h4>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:border-brand-brown hover:text-brand-brown transition duration-300"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:border-brand-brown hover:text-brand-brown transition duration-300"
                aria-label="Instagram"
              >
                <InstagramIcon className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:border-brand-brown hover:text-brand-brown transition duration-300"
                aria-label="Twitter"
              >
                <TwitterIcon className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:border-brand-brown hover:text-brand-brown transition duration-300"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInDelay(0.4)}
          className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center"
        >
          <p>&copy; {CURRENT_YEAR} HundredX. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-sm hover:text-brand-brown transition duration-300">Privacy Policy</a>
            <a href="#" className="text-sm hover:text-brand-brown transition duration-300">Terms of Service</a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
