import { Project, Founder, Philosophy, Testimonial, Advantage } from "@/types";

export const BRAND_COLORS = {
  black: "#000000",
  white: "#FFFFFF",
  brown: "#654321",
  lightGray: "#F5F5F5",
  mediumGray: "#E0E0E0"
};

export const NAVIGATION_LINKS = [
  { name: "Home", href: "/" },
  { name: "Our Story", href: "/our-story" },
  { name: "Legacy Collection", href: "/legacy-collection" },
  { name: "The HundredX Advantage", href: "/advantage" },
  { name: "Connect with Us", href: "/contact" }
];

export const FOUNDERS: Founder[] = [
  {
    id: 1,
    name: "Jonathan Parker",
    title: "CEO & Visionary Leader",
    bio: "With over 25 years of industry expertise, Jonathan has pioneered innovative approaches to urban development that balance luxury, sustainability, and community impact. His visionary leadership has shaped landmark projects across three continents.",
    image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&q=80&w=1974"
  },
  {
    id: 2,
    name: "Sophia Chen",
    title: "Strategy & Innovation Lead",
    bio: "Sophia brings unparalleled expertise in strategic partnerships and innovative execution. Her background in architectural innovation and sustainable design has been instrumental in establishing HundredX as a forward-thinking leader in luxury real estate development.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1976"
  }
];

export const PHILOSOPHIES: Philosophy[] = [
  {
    id: 1,
    title: "Visionary Thinking",
    description: "We go beyond trends, creating spaces that stand the test of time.",
    icon: "🔹"
  },
  {
    id: 2,
    title: "Masterful Craftsmanship",
    description: "Attention to every detail, ensuring perfection in form and function.",
    icon: "🔹"
  },
  {
    id: 3,
    title: "Sustainability & Responsibility",
    description: "Developing with a commitment to both the environment and the community.",
    icon: "🔹"
  },
  {
    id: 4,
    title: "Uncompromising Excellence",
    description: "Pushing boundaries to create industry-defining landmarks.",
    icon: "🔹"
  }
];

export const PROJECTS: Project[] = [
  {
    id: "meridian-residences",
    title: "The Meridian Residences",
    category: "Luxury Residential Complex",
    description: "An architectural marvel featuring contemporary design, sustainable materials, and panoramic views that redefine luxury living. The Meridian Residences stands as a testament to HundredX's commitment to creating extraordinary living spaces that harmonize with their surroundings while providing unparalleled comfort and elegance.",
    shortDescription: "An architectural marvel featuring contemporary design, sustainable materials, and panoramic views that redefine luxury living.",
    image: "https://images.unsplash.com/photo-1560184897-67f4a3f9a7fa?auto=format&fit=crop&q=80&w=1770",
    architecturalStyle: "Contemporary",
    keyFeatures: ["Panoramic views", "Sustainable materials", "Smart home integration", "Private amenities"],
    sustainability: ["LEED Gold certified", "Solar energy integration", "Water conservation systems"],
    completionYear: 2022,
    location: "Los Angeles, CA",
    builtArea: "350,000 sq ft",
    recognitions: ["Urban Design Excellence Award 2022", "Sustainable Development Gold Medal"]
  },
  {
    id: "horizon-tower",
    title: "Horizon Tower",
    category: "Commercial Hub",
    description: "A LEED-certified commercial landmark featuring smart technology integration, collaborative spaces, and iconic modern design. Horizon Tower represents the future of workspace design, combining efficiency with inspiration to create an environment where innovation thrives.",
    shortDescription: "A LEED-certified commercial landmark featuring smart technology integration, collaborative spaces, and iconic modern design.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1770",
    architecturalStyle: "Modern",
    keyFeatures: ["Smart technology integration", "Collaborative spaces", "Iconic design", "High-efficiency systems"],
    sustainability: ["LEED Platinum certified", "Green roof", "Energy-efficient facade"],
    completionYear: 2021,
    location: "New York, NY",
    builtArea: "420,000 sq ft",
    recognitions: ["Commercial Property of the Year 2021", "Architectural Innovation Award"]
  },
  {
    id: "azure-promenade",
    title: "Azure Promenade",
    category: "Retail & Entertainment District",
    description: "A vibrant mixed-use development that combines retail, dining, and entertainment in a thoughtfully designed urban oasis. Azure Promenade creates a dynamic community hub where visitors can shop, dine, and experience cultural events in a space that celebrates both function and beauty.",
    shortDescription: "A vibrant mixed-use development that combines retail, dining, and entertainment in a thoughtfully designed urban oasis.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1770",
    architecturalStyle: "Contemporary Urban",
    keyFeatures: ["Mixed-use spaces", "Cultural venues", "Pedestrian-friendly design", "Public art installations"],
    sustainability: ["Rainwater harvesting", "Energy-efficient lighting", "Recycled materials"],
    completionYear: 2020,
    location: "Chicago, IL",
    builtArea: "280,000 sq ft",
    recognitions: ["Urban Revitalization Award", "Community Impact Recognition"]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    quote: "HundredX transformed our vision into a living, breathing landmark. Their expertise, attention to detail, and commitment to excellence set them apart.",
    name: "Michael Thompson",
    title: "CEO",
    company: "Thompson Ventures",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1974"
  },
  {
    id: 2,
    quote: "Collaborating with HundredX has been an inspiring journey. Their ability to merge innovation with practicality is unmatched.",
    name: "Sarah Anderson",
    title: "Architectural Director",
    company: "ModernSpace",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=1961"
  }
];

export const ADVANTAGES: Advantage[] = [
  {
    id: 1,
    number: "01",
    title: "Visionary Leadership",
    description: "Our leadership team brings decades of experience and a visionary approach to every project, ensuring that each development not only meets but exceeds expectations in design, functionality, and long-term value."
  },
  {
    id: 2,
    number: "02",
    title: "Data-Driven Execution",
    description: "We combine artistic vision with analytical precision, using market insights and data-driven strategies to ensure our developments deliver exceptional returns and lasting impact."
  },
  {
    id: 3,
    number: "03",
    title: "End-to-End Development",
    description: "From initial concept to final handover, our comprehensive approach ensures seamless execution, with meticulous attention to detail at every stage of the development process."
  },
  {
    id: 4,
    number: "04",
    title: "Institutional Excellence",
    description: "We operate with institutional-grade systems and processes, providing transparency, accountability, and excellence in every aspect of our operations and client relationships."
  }
];

export const CURRENT_YEAR = new Date().getFullYear();
