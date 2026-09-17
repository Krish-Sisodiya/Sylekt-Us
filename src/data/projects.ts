export interface ProjectResult {
  value: string;
  label: string;
}

export interface Project {
  id: number;
  year: string;
  title: string;
  client: string;
  category: string;
  status: string;
  image: string;
  logo?: string;
  shortDescription: string;
  overview: string;
  challenge: string;
  solution: string;
  technologies: string[];
  features: string[];
  results: ProjectResult[];
  website?: string;
}

export const projects: Project[] = [
  {
  id: 1,
  year: "2026",
  title: "Aushadhi Walah",
  client: "Amit Trivedi",
  category: "E-Commerce & Web Development",
  status: "Completed",
  image: "../../img/Portfolio/AW.png",
  logo: "../../img/Portfolio/AW-logo.png",
  shortDescription:
    "A direct-to-consumer (D2C) herbal wellness storefront featuring an instant WhatsApp-based checkout system.",
  overview:
    "Aushadhi Walah is an emerging organic herbal extract and wellness brand. We engineered a modern, high-converting digital storefront that showcases pure herbal powders and streamlines product discovery with a frictionless 'Buy on WhatsApp' instant order funnel.",
  challenge:
    "Traditional e-commerce checkouts often introduce cart abandonment and complex payment gateways that deter first-time health & wellness buyers. The client needed an intuitive, trustworthy, and lightweight platform that could convey product authenticity while enabling customers to place orders instantly through their preferred communication channel.",
  solution:
    "Designed and developed a blazing-fast, mobile-first web application featuring a dynamic product catalog, detailed herbal benefit breakdowns, and custom WhatsApp integration. When users click 'Buy on WhatsApp', the system automatically pre-fills the order details (product name, variant, and quantity) for rapid conversions.",
  technologies: [
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Framer Motion",
    "Node.js",
  ],
  features: [
    "One-Click WhatsApp Order Automation",
    "Dynamic Organic Herbal Product Catalog",
    "Mobile-First, Responsive UI/UX",
    "Fluid Micro-Interactions & Transitions",
    "Fast Page Speed & Performance Optimization",
    "SEO-Optimized Product & Metadata Structure",
  ],
  results: [
    { value: "< 2s", label: "Page Load Time" },
    { value: "0-Friction", label: "WhatsApp Checkout" },
    { value: "100%", label: "Mobile Responsive" },
  ],
  website: "https://www.aushadhiwalah.com/",
},
  {
    id: 2,
    year: "2026",
    title: "Project Two",
    client: "Another Client",
    category: "App Development",
    status: "Completed",
    image: "/projects/project-2.jpg",
    logo: "/projects/client-2-logo.png",
    shortDescription:
      "A powerful mobile application created to simplify operations and provide users with a seamless digital experience.",
    overview:
      "The project involved creating a modern mobile experience with a focus on usability, performance and scalable functionality. The application was designed to support the client's growing digital requirements.",
    challenge:
      "The client required a simple yet powerful mobile solution that could handle multiple user interactions while remaining easy to use.",
    solution:
      "We created an intuitive application experience with clean navigation, reusable components, optimized screens and a scalable backend-ready architecture.",
    technologies: [
      "React Native",
      "TypeScript",
      "Node.js",
      "REST API",
      "Firebase",
    ],
    features: [
      "Cross-platform application",
      "Clean navigation",
      "API integration",
      "User-friendly interface",
      "Optimized performance",
      "Scalable structure",
    ],
    results: [
      { value: "2", label: "Platforms" },
      { value: "100%", label: "Mobile Ready" },
      { value: "24/7", label: "Accessibility" },
    ],
    website: "https://example.com",
  },
  {
    id: 3,
    year: "2026",
    title: "Project Three",
    client: "Business / Startup Name",
    category: "UI / UX & Branding",
    status: "Completed",
    image: "/projects/project-3.jpg",
    logo: "/projects/client-3-logo.png",
    shortDescription:
      "A complete brand and digital experience designed to give the business a premium and recognizable identity.",
    overview:
      "Sylekt Us worked on the digital identity and overall experience of the client. The goal was to create a consistent visual language across the website, branding and digital communication.",
    challenge:
      "The existing brand lacked a consistent visual identity and did not effectively communicate the quality of the business to its target audience.",
    solution:
      "We developed a clean visual system with a modern interface, structured layouts, strong typography and consistent brand elements.",
    technologies: [
      "Figma",
      "React",
      "Tailwind CSS",
      "Framer Motion",
      "Adobe Tools",
    ],
    features: [
      "Complete UI/UX design",
      "Brand identity system",
      "Responsive layouts",
      "Modern visual language",
      "Interactive animations",
      "Consistent design system",
    ],
    results: [
      { value: "100%", label: "Modern UI" },
      { value: "360°", label: "Brand Experience" },
      { value: "3x", label: "Better Presentation" },
    ],
    website: "https://example.com",
  },
  {
    id: 4,
    year: "2026",
    title: "New Project",
    client: "New Client",
    category: "Web Development",
    status: "Completed",
    image: "/projects/project-4.jpg",
    logo: "/projects/client-4-logo.png",
    shortDescription: "Project short description...",
    overview: "Complete project overview...",
    challenge: "Client ki problem kya thi...",
    solution: "Sylekt Us ne kya solution diya...",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    features: ["Feature One", "Feature Two", "Feature Three"],
    results: [
      { value: "100%", label: "Responsive" },
      { value: "2x", label: "Performance" },
      { value: "24/7", label: "Availability" },
    ],
    website: "https://example.com",
  },
];