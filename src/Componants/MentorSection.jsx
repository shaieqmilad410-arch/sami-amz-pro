import React from "react";
import { motion } from "framer-motion";

const MentorSection = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: 25,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section className="bg-white py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          {/* =================================
              IMAGE
          ================================= */}

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative mx-auto w-full max-w-lg"
          >
            {/* Orange vertical line */}

            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.9,
                delay: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{ transformOrigin: "top" }}
              className="absolute -left-3 top-8 bottom-8 z-10 w-1 rounded-full bg-orange-500 sm:-left-4"
            />

            {/* Image */}

            <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.8,
                delay: 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative h-[430px] w-full overflow-hidden rounded-2xl bg-slate-100 sm:h-[520px]"
            >
              <motion.img
                src="/sami photo.jpeg"
                alt="Amazon Business Mentor"
                className="h-full w-full object-cover object-center"
                initial={{ scale: 1.04 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.06 }}
                transition={{
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                }}
              />

              {/* Very subtle image overlay */}

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </motion.div>
          </motion.div>

          {/* =================================
              CONTENT
          ================================= */}

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            className="max-w-2xl"
          >
            {/* Label */}

            <motion.div
              variants={fadeUp}
              className="mb-5 flex items-center gap-3"
            >
              <motion.span
                initial={{ width: 0 }}
                whileInView={{ width: 32 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: 0.2,
                }}
                className="h-px bg-orange-500"
              />

              <span className="text-sm font-semibold uppercase tracking-[0.18em] text-orange-500">
                Your Mentor
              </span>
            </motion.div>

            {/* Heading */}

            <motion.h2
              variants={fadeUp}
              className="text-4xl font-bold leading-[1.08] tracking-[-0.03em] text-slate-900 sm:text-5xl lg:text-[3.7rem]"
            >
              Learn from someone
              <span className="block text-orange-500">who has done it.</span>
            </motion.h2>

            {/* Description */}

            <motion.p
              variants={fadeUp}
              className="mt-7 max-w-xl text-base leading-8 text-slate-600 sm:text-lg"
            >
              Build your Amazon business with practical knowledge, clear
              strategies, and guidance that goes beyond theory. Learn how to
              research products, work with suppliers, build brands, and create a
              business with confidence.
            </motion.p>

            {/* Divider */}

            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.5,
              }}
              className="my-8 h-px max-w-xl bg-slate-200"
            />

            {/* Mentor information */}

            <motion.div variants={fadeUp} className="flex items-start gap-4">
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.7,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  type: "spring",
                  stiffness: 180,
                  damping: 14,
                }}
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-orange-50 text-orange-500"
              >
                <i className="fa-solid fa-user-tie"></i>
              </motion.div>

              <div>
                <h3 className="text-lg font-semibold text-slate-900">
                  Samiullah Akbari
                </h3>

                <p className="mt-1 text-sm leading-6 text-slate-500">
                  Practical learning. Clear direction. Real business skills.
                </p>
              </div>
            </motion.div>

            {/* CTA */}

            <motion.a
              variants={fadeUp}
              href="#contact"
              whileHover={{ x: 5 }}
              whileTap={{ scale: 0.97 }}
              className="group mt-9 inline-flex items-center gap-3 text-sm font-bold text-slate-900"
            >
              <span className="relative pb-1">
                Meet your mentor
                <span className="absolute bottom-0 left-0 h-0.5 w-full bg-orange-500 transition-all duration-300 group-hover:w-2/3" />
              </span>

              <motion.i
                className="fa-solid fa-arrow-right text-orange-500"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MentorSection;
