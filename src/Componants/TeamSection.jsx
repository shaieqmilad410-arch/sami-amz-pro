import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const teamMembers = [
  {
    id: 1,
    name: "Samiullah Akbari",
    role: "Amazon Business Mentor",
    image: "/sami photo.jpeg",
    description:
      "Helps students understand Amazon business models, product research, and practical business strategies.",
  },
  {
    id: 2,
    name: "Milad Shaieq",
    role: "Web developer",
    image: "/milad1.jpeg",
    description:
      "Expert web developer building fast, responsive, optimized websites that boost online visibility.",
  },
  {
    id: 3,
    name: "Amin Sultani",
    role: "Graphic Designer",
    image: "/sultani3.jpeg",
    description:
      "Professional graphic designer creating high‑impact visual branding that increases engagement and online visibility.",
  },
  {
    id: 4,
    name: "Jawid Mohammadi",
    role: "Manager and Coordinator",
    image: "/jawid.jpeg",
    description:
      "Experienced manager leading teams, optimizing operations, and driving consistent business growth successfully.",
  },
  {
    id: 5,
    name: "Shafiq Mandozai",
    role: "Business & Training Coordinator",
    image: "/shafiq.jpeg",
    description:
      "Business and training coordinator improving operations, organizing programs, and enhancing professional development success.",
  },
];

const TeamSection = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  // Automatic slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);

      setCurrent((prev) => (prev === teamMembers.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setDirection(1);

    setCurrent((prev) => (prev === teamMembers.length - 1 ? 0 : prev + 1));
  };

  const previousSlide = () => {
    setDirection(-1);

    setCurrent((prev) => (prev === 0 ? teamMembers.length - 1 : prev - 1));
  };

  const selectSlide = (index) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  };

  const member = teamMembers[current];

  const slideVariants = {
    enter: (direction) => ({
      opacity: 0,
      x: direction > 0 ? 80 : -80,
    }),

    center: {
      opacity: 1,
      x: 0,
    },

    exit: (direction) => ({
      opacity: 0,
      x: direction > 0 ? -80 : 80,
    }),
  };

  return (
    <section className="overflow-hidden bg-slate-50 py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto mb-14 max-w-2xl text-center"
        >
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-orange-500" />

            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-orange-500">
              Our Team
            </span>

            <span className="h-px w-8 bg-orange-500" />
          </div>

          <h2 className="text-4xl font-bold tracking-[-0.03em] text-slate-900 sm:text-5xl">
            Meet the people
            <span className="block text-orange-500">behind your success.</span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
            Learn from a team of experienced professionals who are committed to
            helping you understand Amazon business and build practical skills.
          </p>
        </motion.div>

        {/* SLIDER */}
        <div className="relative mx-auto max-w-5xl">
          <div className="grid items-center gap-10 overflow-hidden rounded-3xl bg-white p-5 shadow-[0_20px_60px_rgba(15,23,42,0.08)] sm:p-8 md:grid-cols-[0.9fr_1.1fr] md:p-10 lg:p-12">
            {/* IMAGE */}
            <div className="relative overflow-hidden rounded-2xl bg-slate-100">
              <div className="aspect-[4/5] w-full">
                <AnimatePresence initial={false} custom={direction} mode="wait">
                  <motion.img
                    key={member.id}
                    src={member.image}
                    alt={member.name}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      duration: 0.55,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="h-full w-full object-cover"
                  />
                </AnimatePresence>
              </div>

              {/* IMAGE OVERLAY */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

              {/* MEMBER NUMBER */}
              <div className="absolute bottom-4 left-4 rounded-full bg-white/95 px-4 py-2 text-xs font-bold text-slate-900 shadow-lg backdrop-blur">
                0{current + 1} / 0{teamMembers.length}
              </div>
            </div>

            {/* CONTENT */}
            <div className="relative min-h-[360px] md:min-h-[400px]">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={member.id}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    duration: 0.55,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="flex h-full flex-col justify-center"
                >
                  {/* SMALL LABEL */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15, duration: 0.4 }}
                    className="mb-5 flex items-center gap-3"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />

                    <span className="text-xs font-bold uppercase tracking-[0.18em] text-orange-500">
                      Team Member
                    </span>
                  </motion.div>

                  {/* NAME */}
                  <motion.h3
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="text-3xl font-bold tracking-[-0.03em] text-slate-900 sm:text-4xl lg:text-5xl"
                  >
                    {member.name}
                  </motion.h3>

                  {/* ROLE */}
                  <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.27, duration: 0.5 }}
                    className="mt-3 text-base font-semibold text-orange-500"
                  >
                    {member.role}
                  </motion.p>

                  {/* LINE */}
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: 70 }}
                    transition={{
                      delay: 0.35,
                      duration: 0.5,
                    }}
                    className="my-7 h-px bg-slate-200"
                  />

                  {/* DESCRIPTION */}
                  <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="max-w-lg text-base leading-8 text-slate-600"
                  >
                    {member.description}
                  </motion.p>

                  {/* EXPERIENCE */}
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.48, duration: 0.5 }}
                    className="mt-7 flex items-center gap-3"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-50 text-orange-500">
                      <i className="fa-solid fa-user-tie" />
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-slate-900">
                        Professional Team
                      </p>

                      <p className="text-xs text-slate-500">
                        Practical knowledge & guidance
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              </AnimatePresence>

              {/* CONTROLS */}
              <div className="absolute bottom-0 right-0 flex items-center gap-2">
                <motion.button
                  type="button"
                  onClick={previousSlide}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.92 }}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition-colors hover:border-orange-500 hover:bg-orange-500 hover:text-white"
                  aria-label="Previous team member"
                >
                  <i className="fa-solid fa-arrow-left text-sm" />
                </motion.button>

                <motion.button
                  type="button"
                  onClick={nextSlide}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.92 }}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition-colors hover:border-orange-500 hover:bg-orange-500 hover:text-white"
                  aria-label="Next team member"
                >
                  <i className="fa-solid fa-arrow-right text-sm" />
                </motion.button>
              </div>
            </div>
          </div>

          {/* DOTS */}
          <div className="mt-8 flex justify-center gap-2">
            {teamMembers.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => selectSlide(index)}
                aria-label={`Go to team member ${index + 1}`}
                className="group flex items-center justify-center p-1"
              >
                <motion.span
                  animate={{
                    width: current === index ? 28 : 7,
                    opacity: current === index ? 1 : 0.35,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                  className="block h-1.5 rounded-full bg-orange-500"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
