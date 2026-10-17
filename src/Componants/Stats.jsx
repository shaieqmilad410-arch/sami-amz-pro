import React, { useEffect, useRef } from "react";
import {
  motion,
  animate,
  useInView,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from "framer-motion";

const stats = [
  {
    number: "10+",
    label: "Courses",
    description: "Practical Amazon business training",
  },
  {
    number: "5K+",
    label: "Students",
    description: "Learners building real businesses",
  },
  {
    number: "95%",
    label: "Success Rate",
    description: "Students completing their learning path",
  },
  {
    number: "24/7",
    label: "Learning",
    description: "Learn at your own pace",
  },
];

// Counts from 0 to the target when the number enters the viewport.
const CountUp = ({ value, delay = 0, duration = 2 }) => {
  const reduce = useReducedMotion();
  const match = String(value).match(/^(\d+)(.*)$/);
  const target = match ? parseInt(match[1], 10) : 0;
  const suffix = match ? match[2] : "";

  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const count = useMotionValue(reduce ? target : 0);
  const rounded = useTransform(count, (v) => Math.round(v));

  useEffect(() => {
    if (!inView || reduce) return;

    const controls = animate(count, target, {
      duration,
      delay,
      ease: [0.22, 1, 0.36, 1],
    });

    return () => controls.stop();
  }, [inView, reduce, target, duration, delay, count]);

  if (!match) return <span>{value}</span>;

  return (
    <span ref={ref} className="tabular-nums">
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
};

const Stats = () => {
  const reduce = useReducedMotion();

  return (
    <section className="relative isolate overflow-hidden bg-[#070B10] py-20 sm:py-24 lg:py-28">
      {/* Hero-style background atmosphere */}
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
              "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)",
          }}
        />

        {/* Cyan ambient glow */}
        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="absolute -left-40 top-0 h-[420px] w-[420px] rounded-full bg-cyan-500/[0.12] blur-[120px]"
        />

        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.15 }}
          className="absolute -right-40 bottom-0 h-[440px] w-[440px] rounded-full bg-cyan-400/[0.09] blur-[130px]"
        />

        {/* Fine top border */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />

        {/* Fine bottom border */}
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Section heading */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-12 max-w-3xl text-center sm:mb-16"
        >
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/[0.07] px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-cyan-300 sm:text-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
            Trusted Learning
          </span>

          <h2 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            Learn From a Platform Built for
            <span className="mt-2 block text-cyan-400">Results</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg sm:leading-8">
            Everything you need to understand Amazon business, build your
            skills, and turn knowledge into real-world results.
          </p>
        </motion.div>

        {/* Stats cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={reduce ? false : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.55,
                delay: reduce ? 0 : index * 0.1,
              }}
              whileHover={reduce ? undefined : { y: -6 }}
              className="group relative overflow-hidden rounded-2xl border border-white/[0.09] bg-[#0C121A]/80 p-6 text-center backdrop-blur-sm transition-colors duration-300 hover:border-cyan-400/30 hover:bg-[#0D1721]/95 sm:p-7"
            >
              {/* Top cyan accent */}
              <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent opacity-50 transition-opacity duration-300 group-hover:opacity-100" />

              {/* Subtle hover glow */}
              <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-cyan-400/[0.05] blur-3xl transition-colors duration-300 group-hover:bg-cyan-400/[0.12]" />

              {/* Number */}
              <motion.div
                initial={reduce ? false : { scale: 0.85, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.55,
                  delay: reduce ? 0 : index * 0.1 + 0.15,
                  type: "spring",
                  stiffness: 120,
                }}
                className="relative text-4xl font-extrabold tracking-tight text-cyan-400 sm:text-5xl"
              >
                <CountUp
                  value={stat.number}
                  delay={reduce ? 0 : index * 0.1 + 0.15}
                />
              </motion.div>

              {/* Label */}
              <h3 className="relative mt-4 text-lg font-bold text-white">
                {stat.label}
              </h3>

              {/* Description */}
              <p className="relative mx-auto mt-2 max-w-[220px] text-sm leading-6 text-gray-400">
                {stat.description}
              </p>

              {/* Bottom accent */}
              <motion.div
                initial={reduce ? false : { width: 0 }}
                whileInView={{ width: "36px" }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: reduce ? 0 : index * 0.1 + 0.3,
                }}
                className="relative mx-auto mt-6 h-0.5 rounded-full bg-cyan-400"
              />
            </motion.div>
          ))}
        </div>

        {/* Trust points */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mx-auto mt-12 flex max-w-5xl flex-wrap items-center justify-center gap-x-8 gap-y-4 border-t border-white/[0.08] pt-8 text-sm text-gray-400 sm:mt-14 sm:gap-x-10"
        >
          {[
            "Practical Training",
            "Step-by-Step Lessons",
            "Beginner Friendly",
            "Real-World Strategies",
          ].map((item) => (
            <div key={item} className="flex items-center gap-2.5">
              <span className="flex h-5 w-5 items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-400/10 text-xs font-bold text-cyan-300">
                ✓
              </span>
              <span>{item}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;
