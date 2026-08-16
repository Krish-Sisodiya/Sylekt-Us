import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code2,
  Database,
  PenTool,
  Video,
  Share2,
  Layers3,
  Sparkles,
  Send,
  Upload,
  CheckCircle2,
  Rocket,
  ShieldCheck,
  Cpu,
  Bug,
  GraduationCap,
  Palette,
  Globe,
} from "lucide-react";


const services = [
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

const perks = [
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

export default function JoinSylectus() {
  const [selected, setSelected] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  type FormType = {
    fullName: string;
    mobile: string;
    email: string;
    education: string;
    linkedin: string;
    lookingFor: string;
    coverLetter: string;
  };

  const [formData, setFormData] = useState<FormType>({
    fullName: "",
    mobile: "",
    email: "",
    education: "",
    linkedin: "",
    lookingFor: "",
    coverLetter: "",
  });

  const [resume, setResume] = useState<File | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];

      if (file.size > 2 * 1024 * 1024) {
        alert("Max file size 2MB");
        return;
      }

      setResume(file);
    }
  };

  const API_URL = import.meta.env.VITE_API_URL;

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    try {
      const data = new FormData();

      data.append("fullName", formData.fullName);
      data.append("mobile", formData.mobile);
      data.append("email", formData.email);
      data.append("education", formData.education);
      data.append("linkedin", formData.linkedin);
      data.append("lookingFor", formData.lookingFor);
      data.append("coverLetter", formData.coverLetter);

      if (resume) {
        data.append("resume", resume);
      }

      const res = await fetch(`${API_URL}/api/careers`, {
        method: "POST",
        body: data,
      });

      if (res.ok) {
        setSubmitted(true);
      }
    } catch (err) {
      console.error(err);
      alert("Failed");
    }
  };

  return (
    <div className="relative min-h-screen bg-white text-slate-900 overflow-hidden">

      {/* ================= BACKGROUND ================= */}

      <motion.div
        animate={{
          x: [0, 60, 0],
          y: [0, -40, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-blue-100/60 blur-3xl pointer-events-none"
      />

      <motion.div
        animate={{
          x: [0, -50, 0],
          y: [0, 50, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[35%] -right-40 w-[500px] h-[500px] rounded-full bg-blue-50 blur-3xl pointer-events-none"
      />

      {/* subtle grid */}

      <div
        className="absolute inset-0 pointer-events-none opacity-[0.35]"
        style={{
          backgroundImage: `
            linear-gradient(#dbeafe 1px, transparent 1px),
            linear-gradient(90deg, #dbeafe 1px, transparent 1px)
          `,
          backgroundSize: "70px 70px",
          maskImage:
            "linear-gradient(to bottom, black, transparent 75%)",
        }}
      />

      {/* ================= HERO ================= */}

      <section className="relative max-w-7xl mx-auto px-6 pt-32 pb-20">

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-4xl mx-auto"
        >

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-semibold"
          >
            <Sparkles size={16} />
            Join Sylekt Us Team
          </motion.div>

          <h1 className="mt-8 text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.05] text-slate-900">
            Build Your Future
            <motion.span
              animate={{
                backgroundPosition: [
                  "0% 50%",
                  "100% 50%",
                  "0% 50%",
                ],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "linear",
              }}
              className="block mt-2 bg-gradient-to-r from-blue-700 via-blue-500 to-blue-700 bg-[length:200%_auto] bg-clip-text text-transparent"
            >
              With Creative Minds
            </motion.span>
          </h1>

          <p className="mt-7 text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Join a growing team of developers, designers and innovators
            building modern digital products for ambitious businesses.
          </p>

          <motion.a
            href="#open-roles"
            whileHover={{ y: -3, scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 mt-9 px-7 py-3.5 rounded-full bg-blue-700 text-white font-semibold shadow-lg shadow-blue-700/20 hover:bg-blue-800 transition"
          >
            Explore Open Roles
            <span>↓</span>
          </motion.a>
        </motion.div>

        {/* ================= STATS ================= */}

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-16">

          {[
            ["20+", "Open Roles"],
            ["50+", "Projects"],
            ["100%", "Remote"],
            ["∞", "Growth"],
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 + i * 0.1 }}
              whileHover={{
                y: -6,
                boxShadow: "0 15px 35px rgba(29,78,216,0.10)",
              }}
              className="group rounded-2xl bg-white border border-blue-100 p-6 md:p-8 text-center shadow-sm transition-all"
            >
              <motion.h2
                animate={{ y: [0, -3, 0] }}
                transition={{
                  duration: 3 + i,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="text-4xl md:text-5xl font-extrabold text-blue-700"
              >
                {item[0]}
              </motion.h2>

              <p className="mt-2 text-sm md:text-base text-slate-500 font-medium">
                {item[1]}
              </p>
            </motion.div>
          ))}

        </div>
      </section>

      {/* ================= OPEN ROLES ================= */}

      <section
        id="open-roles"
        className="relative max-w-7xl mx-auto px-6 pb-24"
      >

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-blue-700 font-semibold text-sm uppercase tracking-widest">
            Opportunities
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold mt-3">
            Open Positions
          </h2>

          <p className="text-slate-500 mt-4 max-w-xl mx-auto">
            Find a role that matches your skills and become part of our
            growing team.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.07,
              },
            },
          }}
          className="grid md:grid-cols-2 xl:grid-cols-3 gap-6"
        >

          {services.map((service) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 35,
                  },
                  show: {
                    opacity: 1,
                    y: 0,
                  },
                }}
                whileHover={{
                  y: -8,
                }}
                transition={{
                  type: "spring",
                  stiffness: 180,
                  damping: 18,
                }}
                className="group relative"
              >

                <div className="relative h-full rounded-3xl bg-white border border-slate-200 p-7 shadow-sm overflow-hidden transition-all duration-300 group-hover:border-blue-200 group-hover:shadow-xl group-hover:shadow-blue-900/10">

                  {/* animated top line */}

                  <motion.div
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.4 }}
                    className="absolute top-0 left-0 h-1 bg-blue-700"
                  />

                  {/* icon */}

                  <motion.div
                    whileHover={{
                      rotate: 6,
                      scale: 1.08,
                    }}
                    className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-700 transition"
                  >
                    <Icon size={27} />
                  </motion.div>

                  <h3 className="text-xl font-bold mt-6 text-slate-900">
                    {service.title}
                  </h3>

                  <p className="text-slate-500 mt-3 leading-relaxed text-sm">
                    {service.desc}
                  </p>

                  <div className="flex items-center gap-2 mt-6">

                    <span className="px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold">
                      {service.type}
                    </span>

                    <span className="px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-slate-500 text-xs font-medium">
                      Growth Role
                    </span>

                  </div>

                  <motion.button
                    whileHover={{
                      scale: 1.02,
                    }}
                    whileTap={{
                      scale: 0.97,
                    }}
                    onClick={() => {
                      setSelected(service.title);

                      setTimeout(() => {
                        document
                          .getElementById("apply-form")
                          ?.scrollIntoView({
                            behavior: "smooth",
                          });
                      }, 150);
                    }}
                    className="mt-7 w-full rounded-xl px-5 py-3.5 bg-blue-700 text-white font-semibold flex items-center justify-center gap-2 shadow-md shadow-blue-700/15 hover:bg-blue-800 transition"
                  >
                    Apply Now
                    <motion.span
                      animate={{ x: [0, 4, 0] }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                      }}
                    >
                      →
                    </motion.span>
                  </motion.button>

                </div>
              </motion.div>
            );
          })}

        </motion.div>
      </section>

      {/* ================= PERKS ================= */}

      <section className="relative max-w-6xl mx-auto px-6 pb-24">

        <div className="text-center mb-12">
          <p className="text-blue-700 font-semibold text-sm uppercase tracking-widest">
            Why Sylekt Us
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold mt-3">
            Why Join Us?
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">

          {perks.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={i}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  delay: i * 0.1,
                }}
                whileHover={{
                  y: -8,
                }}
                className="rounded-3xl bg-white border border-slate-200 p-8 shadow-sm hover:shadow-xl hover:shadow-blue-900/10 transition-all"
              >

                <motion.div
                  whileHover={{
                    rotate: 8,
                    scale: 1.08,
                  }}
                  className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-700 flex items-center justify-center"
                >
                  <Icon size={28} />
                </motion.div>

                <h3 className="text-2xl font-bold mt-6">
                  {item.title}
                </h3>

                <p className="text-slate-500 mt-3 leading-relaxed">
                  {item.text}
                </p>

              </motion.div>
            );
          })}

        </div>
      </section>

      {/* ================= APPLICATION ================= */}

      <section
        id="apply-form"
        className="relative max-w-7xl mx-auto px-6 pb-28"
      >

        <motion.div
          initial={{
            opacity: 0,
            y: 50,
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
          className="rounded-[32px] bg-white border border-blue-100 shadow-xl shadow-blue-900/10 overflow-hidden"
        >

          <div className="grid lg:grid-cols-2">

            {/* LEFT */}

            <div className="relative p-8 md:p-12 lg:p-14 bg-gradient-to-br from-blue-50 to-white overflow-hidden">

              <motion.div
                animate={{
                  x: [0, 25, 0],
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-blue-100 blur-3xl"
              />

              <div className="relative">

                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-blue-100 text-blue-700 text-sm font-semibold">
                  <Sparkles size={15} />
                  Join Sylekt Us
                </div>

                <h2 className="text-4xl md:text-5xl font-extrabold mt-7 leading-tight text-slate-900">
                  {selected
                    ? `Apply for ${selected}`
                    : "Join The Future Builders"}
                </h2>

                <p className="mt-5 text-slate-500 text-lg leading-relaxed">
                  Become part of a creative ecosystem where developers,
                  designers and innovators build products that matter.
                </p>

                <div className="grid sm:grid-cols-2 gap-3 mt-8">

                  {[
                    "Remote Friendly",
                    "Flexible Hours",
                    "Growth Opportunities",
                    "Live Projects",
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      whileHover={{
                        x: 4,
                      }}
                      className="rounded-xl bg-white border border-blue-100 p-4 flex items-center gap-3 shadow-sm"
                    >
                      <CheckCircle2
                        size={18}
                        className="text-blue-700 flex-shrink-0"
                      />

                      <span className="text-sm font-medium text-slate-700">
                        {item}
                      </span>
                    </motion.div>
                  ))}

                </div>

                <motion.div
                  animate={{
                    y: [0, -5, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="mt-8 rounded-2xl bg-white border border-blue-100 p-6 shadow-sm"
                >
                  <h4 className="text-xl font-bold">
                    Why Join Us?
                  </h4>

                  <p className="text-slate-500 mt-2 leading-relaxed">
                    Work with premium clients, modern technologies,
                    creative branding and next-gen digital products.
                  </p>
                </motion.div>

              </div>
            </div>

            {/* FORM */}

            <div className="p-8 md:p-12 lg:p-14 bg-white">

              <AnimatePresence mode="wait">

                {!submitted ? (

                  <motion.form
                    key="form"
                    initial={{
                      opacity: 0,
                      x: 30,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.6,
                    }}
                    className="grid gap-4"
                    onSubmit={handleSubmit}
                  >

                    {(
                      [
                        {
                          name: "fullName",
                          placeholder: "Full Name",
                        },
                        {
                          name: "mobile",
                          placeholder: "Mobile Number",
                        },
                        {
                          name: "email",
                          placeholder: "Email",
                        },
                        {
                          name: "education",
                          placeholder: "Education",
                        },
                        {
                          name: "linkedin",
                          placeholder: "LinkedIn Profile",
                        },
                        {
                          name: "lookingFor",
                          placeholder: "What are you looking for?",
                        },
                      ] as {
                        name: keyof FormType;
                        placeholder: string;
                      }[]
                    ).map((field) => (
                      <motion.input
                        key={field.name}
                        whileFocus={{
                          scale: 1.01,
                        }}
                        name={field.name}
                        value={formData[field.name]}
                        onChange={handleChange}
                        placeholder={field.placeholder}
                        required
                        className="w-full rounded-xl bg-slate-50 border border-slate-200 px-5 py-4 text-slate-900 placeholder:text-slate-400 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition"
                      />
                    ))}

                    <motion.textarea
                      whileFocus={{
                        scale: 1.01,
                      }}
                      name="coverLetter"
                      value={formData.coverLetter}
                      onChange={handleChange}
                      rows={5}
                      required
                      placeholder="Why should we hire you?"
                      className="w-full rounded-xl bg-slate-50 border border-slate-200 px-5 py-4 text-slate-900 placeholder:text-slate-400 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition resize-none"
                    />

                    {/* RESUME */}

                    <label className="rounded-xl border-2 border-dashed border-blue-200 bg-blue-50/50 p-5 flex items-center justify-between cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition">

                      <div className="flex gap-3 items-center">

                        <div className="w-10 h-10 rounded-lg bg-white border border-blue-100 flex items-center justify-center text-blue-700">
                          <Upload size={18} />
                        </div>

                        <div>
                          <p className="font-semibold text-slate-700">
                            {resume
                              ? resume.name
                              : "Upload Resume"}
                          </p>

                          <p className="text-xs text-slate-400 mt-1">
                            Maximum size 2MB
                          </p>
                        </div>

                      </div>

                      <span className="text-blue-700 text-xs font-semibold">
                        PDF / DOC
                      </span>

                      <input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileChange}
                        className="hidden"
                      />

                    </label>

                    {/* SUBMIT */}

                    <motion.button
                      type="submit"
                      whileHover={{
                        y: -2,
                        boxShadow:
                          "0 12px 30px rgba(29,78,216,0.22)",
                      }}
                      whileTap={{
                        scale: 0.98,
                      }}
                      className="rounded-xl py-4 mt-2 bg-blue-700 hover:bg-blue-800 text-white font-semibold inline-flex items-center justify-center gap-3 transition shadow-lg shadow-blue-700/15"
                    >
                      <Send size={18} />

                      Submit Application

                      <motion.span
                        animate={{
                          x: [0, 4, 0],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                        }}
                      >
                        →
                      </motion.span>
                    </motion.button>

                  </motion.form>

                ) : (

                  /* SUCCESS */

                  <motion.div
                    key="success"
                    initial={{
                      opacity: 0,
                      scale: 0.9,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                    }}
                    className="min-h-[500px] flex flex-col items-center justify-center text-center"
                  >

                    <motion.div
                      animate={{
                        scale: [1, 1.08, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                      }}
                      className="w-20 h-20 rounded-full bg-blue-50 flex items-center justify-center text-blue-700"
                    >
                      <CheckCircle2 size={48} />
                    </motion.div>

                    <h3 className="text-3xl md:text-4xl font-extrabold mt-7">
                      Application Submitted
                    </h3>

                    <p className="text-slate-500 mt-4 max-w-md leading-relaxed">
                      Thanks for applying. Our team will review your
                      profile and get back to you soon.
                    </p>

                    <motion.button
                      whileHover={{
                        y: -2,
                      }}
                      whileTap={{
                        scale: 0.97,
                      }}
                      onClick={() => {
                        setSubmitted(false);
                        setResume(null);
                      }}
                      className="mt-8 px-7 py-3.5 rounded-xl bg-blue-700 text-white font-semibold hover:bg-blue-800 transition"
                    >
                      Submit Another
                    </motion.button>

                  </motion.div>

                )}

              </AnimatePresence>

            </div>

          </div>

        </motion.div>

      </section>

      {/* ================= BOTTOM ================= */}

      <div className="h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />

      <footer className="py-8 text-center text-sm text-slate-400">
        © 2026 Sylekt Us. All Rights Reserved.
      </footer>

    </div>
  );
}