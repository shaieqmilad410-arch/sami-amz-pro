import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const phrases = ["SAMI AMZ PRO"];

  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Typing animation
  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];

    const typingSpeed = isDeleting ? 35 : 75;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentPhrase.substring(0, displayText.length + 1));

        if (displayText.length === currentPhrase.length) {
          setTimeout(() => {
            setIsDeleting(true);
          }, 1800);
        }
      } else {
        setDisplayText(currentPhrase.substring(0, displayText.length - 1));

        if (displayText.length === 0) {
          setIsDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % phrases.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, phraseIndex]);

  return (
    <section
      id="home"
      className="relative flex min-h-screen w-full items-center overflow-hidden"
    >
      {/* =========================================
          BACKGROUND IMAGE
          Replace this URL with your own image
      ========================================= */}

      <div
        className="absolute inset-0 -z-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('myhero.png')",
        }}
      />

      {/* =========================================
          DARK OVERLAY
      ========================================= */}

      <div className="absolute inset-0 -z-10 bg-black/45" />

      {/* =========================================
          GRADIENT OVERLAY
      ========================================= */}

      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/75 via-black/40 to-black/10" />

      {/* =========================================
          CONTENT
      ========================================= */}

      <div className="mx-auto flex w-full max-w-7xl items-center px-6 py-20 sm:px-8 lg:px-12 xl:px-16">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="max-w-3xl"
        >
          {/* Badge */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.2,
            }}
            className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 backdrop-blur-md"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-400 opacity-75" />

              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-orange-500" />
            </span>

            {/* <span className="text-sm font-semibold tracking-wide text-white">
              SamiAMZ Pro
            </span> */}
          </motion.div>

          {/* =========================================
              HEADING
          ========================================= */}

          <h1 className="min-h-[180px] text-4xl font-black leading-[1.05] tracking-[-0.04em] text-white sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5rem]">
            {displayText}

            <span className="ml-2 inline-block h-[0.85em] w-[3px] animate-pulse bg-orange-500 align-middle" />
          </h1>

          {/* =========================================
              PARAGRAPH
          ========================================= */}

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.8,
            }}
            className="mt-7 max-w-2xl text-base font-medium leading-8 text-white/80 sm:text-lg md:text-xl"
          >
            We help businesses build stronger brands, manage their products, and
            reach more customers through modern e-commerce solutions designed
            for sustainable growth.
          </motion.p>

          {/* =========================================
              BUTTONS
          ========================================= */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 1,
            }}
            className="mt-9 flex flex-col gap-4 sm:flex-row"
          >
            {/* Contact */}

            <motion.a
              href="#contact"
              whileHover={{
                scale: 1.05,
                y: -2,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="group inline-flex items-center justify-center gap-3 rounded-xl bg-orange-500 px-8 py-4 text-sm font-bold text-white shadow-xl shadow-orange-500/30 transition-all duration-300 hover:bg-orange-600"
            >
              Contact Us
              <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </motion.a>

            {/* About */}

            <motion.a
              href="#about"
              whileHover={{
                scale: 1.05,
                y: -2,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="inline-flex items-center justify-center rounded-xl border border-white/30 bg-white/10 px-8 py-4 text-sm font-bold text-white backdrop-blur-md transition-all duration-300 hover:bg-white/20"
            >
              About Us
            </motion.a>
          </motion.div>

          {/* =========================================
              TRUST INFORMATION
          ========================================= */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.8,
              delay: 1.3,
            }}
            className="mt-8 flex flex-wrap gap-x-7 gap-y-3 text-sm font-medium text-white/70"
          >
            <span className="flex items-center gap-2">
              <span className="text-orange-400">✓</span>
              Professional Service
            </span>

            <span className="flex items-center gap-2">
              <span className="text-orange-400">✓</span>
              Reliable Solutions
            </span>

            <span className="flex items-center gap-2">
              <span className="text-orange-400">✓</span>
              Built For Growth
            </span>
          </motion.div>
        </motion.div>
      </div>

      {/* =========================================
          BOTTOM FADE
      ========================================= */}

      <div className="pointer-events-none absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-black/30 to-transparent" />
    </section>
  );
};

export default Hero;
