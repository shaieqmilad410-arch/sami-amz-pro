import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Font Awesome
import "@fortawesome/fontawesome-free/css/all.min.css";

const Hero = () => {
  // =========================
  // ANIMATION VARIANTS
  // =========================

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#f8fafc] pt-24">
      {/* =====================================================
          BACKGROUND DECORATION
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Orange Glow */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.6,
          }}
          animate={{
            opacity: [0.18, 0.28, 0.18],
            scale: [0.9, 1.1, 0.9],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-32 -top-32 h-[430px] w-[430px] rounded-full bg-[#FF9900] blur-[120px]"
        />

        {/* Cyan Glow */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.6,
          }}
          animate={{
            opacity: [0.12, 0.22, 0.12],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -bottom-40 -left-40 h-[450px] w-[450px] rounded-full bg-[#FF9900] blur-[130px]"
        />

        {/* Floating Circle */}
        <motion.div
          animate={{
            y: [0, -25, 0],
            x: [0, 10, 0],
            rotate: [0, 15, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-[8%] top-[18%] hidden h-20 w-20 rounded-full border border-orange-200 bg-white/50 backdrop-blur-md lg:block"
        />

        {/* Cyan Dot */}
        <motion.div
          animate={{
            y: [0, 18, 0],
            x: [0, -10, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[7%] top-[28%] hidden h-5 w-5 rounded-full bg-amber-400 shadow-lg shadow-cyan-400/30 lg:block"
        />

        {/* Orange Dot */}
        <motion.div
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
          }}
          className="absolute right-[28%] top-[12%] hidden h-3 w-3 rounded-full bg-[#FF9900] lg:block"
        />

        {/* Floating Sparkle */}
        <motion.div
          animate={{
            y: [0, -15, 0],
            rotate: [0, 20, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[42%] top-[15%] hidden text-[#FF9900] lg:block"
        >
          <i className="fa-solid fa-sparkles text-xl" />
        </motion.div>

        {/* Second Sparkle */}
        <motion.div
          animate={{
            y: [0, 15, 0],
            rotate: [0, -20, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-[45%] bottom-[18%] hidden text-[#FF9900] lg:block"
        >
          <i className="fa-solid fa-sparkles text-lg" />
        </motion.div>

        {/* Small Floating Dots */}
        <motion.div
          animate={{
            y: [0, -30, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[15%] top-[18%] hidden h-2 w-2 rounded-full bg-[#FF9900] lg:block"
        />

        <motion.div
          animate={{
            y: [0, 25, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[35%] bottom-[15%] hidden h-2 w-2 rounded-full bg-[#FF9900] lg:block"
        />

        <motion.div
          animate={{
            x: [0, 20, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-[15%] top-[35%] hidden h-2 w-2 rounded-full bg-orange-300 lg:block"
        />
      </div>

      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <div className="relative mx-auto grid min-h-[calc(100vh-96px)] max-w-7xl items-center gap-14 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-20">
        {/* =================================================
            LEFT SIDE
        ================================================= */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10 max-w-2xl"
        >
          {/* Badge */}
          <motion.div variants={itemVariants}>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white/80 px-4 py-2 text-sm font-semibold text-gray-700 shadow-sm backdrop-blur-sm">
              <motion.span
                animate={{
                  scale: [1, 1.3, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="h-2 w-2 rounded-full bg-[#FF9900]"
              />
              Practical Amazon Business Training
            </div>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl font-medium leading-[1.08] tracking-tight text-gray-950 sm:text-5xl lg:text-6xl xl:text-6xl"
          >
            Build Your{" "}
            <span className="relative mx-1 inline-block text-[#FF9900] sm:mx-2">
              Amazon Business
              <motion.span
                initial={{
                  scaleX: 0,
                }}
                animate={{
                  scaleX: 1,
                }}
                transition={{
                  duration: 1,
                  delay: 1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="absolute -bottom-1 left-0 h-1 w-full origin-left rounded-full bg-[#FF9900]/30 sm:-bottom-2"
              />
            </span>{" "}
            From Zero to
            <span className="block">
              <span className="text-gray-950">Profitable.</span>
            </span>
          </motion.h1>

          {/* Paragraph */}
          <motion.p
            variants={itemVariants}
            className="mt-7 max-w-xl text-base leading-7 text-gray-600 sm:text-lg"
          >
            Learn the real strategies behind Amazon FBA, product research,
            sourcing, PPC, and brand growth from practical lessons designed to
            help you build a business—not just watch another course.
          </motion.p>

          {/* =================================================
              BUTTONS
          ================================================= */}

          <motion.div
            variants={itemVariants}
            className="mt-9 flex flex-col gap-4 sm:flex-row"
          >
            {/* Primary Button */}
            <Link
              to="/courses"
              className="group relative flex items-center justify-center gap-3 overflow-hidden rounded-full bg-[#FF9900] px-7 py-4 font-bold text-white shadow-xl shadow-cyan-500/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#ffad33] hover:shadow-orange-500/30"
            >
              <span className="relative z-10">Start Learning</span>

              {/* Shine */}
              <motion.span
                initial={{
                  x: "-120%",
                }}
                animate={{
                  x: "120%",
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 3,
                  ease: "easeInOut",
                }}
                className="absolute top-0 h-full w-10 rotate-12 bg-white/30 blur-sm"
              />

              <i className="fa-solid fa-arrow-right relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            {/* Secondary Button */}
            <Link
              to="/courses"
              className="group flex items-center justify-center gap-2 rounded-full border border-gray-300 bg-white px-7 py-4 font-semibold text-gray-800 transition-all duration-300 hover:-translate-y-1  hover:bg-cyan-50"
            >
              <i className="fa-solid fa-play text-sm text-amber-500 transition-transform duration-300 group-hover:scale-110" />
              Explore Courses
            </Link>
          </motion.div>

          {/* =================================================
              TRUST POINTS
          ================================================= */}

          {/* <motion.div
            variants={itemVariants}
            className="mt-9 grid grid-cols-1 gap-3 text-sm text-gray-600 sm:grid-cols-2"
          >
            <div className="flex items-center gap-2">
              <i className="fa-solid fa-circle-check text-cyan-" />
              <span>Real-world strategies</span>
            </div>

            <div className="flex items-center gap-2">
              <i className="fa-solid fa-circle-check text-cyan-500" />
              <span>Step-by-step training</span>
            </div>

            <div className="flex items-center gap-2">
              <i className="fa-solid fa-circle-check text-cyan-500" />
              <span>Amazon FBA focused</span>
            </div>

            <div className="flex items-center gap-2">
              <i className="fa-solid fa-circle-check text-cyan-500" />
              <span>Business mindset</span>
            </div>
          </motion.div> */}
        </motion.div>

        {/* =================================================
            RIGHT SIDE — MENTOR
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            x: 80,
            scale: 0.9,
          }}
          animate={{
            opacity: 1,
            x: 0,
            scale: 1,
          }}
          transition={{
            duration: 1,
            delay: 0.25,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative mx-auto w-full max-w-xl"
        >
          {/* =================================================
              OUTER ROTATING RING
          ================================================= */}

          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute left-1/2 top-1/2 h-[330px] w-[330px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#FF9900]/30 sm:h-[430px] sm:w-[430px] lg:h-[500px] lg:w-[500px]"
          />

          {/* Inner Ring */}
          <motion.div
            animate={{
              rotate: -360,
            }}
            transition={{
              duration: 35,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-200/50 sm:h-[380px] sm:w-[380px] lg:h-[450px] lg:w-[450px]"
          />

          {/* =================================================
              MAIN IMAGE CARD
          ================================================= */}

          <motion.div
            animate={{
              y: [0, -10, 0],
              rotate: [0, 0.5, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative z-10 overflow-visible rounded-[2rem] border border-white bg-white/90 p-3 shadow-[0_30px_80px_rgba(15,23,42,0.15)] backdrop-blur-sm"
          >
            <div className="relative overflow-hidden rounded-[1.5rem]">
              <img
                src="/sami photo.jpeg"
                alt="Amazon business mentor"
                className="h-[430px] w-full object-contain sm:h-[500px]"
              />

              {/* Image Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/30 via-transparent to-transparent" />

              {/* Image Shine */}
              <motion.div
                initial={{
                  x: "-120%",
                }}
                animate={{
                  x: "120%",
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatDelay: 4,
                  ease: "easeInOut",
                }}
                className="absolute inset-y-0 w-24 rotate-12 bg-white/20 blur-xl"
              />
            </div>
          </motion.div>

          {/* =================================================
              TOP FLOATING CARD
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: 30,
            }}
            animate={{
              opacity: 1,
              x: 0,
              y: [0, -10, 0],
            }}
            transition={{
              opacity: {
                duration: 0.8,
                delay: 1,
              },
              x: {
                duration: 0.8,
                delay: 1,
              },
              y: {
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            className="absolute -right-2 top-8 z-20 hidden rounded-2xl border border-gray-100 bg-white px-4 py-3 shadow-xl sm:block"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-50">
                <i className="fa-solid fa-chart-line text-[#FF9900]" />
              </div>

              <div>
                <p className="text-xs text-gray-500">Business Model</p>

                <p className="font-bold text-gray-900">Amazon FBA</p>
              </div>
            </div>
          </motion.div>

          {/* =================================================
              BOTTOM FLOATING CARD
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: -30,
            }}
            animate={{
              opacity: 1,
              x: 0,
              y: [0, 10, 0],
            }}
            transition={{
              opacity: {
                duration: 0.8,
                delay: 1.2,
              },
              x: {
                duration: 0.8,
                delay: 1.2,
              },
              y: {
                duration: 5.5,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            className="absolute -bottom-2 -left-2 z-20 hidden rounded-2xl border border-gray-100 bg-white px-4 py-3 shadow-xl sm:block"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-50">
                <i className="fa-solid fa-circle-check text-amber-500" />
              </div>

              <div>
                <p className="text-xs text-gray-500">Learning Path</p>

                <p className="font-bold text-gray-900">Step by Step</p>
              </div>
            </div>
          </motion.div>

          {/* =================================================
              FLOATING SPARKLE
          ================================================= */}

          <motion.div
            animate={{
              y: [0, -12, 0],
              rotate: [0, 8, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -left-5 top-1/3 z-20 hidden rounded-full border border-orange-100 bg-white p-3 shadow-lg sm:flex"
          >
            <i className="fa-solid fa-wand-magic-sparkles text-[#FF9900]" />
          </motion.div>
        </motion.div>
      </div>

      {/* =====================================================
          BOTTOM FADE
      ===================================================== */}

      <div className="pointer-events-none absolute bottom-0 left-0 h-24 w-full bg-gradient-to-t from-white/70 to-transparent" />
    </section>
  );
};

export default Hero;
