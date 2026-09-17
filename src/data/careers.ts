import {
  Code2,
  Database,
  PenTool,
  Video,
  Share2,
  Layers3,
  Sparkles,
  Rocket,
  ShieldCheck,
  Cpu,
  Bug,
  GraduationCap,
  Palette,
  Globe,
  type LucideIcon,
} from "lucide-react";

export interface CareerRole {
  title: string;
  icon: LucideIcon;
  type: string;
  desc: string;
}

export interface Perk {
  icon: LucideIcon;
  title: string;
  text: string;
}

export const careers: CareerRole[] = [
  {
    title: "UI/UX Designer",
    icon: Palette,
    type: "Full Time",
    desc: "Design premium product experiences and scalable systems.",
  },
  {
    title: "Frontend Developer",
    icon: Code2,
    type: "Full Time",
    desc: "Build high-performance React interfaces.",
  },
  {
    title: "Backend Developer",
    icon: Database,
    type: "Full Time",
    desc: "Create scalable APIs and backend systems.",
  },
  {
    title: "Full Stack Developer",
    icon: Layers3,
    type: "Full Time",
    desc: "Work across frontend, backend and deployment.",
  },
  {
    title: "Java Spring Boot Developer",
    icon: Cpu,
    type: "Remote",
    desc: "Build enterprise-grade Java applications.",
  },
  {
    title: "Graphic Designer",
    icon: PenTool,
    type: "Contract",
    desc: "Craft premium visual assets.",
  },
  {
    title: "Video Editor",
    icon: Video,
    type: "Contract",
    desc: "Create reels and storytelling videos.",
  },
  {
    title: "Social Media Handler",
    icon: Share2,
    type: "Part Time",
    desc: "Handle social growth and campaigns.",
  },
  {
    title: "Animation Designer",
    icon: Sparkles,
    type: "Remote",
    desc: "Create motion graphics and interactions.",
  },
  {
    title: "MySQL Specialist",
    icon: Database,
    type: "Remote",
    desc: "Database architecture and optimization.",
  },
  {
    title: "Debugging Expert",
    icon: Bug,
    type: "Freelance",
    desc: "Fix issues and optimize performance.",
  },
  {
    title: "Internship Program",
    icon: GraduationCap,
    type: "Internship",
    desc: "Learn and grow with live projects.",
  },
];

export const perks: Perk[] = [
  {
    icon: Rocket,
    title: "Fast Growth",
    text: "Real-world projects with rapid career growth.",
  },
  {
    icon: ShieldCheck,
    title: "Creative Freedom",
    text: "Work where innovation is valued.",
  },
  {
    icon: Globe,
    title: "Global Exposure",
    text: "Build products for modern digital audiences.",
  },
];