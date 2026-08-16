import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { Users, ArrowUpRight, Sparkles } from "lucide-react";

const teamMembers = [
  {
    name: "Krish Sisodiya",
    role: "Founder & Lead Developer",
    img: "/img/krish.png",
    linkedin: "https://linkedin.com/in/krish-sisodiya",
    github: "https://github.com/krishsisodiya",
    instagram: "https://www.instagram.com/masterkrish2.0/",
    twitter: "https://twitter.com/krish",
  },
  {
    name: "Pawan Rajpoot",
    role: "Full Stack Developer",
    img: "/img/pawan.png",
    linkedin:
      "https://www.linkedin.com/in/pawan-rajpoot-160394351/",
    github: "https://github.com/pr771434-lgtm",
    instagram: "https://www.instagram.com/pawan_rajpoot.316",
    twitter: "https://twitter.com/pawan",
  },
  {
    name: "Kartik Prajapat",
    role: "Backend Developer",
    img: "/img/kartik.jpeg",
    linkedin: "https://linkedin.com/in/kartik",
    github: "https://github.com/kartik",
    instagram: "https://instagram.com/kartik",
    twitter: "https://twitter.com/kartik",
  },
  {
    name: "Brajesh Kamle",
    role: "Co-Founder & UI/UX",
    img: "/img/brajesh.jpeg",
    linkedin: "https://linkedin.com/in/brajesh",
    github: "https://github.com/brajesh",
    instagram: "https://instagram.com/brajesh",
    twitter: "https://twitter.com/brajesh",
  },
];

export default function TeamSection() {
  return (
    <section
      id="team"
      className="relative overflow-hidden bg-white py-20 md:py-28"
    >
      {/* ================= BACKGROUND ================= */}

      {/* Soft Blue Glow */}
      <motion.div
        animate={{
          x: [0, 80, 0],
          y: [0, -50, 0],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-40 -left-40 h-[450px] w-[450px] rounded-full bg-blue-400/20 blur-[100px]"
      />

      <motion.div
        animate={{
          x: [0, -70, 0],
          y: [0, 60, 0],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-blue-500/15 blur-[110px]"
      />

      {/* Light Grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.035]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(#2563eb 1px, transparent 1px),
              linear-gradient(90deg, #2563eb 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* ================= MOVING BLUE LINES ================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: ["-100%", "100%"],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-[18%] left-0 h-[1px] w-[45%] bg-gradient-to-r from-transparent via-blue-500 to-transparent"
        />

        <motion.div
          animate={{
            x: ["100%", "-100%"],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-[72%] right-0 h-[1px] w-[40%] bg-gradient-to-r from-transparent via-blue-400 to-transparent"
        />

        <motion.div
          animate={{
            x: ["-100%", "100%"],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear",
            delay: 2,
          }}
          className="absolute top-[88%] left-0 h-[1px] w-[30%] bg-gradient-to-r from-transparent via-blue-300 to-transparent"
        />

        {/* Vertical Line */}
        <motion.div
          animate={{
            y: ["-100%", "100%"],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute left-[8%] top-0 h-[35%] w-[1px] bg-gradient-to-b from-transparent via-blue-400 to-transparent"
        />
      </div>

      {/* ================= MAIN CONTENT ================= */}

      <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-8">
        {/* ================= HEADING ================= */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          className="mx-auto mb-14 max-w-3xl text-center md:mb-20"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex"
          >
            <div className="flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-600 shadow-sm">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-white">
                <Users size={13} />
              </span>

              Meet Our Team
            </div>
          </motion.div>

          {/* Heading */}
          <h2 className="text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
            The People Behind
            <motion.span
              className="mt-2 block bg-gradient-to-r from-blue-700 via-blue-500 to-blue-700 bg-[length:200%_auto] bg-clip-text text-transparent"
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
            >
              Digital Innovation
            </motion.span>
          </h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.2,
              duration: 0.6,
            }}
            className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-500 md:text-lg"
          >
            A passionate team of developers and designers creating
            modern, scalable and meaningful digital experiences.
          </motion.p>

          {/* Small Animated Line */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.5,
              duration: 0.8,
            }}
            className="mx-auto mt-7 h-1 rounded-full bg-blue-600"
          />
        </motion.div>

        {/* ================= TEAM GRID ================= */}

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
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
                margin: "-80px",
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
                ease: "easeOut",
              }}
              whileHover={{
                y: -8,
              }}
              className="group relative"
            >
              {/* Card Blue Glow */}
              <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-r from-blue-500 to-blue-300 opacity-0 blur-sm transition duration-500 group-hover:opacity-70" />

              {/* Card */}
              <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_10px_40px_rgba(15,23,42,0.06)] transition-all duration-500 group-hover:border-blue-200 group-hover:shadow-[0_20px_50px_rgba(37,99,235,0.15)]">
                {/* Image */}
                <div className="relative h-[330px] overflow-hidden bg-slate-100">
                  <motion.img
                    src={member.img}
                    alt={member.name}
                    className="h-full w-full object-cover transition-all duration-700"
                    whileHover={{
                      scale: 1.06,
                    }}
                    transition={{
                      duration: 0.7,
                    }}
                  />

                  {/* Image Gradient */}
                  <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white via-white/40 to-transparent" />

                  {/* Team Badge */}
                  <div className="absolute right-4 top-4 rounded-full border border-blue-100 bg-white/90 px-3 py-1.5 text-[11px] font-semibold text-blue-600 shadow-sm backdrop-blur-md">
                    Team Member
                  </div>

                  {/* Social Buttons */}
                  <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2.5 opacity-0 translate-y-5 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <SocialButton
                      href={member.linkedin}
                      icon={<FaLinkedin size={15} />}
                    />

                    <SocialButton
                      href={member.github}
                      icon={<FaGithub size={15} />}
                    />

                    <SocialButton
                      href={member.instagram}
                      icon={<FaInstagram size={15} />}
                    />

                    <SocialButton
                      href={member.twitter}
                      icon={<FaTwitter size={15} />}
                    />
                  </div>
                </div>

                {/* ================= INFO ================= */}

                <div className="relative px-5 pb-6 pt-4">
                  {/* Animated Top Line */}
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "35%" }}
                    viewport={{ once: true }}
                    transition={{
                      delay: 0.5 + index * 0.1,
                      duration: 0.7,
                    }}
                    className="mb-4 h-[3px] rounded-full bg-blue-600"
                  />

                  <h3 className="text-lg font-bold text-slate-900 md:text-xl">
                    {member.name}
                  </h3>

                  <p className="mt-1 text-sm font-medium text-blue-600">
                    {member.role}
                  </p>

                  {/* Bottom Line */}
                  <div className="mt-5 flex items-center justify-between">
                    <span className="text-xs font-medium text-slate-400">
                      Digital Team
                    </span>

                    <motion.div
                      whileHover={{
                        x: 4,
                        y: -4,
                      }}
                      className="flex h-8 w-8 items-center justify-center rounded-full border border-blue-100 bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white"
                    >
                      <ArrowUpRight size={15} />
                    </motion.div>
                  </div>
                </div>

                {/* Bottom Blue Accent */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.4 + index * 0.1,
                    duration: 0.8,
                  }}
                  className="absolute bottom-0 left-0 h-[3px] w-full origin-left bg-gradient-to-r from-blue-700 via-blue-500 to-blue-300"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* ================= CTA ================= */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            delay: 0.3,
          }}
          className="mt-16 text-center md:mt-20"
        >
          <motion.button
            whileHover={{
              scale: 1.04,
            }}
            whileTap={{
              scale: 0.97,
            }}
            className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-blue-600 px-8 py-4 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition-all hover:bg-blue-700 md:px-10 md:py-5 md:text-base"
          >
            {/* Button Shine */}
            <motion.span
              animate={{
                x: ["-120%", "120%"],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 2,
                ease: "easeInOut",
              }}
              className="absolute inset-y-0 w-20 -skew-x-12 bg-white/20"
            />

            <Sparkles size={17} />

            <span className="relative">
              Join Our Team
            </span>

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
              <ArrowUpRight size={19} />
            </motion.span>
          </motion.button>

          <p className="mt-4 text-sm text-slate-400">
            Let's build something amazing together.
          </p>
        </motion.div>
      </div>

      {/* Bottom Fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-blue-50/40 to-transparent" />
    </section>
  );
}

/* ================= SOCIAL BUTTON ================= */

function SocialButton({
  href,
  icon,
}: {
  href: string;
  icon: React.ReactNode;
}) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{
        scale: 1.12,
        y: -3,
      }}
      whileTap={{
        scale: 0.92,
      }}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-blue-100 bg-white text-blue-600 shadow-md transition-all duration-300 hover:bg-blue-600 hover:text-white hover:shadow-lg hover:shadow-blue-500/20"
    >
      {icon}
    </motion.a>
  );
}