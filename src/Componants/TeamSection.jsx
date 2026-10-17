import React, { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

const teamMembers = [
  {
    id: 1,
    name: "Samiullah Akbari",
    role: "Amazon Business Mentor",
    image: "/sami photo.jpeg",
    description:
      "Helps students understand Amazon business models, product research, and practical business strategies.",
  },
  {
    id: 2,
    name: "Milad Shaieq",
    role: "Web developer",
    image: "/milad1.jpeg",
    description:
      "Expert web developer building fast, responsive, optimized websites that boost online visibility.",
  },
  {
    id: 3,
    name: "Amin Sultani",
    role: "Graphic Designer",
    image: "/sultani3.jpeg",
    description:
      "Professional graphic designer creating high-impact visual branding that increases engagement and online visibility.",
  },
  {
    id: 4,
    name: "Jawid Mohammadi",
    role: "Manager and Coordinator",
    image: "/jawid.jpeg",
    description:
      "Experienced manager leading teams, optimizing operations, and driving consistent business growth successfully.",
  },
  {
    id: 5,
    name: "Shafiq Mandozai",
    role: "Business & Training Coordinator",
    image: "/shafiq.jpeg",
    description:
      "Business and training coordinator improving operations, organizing programs, and enhancing professional development success.",
  },
];

const AUTOPLAY_DELAY = 2000;
const STEP = 360 / teamMembers.length;

export default function TeamSection() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [radius, setRadius] = useState(290);

  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const updateRadius = () => {
      setRadius(window.innerWidth < 640 ? 205 : 290);
    };

    updateRadius();
    window.addEventListener("resize", updateRadius);

    return () => window.removeEventListener("resize", updateRadius);
  }, []);

  useEffect(() => {
    if (paused || prefersReducedMotion) return;

    const timer = window.setInterval(() => {
      setCurrent((previous) => (previous + 1) % teamMembers.length);
    }, AUTOPLAY_DELAY);

    return () => window.clearInterval(timer);
  }, [paused, prefersReducedMotion]);

  const nextSlide = () => {
    setCurrent((previous) => (previous + 1) % teamMembers.length);
  };

  const previousSlide = () => {
    setCurrent(
      (previous) => (previous - 1 + teamMembers.length) % teamMembers.length,
    );
  };

  const selectSlide = (index) => setCurrent(index);

  return (
    <section className="relative overflow-hidden bg-[#030609] py-20 text-white sm:py-24 lg:py-28">
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute left-1/2 top-[48%] h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/[0.09] blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-8 max-w-2xl text-center"
        >
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-cyan-500" />

            <span className="text-xs font-medium uppercase tracking-[0.25em] text-cyan-400">
              Meet Our Team
            </span>

            <span className="h-px w-8 bg-cyan-500" />
          </div>

          <h2 className="text-3xl font-normal tracking-tight text-white sm:text-4xl lg:text-5xl">
            The people behind
            <span className="mt-2 block text-cyan-400">your success.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
            Meet the professionals sharing their experience, skills, and
            practical knowledge to help you grow.
          </p>
        </motion.header>

        {/* 3D Carousel */}
        <div
          className="relative mx-auto h-[480px] w-full max-w-[1100px] overflow-hidden sm:h-[530px]"
          style={{ perspective: "1400px" }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) {
              setPaused(false);
            }
          }}
        >
          {/* Orbit ring */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[270px] w-[270px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/10 sm:h-[350px] sm:w-[350px]" />

          {/* Cards */}
          {teamMembers.map((member, index) => {
            const angle = ((index - current) * STEP * Math.PI) / 180;

            const x = Math.sin(angle) * radius;
            const depth = Math.cos(angle);

            const scale = 0.72 + ((depth + 1) / 2) * 0.28;
            const opacity = 0.42 + ((depth + 1) / 2) * 0.58;
            const isActive = index === current;

            return (
              <motion.button
                key={member.id}
                type="button"
                onClick={() => selectSlide(index)}
                aria-label={`View ${member.name}, ${member.role}`}
                aria-pressed={isActive}
                initial={false}
                animate={{
                  x,
                  scale,
                  opacity,
                  rotateY: -Math.sin(angle) * 32,
                }}
                transition={{
                  duration: prefersReducedMotion ? 0 : 1.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                style={{
                  position: "absolute",
                  left: "50%",
                  top: "50%",
                  marginLeft: -125,
                  marginTop: -190,
                  width: 250,
                  height: 380,
                  transformStyle: "preserve-3d",
                  transformOrigin: "center center",
                  backfaceVisibility: "hidden",
                  zIndex: Math.round((depth + 1) * 50),
                  cursor: isActive ? "default" : "pointer",
                }}
                className={`group overflow-hidden rounded-2xl border text-left outline-none transition-colors focus-visible:ring-2 focus-visible:ring-cyan-400 ${
                  isActive
                    ? "border-cyan-400/70 shadow-[0_0_45px_rgba(6,182,212,0.18)]"
                    : "border-cyan-400/20 shadow-[0_12px_40px_rgba(0,0,0,0.4)]"
                } bg-[#07121b]`}
              >
                {/* Portrait */}
                <div className="relative h-[220px] overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    draggable="false"
                    loading={Math.abs(index - current) <= 1 ? "eager" : "lazy"}
                    className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.04]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#07121b] via-transparent to-black/10" />

                  {/* <span className="absolute left-4 top-4 rounded-full border border-cyan-300/30 bg-[#030609]/60 px-3 py-1.5 text-[9px] tracking-[0.18em] text-cyan-300 backdrop-blur-md">
                    MEMBER 0{member.id}
                  </span> */}

                  <div className="absolute bottom-3 left-4 flex items-center gap-2">
                    {/* <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]" /> */}
                    {/* <span className="text-[10px] uppercase tracking-[0.18em] text-white/80">
                      Our people
                    </span> */}
                  </div>
                </div>

                {/* Content */}
                <div className="relative flex h-[160px] flex-col p-5">
                  <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-cyan-400/[0.08] blur-3xl" />

                  <h3 className="relative text-xl font-normal leading-tight tracking-tight text-white">
                    {member.name}
                  </h3>

                  <p className="mt-2 text-xs font-normal text-cyan-400">
                    {member.role}
                  </p>

                  <p className="mt-3 line-clamp-3 text-xs leading-5 text-slate-400">
                    {member.description}
                  </p>
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* Navigation */}
        {/* <div className="relative z-[200] mt-1 flex flex-col items-center gap-5">
          <div className="flex items-center gap-5">
            <motion.button
              type="button"
              onClick={previousSlide}
              whileTap={{ scale: 0.92 }}
              aria-label="Previous team member"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-cyan-400/25 text-cyan-300 transition-colors hover:border-cyan-400 hover:bg-cyan-400/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            >
              <ArrowLeft size={17} />
            </motion.button>

            <div className="flex items-center gap-2">
              {teamMembers.map((member, index) => (
                <button
                  key={member.id}
                  type="button"
                  onClick={() => selectSlide(index)}
                  aria-label={`Go to ${member.name}`}
                  aria-current={current === index ? "true" : undefined}
                  className="flex items-center justify-center p-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                >
                  <motion.span
                    animate={{
                      width: current === index ? 28 : 7,
                      opacity: current === index ? 1 : 0.35,
                    }}
                    transition={{ duration: 0.35 }}
                    className="block h-1.5 rounded-full bg-cyan-400"
                  />
                </button>
              ))}
            </div>

            <motion.button
              type="button"
              onClick={nextSlide}
              whileTap={{ scale: 0.92 }}
              aria-label="Next team member"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-cyan-400/25 text-cyan-300 transition-colors hover:border-cyan-400 hover:bg-cyan-400/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            >
              <ArrowRight size={17} />
            </motion.button>
          </div>

          <p className="text-[10px] tracking-[0.2em] text-slate-500">
            {String(current + 1).padStart(2, "0")} / 05
            <span className="mx-2 text-cyan-500">·</span>
            AUTO ROTATION · 3 SEC
          </p>
        </div> */}

        {/* Bottom accent */}
        <div className="mx-auto mt-12 h-px w-3/4 bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
      </div>
    </section>
  );
}
