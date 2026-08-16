import { motion } from "framer-motion";
import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiSpring,
  SiMysql,
  SiMongodb,
  SiDocker,
  SiKubernetes,
  SiFlutter,
  SiPython,
  SiNodedotjs,
  SiTailwindcss,
  SiPostgresql,
  SiGit,
  SiRedis,
} from "react-icons/si";

import type { IconType } from "react-icons";
import type { JSX } from "react";

interface TechItem {
  name: string;
  icon: IconType;
  color: string;
}

const technologies: TechItem[] = [
  {
    name: "React",
    icon: SiReact,
    color: "#2563EB",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    color: "#2563EB",
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
    color: "#2563EB",
  },
  {
    name: "Spring",
    icon: SiSpring,
    color: "#2563EB",
  },
  {
    name: "Node.js",
    icon: SiNodedotjs,
    color: "#2563EB",
  },
  {
    name: "Python",
    icon: SiPython,
    color: "#2563EB",
  },
  {
    name: "MySQL",
    icon: SiMysql,
    color: "#2563EB",
  },
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
    color: "#2563EB",
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    color: "#2563EB",
  },
  {
    name: "Docker",
    icon: SiDocker,
    color: "#2563EB",
  },
  {
    name: "Kubernetes",
    icon: SiKubernetes,
    color: "#2563EB",
  },
  {
    name: "Flutter",
    icon: SiFlutter,
    color: "#2563EB",
  },
  {
    name: "Tailwind",
    icon: SiTailwindcss,
    color: "#2563EB",
  },
  {
    name: "Git",
    icon: SiGit,
    color: "#2563EB",
  },
  {
    name: "Redis",
    icon: SiRedis,
    color: "#2563EB",
  },
];

interface TechRowProps {
  items: TechItem[];
  reverse?: boolean;
}

function TechRow({
  items,
  reverse = false,
}: TechRowProps): JSX.Element {
  const repeatedItems = [...items, ...items];

  return (
    <div className="relative overflow-hidden py-3">
      {/* Side fade */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-white to-transparent md:w-28" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-white to-transparent md:w-28" />

      <motion.div
        className={`tech-marquee ${
          reverse ? "tech-marquee-reverse" : ""
        }`}
      >
        {repeatedItems.map((tech, index) => {
          const Icon = tech.icon;

          return (
            <motion.div
              key={`${tech.name}-${index}`}
              whileHover={{
                y: -5,
                scale: 1.03,
              }}
              transition={{
                duration: 0.25,
              }}
              className="tech-card group"
            >
              {/* Blue animated top line */}
              <motion.div
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.35 }}
                className="absolute left-0 right-0 top-0 h-[2px] bg-[#2563EB]"
              />

              {/* Icon */}
              <div className="tech-icon-box">
                <Icon
                  className="tech-icon"
                  style={{ color: tech.color }}
                />
              </div>

              {/* Name */}
              <span className="tech-name">
                {tech.name}
              </span>

              {/* Small dot */}
              <span className="ml-auto h-1.5 w-1.5 rounded-full bg-[#BFDBFE] transition-all duration-300 group-hover:bg-[#2563EB] group-hover:shadow-[0_0_8px_rgba(37,99,235,0.5)]" />
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}

export default function TechStack(): JSX.Element {
  return (
    <section
      id="tech-stack"
      className="relative overflow-hidden bg-white py-20 md:py-28"
    >
      {/* ============================= */}
      {/* Background */}
      {/* ============================= */}

      <div className="pointer-events-none absolute inset-0">
        {/* Soft blue glow */}
        <motion.div
          animate={{
            x: [0, 40, 0],
            y: [0, -25, 0],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-40 top-10 h-80 w-80 rounded-full bg-[#DBEAFE] blur-3xl"
        />

        <motion.div
          animate={{
            x: [0, -35, 0],
            y: [0, 25, 0],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-40 bottom-10 h-80 w-80 rounded-full bg-[#EFF6FF] blur-3xl"
        />

        {/* Small grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `
              linear-gradient(#2563EB 1px, transparent 1px),
              linear-gradient(90deg, #2563EB 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* ============================= */}
      {/* Animated Blue Lines */}
      {/* ============================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-16 h-px w-1/3 bg-gradient-to-r from-transparent via-[#2563EB] to-transparent opacity-40"
        />

        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: "-100%" }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-24 h-px w-1/4 bg-gradient-to-r from-transparent via-[#60A5FA] to-transparent opacity-30"
        />

        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-20 h-px w-1/4 bg-gradient-to-r from-transparent via-[#2563EB] to-transparent opacity-25"
        />
      </div>

      {/* ============================= */}
      {/* Main Content */}
      {/* ============================= */}

      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-8">
        {/* Heading */}
        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="mx-auto mb-12 max-w-3xl text-center md:mb-16"
        >
          {/* Badge */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.4,
            }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#BFDBFE] bg-[#EFF6FF] px-4 py-2 text-sm font-semibold text-[#1D4ED8]"
          >
            <motion.div
              animate={{
                rotate: [0, 8, -8, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <SiReact size={15} />
            </motion.div>

            Top Technologies We Use
          </motion.div>

          {/* Heading */}
          <h2 className="text-4xl font-bold tracking-tight text-[#0F172A] sm:text-5xl md:text-6xl">
            Powered By{" "}
            <span className="block text-[#1D4ED8]">
              Modern Tech Stack
            </span>
          </h2>

          {/* Animated underline */}
          <motion.div
            initial={{
              width: 0,
            }}
            whileInView={{
              width: 90,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
              delay: 0.2,
            }}
            className="mx-auto mt-5 h-1 rounded-full bg-[#2563EB]"
          />

          {/* Description */}
          <motion.p
            initial={{
              opacity: 0,
              y: 15,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.5,
              delay: 0.25,
            }}
            className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[#64748B] md:text-lg"
          >
            Built using modern technologies powering high-performance
            digital products.
          </motion.p>
        </motion.div>

        {/* ============================= */}
        {/* Technology Rows */}
        {/* ============================= */}

        <div className="space-y-4 md:space-y-5">
          <TechRow items={technologies} />

          <TechRow
            items={technologies}
            reverse
          />
        </div>

        {/* ============================= */}
        {/* Bottom Text */}
        {/* ============================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 15,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.5,
            delay: 0.3,
          }}
          className="mt-10 text-center"
        >
          <span className="text-sm font-medium text-[#94A3B8]">
            Modern tools. Clean architecture. Reliable solutions.
          </span>
        </motion.div>
      </div>

      {/* Bottom blue line */}
      <motion.div
        initial={{
          x: "-100%",
        }}
        animate={{
          x: "100%",
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
        className="pointer-events-none absolute bottom-0 h-[2px] w-1/3 bg-gradient-to-r from-transparent via-[#2563EB] to-transparent opacity-50"
      />

      {/* ============================= */}
      {/* Component Styles */}
      {/* ============================= */}

      <style>{`
        .tech-marquee {
          display: flex;
          width: max-content;
          gap: 14px;
          animation: techScrollLeft 38s linear infinite;
          will-change: transform;
        }

        .tech-marquee-reverse {
          animation: techScrollRight 42s linear infinite;
        }

        .tech-marquee:hover,
        .tech-marquee-reverse:hover {
          animation-play-state: paused;
        }

        @keyframes techScrollLeft {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }

        @keyframes techScrollRight {
          from {
            transform: translateX(-50%);
          }

          to {
            transform: translateX(0);
          }
        }

        .tech-card {
          position: relative;
          display: flex;
          align-items: center;
          gap: 12px;
          min-width: 185px;
          padding: 14px 17px;
          border: 1px solid #E2E8F0;
          border-radius: 14px;
          background: #FFFFFF;
          box-shadow: 0 4px 16px rgba(15, 23, 42, 0.04);
          overflow: hidden;
          cursor: default;
          transition:
            border-color 0.3s ease,
            box-shadow 0.3s ease,
            transform 0.3s ease;
        }

        .tech-card:hover {
          border-color: #93C5FD;
          box-shadow: 0 10px 28px rgba(37, 99, 235, 0.12);
        }

        .tech-icon-box {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          flex-shrink: 0;
          border-radius: 10px;
          background: #EFF6FF;
          transition:
            background 0.3s ease,
            transform 0.3s ease;
        }

        .tech-card:hover .tech-icon-box {
          background: #DBEAFE;
          transform: scale(1.06);
        }

        .tech-icon {
          font-size: 22px;
          transition:
            transform 0.3s ease,
            filter 0.3s ease;
        }

        .tech-card:hover .tech-icon {
          transform: scale(1.12);
          filter: drop-shadow(0 0 5px rgba(37, 99, 235, 0.3));
        }

        .tech-name {
          color: #334155;
          font-size: 14px;
          font-weight: 700;
          white-space: nowrap;
          transition: color 0.3s ease;
        }

        .tech-card:hover .tech-name {
          color: #1D4ED8;
        }

        @media (max-width: 768px) {
          .tech-marquee {
            gap: 10px;
            animation-duration: 28s;
          }

          .tech-marquee-reverse {
            animation-duration: 30s;
          }

          .tech-card {
            min-width: 155px;
            padding: 11px 13px;
            border-radius: 12px;
            gap: 9px;
          }

          .tech-icon-box {
            width: 34px;
            height: 34px;
            border-radius: 8px;
          }

          .tech-icon {
            font-size: 19px;
          }

          .tech-name {
            font-size: 12px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .tech-marquee,
          .tech-marquee-reverse {
            animation-play-state: paused;
          }
        }
      `}</style>
    </section>
  );
}