import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";

const topics = [
  {
    id: 1,
    title: "Amazon FBA",
    description:
      "Learn how Amazon FBA works, from finding the right product to launching and growing a profitable Amazon business.",
    image: "/fba.webp",
    tag: "Amazon FBA",
    icon: "fa-solid fa-box-open",
  },
  {
    id: 2,
    title: "Alibaba & Sourcing",
    description:
      "Learn how to find reliable suppliers on Alibaba, compare products, negotiate prices, and build a strong sourcing strategy.",
    image: "/baba-2026-1.png",
    tag: "Sourcing",
    icon: "fa-solid fa-truck-fast",
  },
  {
    id: 3,
    title: "Product Research",
    description:
      "Discover how to analyze products, competition, demand, keywords, and market opportunities before investing your money.",
    image: "/research_01.jpg",
    tag: "Research",
    icon: "fa-solid fa-magnifying-glass-chart",
  },
  {
    id: 4,
    title: "Amazon Branding",
    description:
      "Learn how to build a professional Amazon brand, create a strong identity, improve your listings, and grow long-term.",
    image: "/branding.jpeg",
    tag: "Branding",
    icon: "fa-solid fa-tags",
  },
  {
    id: 5,
    title: "Amazon PPC",
    description:
      "Understand Amazon advertising, campaign structure, keywords, optimization, and strategies for improving your advertising results.",
    image: "/1677451122577.jfif",
    tag: "Advertising",
    icon: "fa-solid fa-chart-line",
  },
  {
    id: 6,
    title: "Business Scaling",
    description:
      "Learn how to move from a small Amazon business to a scalable operation with better systems, strategy, and profitability.",
    image: "/scalinng.jpg",
    tag: "Growth",
    icon: "fa-solid fa-arrow-trend-up",
  },
];

const AmazonTopics = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="learning-topics"
      className="relative isolate overflow-hidden bg-[#070B10] py-20 text-white sm:py-24 lg:py-28"
    >
      {/* Background grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.045]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(34,211,238,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.6) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />

      {/* Ambient cyan glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-40 -z-10 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-20 -z-10 h-96 w-96 rounded-full bg-cyan-400/10 blur-[120px]"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Section heading */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: reduceMotion ? 0 : 0.65 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/[0.07] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300 sm:text-sm">
            <i className="fa-solid fa-graduation-cap" aria-hidden="true" />
            What You Will Learn
          </span>

          <h2 className="mt-6 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            Master the Skills Behind a
            <span className="mt-1 block text-cyan-400">
              Successful Amazon Business
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
            Learn the complete Amazon business process — from product research
            and sourcing to branding, advertising, and scaling.
          </p>

          <div className="mx-auto mt-7 h-1 w-20 rounded-full bg-gradient-to-r from-cyan-600 to-cyan-300" />
        </motion.div>

        {/* Topic cards */}
        <div className="mt-12 grid gap-6 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {topics.map((topic, index) => (
            <motion.article
              key={topic.id}
              initial={reduceMotion ? false : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{
                duration: reduceMotion ? 0 : 0.5,
                delay: reduceMotion ? 0 : index * 0.07,
              }}
              whileHover={reduceMotion ? undefined : { y: -7 }}
              className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.09] bg-[#0B111A] transition-colors duration-300 hover:border-cyan-400/40 hover:shadow-[0_12px_45px_rgba(6,182,212,0.08)]"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden sm:h-56">
                <motion.img
                  src={topic.image}
                  alt={topic.title}
                  loading="lazy"
                  whileHover={reduceMotion ? undefined : { scale: 1.06 }}
                  transition={{ duration: 0.5 }}
                  className="h-full w-full object-cover"
                  onError={(event) => {
                    event.currentTarget.style.opacity = "0";
                  }}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#070B10] via-[#070B10]/15 to-black/10" />

                {/* Topic label */}
                <div className="absolute left-4 top-4">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-[#070B10]/80 px-3 py-1.5 text-xs font-semibold text-cyan-200 backdrop-blur-md">
                    <i
                      className={`${topic.icon} text-cyan-400`}
                      aria-hidden="true"
                    />
                    {topic.tag}
                  </span>
                </div>

                {/* Topic number */}
                {/* <span className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-300/30 bg-[#070B10]/85 text-sm font-bold text-cyan-300 backdrop-blur-md">
                  {String(topic.id).padStart(2, "0")}
                </span> */}
              </div>

              {/* Card content */}
              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <div className="flex items-start gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/[0.07] text-cyan-400 transition duration-300 group-hover:border-cyan-400/40 group-hover:bg-cyan-400/15">
                    <i className={`${topic.icon} text-lg`} aria-hidden="true" />
                  </span>

                  {/* <h3 className="pt-1 text-lg font-bold leading-snug text-white transition-colors duration-300 group-hover:text-cyan-300 sm:text-xl">
                    {topic.title}
                  </h3> */}
                </div>

                <p className="mt-4 flex-1 text-sm leading-7 text-slate-400">
                  {topic.description}
                </p>

                <div className="mt-6 border-t border-white/[0.08] pt-5">
                  <Link
                    to="/courses"
                    className="group/link inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 transition-colors hover:text-cyan-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                  >
                    Explore Courses
                    <i
                      className="fa-solid fa-arrow-right text-xs transition-transform duration-300 group-hover/link:translate-x-1"
                      aria-hidden="true"
                    />
                  </Link>
                </div>
              </div>

              {/* Bottom accent */}
              <div className="h-px w-full bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </motion.article>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: reduceMotion ? 0 : 0.6 }}
          className="mt-14 text-center sm:mt-16"
        >
          <p className="mb-5 text-sm text-slate-400 sm:text-base">
            Ready to start building your Amazon business?
          </p>

          <Link
            to="/courses"
            className="group inline-flex items-center justify-center gap-3 rounded-xl bg-cyan-400 px-7 py-3.5 text-sm font-bold text-[#070B10] transition duration-300 hover:bg-cyan-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.2)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200 focus-visible:ring-offset-2 focus-visible:ring-offset-[#070B10]"
          >
            <i className="fa-solid fa-graduation-cap" aria-hidden="true" />
            Start Learning
            <i
              className="fa-solid fa-arrow-right transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default AmazonTopics;
