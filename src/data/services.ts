import {
  Code2,
  Smartphone,
  Palette,
  Layout,
  Bot,
  Globe,
  Rocket,
  Database,
  GraduationCap,
  Megaphone,
  Sparkles,
  BadgeCheck,
  BookOpen,
  BrainCircuit,
  BriefcaseBusiness,
  Building2,
  Clapperboard,
  Cloud,
  CreditCard,
  FileText,
  Image,
  ImagePlus,
  ListChecks,
  Mail,
  MapPin,
  Monitor,
  PanelsTopLeft,
  PenTool,
  Plug,
  Search,
  Share2,
  ShoppingBag,
  ShoppingCart,
  Store,
  TabletSmartphone,
  TrendingUp,
  UsersRound,
  Video,
  Workflow,
  Wrench,
  Zap,
  type LucideIcon,
} from "lucide-react";

export interface Service {
  title: string;
  icon: LucideIcon;
  short: string;
}

export const services: Service[] = [
  {
    title: "Website Development",
    icon: Code2,
    short: "Modern, responsive and high-performance websites for businesses and brands.",
  },
  {
    title: "E-Commerce Development",
    icon: ShoppingCart,
    short: "Complete online shopping websites with products, cart, checkout and payments.",
  },
  {
    title: "Web Application Development",
    icon: Monitor,
    short: "Scalable and powerful web applications tailored to your business needs.",
  },
  {
    title: "Custom Software Development",
    icon: Database,
    short: "Custom software solutions designed around your unique business workflow.",
  },
  {
    title: "Android App Development",
    icon: Smartphone,
    short: "Feature-rich Android applications with smooth performance and modern UI.",
  },
  {
    title: "iOS App Development",
    icon: TabletSmartphone,
    short: "Premium iPhone and iPad applications built for great user experiences.",
  },
  {
    title: "Cross-Platform App Development",
    icon: Smartphone,
    short: "One powerful application experience across Android and iOS platforms.",
  },
  {
    title: "UI / UX Design",
    icon: Layout,
    short: "Clean, attractive and conversion-focused interfaces for digital products.",
  },
  {
    title: "Landing Page Design",
    icon: PanelsTopLeft,
    short: "High-converting landing pages designed for campaigns, products and services.",
  },
  {
    title: "Portfolio Website Design",
    icon: BriefcaseBusiness,
    short: "Professional portfolio websites to showcase your skills, work and achievements.",
  },
  {
    title: "Business Website Design",
    icon: Building2,
    short: "Professional corporate websites that build trust and strengthen your brand.",
  },
  {
    title: "WordPress Development",
    icon: Globe,
    short: "Flexible and easy-to-manage WordPress websites for businesses and creators.",
  },
  {
    title: "Shopify Development",
    icon: Store,
    short: "Beautiful Shopify stores with product management, payments and customization.",
  },
  {
    title: "WooCommerce Development",
    icon: ShoppingBag,
    short: "Powerful WooCommerce stores with complete online selling functionality.",
  },
  {
    title: "Quick Commerce Solutions",
    icon: Zap,
    short: "Fast delivery platforms and digital solutions for modern quick-commerce businesses.",
  },
  {
    title: "Online Store Setup",
    icon: Store,
    short: "Complete online store setup including products, categories, payments and shipping.",
  },
  {
    title: "Product Listing Services",
    icon: ListChecks,
    short: "Professional product listings with optimized titles, descriptions and details.",
  },
  {
    title: "Product Catalogue Design",
    icon: BookOpen,
    short: "Attractive digital product catalogues designed to present products professionally.",
  },
  {
    title: "Marketplace Management",
    icon: Store,
    short: "Manage products, listings, orders and digital presence across marketplaces.",
  },
  {
    title: "Amazon Store Management",
    icon: ShoppingBag,
    short: "Professional Amazon listing, catalogue and store management services.",
  },
  {
    title: "Flipkart Store Management",
    icon: ShoppingCart,
    short: "Complete Flipkart product listing and marketplace management support.",
  },
  {
    title: "Social Media Management",
    icon: Share2,
    short: "Strategic social media management to grow your audience and online presence.",
  },
  {
    title: "Instagram Marketing",
    icon: Share2,
    short: "Strategic Instagram marketing to increase reach, engagement and brand visibility.",
  },
  {
    title: "Facebook Marketing",
    icon: Megaphone,
    short: "Targeted Facebook marketing campaigns to reach and engage potential customers.",
  },
  {
    title: "Google Ads Management",
    icon: Search,
    short: "Performance-focused Google Ads campaigns designed to generate quality leads.",
  },
  {
    title: "Meta Ads Management",
    icon: Megaphone,
    short: "Facebook and Instagram advertising campaigns optimized for better results.",
  },
  {
    title: "YouTube Marketing",
    icon: Video,
    short: "YouTube promotion and content marketing to grow your channel and audience.",
  },
  {
    title: "SEO Optimization",
    icon: TrendingUp,
    short: "Search engine optimization to improve rankings, visibility and organic traffic.",
  },
  {
    title: "Local SEO",
    icon: MapPin,
    short: "Improve your local search visibility and attract customers around your business.",
  },
  {
    title: "Content Marketing",
    icon: FileText,
    short: "Engaging content strategies that attract audiences and build brand authority.",
  },
  {
    title: "Graphic Design",
    icon: Palette,
    short: "Creative visual designs for brands, businesses, campaigns and digital platforms.",
  },
  {
    title: "Logo Design",
    icon: PenTool,
    short: "Unique and memorable logos designed to represent your brand identity.",
  },
  {
    title: "Brand Identity Design",
    icon: BadgeCheck,
    short: "Complete visual identity systems that create a strong and consistent brand.",
  },
  {
    title: "Social Media Post Design",
    icon: Image,
    short: "Professional and engaging social media creatives for daily brand promotion.",
  },
  {
    title: "Banner & Poster Design",
    icon: ImagePlus,
    short: "Eye-catching banners, posters and promotional creatives for your campaigns.",
  },
  {
    title: "Brochure & Catalogue Design",
    icon: BookOpen,
    short: "Professional brochures and catalogues that showcase your products and services.",
  },
  {
    title: "Video Editing",
    icon: Video,
    short: "Professional video editing for advertisements, business videos and social media.",
  },
  {
    title: "Motion Graphics",
    icon: Sparkles,
    short: "Animated graphics and visual effects that make your content more engaging.",
  },
  {
    title: "Reels & Shorts Creation",
    icon: Clapperboard,
    short: "Creative short-form videos designed for Instagram, YouTube and social platforms.",
  },
  {
    title: "AI Chatbot Development",
    icon: Bot,
    short: "Smart AI chatbots that automate customer support and business conversations.",
  },
  {
    title: "AI Automation Solutions",
    icon: BrainCircuit,
    short: "AI-powered automation solutions that save time and improve business productivity.",
  },
  {
    title: "API Integration",
    icon: Plug,
    short: "Connect your applications with payment, CRM, maps, AI and third-party APIs.",
  },
  {
    title: "Payment Gateway Integration",
    icon: CreditCard,
    short: "Secure online payment integration for websites, apps and e-commerce platforms.",
  },
  {
    title: "CRM Development",
    icon: UsersRound,
    short: "Custom CRM systems to manage customers, leads, sales and business operations.",
  },
  {
    title: "ERP Software Development",
    icon: Workflow,
    short: "Integrated ERP solutions for managing business processes from one platform.",
  },
  {
    title: "Cloud Hosting & Deployment",
    icon: Cloud,
    short: "Reliable cloud deployment, hosting configuration and production setup.",
  },
  {
    title: "Domain & Business Email",
    icon: Mail,
    short: "Professional domain setup and branded business email configuration.",
  },
  {
    title: "Website Maintenance",
    icon: Wrench,
    short: "Regular updates, security checks, bug fixes and performance improvements.",
  },
  {
    title: "College Project Development",
    icon: GraduationCap,
    short: "Web, app and software project development with practical implementation support.",
  },
  {
    title: "Digital Product Launch",
    icon: Rocket,
    short: "Launch planning, digital setup and marketing support for new products.",
  },
];