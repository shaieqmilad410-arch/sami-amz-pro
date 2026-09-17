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
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative overflow-hidden bg-white py-24">
      {/* Background decorations */}
      <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-orange-400/10 blur-3xl" />

      <div className="absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-blue-400/10 blur-3xl" />

      <div className="relative mx-auto max-w-5xl px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <span className="mb-4 inline-block rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600">
            Frequently Asked Questions
          </span>

          <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Have Questions?
            <span className="text-[#FF9900]"> We Have Answers.</span>
          </h2>

          <p className="mt-5 text-lg leading-8 text-gray-600">
            Find answers to some of the most common questions about our Amazon
            business training.
          </p>
        </motion.div>

        {/* FAQ List */}
        <div className="mx-auto max-w-4xl space-y-4">
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                }}
                className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? "border-orange-200 bg-orange-50/40 shadow-lg shadow-orange-100/40"
                    : "border-gray-200 bg-white hover:border-orange-200 hover:shadow-md"
                }`}
              >
                {/* Question */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left sm:px-7"
                >
                  <span
                    className={`text-base font-semibold sm:text-lg ${
                      isOpen ? "text-orange-600" : "text-gray-900"
                    }`}
                  >
                    {faq.question}
                  </span>

                  {/* Animated + / - */}
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.25 }}
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xl font-light ${
                      isOpen
                        ? "bg-[#FF9900] text-white"
                        : "bg-gray-100 text-gray-700"
                    }`}
                  >
                    +
                  </motion.span>
                </button>

                {/* Answer */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        height: {
                          duration: 0.35,
                          ease: "easeInOut",
                        },
                        opacity: {
                          duration: 0.25,
                        },
                      }}
                    >
                      <div className="border-t border-orange-100 px-6 pb-6 pt-5 sm:px-7">
                        <p className="max-w-3xl text-base leading-7 text-gray-600">
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
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-14 text-center"
        >
          <p className="mb-5 text-gray-600">Still have questions?</p>

          <Link
            to="/contact"
            className="group inline-flex items-center gap-3 rounded-full bg-[#FF9900] px-7 py-3.5 font-semibold text-white shadow-lg shadow-orange-200 transition-all duration-300 hover:-translate-y-1 hover:bg-orange-500 hover:shadow-xl"
          >
            Contact Us
            <motion.span
              initial={{ x: 0 }}
              whileHover={{ x: 5 }}
              className="text-lg"
            >
              →
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
