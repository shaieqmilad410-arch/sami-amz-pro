import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  {
    value: 10,
    suffix: "+",
    display: "10+",
    label: "Courses",
    description: "Practical Amazon business training",
  },
  {
    value: 5,
    suffix: "K+",
    display: "5K+",
    label: "Students",
    description: "Learners building real businesses",
  },
  {
    value: 95,
    suffix: "%",
    display: "95%",
    label: "Success Rate",
    description: "Students completing their learning path",
  },
  {
    value: null,
    display: "24/7",
    label: "Learning",
    description: "Learn at your own pace",
  },
];

const trustPoints = [
  "Practical Training",
  "Step-by-Step Lessons",
  "Beginner Friendly",
  "Real-World Strategies",
];

export default function Stats() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const mm = gsap.matchMedia();

    mm.add(
      {
        desktop: "(min-width: 1024px)",
        reduced: "(prefers-reduced-motion: reduce)",
      },
      ({ conditions }) => {
        const section = sectionRef.current;
        const select = gsap.utils.selector(section);
        const { desktop, reduced } = conditions;

        // Keep all content visible without motion.
        if (reduced) return;

        // Heading entrance.
        gsap.from(select(".stats-heading-item"), {
          y: 32,
          opacity: 0,
          duration: 0.85,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: select(".stats-heading")[0],
            start: "top 88%",
            once: true,
          },
        });

        // Decorative parallax follows scroll in both directions.
        gsap.fromTo(
          select(".stats-glow"),
          {
            y: 50,
            scale: 0.9,
          },
          {
            y: -70,
            scale: 1.15,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.5,
            },
          },
        );

        // Each card has its own trigger for mobile layouts.
        select(".stats-card-reveal").forEach((card, index) => {
          const number = card.querySelector(".stats-number");
          const accent = card.querySelector(".stats-accent");
          const details = card.querySelectorAll(".stats-detail");
          const counter = card.querySelector(".stats-counter");
          const target = stats[index].value;

          const timeline = gsap.timeline({
            delay: desktop ? index * 0.1 : 0,
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
              once: true,
            },
          });

          timeline
            .from(card, {
              y: 55,
              opacity: 0,
              duration: 0.85,
              ease: "power3.out",
            })
            .from(
              number,
              {
                y: 20,
                scale: 0.88,
                opacity: 0,
                duration: 0.75,
                ease: "back.out(1.4)",
              },
              0.12,
            )
            .from(
              details,
              {
                y: 14,
                opacity: 0,
                duration: 0.55,
                stagger: 0.08,
                ease: "power2.out",
              },
              0.25,
            )
            .fromTo(
              accent,
              { scaleX: 0 },
              {
                scaleX: 1,
                duration: 0.9,
                ease: "power3.inOut",
              },
              0.2,
            );

          // Animate only numeric statistics.
          // "24/7" remains intact.
          if (counter && target !== null) {
            timeline.fromTo(
              counter,
              { textContent: 0 },
              {
                textContent: target,
                snap: { textContent: 1 },
                duration: 1.8,
                ease: "power2.out",
              },
              0.15,
            );
          }
        });

        // Individual triggers also support wrapped trust points.
        select(".stats-trust-item").forEach((item) => {
          gsap.from(item, {
            y: 18,
            opacity: 0,
            duration: 0.65,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 96%",
              once: true,
            },
          });
        });

        gsap.from(select(".stats-rule"), {
          scaleX: 0,
          transformOrigin: "center",
          duration: 1.2,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: select(".stats-trust")[0],
            start: "top 95%",
            once: true,
          },
        });
      },
      sectionRef,
    );

    // Reverts this section's animations and ScrollTriggers.
    return () => mm.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-labelledby="stats-title"
      className="relative isolate overflow-hidden bg-[#070B10] py-20 text-white sm:py-24 lg:py-28"
    >
      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div
          className="absolute inset-0 opacity-[0.055]"
          style={{
            backgroundImage:
              "linear-gradient(#22d3ee 1px, transparent 1px), linear-gradient(90deg, #22d3ee 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage:
              "linear-gradient(to bottom, transparent, black 35%, transparent)",
          }}
        />

        <div className="stats-glow absolute -left-48 top-0 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[100px]" />

        <div className="stats-glow absolute -right-48 bottom-0 h-[440px] w-[440px] rounded-full bg-cyan-400/[0.08] blur-[110px]" />

        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/25 to-transparent" />

        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-300/15 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="stats-heading mx-auto mb-12 max-w-3xl text-center sm:mb-16">
          <div className="stats-heading-item mb-6 inline-flex items-center gap-2.5 rounded-full border border-cyan-300/20 bg-cyan-300/5 px-4 py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.6)]" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.23em] text-cyan-200 sm:text-xs">
              Trusted Learning
            </span>
          </div>

          <h2
            id="stats-title"
            className="stats-heading-item text-3xl leading-[1.15] font-bold tracking-tight sm:text-4xl lg:text-5xl"
          >
            Learn From a Platform
            <br className="hidden sm:block" /> Built for{" "}
            <span className="bg-gradient-to-r from-cyan-200 to-cyan-500 bg-clip-text text-transparent">
              Results.
            </span>
          </h2>

          <p className="stats-heading-item mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
            Everything you need to understand Amazon business, build your
            skills, and turn knowledge into real-world results.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={stat.label} className="stats-card-reveal min-w-0">
              {/* Hover uses a separate wrapper from GSAP. */}
              <article className="group relative h-full overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#0C141D] p-6 transition-[transform,border-color,background-color,box-shadow] duration-300 hover:-translate-y-1.5 hover:border-cyan-300/35 hover:bg-[#0D1B25] hover:shadow-[0_20px_50px_-30px_rgba(34,211,238,0.4)] motion-reduce:transform-none motion-reduce:transition-none sm:p-7">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-14 -top-14 h-40 w-40 rounded-full bg-cyan-300/5 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                />

                <div
                  aria-hidden="true"
                  className="mb-9 flex items-center justify-between"
                >
                  <span className="text-[10px] tracking-[0.2em] text-slate-600">
                    0{index + 1}
                  </span>

                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-sm text-cyan-300 transition-colors group-hover:border-cyan-300/30 group-hover:bg-cyan-300/10">
                    ↗
                  </span>
                </div>

                {/* Accessible value stays constant during counting. */}
                <div className="stats-number relative text-5xl font-extrabold tracking-[-0.05em] text-cyan-300 sm:text-6xl">
                  <span className="sr-only">{stat.display}</span>

                  <span aria-hidden="true" className="tabular-nums">
                    {stat.value === null ? (
                      stat.display
                    ) : (
                      <>
                        <span className="stats-counter">{stat.value}</span>
                        <span>{stat.suffix}</span>
                      </>
                    )}
                  </span>
                </div>

                <h3 className="stats-detail mt-5 text-lg font-semibold tracking-tight">
                  {stat.label}
                </h3>

                <p className="stats-detail mt-2 max-w-[230px] text-sm leading-6 text-slate-400">
                  {stat.description}
                </p>

                <div
                  aria-hidden="true"
                  className="mt-8 h-px overflow-hidden rounded-full bg-white/[0.07]"
                >
                  <div className="stats-accent h-full origin-left bg-gradient-to-r from-cyan-400 to-cyan-200/20" />
                </div>
              </article>
            </div>
          ))}
        </div>

        {/* Trust points */}
        <div className="stats-trust relative mt-12 pt-8 sm:mt-14">
          <div
            aria-hidden="true"
            className="stats-rule absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"
          />

          <div className="grid grid-cols-1 gap-4 min-[400px]:grid-cols-2 lg:flex lg:flex-wrap lg:justify-center lg:gap-x-10">
            {trustPoints.map((point) => (
              <div
                key={point}
                className="stats-trust-item flex items-center gap-2.5"
              >
                <span
                  aria-hidden="true"
                  className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-cyan-300/20 bg-cyan-300/5 text-[10px] text-cyan-300"
                >
                  ✓
                </span>

                <span className="text-xs leading-5 text-slate-400 sm:text-sm">
                  {point}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
