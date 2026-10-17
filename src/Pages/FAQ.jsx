import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const faqData = [
  {
    question: "Is this Amazon business training suitable for beginners?",
    answer:
      "Yes. The training is designed to take you from the fundamentals to more advanced Amazon business strategies. You do not need previous Amazon experience to get started.",
  },
  {
    question: "Do I need previous Amazon FBA experience?",
    answer:
      "No. We start with the basics and gradually move into important areas such as product research, sourcing, branding, PPC, and business growth.",
  },
  {
    question: "How long does it take to complete the training?",
    answer:
      "The learning time depends on your pace and the course you choose. You can study the lessons at your own speed and spend additional time applying each strategy to practical projects.",
  },
  {
    question: "Will I learn product research and sourcing?",
    answer:
      "Yes. Product research and sourcing are important parts of the training. You will learn how to evaluate product opportunities, understand suppliers, and develop a practical sourcing strategy.",
  },
  {
    question: "Will you teach Amazon PPC and advertising?",
    answer:
      "Yes. The training covers the fundamentals of Amazon advertising and PPC, including how advertising fits into a broader product-launch and business-growth strategy.",
  },
  {
    question: "Do I need a large budget to start?",
    answer:
      "Your required budget depends on the business model, product, market, inventory, and strategy you choose. The training focuses on helping you understand these factors before making important financial decisions.",
  },
  {
    question: "Will I receive support while learning?",
    answer:
      "Support depends on the specific course or learning program. Check the details of the course you are interested in to see what type of guidance and support is included.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section className="relative overflow-hidden bg-[#070B10] py-20 sm:py-24">
      {/* Background decorations */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-cyan-500/[0.08] blur-3xl" />

      <div className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-cyan-400/[0.06] blur-3xl" />

      <div className="relative mx-auto max-w-5xl px-5 sm:px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65 }}
          className="mx-auto mb-12 max-w-3xl text-center sm:mb-14"
        >
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/[0.08] px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-cyan-300 sm:text-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
            Frequently Asked Questions
          </span>

          <h2 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            Have Questions?
            <span className="block text-cyan-400">We Have Answers.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg sm:leading-8">
            Find answers to some of the most common questions about our Amazon
            business training.
          </p>
        </motion.div>

        {/* FAQ List */}
        <div className="mx-auto max-w-4xl space-y-3">
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.04,
                }}
                className={`overflow-hidden rounded-2xl border transition-colors duration-300 ${
                  isOpen
                    ? "border-cyan-400/35 bg-[#0C151E] shadow-lg shadow-cyan-950/20"
                    : "border-white/[0.09] bg-white/[0.025] hover:border-cyan-400/25 hover:bg-white/[0.04]"
                }`}
              >
                {/* Question */}
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-cyan-400 sm:gap-6 sm:px-7 sm:py-6"
                >
                  <span
                    className={`text-sm font-semibold leading-6 transition-colors sm:text-base sm:leading-7 ${
                      isOpen ? "text-cyan-300" : "text-gray-200"
                    }`}
                  >
                    {faq.question}
                  </span>

                  {/* Animated plus / minus */}
                  <motion.span
                    animate={{
                      rotate: isOpen ? 45 : 0,
                      backgroundColor: isOpen ? "#06B6D4" : "#17212B",
                    }}
                    transition={{ duration: 0.25 }}
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border text-xl font-light ${
                      isOpen
                        ? "border-cyan-400/50 text-black"
                        : "border-white/10 text-cyan-300"
                    }`}
                    aria-hidden="true"
                  >
                    +
                  </motion.span>
                </button>

                {/* Answer */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${index}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        height: {
                          duration: 0.3,
                          ease: "easeInOut",
                        },
                        opacity: {
                          duration: 0.2,
                        },
                      }}
                    >
                      <div className="border-t border-cyan-400/10 px-5 pb-6 pt-4 sm:px-7 sm:pt-5">
                        <p className="max-w-3xl text-sm leading-7 text-gray-400 sm:text-base">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="mt-14 text-center sm:mt-16"
        >
          <p className="mb-5 text-sm text-gray-400 sm:text-base">
            Still have questions?
          </p>

          <Link
            to="/contact"
            className="group inline-flex items-center gap-3 rounded-xl border border-cyan-400/30 bg-cyan-500 px-7 py-3.5 font-semibold text-black shadow-lg shadow-cyan-950/30 transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-300 hover:shadow-cyan-500/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#070B10]"
          >
            Contact Us
            <motion.span
              className="text-lg"
              initial={{ x: 0 }}
              whileHover={{ x: 5 }}
            >
              →
            </motion.span>
          </Link>

          <p className="mt-5 text-xs text-gray-600">
            We’re here to help you take the next step.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
