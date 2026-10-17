import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  motion,
  useReducedMotion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

const PHOTO = "/Warmly Lit Bearded Man Portrait.png";

const CYAN = "#06B6D4";
const CYAN_LIGHT = "#22D3EE";

const EASE = [0.22, 1, 0.36, 1];

const useTypewriter = (
  text,
  { typeMs = 110, deleteMs = 55, holdMs = 1800, gapMs = 450 } = {},
) => {
  const [count, setCount] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    let timer;

    if (!deleting && count < text.length) {
      timer = setTimeout(() => setCount((c) => c + 1), typeMs);
    } else if (!deleting) {
      timer = setTimeout(() => setDeleting(true), holdMs);
    } else if (count > 0) {
      timer = setTimeout(() => setCount((c) => c - 1), deleteMs);
    } else {
      timer = setTimeout(() => setDeleting(false), gapMs);
    }

    return () => clearTimeout(timer);
  }, [count, deleting, text, typeMs, deleteMs, holdMs, gapMs]);

  return text.slice(0, count);
};

const Hero = () => {
  const reduce = useReducedMotion();
  const typed = useTypewriter("Sami AMZ Pro");
  const title = reduce ? "Sami AMZ Pro" : typed;

  const [imgError, setImgError] = useState(false);

  // 3D photo tilt
  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  const sx = useSpring(mx, { stiffness: 120, damping: 18 });
  const sy = useSpring(my, { stiffness: 120, damping: 18 });

  const rotateY = useTransform(sx, [-0.5, 0.5], [-7, 7]);
  const rotateX = useTransform(sy, [-0.5, 0.5], [7, -7]);

  const onMove = (e) => {
    if (reduce) return;

    const rect = e.currentTarget.getBoundingClientRect();

    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.14,
        delayChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: reduce ? 0 : 28 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: EASE },
    },
  };

  return (
    <section className="relative isolate overflow-hidden bg-black pt-[76px] text-white">
      {/* Cyan ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-1/3 -z-10 h-[520px] w-[520px] rounded-full bg-[#06B6D4]/20 blur-[140px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 bottom-0 -z-10 h-[360px] w-[360px] rounded-full bg-[#06B6D4]/10 blur-[120px]"
      />

      {/* Subtle background grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(34,211,238,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.5) 1px, transparent 1px)",
          backgroundSize: "55px 55px",
          maskImage: "linear-gradient(to bottom, black, transparent 85%)",
        }}
      />

      <div className="mx-auto grid min-h-[calc(100vh-76px)] max-w-7xl grid-cols-1 items-stretch gap-10 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8 lg:py-16">
        {/* LEFT: TEXT */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col justify-center"
        >
          <motion.div variants={item} className="mb-6 flex items-center gap-3">
            <span className="h-px w-10 bg-[#06B6D4]" />
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#22D3EE] sm:text-sm">
              Amazon Business Education
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            aria-label="Sami AMZ Pro"
            className="relative text-5xl font-extrabold leading-[1.1] tracking-tight sm:text-6xl xl:text-7xl"
          >
            <span aria-hidden="true" className="invisible">
              Sami AMZ Pro
            </span>

            <span
              aria-hidden="true"
              className="absolute inset-0 text-[#06B6D4]"
            >
              {title}

              {!reduce && (
                <motion.span
                  className="ml-1 inline-block h-[0.9em] w-[3px] translate-y-[0.1em] bg-[#22D3EE]"
                  animate={{ opacity: [1, 1, 0, 0] }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    times: [0, 0.5, 0.5, 1],
                  }}
                />
              )}
            </span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-lg text-base leading-relaxed text-gray-300 sm:text-lg"
          >
            Learn how to find winning products, launch your store and grow a
            profitable Amazon business, step by step.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-9 flex flex-wrap items-center gap-5"
          >
            <motion.div
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.97 }}
              className="inline-block"
            >
              <Link
                to="/courses"
                className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-[#06B6D4] px-7 py-3.5 text-sm font-bold text-gray-950 shadow-[0_8px_28px_rgba(6,182,212,0.3)] transition-colors duration-300 hover:bg-[#22D3EE] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#22D3EE]"
              >
                <span className="relative z-10">Start Learning</span>

                <span className="relative z-10 text-lg transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>

                <span className="absolute -left-12 top-0 h-full w-8 rotate-12 bg-white/30 blur-sm transition-all duration-700 group-hover:left-[110%]" />
              </Link>
            </motion.div>

            <div className="flex items-center gap-2 text-sm text-gray-400">
              <span className="h-2 w-2 rounded-full bg-[#22D3EE] shadow-[0_0_12px_rgba(34,211,238,0.8)]" />
              Learn. Build. Grow.
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT: PHOTO */}
        <motion.div
          initial={{ opacity: 0, y: reduce ? 0 : 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: EASE, delay: 0.3 }}
          className="relative min-h-[420px] [perspective:1200px] lg:min-h-0"
          onMouseMove={onMove}
          onMouseLeave={onLeave}
        >
          {/* Rotating cyan ring */}
          <motion.div
            aria-hidden="true"
            className="absolute -inset-3 rounded-[2.4rem] opacity-70 blur-[2px]"
            style={{
              background:
                "conic-gradient(from 0deg, #06B6D4, transparent 30%, #22D3EE 55%, transparent 80%, #06B6D4)",
            }}
            animate={reduce ? undefined : { rotate: 360 }}
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          {/* Photo card */}
          <motion.div
            style={
              reduce
                ? undefined
                : {
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d",
                  }
            }
            className="relative h-full min-h-[420px] overflow-hidden rounded-[2rem] border border-cyan-300/20 bg-neutral-900 shadow-[0_0_50px_rgba(6,182,212,0.12)] lg:min-h-0"
          >
            {!imgError ? (
              <motion.img
                src={PHOTO}
                alt="Sami"
                onError={() => setImgError(true)}
                className="absolute inset-0 h-full w-full object-cover object-top"
                initial={{
                  scale: reduce ? 1 : 1.25,
                  filter: "blur(12px)",
                }}
                animate={{ scale: 1, filter: "blur(0px)" }}
                transition={{
                  duration: 1.6,
                  ease: EASE,
                  delay: 0.5,
                }}
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-neutral-800 to-neutral-950 text-8xl font-extrabold text-[#06B6D4]">
                S
              </div>
            )}

            {/* Bottom fade */}
            <div
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/70 to-transparent"
            />

            {/* Cyan light sweep */}
            {!reduce && (
              <motion.div
                aria-hidden="true"
                className="absolute inset-y-0 -left-1/2 w-1/3 -skew-x-12 bg-cyan-200/15 blur-xl"
                initial={{ x: "-100%" }}
                animate={{ x: "450%" }}
                transition={{
                  duration: 1.6,
                  ease: "easeInOut",
                  delay: 1.4,
                }}
              />
            )}

            {/* Photo label */}
            <div className="absolute bottom-6 left-6 z-10">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#22D3EE]">
                Amazon Business Mentor
              </p>
              <p className="mt-1 text-xl font-bold text-white sm:text-2xl">
                Sami AMZ Pro
              </p>
            </div>
          </motion.div>

          {/* Floating shopping cart badge */}
          <motion.div
            aria-hidden="true"
            className="absolute -left-3 top-8 flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-300/20 bg-neutral-950/90 shadow-[0_0_25px_rgba(6,182,212,0.15)] backdrop-blur sm:-left-6"
            initial={{ opacity: 0, scale: 0.6 }}
            animate={
              reduce
                ? { opacity: 1, scale: 1 }
                : { opacity: 1, scale: 1, y: [0, -12, 0] }
            }
            transition={{
              opacity: { delay: 1.2, duration: 0.5 },
              scale: { delay: 1.2, duration: 0.6, ease: EASE },
              y: {
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.8,
              },
            }}
          >
            <svg
              width="26"
              height="26"
              viewBox="0 0 24 24"
              fill="none"
              stroke={CYAN_LIGHT}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="9" cy="20" r="1.5" />
              <circle cx="18" cy="20" r="1.5" />
              <path d="M2 3h3l2.6 12.4a1 1 0 0 0 1 .8h9.2a1 1 0 0 0 1-.8L20 7H6" />
            </svg>
          </motion.div>

          {/* Floating growth badge */}
          <motion.div
            aria-hidden="true"
            className="absolute -right-3 bottom-10 flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-100/20 bg-[#06B6D4] shadow-[0_10px_30px_rgba(6,182,212,0.4)] sm:-right-6"
            initial={{ opacity: 0, scale: 0.6 }}
            animate={
              reduce
                ? { opacity: 1, scale: 1 }
                : { opacity: 1, scale: 1, y: [0, 12, 0] }
            }
            transition={{
              opacity: { delay: 1.4, duration: 0.5 },
              scale: { delay: 1.4, duration: 0.6, ease: EASE },
              y: {
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2,
              },
            }}
          >
            <svg
              width="26"
              height="26"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#083344"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 17l6-6 4 4 8-8" />
              <path d="M15 7h6v6" />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
