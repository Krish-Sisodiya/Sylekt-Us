import { useState, useEffect, type JSX } from "react";
import { Menu, X, ChevronRight, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const B = "#1D4ED8";
const BLT = "#EFF6FF";

// Logo public/img folder ke andar hai
const LOGO_URL = "/img/sylect us logo.png";

const WHATSAPP_NUMBER = "917389812435";

const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Portfolio", to: "portfolio" },
  { label: "About", to: "/about" },
  { label: "Careers", to: "/careers" },
];

export default function Navbar(): JSX.Element {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();

  /* ================= SCROLL ================= */

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  /* ================= CLOSE MOBILE MENU ================= */

useEffect(() => {
  const onScroll = () => {
    setScrolled(window.scrollY > 30);
  };

  window.addEventListener("scroll", onScroll, {
    passive: true,
  });

  onScroll();

  return () => {
    window.removeEventListener("scroll", onScroll);
  };
}, []);

  /* ================= ACTIVE LINK ================= */

  const active = (to: string) =>
    to === "/"
      ? location.pathname === "/"
      : location.pathname.startsWith(to);

  /* ================= WHATSAPP ================= */

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

  return (
    <>
      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <motion.header
        initial={{
          y: -80,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.65,
          ease: [0.22, 1, 0.36, 1],
        }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,

          height: 70,

          display: "flex",
          alignItems: "center",

          background: scrolled
            ? "rgba(255,255,255,0.94)"
            : "#ffffff",

          backdropFilter: scrolled
            ? "blur(18px)"
            : "none",

          WebkitBackdropFilter: scrolled
            ? "blur(18px)"
            : "none",

          borderBottom: `1px solid ${
            scrolled ? "#DBEAFE" : "#EEF2F7"
          }`,

          boxShadow: scrolled
            ? "0 8px 30px rgba(29,78,216,0.10)"
            : "0 2px 12px rgba(15,23,42,0.03)",

          transition:
            "background 0.35s ease, border 0.35s ease, box-shadow 0.35s ease",
        }}
      >
        {/* =====================================================
            ANIMATED TOP LINE
        ===================================================== */}

        <motion.div
          animate={{
            x: ["-120%", "350%"],
          }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            position: "absolute",
            top: 0,
            left: 0,

            width: "28%",
            height: 2,

            background:
              "linear-gradient(90deg, transparent, #1D4ED8, #60A5FA, transparent)",

            pointerEvents: "none",
          }}
        />

        {/* =====================================================
            NAV INNER
        ===================================================== */}

        <div
          style={{
            width: "100%",
            maxWidth: 1180,

            margin: "0 auto",
            padding: "0 24px",

            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",

            gap: 20,
          }}
        >
          {/* =====================================================
              LOGO
          ===================================================== */}

          <Link
            to="/"
            style={{
              textDecoration: "none",
              flexShrink: 0,
            }}
          >
            <motion.div
              whileHover={{
                y: -2,
              }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                cursor: "pointer",
              }}
            >
              {/* ================= LOGO IMAGE ONLY ================= */}

              <motion.img
                className="brand-logo"
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
                style={{
                  width: 48,
                  height: 48,

                  objectFit: "contain",
                  display: "block",
                }}
              />

              {/* ================= BRAND NAME ================= */}

              <motion.div
                className="brand-name"
                whileHover={{
                  x: 2,
                }}
              >
                <div
                  style={{
                    margin: 0,

                    fontSize: 20,
                    fontWeight: 800,

                    letterSpacing: "-0.5px",
                    lineHeight: 1,

                    color: "#0F172A",
                  }}
                >
                  Sylekt
                  <span
                    style={{
                      color: B,
                    }}
                  >
                    Us
                  </span>
                </div>

                <div
                  style={{
                    marginTop: 4,

                    fontSize: 7.5,
                    letterSpacing: "2px",

                    color: B,
                    fontWeight: 700,
                  }}
                >
                 SMART SOLUTION INFINITE POSSIBILITIES
                </div>
              </motion.div>
            </motion.div>
          </Link>

          {/* =====================================================
              DESKTOP NAV
          ===================================================== */}

          <nav
            className="nav-desktop"
            style={{
              display: "none",
              alignItems: "center",
              gap: 5,
            }}
          >
            {NAV_LINKS.map(
              ({ label, to }, index) => {
                const isActive = active(to);

                return (
                  <motion.div
                    key={to}
                    initial={{
                      opacity: 0,
                      y: -12,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay:
                        0.18 + index * 0.07,
                      duration: 0.45,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <Link
                      to={to}
                      className="nav-tab"
                      data-active={isActive}
                      style={{
                        position: "relative",

                        display: "block",

                        padding: "10px 15px",

                        borderRadius: 10,

                        textDecoration: "none",

                        color: isActive
                          ? B
                          : "#334155",

                        fontSize: 14,
                        fontWeight: isActive
                          ? 700
                          : 500,

                        background: isActive
                          ? "#EFF6FF"
                          : "transparent",

                        transition:
                          "all 0.3s cubic-bezier(.22,1,.36,1)",

                        overflow: "hidden",
                        isolation: "isolate",
                      }}
                    >
                      {/* =================================================
                          HOVER LIGHT EFFECT
                      ================================================= */}

                      <motion.span
                        className="tab-hover"
                        initial={{
                          opacity: 0,
                          scale: 0.7,
                        }}
                        whileHover={{
                          opacity: 1,
                          scale: 1,
                        }}
                        transition={{
                          duration: 0.25,
                        }}
                        style={{
                          position: "absolute",
                          inset: 0,

                          borderRadius: 10,

                          background:
                            "linear-gradient(135deg, rgba(239,246,255,0.95), rgba(248,250,252,0.8))",

                          zIndex: -1,
                        }}
                      />

                      {/* =================================================
                          TEXT
                      ================================================= */}

                      <motion.span
                        style={{
                          position: "relative",
                          zIndex: 2,
                          display: "inline-block",
                        }}
                        whileHover={{
                          y: -1,
                        }}
                      >
                        {label}
                      </motion.span>

                      {/* =================================================
                          ACTIVE UNDERLINE
                      ================================================= */}

                      <motion.span
                        initial={false}
                        animate={{
                          width: isActive ? 24 : 0,
                          opacity: isActive ? 1 : 0,
                        }}
                        transition={{
                          duration: 0.35,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        style={{
                          position: "absolute",

                          left: "50%",
                          bottom: 3,

                          transform:
                            "translateX(-50%)",

                          height: 2,

                          borderRadius: 999,

                          background:
                            "linear-gradient(90deg, #1D4ED8, #60A5FA)",

                          boxShadow:
                            "0 0 8px rgba(37,99,235,0.35)",
                        }}
                      />

                      {/* =================================================
                          ACTIVE DOT
                      ================================================= */}

                      <motion.span
                        initial={{
                          scale: 0,
                          opacity: 0,
                        }}
                        animate={{
                          scale: isActive ? 1 : 0,
                          opacity: isActive ? 1 : 0,
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 18,
                        }}
                        style={{
                          position: "absolute",

                          top: 5,
                          right: 7,

                          width: 3,
                          height: 3,

                          borderRadius: "50%",

                          background: "#3B82F6",

                          boxShadow:
                            "0 0 7px rgba(59,130,246,0.6)",
                        }}
                      />
                    </Link>
                  </motion.div>
                );
              }
            )}
          </nav>

          {/* =====================================================
              RIGHT SIDE
          ===================================================== */}

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            {/* =================================================
                DESKTOP CTA
            ================================================= */}

            <motion.button
              className="cta-desktop"
              onClick={openWhatsApp}
              whileHover={{
                y: -3,
                scale: 1.035,
                boxShadow:
                  "0 12px 28px rgba(29,78,216,0.28)",
              }}
              whileTap={{
                scale: 0.96,
              }}
              style={{
                display: "none",

                alignItems: "center",
                gap: 7,

                position: "relative",
                overflow: "hidden",

                border: "none",
                borderRadius: 10,

                padding: "10px 17px",

                background:
                  "linear-gradient(135deg, #1D4ED8, #2563EB)",

                color: "#fff",

                fontSize: 13.5,
                fontWeight: 700,

                cursor: "pointer",

                boxShadow:
                  "0 5px 15px rgba(29,78,216,0.18)",

                transition:
                  "box-shadow 0.3s ease",
              }}
            >
              {/* Shine */}

              <motion.span
                animate={{
                  x: ["-120%", "180%"],
                }}
                transition={{
                  duration: 2.8,
                  repeat: Infinity,
                  repeatDelay: 2,
                  ease: "easeInOut",
                }}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,

                  width: "35%",
                  height: "100%",

                  background:
                    "linear-gradient(90deg, transparent, rgba(255,255,255,0.25), transparent)",

                  transform: "skewX(-20deg)",
                  pointerEvents: "none",
                }}
              />

              <span
                style={{
                  position: "relative",
                  zIndex: 2,
                }}
              >
                Let's Talk
              </span>

              <motion.span
                animate={{
                  x: [0, 3, 0],
                  y: [0, -1, 0],
                }}
                transition={{
                  duration: 1.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{
                  position: "relative",
                  zIndex: 2,
                  display: "flex",
                }}
              >
                <ArrowUpRight size={16} />
              </motion.span>
            </motion.button>

            {/* =================================================
                MOBILE MENU BUTTON
            ================================================= */}

            <motion.button
              className="hamburger"
              whileHover={{
                scale: 1.05,
                background: "#EFF6FF",
              }}
              whileTap={{
                scale: 0.9,
              }}
              onClick={() =>
                setOpen((v) => !v)
              }
              aria-label={
                open
                  ? "Close menu"
                  : "Open menu"
              }
              style={{
                display: "flex",

                alignItems: "center",
                justifyContent: "center",

                width: 42,
                height: 42,

                borderRadius: 10,

                border:
                  "1px solid #CBD5E1",

                background: open
                  ? BLT
                  : "#fff",

                color: B,

                cursor: "pointer",

                transition:
                  "all 0.25s ease",

                boxShadow:
                  "0 4px 12px rgba(29,78,216,0.08)",
              }}
            >
              <AnimatePresence
                mode="wait"
                initial={false}
              >
                {open ? (
                  <motion.span
                    key="close"
                    initial={{
                      rotate: -90,
                      opacity: 0,
                      scale: 0.7,
                    }}
                    animate={{
                      rotate: 0,
                      opacity: 1,
                      scale: 1,
                    }}
                    exit={{
                      rotate: 90,
                      opacity: 0,
                      scale: 0.7,
                    }}
                    transition={{
                      duration: 0.2,
                    }}
                  >
                    <X size={21} />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={{
                      rotate: 90,
                      opacity: 0,
                      scale: 0.7,
                    }}
                    animate={{
                      rotate: 0,
                      opacity: 1,
                      scale: 1,
                    }}
                    exit={{
                      rotate: -90,
                      opacity: 0,
                      scale: 0.7,
                    }}
                    transition={{
                      duration: 0.2,
                    }}
                  >
                    <Menu size={21} />
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* =====================================================
          MOBILE MENU
      ===================================================== */}

      <AnimatePresence>
        {open && (
          <>
            {/* ================= OVERLAY ================= */}

            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
              onClick={() => setOpen(false)}
              style={{
                position: "fixed",
                inset: 0,

                zIndex: 90,

                background:
                  "rgba(15,23,42,0.22)",

                backdropFilter:
                  "blur(5px)",

                WebkitBackdropFilter:
                  "blur(5px)",
              }}
            />

            {/* ================= MENU CARD ================= */}

            <motion.div
              initial={{
                opacity: 0,
                y: -25,
                scale: 0.96,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: -20,
                scale: 0.96,
              }}
              transition={{
                type: "spring",
                stiffness: 280,
                damping: 25,
              }}
              style={{
                position: "fixed",

                top: 82,
                left: 16,
                right: 16,

                zIndex: 95,

                padding: 14,

                borderRadius: 16,

                background:
                  "rgba(255,255,255,0.98)",

                border:
                  "1px solid #DBEAFE",

                boxShadow:
                  "0 20px 50px rgba(15,23,42,0.15)",

                backdropFilter:
                  "blur(20px)",

                WebkitBackdropFilter:
                  "blur(20px)",
              }}
            >
              {/* ================= MOBILE LINKS ================= */}

              {NAV_LINKS.map(
                ({ label, to }, i) => {
                  const isActive = active(to);

                  return (
                    <motion.div
                      key={to}
                      initial={{
                        opacity: 0,
                        x: -15,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        delay: i * 0.06,
                        duration: 0.3,
                      }}
                    >
                      <Link
                        to={to}
                        onClick={() =>
                          setOpen(false)
                        }
                        style={{
                          display: "flex",

                          alignItems: "center",
                          justifyContent:
                            "space-between",

                          padding:
                            "13px 14px",

                          marginBottom: 4,

                          borderRadius: 10,

                          background:
                            isActive
                              ? BLT
                              : "transparent",

                          color:
                            isActive
                              ? B
                              : "#1E293B",

                          fontSize: 15,

                          fontWeight:
                            isActive
                              ? 700
                              : 500,

                          textDecoration:
                            "none",

                          transition:
                            "all 0.25s ease",
                        }}
                      >
                        <span>
                          {label}
                        </span>

                        <motion.span
                          animate={{
                            x: isActive
                              ? 4
                              : 0,
                          }}
                          transition={{
                            type: "spring",
                            stiffness: 300,
                          }}
                        >
                          <ChevronRight
                            size={17}
                            color={
                              isActive
                                ? B
                                : "#94A3B8"
                            }
                          />
                        </motion.span>
                      </Link>
                    </motion.div>
                  );
                }
              )}

              {/* ================= MOBILE CTA ================= */}

              <motion.button
                onClick={() => {
                  setOpen(false);
                  openWhatsApp();
                }}
                whileHover={{
                  scale: 1.02,
                  y: -1,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                style={{
                  width: "100%",

                  marginTop: 10,

                  display: "flex",
                  alignItems: "center",
                  justifyContent:
                    "center",

                  gap: 8,

                  padding: "13px 0",

                  border: "none",

                  borderRadius: 10,

                  background:
                    "linear-gradient(135deg, #1D4ED8, #2563EB)",

                  color: "#fff",

                  fontSize: 14.5,
                  fontWeight: 700,

                  cursor: "pointer",

                  boxShadow:
                    "0 7px 20px rgba(29,78,216,0.20)",
                }}
              >
                Let's Talk

                <motion.span
                  animate={{
                    x: [0, 3, 0],
                  }}
                  transition={{
                    duration: 1.3,
                    repeat: Infinity,
                  }}
                >
                  <ArrowUpRight
                    size={17}
                  />
                </motion.span>
              </motion.button>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* =====================================================
          RESPONSIVE CSS
      ===================================================== */}

      <style>{`
        /* ================= DESKTOP ================= */

        @media (min-width: 1024px) {
          .nav-desktop {
            display: flex !important;
          }

          .cta-desktop {
            display: flex !important;
          }

          .hamburger {
            display: none !important;
          }
        }

        /* ================= TABLET / MOBILE ================= */

        @media (max-width: 1023px) {
          .nav-desktop {
            display: none !important;
          }

          .cta-desktop {
            display: none !important;
          }

          .hamburger {
            display: flex !important;
          }
        }

        /* ================= NAV TAB ================= */

        .nav-tab::before {
          content: "";
          position: absolute;

          left: 50%;
          bottom: 0;

          width: 0;
          height: 2px;

          border-radius: 999px;

          background:
            linear-gradient(
              90deg,
              #1D4ED8,
              #60A5FA
            );

          transform:
            translateX(-50%);

          transition:
            width 0.35s
              cubic-bezier(
                .22,
                1,
                .36,
                1
              ),
            opacity 0.25s ease;

          opacity: 0;
        }

        .nav-tab:hover::before {
          width: 65%;
          opacity: 1;
        }

        .nav-tab:hover {
          color: #1D4ED8 !important;

          transform:
            translateY(-2px);

          background:
            #F8FAFC !important;

          box-shadow:
            0 6px 18px
              rgba(
                29,
                78,
                216,
                0.08
              );
        }

        .nav-tab:active {
          transform:
            translateY(0)
            scale(0.97);
        }

        /* ================= LOGO ================= */

        .brand-logo {
          transition:
            transform 0.35s
              cubic-bezier(
                .22,
                1,
                .36,
                1
              ),
            filter 0.35s ease;
        }

        .brand-logo:hover {
          filter:
            drop-shadow(
              0 8px 14px
              rgba(
                29,
                78,
                216,
                0.18
              )
            );
        }

        /* ================= BRAND ================= */

        .brand-name {
          transition:
            transform 0.3s ease,
            letter-spacing 0.3s ease;
        }

        .brand-name:hover {
          transform:
            translateX(2px);

          letter-spacing:
            -0.2px;
        }

        /* ================= CTA ================= */

        .cta-desktop {
          position: relative;
          overflow: hidden;
        }

        /* ================= MOBILE LINK HOVER ================= */

        @media (max-width: 1023px) {
          .hamburger:active {
            transform: scale(0.92);
          }
        }

        /* ================= REDUCE MOTION ================= */

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
          }
        }
      `}</style>
    </>
  );
}