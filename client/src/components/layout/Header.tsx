import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { NAVIGATION_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when changing route
    setIsMobileMenuOpen(false);
  }, [location]);

  const headerBg = isScrolled 
    ? "bg-brand-black" 
    : "bg-transparent";

  const logoColor = isScrolled || isMobileMenuOpen 
    ? "text-white" 
    : "text-white";

  return (
    <header className={cn(
      "fixed w-full z-50 transition-all duration-300",
      headerBg,
      isMobileMenuOpen && "bg-brand-black"
    )}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <span className={cn(
            "text-2xl font-bold font-playfair tracking-wider transition-colors duration-300",
            logoColor
          )}>
            HundredX
          </span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-10">
          {NAVIGATION_LINKS.map((link) => (
            <Link 
              key={link.href} 
              href={link.href}
              className={cn(
                "text-sm hover:text-brand-brown transition duration-300",
                location === link.href ? "text-brand-brown" : "text-white"
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden text-white focus:outline-none" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            className="lg:hidden bg-brand-black absolute w-full shadow-lg"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
              {NAVIGATION_LINKS.map((link) => (
                <Link 
                  key={link.href} 
                  href={link.href}
                  className={cn(
                    "text-sm hover:text-brand-brown transition duration-300",
                    location === link.href ? "text-brand-brown" : "text-white"
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
