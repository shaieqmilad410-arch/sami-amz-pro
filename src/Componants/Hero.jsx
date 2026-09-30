import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  motion,
  useReducedMotion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

/* 👉 Put your photo in the /public folder and set its file name here */
const PHOTO = "/IMG_5526.JPG.jpeg";

/* ---------- Looping typewriter: types -> holds -> deletes -> repeats forever ---------- */
const useTypewriter = (
  text,
  { typeMs = 110, deleteMs = 55, holdMs = 1800, gapMs = 450 } = {},
) => {
  const [count, setCount] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    let t;
    if (!deleting && count < text.length) {
      t = setTimeout(() => setCount((c) => c + 1), typeMs);
    } else if (!deleting) {
      t = setTimeout(() => setDeleting(true), holdMs);
    } else if (count > 0) {
      t = setTimeout(() => setCount((c) => c - 1), deleteMs);
    } else {
      t = setTimeout(() => setDeleting(false), gapMs);
    }
    return () => clearTimeout(t);
  }, [count, deleting, text, typeMs, deleteMs, holdMs, gapMs]);

  return text.slice(0, count);
};

const EASE = [0.22, 1, 0.36, 1];

const Hero = () => {
  const reduce = useReducedMotion();
  const typed = useTypewriter("Sami AMZ Pro");
  const title = reduce ? "Sami AMZ Pro" : typed;
  const [imgError, setImgError] = useState(false);

  /* Mouse tilt for the photo card (desktop) */
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 120, damping: 18 });
  const sy = useSpring(my, { stiffness: 120, damping: 18 });
  const rotateY = useTransform(sx, [-0.5, 0.5], [-7, 7]);
  const rotateX = useTransform(sy, [-0.5, 0.5], [7, -7]);

  const onMove = (e) => {
    if (reduce) return;
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  const left = {
    hidden: {},
    show: { transition: { staggerChildren: 0.14, delayChildren: 0.1 } },
  };
  const item = {
    hidden: { opacity: 0, y: reduce ? 0 : 28 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
  };

  return (
    <section className="relative isolate overflow-hidden bg-black pt-[76px] text-white">
      {/* Ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 top-1/3 -z-10 h-[520px] w-[520px] rounded-full bg-[#FF9900]/20 blur-[140px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 bottom-0 -z-10 h-[360px] w-[360px] rounded-full bg-[#FF9900]/10 blur-[120px]"
      />

      <div className="mx-auto grid min-h-[calc(100vh-76px)] max-w-7xl grid-cols-1 items-stretch gap-10 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8 lg:py-16">
        {/* ================= LEFT: TEXT ================= */}
        <motion.div
          variants={left}
          initial="hidden"
          animate="show"
          className="flex flex-col justify-center"
        >
          <motion.h1
            variants={item}
            aria-label="Sami AMZ Pro"
            className="relative text-5xl font-extrabold leading-[1.1] tracking-tight sm:text-6xl xl:text-7xl"
          >
            <span aria-hidden className="invisible">
              Sami AMZ Pro
            </span>
            <span aria-hidden className="absolute inset-0 text-[#FF9900]">
              {title}
              {!reduce && (
                <motion.span
                  className="ml-1 inline-block h-[0.9em] w-[3px] translate-y-[0.1em] bg-white"
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

          <motion.div variants={item} className="mt-9">
            <motion.div
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.97 }}
              className="inline-block"
            >
              <Link
                to="/courses"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-[#FF9900] px-7 py-3.5 text-sm font-bold text-gray-900 shadow-[0_8px_28px_rgba(255,153,0,0.3)] transition-colors duration-300 hover:bg-[#ffad33] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                <span className="relative z-10">Start Learning</span>
                <span className="relative z-10 text-lg transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
                <span className="absolute -left-12 top-0 h-full w-8 rotate-12 bg-white/30 blur-sm transition-all duration-700 group-hover:left-[110%]" />
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* ================= RIGHT: YOUR PHOTO ================= */}
        <motion.div
          initial={{ opacity: 0, y: reduce ? 0 : 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: EASE, delay: 0.3 }}
          className="relative min-h-[420px] [perspective:1200px] lg:min-h-0"
          onMouseMove={onMove}
          onMouseLeave={onLeave}
        >
          {/* rotating orange ring behind the photo */}
          <motion.div
            aria-hidden
            className="absolute -inset-3 rounded-[2.4rem] opacity-70 blur-[2px]"
            style={{
              background:
                "conic-gradient(from 0deg, #FF9900, transparent 30%, #ffad33 55%, transparent 80%, #FF9900)",
            }}
            animate={reduce ? undefined : { rotate: 360 }}
            transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
          />

          {/* photo card */}
          <motion.div
            style={
              reduce
                ? undefined
                : { rotateX, rotateY, transformStyle: "preserve-3d" }
            }
            className="relative h-full min-h-[420px] overflow-hidden rounded-[2rem] border border-white/10 bg-neutral-900 lg:min-h-0"
          >
            {!imgError ? (
              <motion.img
                src={PHOTO}
                alt="Sami"
                onError={() => setImgError(true)}
                className="absolute inset-0 h-full w-full object-cover object-top"
                initial={{ scale: reduce ? 1 : 1.25, filter: "blur(12px)" }}
                animate={{ scale: 1, filter: "blur(0px)" }}
                transition={{ duration: 1.6, ease: EASE, delay: 0.5 }}
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-neutral-800 to-neutral-950 text-8xl font-extrabold text-[#FF9900]">
                S
              </div>
            )}

            {/* bottom fade for depth */}
            <div
              aria-hidden
              className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/70 to-transparent"
            />

            {/* light sweep once photo lands */}
            {!reduce && (
              <motion.div
                aria-hidden
                className="absolute inset-y-0 -left-1/2 w-1/3 -skew-x-12 bg-white/15 blur-xl"
                initial={{ x: "-100%" }}
                animate={{ x: "450%" }}
                transition={{ duration: 1.6, ease: "easeInOut", delay: 1.4 }}
              />
            )}
          </motion.div>

          {/* floating badge: cart */}
          <motion.div
            aria-hidden
            className="absolute -left-3 top-8 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-black/80 shadow-xl backdrop-blur sm:-left-6"
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
              stroke="#FF9900"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="9" cy="20" r="1.5" />
              <circle cx="18" cy="20" r="1.5" />
              <path d="M2 3h3l2.6 12.4a1 1 0 0 0 1 .8h9.2a1 1 0 0 0 1-.8L20 7H6" />
            </svg>
          </motion.div>

          {/* floating badge: growth arrow */}
          <motion.div
            aria-hidden
            className="absolute -right-3 bottom-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FF9900] shadow-[0_10px_30px_rgba(255,153,0,0.4)] sm:-right-6"
            initial={{ opacity: 0, scale: 0.6 }}
            animate={
              reduce
                ? { opacity: 1, scale: 1 }
                : { opacity: 1, scale: 1, y: [0, 12, 0] }
            }
            transition={{
              opacity: { delay: 1.4, duration: 0.5 },
              scale: { delay: 1.4, duration: 0.6, ease: EASE },
              y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 },
            }}
          >
            <svg
              width="26"
              height="26"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#111827"
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
