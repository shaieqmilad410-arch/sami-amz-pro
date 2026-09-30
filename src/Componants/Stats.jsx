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

/* Counts from 0 to the number in the string when it scrolls into view.
   "10+" -> 10 + "+", "5K+" -> 5 + "K+", "95%" -> 95 + "%", "24/7" -> 24 + "/7" */
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
      ease: [0.22, 1, 0.36, 1], // fast start, smooth slow-down at the end
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
  return (
    <section className="relative overflow-hidden bg-white py-20">
      {/* Background decoration */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="absolute -left-20 top-10 h-64 w-64 rounded-full bg-orange-100 blur-3xl"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
        className="absolute -right-20 bottom-10 h-64 w-64 rounded-full bg-blue-100 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-14 max-w-2xl text-center"
        >
          <span className="mb-4 inline-block rounded-full bg-orange-50 px-4 py-2 text-sm font-semibold text-[#FF9900]">
            Trusted Learning
          </span>

          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Learn From a Platform Built for
            <span className="text-[#FF9900]"> Results</span>
          </h2>

          <p className="mt-5 text-base leading-7 text-gray-600 sm:text-lg">
            Everything you need to understand Amazon business, build your
            skills, and turn knowledge into real-world results.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
              }}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              className="group rounded-2xl border border-gray-100 bg-white p-7 text-center shadow-sm transition-shadow duration-300 hover:shadow-xl"
            >
              {/* Number */}
              <motion.div
                initial={{ scale: 0.7, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.12 + 0.2,
                  type: "spring",
                  stiffness: 120,
                }}
                className="text-4xl font-bold text-[#FF9900]"
              >
                <CountUp value={stat.number} delay={index * 0.12 + 0.2} />
              </motion.div>

              {/* Label */}
              <h3 className="mt-3 text-lg font-bold text-gray-900">
                {stat.label}
              </h3>

              {/* Description */}
              <p className="mt-2 text-sm leading-6 text-gray-500">
                {stat.description}
              </p>

              {/* Bottom line */}
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "40px" }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.12 + 0.4,
                }}
                className="mx-auto mt-5 h-1 rounded-full bg-[#FF9900]"
              />
            </motion.div>
          ))}
        </div>

        {/* Trust message */}
        {/* <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm text-gray-500"
        >
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-green-50 text-green-600">
              ✓
            </span>
            Practical Training
          </div>

          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-green-50 text-green-600">
              ✓
            </span>
            Step-by-Step Lessons
          </div>

          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-green-50 text-green-600">
              ✓
            </span>
            Beginner Friendly
          </div>

          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-green-50 text-green-600">
              ✓
            </span>
            Real-World Strategies
          </div>
        </motion.div> */}
      </div>
    </section>
  );
};

export default Stats;
