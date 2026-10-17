import React from "react";
import { motion, useReducedMotion } from "framer-motion";

const MentorSection = () => {
  const reduce = useReducedMotion();

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reduce ? 0 : 0.12,
      },
    },
  };

  const fadeUp = {
    hidden: reduce ? { opacity: 1 } : { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduce ? 0 : 0.65,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section
      id="mentor"
      className="relative isolate overflow-hidden bg-[#070B10] py-20 sm:py-24 lg:py-28"
    >
      {/* Hero-style background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(34,211,238,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.35) 1px, transparent 1px)",
            backgroundSize: "52px 52px",
            maskImage:
              "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)",
          }}
        />

        {/* Left cyan ambient glow */}
        <div className="absolute -left-48 top-10 h-[440px] w-[440px] rounded-full bg-cyan-500/[0.11] blur-[130px]" />

        {/* Right cyan ambient glow */}
        <div className="absolute -right-48 bottom-0 h-[420px] w-[420px] rounded-full bg-cyan-400/[0.08] blur-[130px]" />

        {/* Top border */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/25 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 xl:gap-24">
          {/* Mentor image */}
          <motion.div
            initial={reduce ? false : { opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: reduce ? 0 : 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative mx-auto w-full max-w-lg"
          >
            {/* Cyan vertical accent */}
            <motion.div
              initial={reduce ? false : { scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: reduce ? 0 : 0.8,
                delay: reduce ? 0 : 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{ transformOrigin: "top" }}
              className="absolute -left-3 top-8 bottom-8 z-10 w-1 rounded-full bg-cyan-400 sm:-left-4"
            />

            {/* Image frame */}
            <div className="group relative rounded-2xl border border-cyan-400/20 bg-[#0C121A] p-2 shadow-[0_0_60px_rgba(6,182,212,0.08)] sm:p-3">
              {/* Decorative corner accents */}
              <div className="absolute -right-px -top-px z-10 h-16 w-16 rounded-tr-2xl border-r-2 border-t-2 border-cyan-400/70" />
              <div className="absolute -bottom-px -left-px z-10 h-16 w-16 rounded-bl-2xl border-b-2 border-l-2 border-cyan-400/50" />

              <motion.div
                initial={reduce ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: reduce ? 0 : 0.7,
                  delay: reduce ? 0 : 0.1,
                }}
                className="relative h-[390px] w-full overflow-hidden rounded-xl bg-[#101923] sm:h-[500px]"
              >
                <motion.img
                  src="/sami photo.jpeg"
                  alt="Samiullah Akbari, Amazon Business Mentor"
                  loading="lazy"
                  className="h-full w-full object-cover object-center"
                  initial={reduce ? false : { scale: 1.04 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  whileHover={reduce ? undefined : { scale: 1.045 }}
                  transition={{
                    duration: reduce ? 0 : 0.8,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                />

                {/* Image gradient */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#070B10]/75 via-transparent to-[#070B10]/10" />

                {/* Image caption */}
                <div className="absolute bottom-5 left-5 right-5 z-10 sm:bottom-7 sm:left-7">
                  <div className="mb-2 flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-300 sm:text-xs">
                      Your Mentor
                    </span>
                  </div>

                  <p className="text-xl font-bold tracking-tight text-white sm:text-2xl">
                    Samiullah Akbari
                  </p>

                  <p className="mt-1 text-sm text-gray-300">
                    Amazon Business Mentor
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Floating detail */}
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: reduce ? 0 : 0.6,
                delay: reduce ? 0 : 0.4,
              }}
              className="relative mx-auto -mt-5 w-[85%] rounded-xl border border-white/10 bg-[#0C121A]/95 p-4 shadow-2xl backdrop-blur-xl sm:p-5"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M12 2v4" />
                    <path d="m16.2 7.8 2.8-2.8" />
                    <path d="M18 12h4" />
                    <path d="M2 12h4" />
                    <path d="m4.9 5 2.8 2.8" />
                    <path d="M8 12a4 4 0 1 1 8 0c0 2-2 3-2 5h-4c0-2-2-3-2-5Z" />
                    <path d="M10 20h4" />
                  </svg>
                </div>

                <div>
                  <p className="text-sm font-semibold text-white">
                    Learn by doing
                  </p>
                  <p className="mt-1 text-xs leading-5 text-gray-400 sm:text-sm">
                    Practical learning. Clear direction. Real business skills.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Mentor content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="max-w-2xl"
          >
            {/* Eyebrow */}
            <motion.div
              variants={fadeUp}
              className="mb-5 flex items-center gap-3"
            >
              <span className="h-px w-8 bg-cyan-400" />

              <span className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-300 sm:text-sm">
                Meet Your Mentor
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              variants={fadeUp}
              className="text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-[3.5rem] xl:text-[3.8rem]"
            >
              Learn from someone
              <span className="mt-2 block text-cyan-400">who has done it.</span>
            </motion.h2>

            {/* Description */}
            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-xl text-base leading-8 text-gray-400 sm:mt-7 sm:text-lg"
            >
              Build your Amazon business with practical knowledge, clear
              strategies, and guidance that goes beyond theory. Learn how to
              research products, work with suppliers, build brands, and create a
              business with confidence.
            </motion.p>

            {/* Divider */}
            <motion.div
              initial={reduce ? false : { width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{
                duration: reduce ? 0 : 0.7,
                delay: reduce ? 0 : 0.35,
              }}
              className="my-8 h-px max-w-xl bg-gradient-to-r from-cyan-400/30 via-white/10 to-transparent"
            />

            {/* Mentor information */}
            <motion.div variants={fadeUp} className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/[0.08] text-cyan-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="8" r="4" />
                  <path d="M5 21v-2a7 7 0 0 1 14 0v2" />
                  <path d="m9 15 3 2 3-2" />
                </svg>
              </div>

              <div className="pt-0.5">
                <h3 className="text-lg font-bold text-white sm:text-xl">
                  Samiullah Akbari
                </h3>

                <p className="mt-1 text-sm leading-6 text-gray-400 sm:text-base">
                  Practical learning. Clear direction. Real business skills.
                </p>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.a
              variants={fadeUp}
              href="#contact"
              whileHover={reduce ? undefined : { x: 4 }}
              whileTap={reduce ? undefined : { scale: 0.98 }}
              className="group mt-9 inline-flex items-center gap-3 rounded-lg border border-cyan-400/25 bg-cyan-400/[0.06] px-5 py-3.5 text-sm font-bold text-cyan-300 transition-colors duration-300 hover:border-cyan-400/50 hover:bg-cyan-400/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            >
              Meet your mentor
              <motion.span
                animate={reduce ? undefined : { x: [0, 3, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatDelay: 1,
                }}
                aria-hidden="true"
              >
                →
              </motion.span>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MentorSection;
