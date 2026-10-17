import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";

const steps = [
  {
    number: "01",
    title: "Choose Your Path",
    description:
      "Choose the Amazon skill you want to master, whether it's FBA, product research, Alibaba sourcing, branding, or PPC.",
    tag: "FIND YOUR FOCUS",
  },
  {
    number: "02",
    title: "Learn the Strategy",
    description:
      "Follow clear and practical lessons that explain the strategies, tools, and systems used in real Amazon businesses.",
    tag: "BUILD KNOWLEDGE",
  },
  {
    number: "03",
    title: "Practice & Apply",
    description:
      "Turn knowledge into action by practicing product research, analyzing opportunities, creating strategies, and solving real problems.",
    tag: "GET HANDS-ON",
  },
  {
    number: "04",
    title: "Build & Scale",
    description:
      "Use what you learn to build your Amazon business and develop the skills needed to grow it over time.",
    tag: "MOVE FORWARD",
  },
];

const HowItWorks = () => {
  const shouldReduceMotion = useReducedMotion();

  const reveal = (delay = 0) => ({
    initial: shouldReduceMotion ? false : { opacity: 0, y: 18 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: {
      duration: shouldReduceMotion ? 0 : 0.55,
      delay: shouldReduceMotion ? 0 : delay,
    },
  });

  return (
    <section
      id="how-it-works"
      className="relative isolate overflow-hidden bg-[#070B10] py-20 text-white sm:py-28"
    >
      {/* Subtle cyan grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.12]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(34,211,238,0.13) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.13) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "linear-gradient(to bottom, transparent, black 18%, black 82%, transparent)",
        }}
      />

      {/* Ambient cyan lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-20 -z-10 h-96 w-96 rounded-full bg-cyan-500/[0.09] blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-0 -z-10 h-96 w-96 rounded-full bg-cyan-400/[0.08] blur-[120px]"
      />

      {/* Top accent */}
      <div
        aria-hidden="true"
        className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"
      />

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Section heading */}
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <motion.div {...reveal()}>
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-8 bg-cyan-400" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">
                The learning process
              </span>
            </div>

            <h2 className="mt-5 max-w-lg text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Learn it.
              <br />
              <span className="bg-gradient-to-r from-cyan-300 to-cyan-500 bg-clip-text text-transparent">
                Put it to work.
              </span>
            </h2>
          </motion.div>

          <motion.div {...reveal(0.1)} className="lg:pb-2">
            <p className="max-w-xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
              Building an Amazon business takes more than watching lessons. Our
              approach helps you understand the fundamentals, practice what
              matters, and turn what you learn into useful skills.
            </p>
          </motion.div>
        </div>

        {/* Steps */}
        <div className="relative mt-14 border-t border-white/10 sm:mt-20">
          {steps.map((step, index) => (
            <motion.article
              key={step.number}
              initial={shouldReduceMotion ? false : { opacity: 0, x: -14 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.5,
                delay: shouldReduceMotion ? 0 : index * 0.08,
              }}
              className="group relative grid gap-4 border-b border-white/10 py-8 transition-colors duration-300 hover:bg-white/[0.025] sm:py-10 md:grid-cols-[100px_1fr_1.2fr_40px] md:items-center md:gap-8"
            >
              {/* Number */}
              <div className="flex items-center gap-3 md:block">
                <span className="font-mono text-sm font-semibold tabular-nums text-cyan-300">
                  {step.number}
                </span>

                <span className="h-px w-8 bg-cyan-400/40 md:hidden" />

                <span className="text-[10px] font-semibold tracking-[0.16em] text-slate-500 md:hidden">
                  {step.tag}
                </span>
              </div>

              {/* Title */}
              <div>
                <h3 className="text-2xl font-semibold tracking-tight text-white transition-colors duration-300 group-hover:text-cyan-300 sm:text-3xl">
                  {step.title}
                </h3>
              </div>

              {/* Description */}
              <div>
                <span className="mb-3 hidden text-[10px] font-semibold tracking-[0.18em] text-cyan-400/70 md:block">
                  {step.tag}
                </span>

                <p className="max-w-xl text-sm leading-7 text-slate-400 transition-colors duration-300 group-hover:text-slate-300 sm:text-base">
                  {step.description}
                </p>
              </div>

              {/* Arrow */}
              <div className="hidden h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.02] text-slate-500 transition-all duration-300 group-hover:border-cyan-400/50 group-hover:bg-cyan-400/10 group-hover:text-cyan-300 md:flex">
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </div>

              {/* Hover accent */}
              <div
                aria-hidden="true"
                className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-cyan-400 to-transparent transition-all duration-500 group-hover:w-full"
              />
            </motion.article>
          ))}
        </div>

        {/* Bottom call to action */}
        <motion.div
          {...reveal(0.1)}
          className="mt-10 flex flex-col gap-5 sm:mt-12 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="max-w-md text-sm leading-7 text-slate-400 sm:text-base">
            Ready to develop practical skills and take the next step in your
            Amazon business journey?
          </p>

          <Link
            to="/amazon-fba"
            className="group inline-flex w-fit items-center gap-3 rounded-lg border border-cyan-400/30 bg-cyan-400/10 px-6 py-3.5 text-sm font-semibold text-cyan-200 transition-all duration-300 hover:border-cyan-300/70 hover:bg-cyan-400/20 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-400"
          >
            Explore the courses
            <span
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
