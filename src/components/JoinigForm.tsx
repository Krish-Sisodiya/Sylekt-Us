import { useState } from "react";
import { motion } from "framer-motion";
import {
  Send,
  User,
  Mail,
  Phone,
  MessageSquare,
  CheckCircle2,
  ArrowRight,
  Zap,
  Shield,
  Users,
} from "lucide-react";

import { FaLinkedinIn } from "react-icons/fa";

interface FormData {
  name: string;
  mobile: string;
  email: string;
  linkedin: string;
  message: string;
}

const features = [
  {
    icon: Zap,
    title: "Fast Response",
    description: "Quick communication",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Skilled professionals",
  },
  {
    icon: CheckCircle2,
    title: "Custom Solutions",
    description: "Made for your needs",
  },
  {
    icon: Shield,
    title: "Full Support",
    description: "Support from start to finish",
  },
];

export default function JoiningForm() {
  const [form, setForm] = useState<FormData>({
    name: "",
    mobile: "",
    email: "",
    linkedin: "",
    message: "",
  });

  const [focused, setFocused] = useState<string | null>(null);

  const maxWords = 100;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    if (name === "message") {
      const words = value.trim().split(/\s+/).filter(Boolean);

      if (value.trim() && words.length > maxWords) {
        return;
      }
    }

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const wordCount = form.message.trim()
    ? form.message.trim().split(/\s+/).filter(Boolean).length
    : 0;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    alert("Submitted Successfully 🚀");

    setForm({
      name: "",
      mobile: "",
      email: "",
      linkedin: "",
      message: "",
    });
  };

  return (
    <section className="relative overflow-hidden bg-white py-20 md:py-28">
      {/* =========================
          BACKGROUND
      ========================== */}

      <div className="absolute inset-0 pointer-events-none">
        {/* Soft Blue Circle */}
        <motion.div
          animate={{
            x: [0, 40, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-32 -left-32 h-80 w-80 rounded-full bg-blue-100 blur-3xl opacity-70"
        />

        {/* Soft Blue Circle */}
        <motion.div
          animate={{
            x: [0, -50, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -bottom-40 -right-32 h-96 w-96 rounded-full bg-blue-100 blur-3xl opacity-60"
        />

        {/* Small Floating Dots */}
        <motion.div
          animate={{
            y: [0, -15, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-[18%] right-[12%] h-3 w-3 rounded-full bg-blue-500"
        />

        <motion.div
          animate={{
            y: [0, 15, 0],
            opacity: [0.2, 0.7, 0.2],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-[20%] left-[10%] h-2 w-2 rounded-full bg-blue-400"
        />

        {/* Decorative Circle */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-[12%] right-[25%] hidden md:block h-20 w-20 rounded-full border border-blue-200"
        />

        {/* Decorative Square */}
        <motion.div
          animate={{
            rotate: [0, 8, 0],
            y: [0, -10, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-[18%] right-[8%] hidden md:block h-14 w-14 rounded-2xl border border-blue-200 rotate-12"
        />
      </div>

      {/* Top Line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="absolute top-0 left-0 h-1 w-full origin-center bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600"
      />

      {/* =========================
          MAIN CONTAINER
      ========================== */}

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        {/* =========================
            LEFT CONTENT
        ========================== */}

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-600"
          >
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-white">
              <Send size={12} />
            </span>

            Join Sylekt Us
          </motion.div>

          {/* Heading */}
          <h1 className="max-w-2xl text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
            Let's Build Something
            <motion.span
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.2,
                duration: 0.6,
              }}
              className="mt-2 block text-blue-600"
            >
              Amazing Together
            </motion.span>
          </h1>

          {/* Underline */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 100 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.4,
              duration: 0.6,
            }}
            className="mt-6 h-1 rounded-full bg-blue-600"
          />

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.3,
              duration: 0.6,
            }}
            className="mt-6 max-w-xl text-base leading-relaxed text-slate-600 md:text-lg"
          >
            Tell us your project vision, startup idea or digital requirement
            and we'll get back to you within 24 hours.
          </motion.p>

          {/* Features */}
          <div className="mt-10 grid max-w-xl grid-cols-1 gap-4 sm:grid-cols-2">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.div
                  key={feature.title}
                  initial={{
                    opacity: 0,
                    y: 25,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.2 + index * 0.1,
                    duration: 0.5,
                  }}
                  whileHover={{
                    y: -5,
                  }}
                  className="group rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-all duration-300 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-100"
                >
                  <div className="flex items-center gap-3">
                    <motion.div
                      whileHover={{
                        rotate: 8,
                        scale: 1.08,
                      }}
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white"
                    >
                      <Icon size={20} />
                    </motion.div>

                    <div>
                      <h3 className="text-sm font-bold text-slate-800">
                        {feature.title}
                      </h3>

                      <p className="mt-0.5 text-xs text-slate-500">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* =========================
            FORM
        ========================== */}

        <motion.form
          onSubmit={handleSubmit}
          initial={{
            opacity: 0,
            x: 50,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          className="relative rounded-3xl border border-slate-200 bg-white p-5 shadow-xl shadow-blue-100/60 sm:p-7 md:p-9"
        >
          {/* Top Accent */}
          <div className="absolute left-8 right-8 top-0 h-1 rounded-b-full bg-blue-600" />

          {/* Form Header */}
          <div className="mb-7">
            <div className="flex items-center gap-3">
              <motion.div
                animate={{
                  y: [0, -3, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-200"
              >
                <Send size={19} />
              </motion.div>

              <div>
                <h2 className="text-xl font-bold text-slate-900 md:text-2xl">
                  Get In Touch
                </h2>

                <p className="text-sm text-slate-500">
                  Fill in the details below
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {/* NAME */}
            <FormInput
              name="name"
              placeholder="Full Name"
              icon={<User size={19} />}
              value={form.name}
              focused={focused}
              setFocused={setFocused}
              onChange={handleChange}
              required
            />

            {/* MOBILE */}
            <FormInput
              name="mobile"
              placeholder="Mobile Number"
              icon={<Phone size={19} />}
              value={form.mobile}
              focused={focused}
              setFocused={setFocused}
              onChange={handleChange}
              required
            />

            {/* EMAIL */}
            <FormInput
              type="email"
              name="email"
              placeholder="Email Address"
              icon={<Mail size={19} />}
              value={form.email}
              focused={focused}
              setFocused={setFocused}
              onChange={handleChange}
              required
            />

            {/* LINKEDIN */}
            <FormInput
              name="linkedin"
              placeholder="LinkedIn Profile"
              icon={<FaLinkedinIn size={18} />}
              value={form.linkedin}
              focused={focused}
              setFocused={setFocused}
              onChange={handleChange}
            />

            {/* MESSAGE */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="relative md:col-span-2"
            >
              <div
                className={`pointer-events-none absolute left-4 top-4 z-10 transition-all duration-300 ${
                  focused === "message"
                    ? "text-blue-600"
                    : "text-slate-400"
                }`}
              >
                <MessageSquare size={19} />
              </div>

              <textarea
                name="message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                onFocus={() => setFocused("message")}
                onBlur={() => setFocused(null)}
                placeholder="Describe your requirement (100 words max)"
                className={`w-full resize-none rounded-xl border bg-slate-50 py-4 pl-12 pr-4 text-sm text-slate-800 outline-none transition-all duration-300 placeholder:text-slate-400 ${
                  focused === "message"
                    ? "border-blue-500 bg-white shadow-md shadow-blue-100"
                    : "border-slate-200 hover:border-blue-200"
                }`}
                required
              />

              <div className="mt-2 flex justify-end">
                <span
                  className={`text-xs font-semibold ${
                    wordCount > 90
                      ? "text-red-500"
                      : "text-slate-400"
                  }`}
                >
                  {wordCount}/{maxWords} words
                </span>
              </div>
            </motion.div>

            {/* SUBMIT */}
            <div className="pt-2 md:col-span-2">
              <motion.button
                type="submit"
                whileHover={{
                  y: -3,
                  scale: 1.01,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                className="group relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-xl bg-blue-600 px-6 py-4 text-sm font-bold text-white shadow-lg shadow-blue-200 transition-all duration-300 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-200"
              >
                {/* Shine */}
                <motion.span
                  animate={{
                    x: ["-150%", "150%"],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    repeatDelay: 3,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-y-0 w-20 skew-x-[-20deg] bg-white/20"
                />

                <span className="relative z-10 flex items-center gap-3">
                  Submit Request
                  <motion.span
                    animate={{
                      x: [0, 4, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <ArrowRight size={19} />
                  </motion.span>
                </span>
              </motion.button>
            </div>
          </div>

          {/* Bottom Note */}
          <div className="mt-5 flex items-center justify-center gap-2 text-center text-xs text-slate-400">
            <CheckCircle2 size={14} className="text-blue-500" />
            <span>Your information is safe with us.</span>
          </div>
        </motion.form>
      </div>
    </section>
  );
}

/* =================================
   REUSABLE INPUT COMPONENT
================================= */

interface FormInputProps {
  type?: string;
  name: string;
  placeholder: string;
  icon: React.ReactNode;
  value: string;
  focused: string | null;
  setFocused: (value: string | null) => void;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  required?: boolean;
}

function FormInput({
  type = "text",
  name,
  placeholder,
  icon,
  value,
  focused,
  setFocused,
  onChange,
  required = false,
}: FormInputProps) {
  const isFocused = focused === name;

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 15,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
      }}
      className="relative"
    >
      <div
        className={`pointer-events-none absolute left-4 top-1/2 z-10 -translate-y-1/2 transition-all duration-300 ${
          isFocused ? "text-blue-600" : "text-slate-400"
        }`}
      >
        {icon}
      </div>

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(name)}
        onBlur={() => setFocused(null)}
        placeholder={placeholder}
        required={required}
        className={`w-full rounded-xl border bg-slate-50 py-4 pl-12 pr-4 text-sm text-slate-800 outline-none transition-all duration-300 placeholder:text-slate-400 ${
          isFocused
            ? "border-blue-500 bg-white shadow-md shadow-blue-100"
            : "border-slate-200 hover:border-blue-200"
        }`}
      />

      {/* Focus Line */}
      <motion.div
        initial={{ width: 0 }}
        animate={{
          width: isFocused ? "100%" : 0,
        }}
        transition={{
          duration: 0.3,
        }}
        className="absolute bottom-0 left-4 h-0.5 rounded-full bg-blue-600"
      />
    </motion.div>
  );
}