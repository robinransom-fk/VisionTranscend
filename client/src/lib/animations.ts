import { Variants } from "framer-motion";

// Luxury animation transitions
const luxuryEase = [0.22, 1, 0.36, 1]; // Custom cubic-bezier for luxury feel

export const fadeIn: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: luxuryEase
    }
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: {
      duration: 0.6,
      ease: luxuryEase
    }
  }
};

export const fadeInDelay: (delay: number) => Variants = (delay) => ({
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay,
      ease: luxuryEase
    }
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: {
      duration: 0.5,
      ease: luxuryEase
    }
  }
});

export const staggerChildren = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12
    }
  }
};

export const revealText: Variants = {
  hidden: { y: 60, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.9,
      ease: luxuryEase
    }
  }
};

// Elegant text animation with letter-by-letter reveal
export const letterReveal = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.035
    }
  }
};

export const letterAnimation: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: luxuryEase
    }
  }
};

// Sophisticated page transitions
export const pageTransition: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: "easeInOut"
    }
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut"
    }
  }
};

// Luxury slide effects
export const slideIn: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: luxuryEase
    }
  },
  exit: {
    opacity: 0,
    x: -30,
    transition: {
      duration: 0.6,
      ease: luxuryEase
    }
  }
};

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: luxuryEase
    }
  }
};

// Premium image reveal effects
export const imageReveal: Variants = {
  hidden: { 
    clipPath: "inset(0 100% 0 0)",
    opacity: 0.4
  },
  visible: { 
    clipPath: "inset(0 0% 0 0)",
    opacity: 1,
    transition: { 
      duration: 1.2,
      ease: luxuryEase
    }
  }
};

export const scaleUp: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: luxuryEase
    }
  }
};

// Sophisticated hover effects
export const imageHover: Variants = {
  rest: { 
    scale: 1, 
    filter: "brightness(1)",
    transition: { 
      duration: 1.2, 
      ease: "easeOut" 
    } 
  },
  hover: { 
    scale: 1.05, 
    filter: "brightness(1.05)",
    transition: { 
      duration: 1.2, 
      ease: "easeOut" 
    } 
  }
};

export const buttonHover: Variants = {
  rest: { scale: 1, boxShadow: "0px 0px 0px rgba(0,0,0,0)" },
  hover: { 
    scale: 1.03,
    boxShadow: "0px 4px 20px rgba(0,0,0,0.1)",
    transition: { 
      duration: 0.3,
      ease: "easeInOut"
    } 
  },
  tap: { scale: 0.98 }
};

// Parallax scroll effect
export const parallaxY: (speed: number) => Variants = (speed) => ({
  visible: {
    y: 0,
    transition: {
      type: 'tween',
      ease: 'linear',
      duration: 0.3
    }
  },
  parallax: (offsetY: number) => ({
    y: offsetY * speed,
    transition: {
      type: 'tween',
      ease: 'linear',
      duration: 0
    }
  })
});
