export interface Project {
  slug: string;           // unique ID (used for routing later)
  title: string;          // card title
  description: string;    // short description for list
  image: string;          // card image
  href?: string;          // optional: external link
  tags?: string[];        // optional: filtering in future
}

export const projects: Project[] = [
  {
    slug: "astro-portfolio",
    title: "Astro Portfolio",
    description: "A fast and modern personal portfolio built with Astro.",
    image: "/images/project-1.jpg",
    href: "#",
    tags: ["astro", "portfolio"]
  },
  {
    slug: "ecommerce-frontend",
    title: "E-commerce Frontend",
    description: "Responsive UI using Astro and Tailwind with product listings.",
    image: "/images/project-2.jpg",
    href: "#",
    tags: ["frontend", "tailwind"]
  },
  {
    slug: "vue-dashboard",
    title: "Vue Dashboard",
    description: "Interactive admin dashboard built with Vue 3 and chart widgets.",
    image: "/images/project-3.jpg",
    href: "#",
    tags: ["vue", "dashboard"]
  }
];
