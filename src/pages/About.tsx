import { motion } from "framer-motion";
import {
  Code2,
  Rocket,
  Users,
  Award,
  Sparkles,
  Target,
  Lightbulb,
  CheckCircle2,
  ArrowRight,
  Flag,
} from "lucide-react";

const storyPoints = [
  {
    icon: Lightbulb,
    title: "The Beginning",
    text: "Sylekt Us started with a simple idea — technology should be useful, accessible and focused on solving real business problems.",
  },
  {
    icon: Code2,
    title: "Building With Technology",
    text: "We began turning ideas into websites, applications and custom digital solutions using modern technologies and clean development practices.",
  },
  {
    icon: Users,
    title: "Growing With Clients",
    text: "As more businesses trusted us, our focus expanded from individual projects to long-term digital partnerships.",
  },
  {
    icon: Rocket,
    title: "Moving Forward",
    text: "Today, we continue building scalable products and digital experiences while constantly improving our process, technology and creativity.",
  },
];

const roadmap = [
  {
    number: "01",
    icon: Lightbulb,
    title: "Understanding",
    subtitle: "We understand your idea",
    description:
      "We first understand your business, goals, target audience, requirements and the problem you want to solve.",
  },
  {
    number: "02",
    icon: Target,
    title: "Planning",
    subtitle: "We create the right strategy",
    description:
      "We define the project scope, features, technology stack, timeline and overall development strategy.",
  },
  {
    number: "03",
    icon: Code2,
    title: "Design & Development",
    subtitle: "We turn ideas into reality",
    description:
      "Our team designs the user experience and develops the product with a focus on performance, scalability and usability.",
  },
  {
    number: "04",
    icon: CheckCircle2,
    title: "Testing",
    subtitle: "We make everything reliable",
    description:
      "We test the product across devices and scenarios to identify issues and ensure a smooth user experience.",
  },
  {
    number: "05",
    icon: Rocket,
    title: "Launch",
    subtitle: "We take it live",
    description:
      "After final approval, we deploy your product and make sure everything is configured and ready for users.",
  },
  {
    number: "06",
    icon: Award,
    title: "Support & Growth",
    subtitle: "We keep improving",
    description:
      "Our relationship doesn't end after launch. We provide support, improvements and optimization as your business grows.",
  },
];

const stats = [
  ["10+", "Projects"],
  ["50+", "Clients"],
  ["24/7", "Support"],
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-hidden">

      {/* ================= BACKGROUND ================= */}

      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            x: [0, 80, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-blue-100 blur-[120px]"
        />

        <motion.div
          animate={{
            x: [0, -70, 0],
            y: [0, 60, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -bottom-40 -right-40 w-[550px] h-[550px] rounded-full bg-blue-50 blur-[130px]"
        />
      </div>

      {/* ================= HERO ================= */}

      <section className="relative pt-32 pb-24 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-4xl mx-auto"
          >

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 font-semibold text-sm mb-7"
            >
              <Sparkles size={16} />
              About Sylekt Us
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05]">
              We Build Technology
              <span className="block text-blue-700 mt-2">
                With Purpose.
              </span>
            </h1>

            <p className="mt-7 text-lg md:text-xl text-slate-500 leading-relaxed max-w-3xl mx-auto">
              Sylekt Us is a technology and digital solutions company focused
              on transforming ideas into useful, scalable and meaningful
              digital products.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap justify-center gap-4 mt-9"
            >
              <div className="px-5 py-3 rounded-full bg-blue-600 text-white font-semibold shadow-lg shadow-blue-200">
                Innovation
              </div>

              <div className="px-5 py-3 rounded-full bg-white border border-blue-100 text-blue-700 font-semibold">
                Technology
              </div>

              <div className="px-5 py-3 rounded-full bg-white border border-blue-100 text-blue-700 font-semibold">
                Growth
              </div>
            </motion.div>

          </motion.div>

          {/* Stats */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid sm:grid-cols-3 gap-5 max-w-3xl mx-auto mt-20"
          >
            {stats.map(([number, label]) => (
              <motion.div
                key={label}
                whileHover={{
                  y: -6,
                  boxShadow: "0 18px 40px rgba(29,78,216,0.12)",
                }}
                transition={{ duration: 0.25 }}
                className="bg-white border border-blue-100 rounded-2xl p-6 text-center"
              >
                <div className="text-3xl font-bold text-blue-700">
                  {number}
                </div>

                <div className="text-slate-500 mt-1">
                  {label}
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* ================= COMPANY STORY ================= */}

      <section className="relative py-24 px-6 md:px-10 bg-slate-50">

        <div className="max-w-7xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >

            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 font-semibold text-sm mb-6">
              <Flag size={16} />
              Our Story
            </div>

            <h2 className="text-4xl md:text-6xl font-bold">
              The Story Behind
              <span className="text-blue-700"> Sylekt Us</span>
            </h2>

            <p className="mt-6 text-slate-500 text-lg leading-relaxed">
              Every company has a journey. Ours is built around curiosity,
              technology, creativity and the desire to create solutions that
              actually make a difference.
            </p>

          </motion.div>

          <div className="grid md:grid-cols-2 gap-7">

            {storyPoints.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
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
                    amount: 0.2,
                  }}
                  transition={{
                    delay: index * 0.1,
                    duration: 0.6,
                  }}
                  whileHover={{
                    y: -7,
                  }}
                  className="group bg-white border border-blue-100 rounded-3xl p-8 shadow-sm hover:shadow-xl hover:shadow-blue-100/60 transition-shadow"
                >

                  <div className="flex items-start gap-5">

                    <motion.div
                      whileHover={{
                        rotate: 8,
                        scale: 1.08,
                      }}
                      className="flex-shrink-0 w-14 h-14 rounded-2xl bg-blue-50 text-blue-700 flex items-center justify-center"
                    >
                      <Icon size={27} />
                    </motion.div>

                    <div>

                      <h3 className="text-2xl font-bold">
                        {item.title}
                      </h3>

                      <p className="mt-3 text-slate-500 leading-relaxed">
                        {item.text}
                      </p>

                    </div>

                  </div>

                </motion.div>
              );
            })}

          </div>

        </div>
      </section>

      {/* ================= ROADMAP ================= */}

      <section className="relative py-28 px-6 md:px-10">

        <div className="max-w-6xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-20"
          >

            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 font-semibold text-sm mb-6">
              <Rocket size={16} />
              Our Process
            </div>

            <h2 className="text-4xl md:text-6xl font-bold">
              How We Turn
              <span className="block text-blue-700">
                Ideas Into Products
              </span>
            </h2>

            <p className="mt-6 text-lg text-slate-500">
              A simple and transparent process designed to take your idea from
              concept to a complete digital product.
            </p>

          </motion.div>

          {/* Timeline */}

          <div className="relative">

            {/* Desktop vertical line */}

            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-blue-100 -translate-x-1/2 origin-top"
            />

            <div className="space-y-14 md:space-y-20">

              {roadmap.map((step, index) => {
                const Icon = step.icon;
                const reverse = index % 2 !== 0;

                return (
                  <motion.div
                    key={step.number}
                    initial={{
                      opacity: 0,
                      x: reverse ? 80 : -80,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{
                      once: true,
                      amount: 0.25,
                    }}
                    transition={{
                      duration: 0.7,
                      ease: "easeOut",
                    }}
                    className={`relative md:flex items-center ${
                      reverse ? "md:flex-row-reverse" : ""
                    }`}
                  >

                    {/* Content */}

                    <div className="md:w-[46%]">

                      <motion.div
                        whileHover={{
                          y: -6,
                        }}
                        className="bg-white border border-blue-100 rounded-3xl p-7 shadow-sm hover:shadow-xl hover:shadow-blue-100/60 transition-shadow"
                      >

                        <div className="flex items-center justify-between mb-5">

                          <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center">
                            <Icon size={24} />
                          </div>

                          <span className="text-4xl font-bold text-blue-100">
                            {step.number}
                          </span>

                        </div>

                        <h3 className="text-2xl font-bold">
                          {step.title}
                        </h3>

                        <p className="text-blue-700 font-semibold mt-1">
                          {step.subtitle}
                        </p>

                        <p className="text-slate-500 mt-4 leading-relaxed">
                          {step.description}
                        </p>

                        <div className="flex items-center gap-2 mt-5 text-blue-700 font-semibold text-sm">
                          Learn more
                          <ArrowRight size={16} />
                        </div>

                      </motion.div>

                    </div>

                    {/* Timeline Dot */}

                    <motion.div
                      initial={{
                        scale: 0,
                      }}
                      whileInView={{
                        scale: 1,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        delay: 0.2,
                        type: "spring",
                      }}
                      className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-white border-4 border-blue-100 items-center justify-center shadow-lg"
                    >
                      <div className="w-3 h-3 rounded-full bg-blue-600" />
                    </motion.div>

                  </motion.div>
                );
              })}

            </div>

          </div>

        </div>
      </section>

      {/* ================= FINAL CTA ================= */}

      <section className="relative px-6 md:px-10 pb-28">

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-6xl mx-auto rounded-[32px] bg-blue-700 text-white p-10 md:p-16 text-center relative overflow-hidden"
        >

          <motion.div
            animate={{
              x: ["-100%", "100%"],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute top-0 left-0 w-1/3 h-[2px] bg-gradient-to-r from-transparent via-white to-transparent"
          />

          <div className="relative z-10">

            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 border border-white/20 mb-6">
              <Sparkles size={16} />
              Let's Build Together
            </div>

            <h2 className="text-4xl md:text-5xl font-bold">
              Have an Idea?
            </h2>

            <p className="mt-5 text-blue-100 max-w-2xl mx-auto text-lg">
              Let's transform your idea into a powerful digital experience.
            </p>

            <motion.a
              href="https://wa.me/917389812435"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 15px 40px rgba(0,0,0,0.2)",
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="inline-flex items-center gap-3 mt-8 px-8 py-4 rounded-full bg-white text-blue-700 font-bold"
            >
              Start a Conversation
              <ArrowRight size={19} />
            </motion.a>

          </div>

        </motion.div>

      </section>

    </div>
  );
}