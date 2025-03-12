import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function limitChars(text: string, limit: number): string {
  if (text.length <= limit) return text;
  return text.slice(0, limit) + "...";
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(date);
}

// Uses intersection observer to trigger animations
export function useIntersectionObserver(element: HTMLElement | null, callback: (isIntersecting: boolean) => void) {
  if (!element) return;
  
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        callback(entry.isIntersecting);
      });
    },
    { threshold: 0.1 }
  );
  
  observer.observe(element);
  
  // Cleanup function
  return () => {
    if (element) observer.unobserve(element);
  };
}

export function getProjectById(id: string, projects: any[]): any | undefined {
  return projects.find(project => project.id === id);
}

// Validates email format
export function isValidEmail(email: string): boolean {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

// Validates phone number format
export function isValidPhone(phone: string): boolean {
  const re = /^\+?[\d\s()-]{7,}$/;
  return re.test(String(phone).trim());
}
