import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const topics = [
  {
    id: 1,
    title: "Amazon FBA",
    description:
      "Learn how Amazon FBA works, from finding the right product to launching and growing a profitable Amazon business.",
    image: "public/fba.webp",
    tag: "Amazon FBA",
  },
  {
    id: 2,
    title: "Alibaba & Sourcing",
    description:
      "Learn how to find reliable suppliers on Alibaba, compare products, negotiate prices, and build a strong sourcing strategy.",
    image: "public/baba-2026-1.png",
    tag: "Sourcing",
  },
  {
    id: 3,
    title: "Product Research",
    description:
      "Discover how to analyze products, competition, demand, keywords, and market opportunities before investing your money.",
    image: "public/research_01.jpg",
    tag: "Research",
  },
  {
    id: 4,
    title: "Amazon Branding",
    description:
      "Learn how to build a professional Amazon brand, create a strong identity, improve your listings, and grow long-term.",
    image: "public/branding.jpeg",
    tag: "Branding",
  },
  {
    id: 5,
    title: "Amazon PPC",
    description:
      "Understand Amazon advertising, campaign structure, keywords, optimization, and strategies for improving your advertising results.",
    image: "public/1677451122577.jfif",
    tag: "Advertising",
  },
  {
    id: 6,
    title: "Business Scaling",
    description:
      "Learn how to move from a small Amazon business to a scalable operation with better systems, strategy, and profitability.",
    image: "public/scalinng.jpg",
    tag: "Growth",
  },
];

const AmazonTopics = () => {
  return (
    <section className="relative overflow-hidden bg-[#f8fafc] py-24">
      {/* Background decoration */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="absolute -left-40 top-40 h-96 w-96 rounded-full bg-orange-100 blur-3xl"
      />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
        className="absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-blue-100 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex rounded-full bg-orange-50 px-4 py-2 text-sm font-semibold text-[#FF9900]">
            What You Will Learn
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Master the Skills Behind a
            <span className="text-[#FF9900]"> Successful Amazon Business</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
            Learn the complete Amazon business process — from product research
            and sourcing to branding, advertising, and scaling.
          </p>
        </motion.div>

        {/* Topic Cards */}
        <div className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {topics.map((topic, index) => (
            <motion.article
              key={topic.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              whileHover={{ y: -10 }}
              className="group overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition-shadow duration-300 hover:shadow-2xl"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <motion.img
                  src={topic.image}
                  alt={topic.title}
                  className="h-full w-full object-cover"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.5 }}
                />

                {/* Image overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                {/* Tag */}
                <div className="absolute left-4 top-4">
                  {/* <span className="rounded-full bg-white/95 px-3 py-1.5 text-xs font-bold text-gray-800 shadow-sm">
                    {topic.tag}
                  </span> */}
                </div>

                {/* Number */}
                {/* <div className="absolute bottom-4 right-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FF9900] text-sm font-bold text-white shadow-lg">
                    0{index + 1}
                  </span>
                </div> */}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-[#FF9900]">
                  {topic.title}
                </h3>

                <p className="mt-3 min-h-[72px] text-sm leading-6 text-gray-500">
                  {topic.description}
                </p>

                {/* Learn More */}
                {/* <div className="mt-6 border-t border-gray-100 pt-5">
                  <Link
                    to="/amazonfba"
                    className="group/link inline-flex items-center gap-2 font-semibold text-gray-900 transition-colors duration-300 hover:text-[#FF9900]"
                  >
                    Learn More
                    <motion.span
                      className="inline-block"
                      animate={{ x: [0, 5, 0] }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                      }}
                    >
                      →
                    </motion.span>
                  </Link>
                </div> */}
              </div>
            </motion.article>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-14 text-center"
        >
          <p className="mb-4 text-sm text-gray-500">
            Ready to start building your Amazon business?
          </p>

          <Link
            to="/courses"
            className="inline-flex items-center gap-2 rounded-xl bg-gray-900 px-7 py-3.5 font-semibold text-white transition-all duration-300 hover:bg-[#FF9900] hover:shadow-lg"
          >
            Start Learning
            <span>→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default AmazonTopics;
