import { motion } from "framer-motion";
import {
  Sparkles,
  ArrowUpRight,
  
} from "lucide-react";

import { services } from "../data/services";

export default function ServicesPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-white text-slate-900">

      {/* ================= BACKGROUND ================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* Left Blue Glow */}
        <motion.div
          animate={{
            x: [0, 80, 0],
            y: [0, -60, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-blue-100 blur-[120px]"
        />

        {/* Right Blue Glow */}
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 70, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-40 top-[40%] h-[550px] w-[550px] rounded-full bg-blue-50 blur-[130px]"
        />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `
              linear-gradient(#1D4ED8 1px, transparent 1px),
              linear-gradient(90deg, #1D4ED8 1px, transparent 1px)
            `,
            backgroundSize: "70px 70px",
          }}
        />

        {/* Floating Circle */}
        <motion.div
          animate={{
            y: [0, -40, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute right-[8%] top-[20%] h-20 w-20 rounded-full border border-blue-200"
        />

        {/* Small Floating Circle */}
        <motion.div
          animate={{
            y: [0, 50, 0],
            x: [0, 30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-[15%] left-[5%] h-14 w-14 rounded-full border-2 border-blue-100"
        />
      </div>

      {/* ================= MAIN ================= */}

      <section className="relative mx-auto max-w-7xl px-6 pb-28 pt-32 md:px-10">

        {/* ================= HEADER ================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 35,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          className="mx-auto mb-20 max-w-4xl text-center"
        >

          {/* Badge */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              delay: 0.2,
            }}
            className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-5 py-2.5 text-sm font-semibold text-[#1D4ED8] shadow-sm"
          >
            <motion.div
              animate={{
                rotate: [0, 15, -15, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            >
              <Sparkles size={16} />
            </motion.div>

            Our Services
          </motion.div>

          {/* Heading */}

          <h1 className="mt-7 text-5xl font-extrabold leading-[1.05] tracking-tight text-slate-900 md:text-7xl">
            Solutions We Offer

            <motion.span
              className="mt-3 block bg-gradient-to-r from-[#1D4ED8] via-[#2563EB] to-[#60A5FA] bg-clip-text text-transparent"
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
              For Modern Businesses
            </motion.span>
          </h1>

          {/* Description */}

          <motion.p
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.4,
            }}
            className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-slate-500 md:text-xl"
          >
            Explore our 50+ digital services and discover smart solutions
            designed to help your business grow, connect and succeed.
          </motion.p>
        </motion.div>

        {/* ================= SERVICES GRID ================= */}

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
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
                  duration: 0.55,
                  delay: (index % 4) * 0.06,
                }}
                whileHover={{
                  y: -8,
                }}
                className="group relative"
              >

                {/* Animated Border */}

                <div
                  className="absolute -inset-[1px] rounded-[28px] bg-gradient-to-br from-blue-200 via-blue-100 to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-100"
                />

                {/* Card */}

                <div
                  className="relative h-full rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_8px_30px_rgba(15,23,42,0.06)] transition-all duration-300 group-hover:shadow-[0_18px_45px_rgba(29,78,216,0.12)]"
                >

                  {/* Top Accent */}

                  <motion.div
                    initial={{
                      width: 0,
                    }}
                    whileInView={{
                      width: "42px",
                    }}
                    transition={{
                      delay: 0.3 + (index % 4) * 0.04,
                      duration: 0.5,
                    }}
                    className="mb-5 h-1 rounded-full bg-[#1D4ED8]"
                  />

                  {/* Icon */}

                  <motion.div
                    whileHover={{
                      scale: 1.08,
                      rotate: 4,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                    }}
                    className="flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-100 bg-blue-50 text-[#1D4ED8] shadow-sm transition-colors duration-300 group-hover:bg-[#1D4ED8] group-hover:text-white"
                  >
                    <Icon
                      size={26}
                      strokeWidth={2}
                    />
                  </motion.div>

                  {/* Title */}

                  <h3 className="mt-6 text-xl font-bold leading-tight text-slate-900">
                    {service.title}
                  </h3>

                  {/* Description */}

                  <p className="mt-3 min-h-[72px] text-sm leading-relaxed text-slate-500">
                    {service.short}
                  </p>

                  {/* Bottom Accent */}

                  <div className="mt-6 flex items-center gap-2">
                    <motion.div
                      initial={{
                        width: 25,
                      }}
                      whileHover={{
                        width: 45,
                      }}
                      className="h-[3px] rounded-full bg-[#1D4ED8]"
                    />

                    <span className="text-[10px] font-semibold uppercase tracking-wider text-blue-600">
                      Sylekt Us
                    </span>
                  </div>

                  {/* Decorative Circle */}

                  <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-blue-50 opacity-0 transition-all duration-500 group-hover:scale-125 group-hover:opacity-100" />

                </div>
              </motion.div>
            );
          })}

        </div>

        {/* ================= BOTTOM CTA ================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
          className="relative mt-20 flex flex-col items-center justify-between gap-7 overflow-hidden rounded-[30px] bg-gradient-to-r from-[#1D4ED8] to-[#2563EB] p-8 text-white shadow-[0_20px_50px_rgba(29,78,216,0.18)] md:flex-row md:p-12"
        >

          {/* CTA Glow */}

          <motion.div
            animate={{
              x: [-100, 400, -100],
              opacity: [0, 0.2, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute bottom-0 top-0 w-40 bg-white/20 blur-3xl"
          />

          {/* CTA Text */}

          <div className="relative z-10">
            <h2 className="text-3xl font-bold md:text-4xl">
              Have a project in mind?
            </h2>

            <p className="mt-2 text-blue-100">
              Let's build something amazing together.
            </p>
          </div>

          {/* WhatsApp Button */}

          <motion.a
            href="https://wa.me/917389812435"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              scale: 1.05,
              y: -2,
            }}
            whileTap={{
              scale: 0.96,
            }}
            className="relative z-10 flex items-center gap-2 rounded-xl bg-white px-7 py-3.5 font-bold text-[#1D4ED8] shadow-lg"
          >
            Let's Talk

            <motion.span
              animate={{
                x: [0, 4, 0],
                y: [0, -2, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <ArrowUpRight size={19} />
            </motion.span>
          </motion.a>

        </motion.div>

      </section>

      {/* Bottom Line */}

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
        className="pointer-events-none absolute bottom-0 h-[2px] w-1/3 bg-gradient-to-r from-transparent via-[#2563EB] to-transparent opacity-40"
      />

    </div>
  );
}