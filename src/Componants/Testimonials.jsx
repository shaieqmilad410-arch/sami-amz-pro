import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

const cards = [
  {
    title: "The Abstract Void",
    description:
      "Explore creative ideas and discover new possibilities in a world of imagination.",
    image: "/baba-2026-1.png",
    color: "#06b6d4",
  },
  {
    title: "Lines of Code",
    description:
      "Every line of code brings an idea closer to becoming something extraordinary.",
    image: "/photo 3.jpeg",
    color: "#0891b2",
  },
  {
    title: "Digital Horizons",
    description:
      "Discover new perspectives and explore the limitless possibilities of the digital world.",
    image: "/digital.jpg",
    color: "#22d3ee",
  },
  {
    title: "Future Systems",
    description:
      "Build smarter solutions with creative thinking, technology, and innovation.",
    image: "/future.jpg",
    color: "#0e7490",
  },
  {
    title: "Beyond the Screen",
    description:
      "Turn your imagination into meaningful experiences that inspire and connect people.",
    image: "/screen.jpg",
    color: "#155e75",
  },
];

const ROTATION_INTERVAL = 2000;
const STEP = 360 / cards.length;

export default function CircularCards() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  // Automatic card rotation
  useEffect(() => {
    if (paused) return;

    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % cards.length);
    }, ROTATION_INTERVAL);

    return () => window.clearInterval(timer);
  }, [paused]);

  const nextCard = () => {
    setActive((current) => (current + 1) % cards.length);
  };

  const previousCard = () => {
    setActive((current) => (current - 1 + cards.length) % cards.length);
  };

  const transitionDuration = prefersReducedMotion ? 0.2 : 0.7;

  return (
    <section className="relative w-full overflow-hidden bg-[#070B10] px-4 py-20 text-white sm:px-6">
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(6,182,212,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.5) 1px, transparent 1px)",
            backgroundSize: "45px 45px",
          }}
        />

        <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Discover More
          </p>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Explore Our <span className="text-cyan-400">World</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            Explore ideas, discover possibilities, and experience the future
            through our collection.
          </p>
        </div>

        {/* 3D Carousel */}
        <div
          className="relative mx-auto flex h-[440px] max-w-5xl items-center justify-center sm:h-[490px] md:h-[530px]"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) {
              setPaused(false);
            }
          }}
        >
          <div
            className="relative flex h-full w-full items-center justify-center"
            style={{
              perspective: "1200px",
              transformStyle: "preserve-3d",
            }}
          >
            {cards.map((card, index) => {
              const offset = (index - active + cards.length) % cards.length;
              const angle = offset * STEP;
              const isActive = index === active;

              return (
                <motion.div
                  key={card.title}
                  className="absolute h-[350px] w-[240px] overflow-hidden rounded-2xl border bg-[#0B121B] shadow-2xl sm:h-[390px] sm:w-[280px]"
                  animate={{
                    rotateY: angle,
                    z: isActive ? 0 : -100,
                    scale: isActive ? 1 : 0.82,
                    opacity: isActive ? 1 : 0.65,
                    x:
                      Math.sin((angle * Math.PI) / 180) *
                      (typeof window !== "undefined" && window.innerWidth < 640
                        ? 150
                        : 240),
                  }}
                  transition={{
                    duration: transitionDuration,
                    ease: "easeInOut",
                  }}
                  style={{
                    transformStyle: "preserve-3d",
                    backfaceVisibility: "hidden",
                    borderColor: isActive
                      ? `${card.color}80`
                      : "rgba(34,211,238,0.12)",
                    boxShadow: isActive
                      ? `0 0 35px ${card.color}20`
                      : "0 10px 30px rgba(0,0,0,0.25)",
                    zIndex: isActive ? 10 : cards.length - offset,
                  }}
                  aria-hidden={!isActive}
                >
                  {/* Image */}
                  <div className="relative h-[165px] w-full overflow-hidden sm:h-[185px]">
                    <img
                      src={card.image}
                      alt={card.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                      onError={(event) => {
                        event.currentTarget.style.display = "none";
                      }}
                    />

                    {/* Image overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B121B] via-transparent to-black/10" />

                    {/* Image accent */}
                    <div
                      className="absolute bottom-0 left-5 h-1 w-12 rounded-full"
                      style={{ backgroundColor: card.color }}
                    />
                  </div>

                  {/* Card content: H1 + paragraph */}
                  <div className="relative flex h-[185px] flex-col p-5 sm:h-[205px] sm:p-6">
                    <div
                      className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg border text-sm font-bold"
                      style={{
                        color: card.color,
                        borderColor: `${card.color}50`,
                        backgroundColor: `${card.color}12`,
                      }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <h1 className="text-xl font-bold leading-tight text-white sm:text-2xl">
                      {card.title}
                    </h1>

                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      {card.description}
                    </p>

                    <div className="mt-auto flex items-center gap-2 pt-3">
                      <span
                        className="h-1.5 w-1.5 rounded-full"
                        style={{ backgroundColor: card.color }}
                      />
                      {/* <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                        Explore More
                      </span> */}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Previous button */}
          <button
            type="button"
            onClick={previousCard}
            aria-label="Previous card"
            className="absolute left-0 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-cyan-400/30 bg-[#0B121B]/90 text-cyan-300 transition hover:border-cyan-300 hover:bg-cyan-400/10 sm:left-4 sm:h-12 sm:w-12"
          >
            <ArrowLeft size={20} />
          </button>

          {/* Next button */}
          <button
            type="button"
            onClick={nextCard}
            aria-label="Next card"
            className="absolute right-0 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-cyan-400/30 bg-[#0B121B]/90 text-cyan-300 transition hover:border-cyan-300 hover:bg-cyan-400/10 sm:right-4 sm:h-12 sm:w-12"
          >
            <ArrowRight size={20} />
          </button>
        </div>

        {/* Pagination dots */}
        <div className="relative z-20 mt-6 flex items-center justify-center gap-3">
          {cards.map((card, index) => (
            <button
              key={card.title}
              type="button"
              onClick={() => setActive(index)}
              aria-label={`Go to card ${index + 1}`}
              aria-current={active === index ? "true" : undefined}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                active === index
                  ? "w-8 bg-cyan-400"
                  : "w-2.5 bg-slate-700 hover:bg-cyan-700"
              }`}
            />
          ))}
        </div>

        {/* Current card indicator */}
        <p className="relative z-10 mt-5 text-center text-xs text-slate-500">
          {active + 1} / {cards.length}
        </p>
      </div>
    </section>
  );
}
