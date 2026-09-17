import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowUpRight,
  CalendarDays,
  CheckCircle2,
  Code2,
  ExternalLink,
  Globe,
  Layers3,
  Rocket,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import { useRef } from "react";

import { projects, type Project } from "../data/projects";

function RoadMapLine() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 20%"],
  });

  const height = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "100%"]
  );

  return (
    <div
      ref={ref}
      className="pointer-events-none absolute left-1/2 top-0 hidden h-full -translate-x-1/2 lg:block"
    >
      {/* Background line */}

      <div className="absolute left-1/2 h-full w-[2px] -translate-x-1/2 bg-blue-100" />

      {/* Animated line */}

      <motion.div
        style={{ height }}
        className="absolute left-1/2 top-0 w-[3px] -translate-x-1/2 origin-top rounded-full bg-gradient-to-b from-blue-400 via-blue-600 to-blue-300"
      />

      {/* Moving glow */}

      <motion.div
        animate={{
          y: ["0%", "100%"],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute left-1/2 top-0 h-24 w-5 -translate-x-1/2 rounded-full bg-blue-400/20 blur-xl"
      />
    </div>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const isEven = index % 2 === 0;

  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 80,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        margin: "-100px",
      }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
      className="relative grid gap-10 lg:grid-cols-2 lg:gap-24"
    >
      {/* ================= ROADMAP NODE ================= */}

      <div className="absolute left-1/2 top-12 z-30 hidden -translate-x-1/2 lg:block">
        <motion.div
          initial={{
            scale: 0,
            opacity: 0,
          }}
          whileInView={{
            scale: 1,
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.25,
            duration: 0.5,
            type: "spring",
          }}
          className="relative flex h-14 w-14 items-center justify-center rounded-full border-4 border-white bg-blue-600 text-white shadow-[0_8px_30px_rgba(37,99,235,0.35)]"
        >
          <span className="text-sm font-bold">
            {String(index + 1).padStart(2, "0")}
          </span>

          <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-blue-400/20" />
        </motion.div>
      </div>

      {/* ================= LEFT / IMAGE ================= */}

      <motion.div
        initial={{
          opacity: 0,
          x: isEven ? -60 : 60,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.8,
        }}
        className={isEven ? "lg:pr-10" : "lg:order-2 lg:pl-10"}
      >
        <div className="group relative overflow-hidden rounded-[30px] border border-blue-100 bg-white p-2 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">

          {/* Image */}

          <div className="relative aspect-[16/10] overflow-hidden rounded-[24px] bg-slate-100">

            <motion.img
              src={project.image}
              alt={project.title}
              whileHover={{
                scale: 1.05,
              }}
              transition={{
                duration: 0.6,
              }}
              className="h-full w-full object-cover"
            />

            {/* Image Overlay */}

            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-70" />

            {/* Category */}

            <div className="absolute left-5 top-5">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/90 px-4 py-2 text-xs font-bold text-blue-700 shadow-lg backdrop-blur">
                <Layers3 size={14} />
                {project.category}
              </span>
            </div>

            {/* Project Number */}

            <div className="absolute bottom-5 right-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/20 bg-blue-600/90 text-sm font-bold text-white backdrop-blur">
              0{index + 1}
            </div>
          </div>

          {/* Image Bottom Info */}

          <div className="flex items-center justify-between px-4 py-4">

            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-blue-500">
                Client
              </p>

              <p className="mt-1 font-bold text-slate-900">
                {project.client}
              </p>
            </div>

            <div className="text-right">
              <p className="text-xs font-semibold uppercase tracking-wider text-blue-500">
                Year
              </p>

              <p className="mt-1 font-bold text-slate-900">
                {project.year}
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* ================= RIGHT / CONTENT ================= */}

      <motion.div
        initial={{
          opacity: 0,
          x: isEven ? 60 : -60,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.8,
          delay: 0.1,
        }}
        className={isEven ? "lg:pl-10" : "lg:order-1 lg:pr-10"}
      >

        {/* Project Meta */}

        <div className="mb-5 flex flex-wrap items-center gap-3">

          <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-xs font-bold text-blue-700">
            <CalendarDays size={14} />
            {project.year}
          </span>

          <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-xs font-bold text-emerald-600">
            <CheckCircle2 size={14} />
            {project.status}
          </span>

        </div>

        {/* Title */}

        <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
          {project.title}
        </h2>

        {/* Client */}

        <div className="mt-5 flex items-center gap-3">

          {project.logo ? (
            <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl border border-slate-200 bg-white">
              <img
                src={project.logo}
                alt={project.client}
                className="h-full w-full object-contain p-1.5"
              />
            </div>
          ) : (
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              <Users size={18} />
            </div>
          )}

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Client / Company
            </p>

            <p className="font-bold text-slate-800">
              {project.client}
            </p>
          </div>

        </div>

        {/* Short Description */}

        <p className="mt-6 text-lg leading-8 text-slate-600">
          {project.shortDescription}
        </p>

        {/* Overview */}

        <div className="mt-8">
          <div className="mb-3 flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
              <Globe size={16} />
            </div>

            <h3 className="font-bold text-slate-900">
              Project Overview
            </h3>
          </div>

          <p className="leading-7 text-slate-500">
            {project.overview}
          </p>
        </div>

        {/* Challenge / Solution */}

        <div className="mt-8 grid gap-4 sm:grid-cols-2">

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <div className="mb-3 flex items-center gap-2 text-sm font-bold text-slate-900">
              <Target size={17} className="text-blue-600" />
              Challenge
            </div>

            <p className="text-sm leading-6 text-slate-500">
              {project.challenge}
            </p>
          </div>

          <div className="rounded-2xl border border-blue-100 bg-blue-50/60 p-5">
            <div className="mb-3 flex items-center gap-2 text-sm font-bold text-slate-900">
              <Zap size={17} className="text-blue-600" />
              Our Solution
            </div>

            <p className="text-sm leading-6 text-slate-500">
              {project.solution}
            </p>
          </div>

        </div>

        {/* Technologies */}

        <div className="mt-8">

          <div className="mb-4 flex items-center gap-2">
            <Code2
              size={18}
              className="text-blue-600"
            />

            <h3 className="font-bold text-slate-900">
              Technologies Used
            </h3>
          </div>

          <div className="flex flex-wrap gap-2">

            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-lg border border-blue-100 bg-white px-3 py-2 text-xs font-semibold text-blue-700 shadow-sm"
              >
                {technology}
              </span>
            ))}

          </div>
        </div>

        {/* Features */}

        <div className="mt-8">

          <h3 className="mb-4 font-bold text-slate-900">
            Key Features
          </h3>

          <div className="grid gap-3 sm:grid-cols-2">

            {project.features.map((feature) => (
              <div
                key={feature}
                className="flex items-center gap-2 text-sm text-slate-600"
              >
                <CheckCircle2
                  size={16}
                  className="shrink-0 text-blue-600"
                />

                {feature}
              </div>
            ))}

          </div>
        </div>

        {/* Results */}

        <div className="mt-8 grid grid-cols-3 gap-3">

          {project.results.map((result) => (
            <motion.div
              key={result.label}
              whileHover={{
                y: -4,
              }}
              className="rounded-2xl border border-blue-100 bg-blue-50/50 p-4 text-center"
            >
              <div className="text-2xl font-extrabold text-blue-600">
                {result.value}
              </div>

              <div className="mt-1 text-[11px] font-semibold uppercase tracking-wide text-slate-500">
                {result.label}
              </div>
            </motion.div>
          ))}

        </div>

        {/* Website */}

        {project.website && (
          <motion.a
            href={project.website}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              y: -2,
            }}
            whileTap={{
              scale: 0.98,
            }}
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 font-bold text-white shadow-[0_10px_30px_rgba(37,99,235,0.2)] transition-colors hover:bg-blue-700"
          >
            View Live Project

            <ExternalLink size={17} />
          </motion.a>
        )}

      </motion.div>
    </motion.article>
  );
}

export default function Portfolio() {
  return (
    <main className="min-h-screen overflow-hidden bg-white text-slate-900">

      {/* ================= HERO ================= */}

      <section className="relative overflow-hidden pb-28 pt-32">

        {/* Background */}

        <div className="pointer-events-none absolute inset-0">

          <motion.div
            animate={{
              x: [0, 70, 0],
              y: [0, -40, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-blue-100/70 blur-[120px]"
          />

          <motion.div
            animate={{
              x: [0, -60, 0],
              y: [0, 50, 0],
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -right-40 top-40 h-[500px] w-[500px] rounded-full bg-blue-50 blur-[120px]"
          />

          <div
            className="absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage: `
                linear-gradient(#2563EB 1px, transparent 1px),
                linear-gradient(90deg, #2563EB 1px, transparent 1px)
              `,
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10">

          {/* Agency Logo */}

          <motion.div
            initial={{
              opacity: 0,
              y: -20,
              scale: 0.9,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            transition={{
              duration: 0.7,
            }}
            className="mb-10 flex justify-center"
          >
            <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-blue-100 bg-white p-3 shadow-[0_15px_40px_rgba(37,99,235,0.12)]">
              <img
                src="../../public/img/sy-logo-bg.png"
                alt="Sylekt Us"
                className="h-full w-full object-contain"
              />
            </div>
          </motion.div>

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
              delay: 0.1,
            }}
            className="mx-auto flex w-fit items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-5 py-2.5 text-sm font-bold text-blue-700"
          >
            <Sparkles size={16} />

            Sylekt Us Portfolio
          </motion.div>

          {/* Heading */}

          <motion.h1
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.2,
              duration: 0.7,
            }}
            className="mx-auto mt-7 max-w-5xl text-center text-5xl font-extrabold leading-[1.05] tracking-tight text-slate-900 md:text-7xl"
          >
            Turning Ideas Into

            <span className="mt-3 block bg-gradient-to-r from-blue-700 via-blue-500 to-sky-400 bg-clip-text text-transparent">
              Digital Experiences
            </span>
          </motion.h1>

          {/* Description */}

          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.35,
              duration: 0.6,
            }}
            className="mx-auto mt-7 max-w-2xl text-center text-lg leading-8 text-slate-500 md:text-xl"
          >
            Explore how Sylekt Us transforms ideas into powerful websites,
            applications, digital products and brand experiences.
          </motion.p>

          {/* Stats */}

          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.5,
            }}
            className="mx-auto mt-12 grid max-w-3xl grid-cols-3 gap-3 md:gap-6"
          >

            {[
              {
                value: `${projects.length}+`,
                label: "Projects",
              },
              {
                value: "100%",
                label: "Commitment",
              },
              {
                value: "24/7",
                label: "Support",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-blue-100 bg-white p-4 text-center shadow-sm md:p-6"
              >
                <div className="text-2xl font-extrabold text-blue-600 md:text-3xl">
                  {item.value}
                </div>

                <div className="mt-1 text-xs font-semibold uppercase tracking-wider text-slate-400 md:text-sm">
                  {item.label}
                </div>
              </div>
            ))}

          </motion.div>

        </div>
      </section>

      {/* ================= ROADMAP ================= */}

      <section className="relative pb-32">

        <div className="mx-auto max-w-7xl px-6 md:px-10">

          {/* Section Header */}

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
            className="mx-auto mb-24 max-w-3xl text-center"
          >

            <div className="mx-auto mb-4 flex w-fit items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-bold text-blue-700">
              <TrendingUp size={16} />
              Our Journey
            </div>

            <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
              Projects That Tell
              <span className="block text-blue-600">
                Our Story
              </span>
            </h2>

            <p className="mt-5 text-slate-500">
              Scroll through our project journey and explore the ideas,
              challenges, solutions and results behind every project.
            </p>
          </motion.div>

          {/* Roadmap */}

          <div className="relative">

            <RoadMapLine />

            <div className="space-y-28 lg:space-y-40">

              {projects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                />
              ))}

            </div>

          </div>

        </div>
      </section>

      {/* ================= BOTTOM CTA ================= */}

      <section className="relative overflow-hidden border-t border-blue-100 bg-blue-50/50 py-24">

        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
          }}
          className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-300 blur-[120px]"
        />

        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">

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
          >

            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-600/20">
              <RocketIcon />
            </div>

            <h2 className="mt-7 text-4xl font-extrabold text-slate-900 md:text-5xl">
              Have an idea?
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-lg leading-8 text-slate-500">
              Let's turn your next idea into a digital experience
              that people remember.
            </p>

            <motion.a
              href="https://wa.me/917389812435?text=Hello%20Sylekt%20Us%2C%20I%20want%20to%20discuss%20a%20project."
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                y: -4,
                scale: 1.03,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="mt-8 inline-flex items-center gap-3 rounded-xl bg-blue-600 px-7 py-4 font-bold text-white shadow-[0_15px_35px_rgba(37,99,235,0.25)] transition-colors hover:bg-blue-700"
            >
              Start Your Project

              <ArrowUpRight size={19} />
            </motion.a>

          </motion.div>

        </div>
      </section>

    </main>
  );
}

/* ================= ROCKET ICON ================= */

function RocketIcon() {
  return (
    <Rocket
      size={25}
      strokeWidth={2}
    />
  );
}