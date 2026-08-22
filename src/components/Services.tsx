import { motion } from "framer-motion";
import {
  Code2,
  Smartphone,
  Palette,
  ArrowRight,
  Sparkles,
  Package,
  Video,
  Megaphone,
  ShoppingCart,
  Share2,
} from "lucide-react";
import type { JSX } from "react";
import { useNavigate } from "react-router-dom";

interface ServiceItem {
  title: string;
  desc: string;
  icon: JSX.Element;
}

const services: ServiceItem[] = [
  {
    title: "Web Development",
    desc: "Modern, responsive and scalable websites built for your business growth.",
    icon: <Code2 size={26} />,
  },
  {
    title: "App Development",
    desc: "High-performance Android and iOS apps designed for a seamless experience.",
    icon: <Smartphone size={26} />,
  },
  {
    title: "Social Media Handler",
    desc: "Complete social media management to grow your brand and online presence.",
    icon: <Share2 size={26} />,
  },
  {
    title: "E-Commerce",
    desc: "Professional online stores with secure, user-friendly shopping experiences.",
    icon: <ShoppingCart size={26} />,
  },
  {
    title: "Digital Marketing",
    desc: "Result-driven digital marketing strategies to reach and convert your audience.",
    icon: <Megaphone size={26} />,
  },
  {
    title: "Graphics Design",
    desc: "Creative and professional graphics that make your brand visually stand out.",
    icon: <Palette size={26} />,
  },
  {
    title: "Video Editing",
    desc: "Engaging and high-quality video editing for social media, brands and businesses.",
    icon: <Video size={26} />,
  },
  {
    title: "Product Listing",
    desc: "Optimized product listings with attractive content, images and detailed descriptions.",
    icon: <Package size={26} />,
  },

];
export default function Services(): JSX.Element {
  const navigate = useNavigate();

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-white py-20 md:py-28"
    >
      {/* Animated blue lines */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ x: "-110%" }}
          animate={{ x: "110%" }}
          transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
          className="absolute top-16 h-px w-1/3 bg-gradient-to-r from-transparent via-[#2563EB] to-transparent opacity-40"
        />

        <motion.div
          initial={{ x: "110%" }}
          animate={{ x: "-110%" }}
          transition={{ duration: 9, repeat: Infinity, ease: "linear" }}
          className="absolute top-32 h-px w-1/4 bg-gradient-to-r from-transparent via-[#60A5FA] to-transparent opacity-30"
        />

        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{ duration: 11, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-24 h-px w-1/4 bg-gradient-to-r from-transparent via-[#1D4ED8] to-transparent opacity-25"
        />

        <motion.div
          animate={{ y: [0, 18, 0], opacity: [0.18, 0.32, 0.18] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -right-32 top-20 h-72 w-72 rounded-full bg-[#DBEAFE] blur-3xl"
        />

        <motion.div
          animate={{ y: [0, -20, 0], opacity: [0.15, 0.28, 0.15] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-32 bottom-20 h-80 w-80 rounded-full bg-[#EFF6FF] blur-3xl"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-3xl text-center md:mb-18"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#BFDBFE] bg-[#EFF6FF] px-4 py-2 text-sm font-semibold text-[#1D4ED8]"
          >
            <Sparkles size={15} />
            Our Services
          </motion.div>

          <h2 className="text-4xl font-bold tracking-tight text-[#0F172A] sm:text-5xl md:text-6xl">
            Digital Solutions For{" "}
            <span className="block text-[#1D4ED8]">Future Businesses</span>
          </h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 90 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="mx-auto mt-5 h-1 rounded-full bg-[#2563EB]"
          />

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[#64748B] md:text-lg">
            Everything needed to build, launch and scale your digital presence
            with cutting-edge technology.
          </p>
        </motion.div>

        {/* Services */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                delay: index * 0.06,
                duration: 0.45,
                ease: "easeOut",
              }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-2xl border border-[#DBEAFE] bg-white p-6 shadow-[0_5px_22px_rgba(15,23,42,0.05)] transition-shadow duration-300 hover:border-[#93C5FD] hover:shadow-[0_14px_35px_rgba(37,99,235,0.12)]"
            >
              {/* Animated top line */}
              <motion.div
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.4 }}
                className="absolute left-0 right-0 top-0 h-[3px] bg-[#2563EB]"
              />

              <div className="mb-5 flex items-center justify-between">
                <motion.div
                  whileHover={{ scale: 1.06, rotate: 3 }}
                  className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#EFF6FF] text-[#1D4ED8] transition-colors duration-300 group-hover:bg-[#1D4ED8] group-hover:text-white"
                >
                  {service.icon}
                </motion.div>

                <span className="text-xs font-semibold text-[#CBD5E1]">
                  0{index + 1}
                </span>
              </div>

              <h3 className="text-lg font-bold text-[#0F172A]">
                {service.title}
              </h3>

              <p className="mt-3 min-h-[72px] text-sm leading-6 text-[#64748B]">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-14 text-center md:mt-18"
        >
          <motion.button
            onClick={() => navigate("/services")}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 rounded-lg bg-[#1D4ED8] px-7 py-3.5 font-semibold text-white shadow-[0_8px_20px_rgba(29,78,216,0.2)] transition-shadow hover:shadow-[0_10px_28px_rgba(29,78,216,0.28)]"
          >
            <Sparkles size={17} />
            Explore All Solutions
            <ArrowRight size={18} />
          </motion.button>

          <p className="mt-4 text-sm text-[#94A3B8]">
            Trusted by 100+ businesses worldwide
          </p>
        </motion.div>
      </div>

      {/* Bottom animated line */}
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: "100%" }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className="pointer-events-none absolute bottom-0 h-[2px] w-1/3 bg-gradient-to-r from-transparent via-[#2563EB] to-transparent opacity-40"
      />
    </section>
  );
}