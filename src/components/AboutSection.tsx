import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Quote,
  Star,
  ArrowRight,
} from "lucide-react";

const aboutData = [
  {
  id: 1,
  name: "Krish Sisodiya",
  role: "CEO",
  image: "/img/krish.png",
  desc: "Leading with innovation and vision, Krish Sisodiya is dedicated to building smart digital solutions that empower businesses, strengthen brands, and turn ideas into meaningful digital experiences.",
  rating: 5,
},
  /*
    id: 2,
    name: "Kartik Prajapat",
    role: "Developer",
    image: "/img/kartik.jpeg",
    desc: "The automation software improved productivity dramatically and streamlined operations. A game-changer for our business workflow.",
    rating: 5,
  },
  {
    id: 3,
    name: "Pawan Rajpoot",
    role: "Designer",
    image: "/img/pawan.png",
    desc: "They built our product exactly as we imagined, with exceptional attention to detail. Professional, responsive, and highly skilled team.",
    rating: 5,
 */ 
];

export default function AboutSection() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % aboutData.length);
  };

  const prevSlide = () => {
    setIndex(
      (prev) => (prev - 1 + aboutData.length) % aboutData.length
    );
  };

  const item = aboutData[index];

  const nextIndex = (index + 1) % aboutData.length;
  const prevIndex =
    (index - 1 + aboutData.length) % aboutData.length;

  return (
    <section className="relative overflow-hidden bg-white py-20 md:py-28 text-slate-900">
      {/* ================= TOP LINE ================= */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="absolute top-0 left-0 h-1 w-full origin-center bg-gradient-to-r from-transparent via-blue-600 to-transparent"
      />

      {/* ================= BACKGROUND DECORATION ================= */}

      <motion.div
        animate={{
          x: [0, 40, 0],
          y: [0, -30, 0],
          opacity: [0.12, 0.2, 0.12],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-blue-200 blur-3xl"
      />

      <motion.div
        animate={{
          x: [0, -40, 0],
          y: [0, 30, 0],
          opacity: [0.1, 0.18, 0.1],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -right-32 bottom-20 h-80 w-80 rounded-full bg-blue-100 blur-3xl"
      />

      {/* Small floating dots */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute h-1.5 w-1.5 rounded-full bg-blue-500/30"
            style={{
              top: `${10 + ((i * 17) % 80)}%`,
              left: `${5 + ((i * 29) % 90)}%`,
            }}
            animate={{
              y: [0, -15, 0],
              opacity: [0.2, 0.7, 0.2],
            }}
            transition={{
              duration: 3 + (i % 4),
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* ================= MAIN CONTAINER ================= */}

      <div className="relative z-10 mx-auto max-w-6xl px-5 md:px-8">
        {/* ================= HEADING ================= */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-14 max-w-3xl text-center md:mb-20"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-5 py-2.5 text-sm font-semibold text-blue-600 shadow-sm"
          >
            <motion.span
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              ✦
            </motion.span>

            About Team
          </motion.div>

          {/* Heading */}
          <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
            What People
            <span className="mt-2 block bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              Say About Us
            </span>
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-500 md:text-lg"
          >
            Real experiences from people who worked with our team
            and trusted us to bring their ideas to life.
          </motion.p>
        </motion.div>

        {/* ================= TESTIMONIAL AREA ================= */}

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* ================= IMAGE SIDE ================= */}

          <div className="relative flex min-h-[400px] items-center justify-center md:min-h-[500px]">
            {/* Left Preview */}
            <motion.img
              key={`prev-${aboutData[prevIndex].id}`}
              src={aboutData[prevIndex].image}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 0.35, x: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute left-0 h-52 w-36 rotate-[-10deg] rounded-2xl object-cover shadow-lg grayscale md:left-8 md:h-64 md:w-44"
            />

            {/* Right Preview */}
            <motion.img
              key={`next-${aboutData[nextIndex].id}`}
              src={aboutData[nextIndex].image}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 0.35, x: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute right-0 h-56 w-40 rotate-[10deg] rounded-2xl object-cover shadow-lg grayscale md:right-8 md:h-72 md:w-48"
            />

            <AnimatePresence mode="wait">
              <motion.div
                key={item.id}
                initial={{
                  opacity: 0,
                  scale: 0.9,
                  y: 25,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.9,
                  y: -20,
                }}
                transition={{
                  duration: 0.6,
                  type: "spring",
                  stiffness: 90,
                  damping: 18,
                }}
                className="relative z-10"
              >
                {/* Image Glow */}
                <motion.div
                  animate={{
                    scale: [1, 1.08, 1],
                    opacity: [0.15, 0.3, 0.15],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -inset-5 rounded-[32px] bg-blue-500 blur-2xl"
                />

                {/* Main Image */}
                <motion.img
                  src={item.image}
                  alt={item.name}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="relative h-[360px] w-[260px] rounded-[28px] border-4 border-white object-cover shadow-xl sm:h-[430px] sm:w-[310px] md:h-[470px] md:w-[340px]"
                />

                {/* Rating */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="absolute -bottom-5 left-1/2 -translate-x-1/2 rounded-full bg-blue-600 px-5 py-2.5 shadow-lg shadow-blue-600/20"
                >
                  <div className="flex gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star
                        key={i}
                        size={15}
                        className="fill-white text-white"
                      />
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* ================= CONTENT SIDE ================= */}

          <div className="max-w-xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${item.id}-content`}
                initial={{
                  opacity: 0,
                  x: 40,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                exit={{
                  opacity: 0,
                  x: -40,
                }}
                transition={{
                  duration: 0.5,
                }}
              >
                {/* Quote */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600"
                >
                  <Quote size={27} />
                </motion.div>

                {/* Name */}
                <h3 className="text-3xl font-bold text-slate-900 md:text-4xl">
                  {item.name}
                </h3>

                {/* Role */}
                <div className="mt-2 flex items-center gap-2 text-sm font-semibold text-blue-600 md:text-base">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
                  {item.role}
                </div>

                {/* Testimonial Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                  className="relative mt-7 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8"
                >
                  {/* Decorative quote */}
                  <div className="absolute right-5 top-2 select-none text-7xl font-serif leading-none text-blue-50">
                    "
                  </div>

                  <p className="relative z-10 text-base leading-8 text-slate-600 md:text-lg">
                    “{item.desc}”
                  </p>

                  {/* Bottom Line */}
                  <div className="mt-6 h-1 w-12 rounded-full bg-blue-600" />
                </motion.div>

                {/* ================= CONTROLS ================= */}

                <div className="mt-8 flex items-center gap-3">
                  {/* Previous */}
                  <motion.button
                    onClick={prevSlide}
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.92 }}
                    aria-label="Previous testimonial"
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition-colors hover:border-blue-500 hover:bg-blue-600 hover:text-white"
                  >
                    <ChevronLeft size={21} />
                  </motion.button>

                  {/* Next */}
                  <motion.button
                    onClick={nextSlide}
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.92 }}
                    aria-label="Next testimonial"
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white shadow-md shadow-blue-600/20 transition-colors hover:bg-blue-700"
                  >
                    <ChevronRight size={21} />
                  </motion.button>

                  {/* Counter */}
                  <div className="ml-3 text-sm font-medium text-slate-400">
                    <span className="font-bold text-blue-600">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="mx-1.5">/</span>
                    {String(aboutData.length).padStart(2, "0")}
                  </div>
                </div>

                {/* Indicators */}
                <div className="mt-6 flex gap-2">
                  {aboutData.map((_, i) => (
                    <motion.button
                      key={i}
                      onClick={() => setIndex(i)}
                      whileTap={{ scale: 0.9 }}
                      aria-label={`Go to testimonial ${i + 1}`}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        index === i
                          ? "w-10 bg-blue-600"
                          : "w-2 bg-blue-100"
                      }`}
                    />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* ================= BOTTOM CTA ================= */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 text-center md:mt-24"
        >
          <motion.button
            whileHover={{
              scale: 1.04,
              boxShadow: "0 12px 35px rgba(37,99,235,0.20)",
            }}
            whileTap={{ scale: 0.96 }}
            className="group inline-flex items-center gap-3 rounded-full bg-blue-600 px-8 py-4 font-semibold text-white shadow-lg shadow-blue-600/20 transition-colors hover:bg-blue-700"
          >
            Share Your Story

            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <ArrowRight size={19} />
            </motion.span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}