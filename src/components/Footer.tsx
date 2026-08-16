import { motion } from "framer-motion";
import {
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
  FaXTwitter,
} from "react-icons/fa6";

import {
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  Sparkles,
  Send,
  Zap,
  Globe,
  CheckCircle2,
} from "lucide-react";

const LOGO_URL = "/img/sylect us logo.png";

const WHATSAPP_NUMBER = "917389812435";

const socialLinks = [
  {
    icon: <FaLinkedinIn />,
    link: "https://www.linkedin.com/company/sylekt-us/",
    label: "LinkedIn",
  },
  {
    icon: <FaGithub />,
    link: "https://github.com/yourusername",
    label: "GitHub",
  },
  {
    icon: <FaInstagram />,
    link: "https://www.instagram.com/sylektus/",
    label: "Instagram",
  },
  {
    icon: <FaXTwitter />,
    link: "https://x.com/yourusername",
    label: "Twitter",
  },
];

const services = [
  "Web Development",
  "App Development",
  "UI/UX Design",
  "Custom Software",
  "Cloud Solutions",
];

const links = [
  "About",
  "Projects",
  "Pricing",
  "Process",
  "Contact",
];

export default function Footer() {
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
     NEWSLETTER
  ===================================================== */

  const handleNewsletter = () => {
    alert("Thank you! We'll keep you updated.");
  };

  return (
    <footer className="relative overflow-hidden bg-white text-slate-900">

      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        <motion.div
          animate={{
            x: [0, 70, -30, 0],
            y: [0, -40, 30, 0],
            scale: [1, 1.1, 0.95, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-48 -top-40 h-[480px] w-[480px] rounded-full bg-blue-100/60 blur-3xl"
        />

        <motion.div
          animate={{
            x: [0, -60, 30, 0],
            y: [0, 40, -30, 0],
            scale: [1, 0.95, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-48 top-1/3 h-[450px] w-[450px] rounded-full bg-sky-100/60 blur-3xl"
        />

        <motion.div
          animate={{
            y: [0, -30, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-0 left-1/3 h-[320px] w-[320px] rounded-full bg-blue-50 blur-3xl"
        />

        {/* Small dots */}

        {[...Array(10)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute h-1.5 w-1.5 rounded-full bg-blue-400/25"
            style={{
              left: `${8 + (i * 19) % 88}%`,
              top: `${12 + (i * 27) % 78}%`,
            }}
            animate={{
              y: [0, -18, 0],
              opacity: [0.15, 0.6, 0.15],
            }}
            transition={{
              duration: 3 + (i % 3),
              repeat: Infinity,
              delay: i * 0.25,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* =====================================================
          TOP LINE
      ===================================================== */}

      <motion.div
        initial={{
          scaleX: 0,
        }}
        whileInView={{
          scaleX: 1,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 1.2,
          ease: "easeOut",
        }}
        className="absolute left-0 right-0 top-0 h-[2px] origin-center bg-gradient-to-r from-transparent via-blue-600 to-transparent"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-20 md:px-10 md:pt-24">

        {/* =====================================================
            CTA
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
          className="relative overflow-hidden rounded-[30px] border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-sky-50 p-8 shadow-[0_20px_60px_rgba(37,99,235,0.10)] md:p-12 lg:p-14"
        >

          {/* CTA Glow */}

          <motion.div
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.12, 0.25, 0.12],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-400 blur-3xl"
          />

          <div className="relative z-10 flex flex-col items-center justify-between gap-10 lg:flex-row">

            {/* CTA CONTENT */}

            <div className="text-center lg:text-left">

              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.9,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: 0.2,
                }}
                className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-semibold text-blue-600 shadow-sm"
              >
                <Sparkles size={15} />

                Ready to Start?
              </motion.div>

              <h2 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl lg:text-6xl">
                Let's Build Your

                <motion.span
                  className="mt-2 block bg-gradient-to-r from-blue-600 via-blue-500 to-sky-500 bg-clip-text text-transparent"
                  animate={{
                    backgroundPosition: [
                      "0% 50%",
                      "100% 50%",
                      "0% 50%",
                    ],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{
                    backgroundSize: "200% auto",
                  }}
                >
                  Next Big Idea
                </motion.span>
              </h2>

              <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-500 md:text-lg">
                We build scalable products and premium digital
                experiences that transform your vision into reality.
              </p>

              {/* FEATURES */}

              <div className="mt-7 flex flex-wrap justify-center gap-5 lg:justify-start">

                {[
                  "Fast Response",
                  "Expert Team",
                  "Custom Solutions",
                ].map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{
                      opacity: 0,
                      x: -15,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      delay: 0.3 + i * 0.1,
                    }}
                    className="flex items-center gap-2 text-sm text-slate-600"
                  >
                    <CheckCircle2
                      size={16}
                      className="text-blue-600"
                    />

                    {item}
                  </motion.div>
                ))}

              </div>
            </div>

            {/* CTA BUTTON */}

            <motion.button
              onClick={openWhatsApp}
              whileHover={{
                scale: 1.05,
                y: -4,
                boxShadow:
                  "0 20px 40px rgba(37,99,235,0.25)",
              }}
              whileTap={{
                scale: 0.96,
              }}
              className="group relative flex flex-shrink-0 items-center gap-3 overflow-hidden rounded-full bg-blue-600 px-8 py-5 text-base font-bold text-white shadow-[0_10px_30px_rgba(37,99,235,0.25)] md:text-lg"
            >

              {/* Shine */}

              <motion.span
                animate={{
                  x: ["-150%", "150%"],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  repeatDelay: 2,
                  ease: "linear",
                }}
                className="absolute inset-y-0 w-20 skew-x-12 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              />

              <span className="relative z-10 flex items-center gap-3">

                <Sparkles size={18} />

                Start Project

                <motion.span
                  animate={{
                    x: [0, 5, 0],
                    y: [0, -3, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <ArrowUpRight size={20} />
                </motion.span>

              </span>
            </motion.button>

          </div>
        </motion.div>

        {/* =====================================================
            FOOTER GRID
        ===================================================== */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
          }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.12,
              },
            },
          }}
          className="grid gap-12 border-b border-slate-200 py-16 md:grid-cols-2 lg:grid-cols-4 lg:gap-16"
        >

          {/* =================================================
              BRAND
          ================================================= */}

          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                y: 25,
              },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.6,
                },
              },
            }}
          >

            {/* LOGO */}

            <motion.div
              whileHover={{
                x: 3,
              }}
              className="mb-6 flex items-center gap-3"
            >

              <motion.img
                src={LOGO_URL}
                alt="Sylekt Us Logo"
                whileHover={{
                  scale: 1.08,
                  rotate: 2,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 15,
                }}
                className="h-12 w-12 object-contain"
              />

              <h3 className="text-3xl font-bold tracking-tight text-slate-900">
                Sylekt
                <span className="text-blue-600">
                  Us
                </span>
              </h3>

            </motion.div>

            <p className="mb-7 max-w-sm leading-relaxed text-slate-500">
              Building futuristic software products and digital
              solutions that empower businesses to thrive in the
              digital age.
            </p>

            {/* SOCIAL */}

            <div className="flex gap-3">

              {socialLinks.map((item) => (
                <motion.a
                  key={item.label}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  whileHover={{
                    y: -5,
                    scale: 1.08,
                  }}
                  whileTap={{
                    scale: 0.92,
                  }}
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-500 shadow-sm transition-all duration-300 hover:border-blue-600 hover:bg-blue-600 hover:text-white hover:shadow-lg hover:shadow-blue-600/20"
                >
                  {item.icon}
                </motion.a>
              ))}

            </div>
          </motion.div>

          {/* =================================================
              SERVICES
          ================================================= */}

          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                y: 25,
              },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.6,
                },
              },
            }}
          >

            <h4 className="mb-7 flex items-center gap-2 text-lg font-bold text-slate-900">

              <Zap
                size={19}
                className="text-blue-600"
              />

              Services
            </h4>

            <ul className="space-y-4">

              {services.map((item) => (
                <motion.li
                  key={item}
                  whileHover={{
                    x: 6,
                  }}
                  className="flex cursor-pointer items-center gap-3 text-slate-500 transition-colors duration-300 hover:text-blue-600"
                >

                  <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />

                  {item}

                </motion.li>
              ))}

            </ul>
          </motion.div>

          {/* =================================================
              QUICK LINKS
          ================================================= */}

          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                y: 25,
              },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.6,
                },
              },
            }}
          >

            <h4 className="mb-7 flex items-center gap-2 text-lg font-bold text-slate-900">

              <Globe
                size={19}
                className="text-blue-600"
              />

              Quick Links
            </h4>

            <ul className="space-y-4">

              {links.map((item) => (
                <motion.li
                  key={item}
                  whileHover={{
                    x: 6,
                  }}
                  className="flex cursor-pointer items-center gap-3 text-slate-500 transition-colors duration-300 hover:text-blue-600"
                >

                  <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />

                  {item}

                </motion.li>
              ))}

            </ul>
          </motion.div>

          {/* =================================================
              CONTACT
          ================================================= */}

          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                y: 25,
              },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.6,
                },
              },
            }}
          >

            <h4 className="mb-7 flex items-center gap-2 text-lg font-bold text-slate-900">

              <Mail
                size={19}
                className="text-blue-600"
              />

              Contact
            </h4>

            <div className="space-y-4">

              {/* EMAIL */}

              <motion.a
                href="mailto:connect.sylektus@gmail.com"
                whileHover={{
                  x: 5,
                }}
                className="group flex items-center gap-3"
              >

                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl border border-blue-100 bg-blue-50 transition-all duration-300 group-hover:bg-blue-600">
                  <Mail
                    size={17}
                    className="text-blue-600 transition-colors group-hover:text-white"
                  />
                </div>

                <span className="text-sm text-slate-500 transition-colors group-hover:text-blue-600">
                  connect.sylektus@gmail.com
                </span>

              </motion.a>

              {/* PHONE */}

              <motion.a
                href="tel:+917389812435"
                whileHover={{
                  x: 5,
                }}
                className="group flex items-center gap-3"
              >

                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl border border-blue-100 bg-blue-50 transition-all duration-300 group-hover:bg-blue-600">
                  <Phone
                    size={17}
                    className="text-blue-600 transition-colors group-hover:text-white"
                  />
                </div>

                <span className="text-sm text-slate-500 transition-colors group-hover:text-blue-600">
                  +91 7389812435
                </span>

              </motion.a>

              {/* LOCATION */}

              <motion.div
                whileHover={{
                  x: 5,
                }}
                className="group flex items-center gap-3"
              >

                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl border border-blue-100 bg-blue-50 transition-all duration-300 group-hover:bg-blue-600">
                  <MapPin
                    size={17}
                    className="text-blue-600 transition-colors group-hover:text-white"
                  />
                </div>

                <span className="text-sm text-slate-500 transition-colors group-hover:text-blue-600">
                  Indore, India
                </span>

              </motion.div>

            </div>

            {/* =================================================
                NEWSLETTER
            ================================================= */}

            <div className="mt-7">

              <p className="mb-3 flex items-center gap-2 text-sm font-semibold text-slate-800">
                <Send
                  size={15}
                  className="text-blue-600"
                />

                Stay Updated
              </p>

              <div className="flex overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all duration-300 focus-within:border-blue-500 focus-within:ring-4 focus-within:ring-blue-500/10">

                <input
                  type="email"
                  placeholder="Your email"
                  className="min-w-0 flex-1 px-4 py-3.5 text-sm text-slate-700 outline-none placeholder:text-slate-400"
                />

                <motion.button
                  onClick={handleNewsletter}
                  whileHover={{
                    scale: 1.03,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  className="bg-blue-600 px-5 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
                >
                  Join
                </motion.button>

              </div>
            </div>
          </motion.div>

        </motion.div>

        {/* =====================================================
            BOTTOM CENTER
        ===================================================== */}

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
            duration: 0.6,
          }}
          className="flex flex-col items-center justify-center gap-4 py-8 text-center"
        >

          {/* COPYRIGHT */}

          <p className="text-sm text-slate-400">
            © 2026{" "}
            <span className="font-semibold text-slate-600">
              Sylekt Us
            </span>
            . All Rights Reserved.
          </p>

          {/* LEGAL LINKS */}

          <div className="flex items-center gap-6">

            {["Privacy", "Terms", "Cookies"].map(
              (item) => (
                <motion.span
                  key={item}
                  whileHover={{
                    y: -2,
                  }}
                  className="cursor-pointer text-sm text-slate-400 transition-colors duration-300 hover:text-blue-600"
                >
                  {item}
                </motion.span>
              )
            )}

          </div>

          {/* SMALL BRAND LINE */}

          <div className="flex items-center gap-2 text-xs text-slate-400">
            <span className="h-px w-8 bg-blue-200" />

            WE CODE YOUR SUCCESS

            <span className="h-px w-8 bg-blue-200" />
          </div>

        </motion.div>

      </div>

      {/* =====================================================
          BOTTOM FADE
      ===================================================== */}

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-blue-50/30 to-transparent" />

    </footer>
  );
}