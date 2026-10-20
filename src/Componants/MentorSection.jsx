import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function MentorSection() {
  const sectionRef = useRef(null);
  const [imageError, setImageError] = useState(false);

  useLayoutEffect(() => {
    const mm = gsap.matchMedia();
    mm.add(
      {
        desktop: "(min-width: 1024px)",
        reduced: "(prefers-reduced-motion: reduce)",
      },
      ({ conditions }) => {
        if (conditions.reduced) return;
        const { desktop } = conditions;
        const select = gsap.utils.selector(sectionRef.current);
        const portrait = select(".mentor-portrait")[0];

        // Entrance and parallax use different wrappers.
        gsap
          .timeline({
            scrollTrigger: { trigger: portrait, start: "top 88%", once: true },
          })
          .from(portrait, {
            y: 45,
            opacity: 0,
            duration: 1.1,
            ease: "power3.out",
          })
          .from(
            select(".mentor-mask"),
            {
              clipPath: "inset(10% 8% 10% 8% round 28px)",
              duration: 1.3,
              ease: "power3.inOut",
            },
            0,
          )
          .from(
            select(".mentor-rail"),
            {
              scaleY: 0,
              transformOrigin: "top",
              duration: 1,
              ease: "power3.inOut",
            },
            0.2,
          )
          .from(
            select(".mentor-caption"),
            {
              y: 20,
              opacity: 0,
              duration: 0.7,
              ease: "power3.out",
            },
            0.4,
          );

        const heading = select(".mentor-heading")[0];
        gsap.from(select(".mentor-word"), {
          yPercent: 110,
          rotation: 4,
          opacity: 0,
          duration: 0.9,
          stagger: 0.07,
          ease: "power4.out",
          scrollTrigger: { trigger: heading, start: "top 90%", once: true },
        });

        // Independent triggers avoid revealing offscreen mobile content early.
        select(".mentor-reveal").forEach((element) => {
          gsap.from(element, {
            y: 25,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: { trigger: element, start: "top 94%", once: true },
          });
        });

        gsap.from(select(".mentor-divider"), {
          scaleX: 0,
          transformOrigin: "left",
          duration: 1.1,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: select(".mentor-divider")[0],
            start: "top 94%",
            once: true,
          },
        });

        gsap.fromTo(
          select(".mentor-photo"),
          { scale: 1.13, yPercent: 0 },
          {
            scale: 1.03,
            yPercent: -3,
            ease: "none",
            scrollTrigger: {
              trigger: portrait,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.2,
            },
          },
        );

        gsap.fromTo(
          select(".mentor-depth"),
          { y: desktop ? 18 : 8 },
          {
            y: desktop ? -22 : -8,
            ease: "none",
            scrollTrigger: {
              trigger: portrait,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.4,
            },
          },
        );

        gsap.fromTo(
          select(".mentor-glow"),
          { y: 50 },
          {
            y: -60,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.8,
            },
          },
        );
      },
      sectionRef,
    );
    return () => mm.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="mentor"
      aria-labelledby="mentor-title"
      className="relative isolate scroll-mt-28 overflow-hidden bg-[#070B10] py-24 text-white sm:py-28 lg:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div
          className="absolute inset-0 opacity-[0.055]"
          style={{
            backgroundImage:
              "linear-gradient(#22d3ee 1px,transparent 1px),linear-gradient(90deg,#22d3ee 1px,transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage: "linear-gradient(transparent,black 35%,transparent)",
          }}
        />
        <div className="mentor-glow absolute -left-48 top-10 h-[440px] w-[440px] rounded-full bg-cyan-500/10 blur-[110px]" />
        <div className="mentor-glow absolute -right-48 bottom-0 h-[420px] w-[420px] rounded-full bg-cyan-400/[0.07] blur-[110px]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/25 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 xl:gap-24">
          {/* Portrait */}
          <div className="mentor-portrait relative mx-auto w-full max-w-lg min-w-0">
            <div
              aria-hidden="true"
              className="mentor-rail absolute -left-2 top-10 bottom-16 w-0.5 rounded-full bg-gradient-to-b from-cyan-200 via-cyan-500 to-transparent sm:-left-4"
            />
            <div className="relative rounded-[2rem] border border-cyan-300/15 bg-[#0C151D] p-2.5 shadow-[0_30px_80px_-35px_rgba(6,182,212,0.3)] sm:p-3">
              <div
                aria-hidden="true"
                className="absolute -right-px -top-px z-10 h-16 w-16 rounded-tr-[2rem] border-r border-t border-cyan-300/70"
              />
              <div
                className="mentor-mask relative aspect-[4/5] overflow-hidden rounded-[1.4rem] bg-[#101D27]"
                style={{ clipPath: "inset(0% 0% 0% 0% round 22px)" }}
              >
                {!imageError ? (
                  <img
                    src="/sami photo.jpeg"
                    alt="Samiullah Akbari, Amazon Business Mentor"
                    loading="lazy"
                    decoding="async"
                    onError={() => setImageError(true)}
                    className="mentor-photo absolute inset-0 h-[108%] w-full object-cover object-center"
                  />
                ) : (
                  <div
                    role="img"
                    aria-label="Samiullah Akbari"
                    className="mentor-photo absolute inset-0 flex items-center justify-center bg-gradient-to-br from-cyan-900/50 to-[#070B10] text-8xl font-bold text-cyan-300/60"
                  >
                    SA
                  </div>
                )}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#030A10] via-transparent to-black/10"
                />
                <div
                  aria-hidden="true"
                  className="absolute top-5 right-5 rounded-full border border-white/15 bg-black/25 px-3 py-2 text-[9px] tracking-[0.2em] text-cyan-100 backdrop-blur-md"
                >
                  SAMI AMZ PRO
                </div>
                <div className="mentor-caption absolute right-6 bottom-10 left-6 sm:left-7">
                  <div className="mb-3 flex items-center gap-2.5">
                    <span
                      aria-hidden="true"
                      className="h-1.5 w-1.5 rounded-full bg-cyan-300"
                    />
                    <span className="text-[10px] font-semibold tracking-[0.25em] text-cyan-200">
                      YOUR MENTOR
                    </span>
                  </div>
                  <p className="text-2xl font-semibold tracking-tight sm:text-3xl">
                    Samiullah Akbari
                  </p>
                  <p className="mt-2 text-sm text-slate-300">
                    Amazon Business Mentor
                  </p>
                </div>
              </div>
            </div>

            <div className="mentor-depth relative z-10 mx-auto -mt-5 w-[92%] sm:w-[88%]">
              <div className="mentor-reveal flex items-center gap-3 rounded-2xl border border-cyan-300/15 bg-[#0D1A23]/95 p-4 shadow-2xl backdrop-blur-xl sm:p-5">
                <span
                  aria-hidden="true"
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-200"
                >
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 18h6M10 22h4M8.1 14a6 6 0 1 1 7.8 0C14.8 15 14 16 14 18h-4c0-2-.8-3-1.9-4ZM12 1v2M3 10H1M23 10h-2" />
                  </svg>
                </span>
                <div className="min-w-0">
                  <p className="text-sm font-semibold">Learn by doing</p>
                  <p className="mt-1 text-xs leading-5 text-slate-400">
                    Practical learning. Clear direction. Real business skills.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="min-w-0 max-w-2xl">
            <div className="mentor-reveal mb-6 flex items-center gap-3">
              <span aria-hidden="true" className="h-px w-9 bg-cyan-300" />
              <span className="text-[10px] font-semibold tracking-[0.24em] text-cyan-200 sm:text-xs">
                MEET YOUR MENTOR
              </span>
            </div>

            <h2
              id="mentor-title"
              aria-label="Learn from someone who has done it."
              className="mentor-heading text-[clamp(2.25rem,4.5vw,3.8rem)] leading-[1.14] font-bold tracking-[-0.045em]"
            >
              <span aria-hidden="true" className="block">
                {["Learn", "from", "someone"].map((word) => (
                  <span
                    key={word}
                    className="mr-[0.22em] inline-block overflow-hidden align-top pb-1"
                  >
                    <span className="mentor-word inline-block">{word}</span>
                  </span>
                ))}
              </span>
              <span aria-hidden="true" className="block text-cyan-400">
                {["who", "has", "done", "it."].map((word) => (
                  <span
                    key={word}
                    className="mr-[0.22em] inline-block overflow-hidden align-top pb-1"
                  >
                    <span className="mentor-word inline-block">{word}</span>
                  </span>
                ))}
              </span>
            </h2>

            <p className="mentor-reveal mt-6 max-w-xl text-base leading-8 text-slate-400 sm:text-lg">
              Build your Amazon business with practical knowledge, clear
              strategies, and guidance that goes beyond theory. Learn how to
              research products, work with suppliers, build brands, and create a
              business with confidence.
            </p>

            <div
              aria-hidden="true"
              className="mentor-divider my-8 h-px max-w-xl bg-gradient-to-r from-cyan-300/40 via-white/10 to-transparent"
            />

            <div className="mentor-reveal flex items-start gap-4">
              <span
                aria-hidden="true"
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-cyan-300/20 bg-cyan-300/[0.06] text-cyan-200"
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                >
                  <circle cx="12" cy="8" r="4" />
                  <path d="M5 21v-2a7 7 0 0 1 14 0v2" />
                </svg>
              </span>
              <div className="min-w-0">
                <h3 className="text-lg font-semibold sm:text-xl">
                  Samiullah Akbari
                </h3>
                <p className="mt-1 text-sm leading-6 text-slate-400">
                  Practical learning. Clear direction. Real business skills.
                </p>
              </div>
            </div>

            <div className="mentor-reveal mt-9">
              <a
                href="#contact"
                className="group inline-flex min-h-12 items-center gap-5 rounded-xl border border-cyan-300/25 bg-cyan-300/[0.06] px-5 py-3.5 text-sm font-semibold text-cyan-200 transition-colors hover:border-cyan-300/50 hover:bg-cyan-300/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
              >
                Meet your mentor
                <span
                  aria-hidden="true"
                  className="text-lg transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transform-none"
                >
                  →
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
