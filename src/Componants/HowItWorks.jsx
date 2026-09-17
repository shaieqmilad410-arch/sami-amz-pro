import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const steps = [
  {
    number: "01",
    title: "Choose Your Path",
    description:
      "Choose the Amazon skill you want to master, whether it's FBA, product research, Alibaba sourcing, branding, or PPC.",
    icon: "🎯",
  },
  {
    number: "02",
    title: "Learn the Strategy",
    description:
      "Follow clear and practical lessons that explain the strategies, tools, and systems used in real Amazon businesses.",
    icon: "📚",
  },
  {
    number: "03",
    title: "Practice & Apply",
    description:
      "Turn knowledge into action by practicing product research, analyzing opportunities, creating strategies, and solving real problems.",
    icon: "⚡",
  },
  {
    number: "04",
    title: "Build & Scale",
    description:
      "Use what you learn to build your Amazon business and develop the skills needed to grow it over time.",
    icon: "🚀",
  },
];

const HowItWorks = () => {
  return (
    <section className="relative overflow-hidden bg-white py-24">
      {/* Background decoration */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-orange-100/70 blur-3xl"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
        className="absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-blue-100/70 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex rounded-full bg-orange-50 px-4 py-2 text-sm font-semibold text-[#FF9900]">
            How It Works
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            From Learning to
            <span className="text-[#FF9900]"> Building Your Business</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
            A simple and practical learning system designed to help you
            understand Amazon business and turn knowledge into action.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative mt-16">
          {/* Connecting line - desktop */}
          <div className="absolute left-[12%] right-[12%] top-16 hidden h-px bg-gray-200 lg:block" />

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.12,
                }}
                className="relative text-center"
              >
                {/* Number/Icon */}
                <motion.div
                  whileHover={{ y: -6, scale: 1.05 }}
                  transition={{ duration: 0.25 }}
                  className="relative z-10 mx-auto flex h-32 w-32 items-center justify-center rounded-full border-8 border-white bg-gray-900 shadow-xl"
                >
                  <div className="flex flex-col items-center">
                    <span className="text-3xl">{step.icon}</span>

                    <span className="mt-1 text-xs font-bold tracking-widest text-[#FF9900]">
                      {step.number}
                    </span>
                  </div>
                </motion.div>

                {/* Content */}
                <div className="mt-7">
                  <h3 className="text-xl font-bold text-gray-900">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-gray-500">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <Link
            to="/amazon-fba"
            className="group inline-flex items-center gap-3 rounded-xl bg-[#FF9900] px-7 py-3.5 font-semibold text-white shadow-lg shadow-orange-200 transition-all duration-300 hover:-translate-y-1 hover:bg-orange-500 hover:shadow-xl"
          >
            Start Learning
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
            >
              →
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
