import { motion } from "framer-motion";
import {
  ArrowRight,
  Code2,
  Palette,
  ShoppingCart,
  Share2,
  Play,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import type { JSX } from "react";

const services = [
  {
    title: "Web Development",
    description:
      "Custom websites & web apps built for speed, SEO & scale",
    icon: Code2,
  },
  {
    title: "Graphic Design",
    description:
      "Stunning logos, branding & visuals that stand out",
    icon: Palette,
  },
  {
    title: "E-commerce",
    description:
      "Online stores that convert with seamless checkout",
    icon: ShoppingCart,
  },
  {
    title: "Social Media",
    description:
      "Grow your brand with engaging content & strategy",
    icon: Share2,
  },
];

const WHATSAPP_NUMBER = "917389812435";

// 👇 Yaha apna exact Instagram username/page daalna
const INSTAGRAM_URL = "https://www.instagram.com/sylektus?igsi=MzFmY21hempyeWZq";

export default function Hero(): JSX.Element {
  /* =====================================================
     WHATSAPP
  ===================================================== */

  const openWhatsApp = () => {
    const message = encodeURIComponent(
      "Hello Sylekt Us 👋\n\nI would like to discuss a project with you."
    );

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  /* =====================================================
     INSTAGRAM
  ===================================================== */

  const openInstagram = () => {
    window.open(
      INSTAGRAM_URL,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-white pt-28 md:pt-32">
      {/* =====================================================
          BACKGROUND SHAPES
      ===================================================== */}

      <motion.div
        animate={{
          x: [0, 35, 0],
          y: [0, -25, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -left-40 top-24 h-80 w-80 rounded-full bg-blue-100/70 blur-3xl"
      />

      <motion.div
        animate={{
          x: [0, -30, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -right-32 top-40 h-96 w-96 rounded-full bg-blue-50 blur-3xl"
      />

      {/* =====================================================
          GRID
      ===================================================== */}

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(#2563eb 1px, transparent 1px), linear-gradient(90deg, #2563eb 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-6 py-14 md:px-10 lg:grid-cols-2 lg:gap-16 lg:py-20">
        {/* =================================================
            LEFT
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          className="max-w-2xl"
        >
          {/* Badge */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              delay: 0.15,
              duration: 0.5,
            }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700"
          >
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-white">
              <Sparkles size={13} />
            </span>

            Future Ready Digital Solutions
          </motion.div>

          {/* Heading */}

          <motion.h1
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.25,
              duration: 0.65,
            }}
            className="text-5xl font-bold leading-[1.08] tracking-tight text-slate-900 sm:text-6xl md:text-7xl"
          >
            Build Your

            <span className="block text-blue-600">
              Business with
            </span>

            <motion.span
              animate={{
                opacity: [0.85, 1, 0.85],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              className="block text-blue-800"
            >
              Sylekt Us
            </motion.span>
          </motion.h1>

          {/* Description */}

          <motion.p
            initial={{
              opacity: 0,
              y: 18,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.4,
              duration: 0.6,
            }}
            className="mt-6 max-w-xl text-base leading-7 text-slate-600 md:text-lg"
          >
            We transform your vision into reality with
            cutting-edge technology, creative design, and
            smart digital strategies that scale your
            business.
          </motion.p>

          {/* =================================================
              BUTTONS
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 18,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.5,
              duration: 0.6,
            }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            {/* ================= START PROJECT ================= */}

            <motion.button
              onClick={openWhatsApp}
              whileHover={{
                y: -3,
                scale: 1.02,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="group inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/30"
            >
              Start Project

              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </motion.button>

            {/* ================= WATCH DEMO ================= */}

            <motion.button
              onClick={openInstagram}
              whileHover={{
                y: -3,
                scale: 1.01,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="group inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-6 py-3.5 font-semibold text-slate-700 shadow-sm transition duration-300 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700 hover:shadow-md"
            >
              <motion.span
                whileHover={{
                  rotate: 8,
                  scale: 1.08,
                }}
                className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-100"
              >
                <Play
                  size={13}
                  className="ml-0.5"
                />
              </motion.span>

              Watch Demo
            </motion.button>
          </motion.div>

          {/* =================================================
              STATS
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 0.7,
              duration: 0.6,
            }}
            className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-500"
          >
            <span className="flex items-center gap-2">
              <CheckCircle2
                size={16}
                className="text-blue-600"
              />

              100+ Happy Clients
            </span>

            <span className="flex items-center gap-2">
              <CheckCircle2
                size={16}
                className="text-blue-600"
              />

              4.9/5 Rating
            </span>
          </motion.div>
        </motion.div>

        {/* =================================================
            RIGHT - SERVICE CARDS
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            x: 35,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
          className="relative"
        >
          <div className="absolute -inset-5 rounded-3xl bg-blue-100/50 blur-2xl" />

          <div className="relative grid grid-cols-2 gap-4">
            {services.map(
              (service, index) => {
                const Icon = service.icon;

                return (
                  <motion.div
                    key={service.title}
                    initial={{
                      opacity: 0,
                      y: 25,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay:
                        0.35 + index * 0.1,
                      duration: 0.5,
                    }}
                    whileHover={{
                      y: -6,
                      scale: 1.015,
                    }}
                    className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-shadow hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100/60"
                  >
                    {/* Icon */}

                    <motion.div
                      animate={{
                        y: [0, -4, 0],
                      }}
                      transition={{
                        duration:
                          3 + index * 0.4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="mb-7 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                    >
                      <Icon size={23} />
                    </motion.div>

                    <h3 className="text-base font-bold text-slate-900">
                      {service.title}
                    </h3>

                    <p className="mt-2 text-xs leading-5 text-slate-500">
                      {service.description}
                    </p>

                    <div className="mt-5 h-1 w-10 overflow-hidden rounded-full bg-blue-100">
                      <motion.div
                        animate={{
                          x: [-40, 40],
                        }}
                        transition={{
                          duration: 2.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="h-full w-8 rounded-full bg-blue-600"
                      />
                    </div>

                    <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-blue-50 transition-transform duration-500 group-hover:scale-150" />
                  </motion.div>
                );
              }
            )}
          </div>

          {/* Floating Accent */}

          <motion.div
            animate={{
              y: [0, -10, 0],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -right-3 -top-5 hidden h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-600/25 md:flex"
          >
            <Code2 size={20} />
          </motion.div>
        </motion.div>
      </div>

      {/* =====================================================
          BOTTOM ACCENT
      ===================================================== */}

      <motion.div
        initial={{
          scaleX: 0,
        }}
        animate={{
          scaleX: 1,
        }}
        transition={{
          duration: 1.2,
          ease: "easeOut",
        }}
        className="absolute bottom-0 left-0 h-1 w-full origin-left bg-gradient-to-r from-blue-600 via-blue-400 to-transparent"
      />
    </section>
  );
}