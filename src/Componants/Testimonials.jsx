import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

// ----------------------------------------------------
// STUDENT DATA
// ----------------------------------------------------

const testimonials = [
  {
    id: 1,
    name: "Said Ansarulhaq Obaidai",
    role: "Amazon FBA Student",
    image: "/photo 1.jpeg",
    description:
      "This center gave me practical skills,real experience ,and confidence,thanks to my teacher,I'm ready to buy and sell on amazon",
  },
  {
    id: 2,
    name: "Omar Khostai",
    role: "Amazon Private Label Student",
    image: "/photo 2.jpeg",
    description:
      "What I liked most was the practical approach. Instead of only watching theory, we worked with real examples and learned how successful Amazon sellers make decisions.",
  },
  {
    id: 3,
    name: "Khalid jamalyar",
    role: "Amazon Business Student",
    image: "/photo 3.jpeg",
    description:
      "The instructors explained difficult concepts in a simple way. I learned about Alibaba, suppliers, product research, branding, and the complete process of starting an Amazon business.",
  },
  {
    id: 4,
    name: "Mahdi wafaee",
    role: "Amazon & Branding Student",
    image: "/photo 5.jpeg",
    description:
      "This center gave me much more confidence. I now understand how the Amazon ecosystem works and, most importantly, I have a clear roadmap for building my own online business.",
  },
  {
    id: 5,
    name: "Mahdi wafaee",
    role: "Amazon FBA student",
    image: "/photo 6.jpeg",
    description:
      "Our center prepared us with hands-on training and constant support.I'm proud to graduate and start my journey confidently.",
  },
];

// ----------------------------------------------------
// SLIDE ANIMATION
// ----------------------------------------------------

const slideVariants = {
  enter: {
    opacity: 0,
    x: 80,
    scale: 0.96,
  },

  center: {
    opacity: 1,
    x: 0,
    scale: 1,
  },

  exit: {
    opacity: 0,
    x: -80,
    scale: 0.96,
  },
};

// ----------------------------------------------------
// TESTIMONIALS COMPONENT
// ----------------------------------------------------

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const currentStudent = testimonials[current];

  // --------------------------------------------------
  // NEXT STUDENT
  // --------------------------------------------------

  const nextStudent = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  // --------------------------------------------------
  // PREVIOUS STUDENT
  // --------------------------------------------------

  const previousStudent = () => {
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  // --------------------------------------------------
  // AUTOMATIC SLIDER
  // Every 5 seconds another student appears
  // --------------------------------------------------

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-slate-950 py-20 sm:py-24 lg:py-28"
    >
      {/* =================================================
          BACKGROUND DECORATION
      ================================================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 40, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-orange-500/10 blur-3xl"
        />

        <motion.div
          animate={{
            x: [0, -40, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-yellow-400/10 blur-3xl"
        />
      </div>

      {/* =================================================
          CONTAINER
      ================================================= */}

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* =================================================
            SECTION HEADER
        ================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-12 max-w-3xl text-center sm:mb-16"
        >
          {/* Small badge */}

          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-orange-400/20 bg-orange-400/10 px-4 py-2 text-sm font-semibold text-orange-300">
            <i className="fa-solid fa-graduation-cap" />
            Student Success Stories
          </div>

          {/* Heading */}

          <h2 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl">
            What Our <span className="text-orange-400">Students Say</span>
          </h2>

          {/* Description */}

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
            Discover how our practical Amazon business training has helped
            students understand the online business world and build confidence
            for their entrepreneurial journey.
          </p>
        </motion.div>

        {/* =================================================
            TESTIMONIAL AREA
        ================================================= */}

        <div className="mx-auto max-w-5xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStudent.id}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                duration: 0.65,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] shadow-2xl backdrop-blur-xl"
            >
              {/* =================================================
                  TOP ORANGE ANIMATED LINE
              ================================================= */}

              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                }}
                className="absolute left-0 right-0 top-0 h-1 origin-left bg-gradient-to-r from-orange-500 via-yellow-400 to-orange-500"
              />

              {/* =================================================
                  CONTENT GRID
              ================================================= */}

              <div className="grid items-center gap-8 p-6 sm:p-8 md:grid-cols-[260px_1fr] md:gap-10 md:p-10 lg:grid-cols-[300px_1fr] lg:p-12">
                {/* =================================================
                    STUDENT IMAGE
                ================================================= */}

                <motion.div
                  initial={{
                    opacity: 0,
                    scale: 0.8,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  transition={{
                    delay: 0.15,
                    duration: 0.6,
                  }}
                  className="mx-auto w-full max-w-[230px] sm:max-w-[260px] md:max-w-none"
                >
                  <div className="relative">
                    {/* Animated glow */}

                    <motion.div
                      animate={{
                        scale: [1, 1.08, 1],
                        opacity: [0.3, 0.55, 0.3],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="absolute inset-3 rounded-full bg-orange-500/30 blur-2xl"
                    />

                    {/* Image */}

                    <div className="relative aspect-square overflow-hidden rounded-3xl border border-orange-400/20 bg-slate-900">
                      <motion.img
                        src={currentStudent.image}
                        alt={currentStudent.name}
                        className="h-full w-full object-cover"
                        whileHover={{
                          scale: 1.06,
                        }}
                        transition={{
                          duration: 0.5,
                        }}
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent" />
                    </div>
                  </div>
                </motion.div>

                {/* =================================================
                    STUDENT INFORMATION
                ================================================= */}

                <div className="min-w-0">
                  {/* Quote */}

                  <motion.div
                    initial={{
                      opacity: 0,
                      scale: 0.5,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                    }}
                    transition={{
                      delay: 0.25,
                    }}
                    className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-orange-500/10 text-orange-400"
                  >
                    <i className="fa-solid fa-quote-left text-lg" />
                  </motion.div>

                  {/* Description */}

                  <motion.p
                    initial={{
                      opacity: 0,
                      y: 15,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: 0.3,
                    }}
                    className="text-base leading-7 text-slate-300 sm:text-lg sm:leading-8"
                  >
                    “{currentStudent.description}”
                  </motion.p>

                  {/* Stars */}

                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 15,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: 0.4,
                    }}
                    className="mt-6 flex items-center gap-1"
                  >
                    {[1, 2, 3, 4, 5].map((star) => (
                      <motion.i
                        key={star}
                        initial={{
                          opacity: 0,
                          scale: 0,
                        }}
                        animate={{
                          opacity: 1,
                          scale: 1,
                        }}
                        transition={{
                          delay: 0.45 + star * 0.08,
                          type: "spring",
                          stiffness: 300,
                        }}
                        className="fa-solid fa-star text-sm text-yellow-400"
                      />
                    ))}
                  </motion.div>

                  {/* Student Name */}

                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 15,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: 0.55,
                    }}
                    className="mt-5"
                  >
                    <h3 className="break-words text-xl font-bold text-white sm:text-2xl">
                      {currentStudent.name}
                    </h3>

                    <p className="mt-1 text-sm font-medium text-orange-400">
                      {currentStudent.role}
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* =================================================
              CONTROLS
          ================================================= */}

          <div className="mt-8 flex flex-col items-center justify-between gap-5 sm:flex-row">
            {/* Progress dots */}

            <div className="flex items-center gap-2">
              {testimonials.map((student, index) => (
                <button
                  key={student.id}
                  onClick={() => setCurrent(index)}
                  aria-label={`Show testimonial from ${student.name}`}
                  className="group p-1"
                >
                  <motion.span
                    animate={{
                      width: current === index ? 32 : 8,
                      opacity: current === index ? 1 : 0.4,
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                    className="block h-2 rounded-full bg-orange-400"
                  />
                </button>
              ))}
            </div>

            {/* Navigation */}

            <div className="flex items-center gap-3">
              {/* Previous */}

              <button
                onClick={previousStudent}
                aria-label="Previous student"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-all duration-300 hover:border-orange-400/40 hover:bg-orange-500 active:scale-95"
              >
                <i className="fa-solid fa-chevron-left text-sm" />
              </button>

              {/* Counter */}

              <span className="min-w-[60px] text-center text-sm font-medium text-slate-400">
                {String(current + 1).padStart(2, "0")}
                {" / "}
                {String(testimonials.length).padStart(2, "0")}
              </span>

              {/* Next */}

              <button
                onClick={nextStudent}
                aria-label="Next student"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-all duration-300 hover:border-orange-400/40 hover:bg-orange-500 active:scale-95"
              >
                <i className="fa-solid fa-chevron-right text-sm" />
              </button>
            </div>
          </div>

          {/* =================================================
              AUTO SLIDE PROGRESS
          ================================================= */}

          <div className="mt-6 h-1 w-full overflow-hidden rounded-full bg-white/10">
            <motion.div
              key={current}
              initial={{
                width: "0%",
              }}
              animate={{
                width: "100%",
              }}
              transition={{
                duration: 5,
                ease: "linear",
              }}
              className="h-full bg-gradient-to-r from-orange-500 to-yellow-400"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
