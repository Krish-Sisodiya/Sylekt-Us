import Hero from "../components/Hero";
import Services from "../components/Services";
import TechStack from "../components/TechStack";
import AboutSection from "../components/AboutSection";
import JoiningForm from "../components/JoinigForm";
import Footer from "../components/Footer";

import { FaWhatsapp } from "react-icons/fa6";
import { motion } from "framer-motion";

function App() {
  const whatsappNumber = "917389812435";

  const whatsappMessage = encodeURIComponent(
    "Hello Sylekt Us, I am interested in your digital services. I would like to discuss my project with you."
  );

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <div className="relative min-h-screen bg-white">

      {/* ================= MAIN WEBSITE ================= */}

      <Hero />

      <Services />

      <TechStack />

      <AboutSection />

      <JoiningForm />

      <Footer />


      {/* ================= FLOATING WHATSAPP ================= */}

      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Sylekt Us on WhatsApp"
        initial={{
          opacity: 0,
          scale: 0.5,
          y: 30,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          y: 0,
        }}
        transition={{
          duration: 0.5,
          delay: 1,
          type: "spring",
          stiffness: 200,
        }}
        whileHover={{
          scale: 1.1,
          y: -4,
        }}
        whileTap={{
          scale: 0.9,
        }}
        className="
          fixed
          right-5
          bottom-5
          md:right-7
          md:bottom-7
          z-[9999]

          w-14
          h-14
          md:w-16
          md:h-16

          rounded-full

          bg-[#25D366]
          text-white

          flex
          items-center
          justify-center

          shadow-[0_10px_30px_rgba(37,211,102,0.35)]

          border-4
          border-white

          transition-shadow
          duration-300

          hover:shadow-[0_15px_40px_rgba(37,211,102,0.5)]
        "
      >
        {/* Pulse Effect */}

        <motion.span
          animate={{
            scale: [1, 1.35, 1],
            opacity: [0.5, 0, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeOut",
          }}
          className="
            absolute
            inset-0
            rounded-full
            bg-[#25D366]
            -z-10
          "
        />

        <FaWhatsapp
          size={30}
          className="md:text-[34px]"
        />
      </motion.a>

    </div>
  );
}

export default App;