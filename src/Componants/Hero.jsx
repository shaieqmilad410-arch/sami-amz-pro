import { useLayoutEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PHOTO = "/Warmly Lit Bearded Man Portrait.png";

export default function Hero() {
  const root = useRef(null);
  const [imgError, setImgError] = useState(false);

  useLayoutEffect(() => {
    const mm = gsap.matchMedia();

    // Continuously type, erase, and repeat the heading.
    // Hidden letters keep their space to prevent layout movement.
    mm.add(
      "(prefers-reduced-motion: no-preference)",
      () => {
        gsap.set(".amz-letter", { autoAlpha: 0 });

        gsap
          .timeline({
            repeat: -1,
            repeatDelay: 0.3,
            delay: 0.2,
          })
          .to(".amz-letter", {
            autoAlpha: 1,
            duration: 0.01,
            stagger: 0.14,
            ease: "none",
          })
          .to(
            ".amz-letter",
            {
              autoAlpha: 0,
              duration: 0.01,
              stagger: {
                each: 0.07,
                from: "end",
              },
              ease: "none",
            },
            "+=1.4",
          );
      },
      root,
    );

    mm.add(
      {
        desktop: "(min-width: 1024px) and (min-height: 720px)",
        reduced: "(prefers-reduced-motion: reduce)",
      },
      ({ conditions }) => {
        if (conditions.reduced) return;

        const desktop = conditions.desktop;

        // Separate wrappers keep entrance and scroll transforms independent.
        gsap.from(".amz-reveal", {
          y: 30,
          autoAlpha: 0,
          stagger: 0.1,
          duration: 0.9,
          ease: "power3.out",
        });

        gsap.from(".amz-photo-enter", {
          y: 55,
          autoAlpha: 0,
          scale: 0.94,
          duration: 1.2,
          delay: 0.2,
          ease: "power3.out",
        });

        gsap.from(".amz-badge-enter", {
          y: 25,
          autoAlpha: 0,
          scale: 0.85,
          stagger: 0.15,
          duration: 0.8,
          delay: 0.75,
          ease: "back.out(1.5)",
        });

        const scroll = gsap.timeline({
          defaults: {
            ease: "none",
            duration: 1,
          },
          scrollTrigger: {
            trigger: root.current,
            start: desktop ? "top top" : "top 15%",
            end: desktop ? () => `+=${window.innerHeight * 0.9}` : "bottom top",
            pin: false,
            scrub: 1.1,
            invalidateOnRefresh: true,
            // markers: true,
          },
        });

        scroll
          .to(".amz-copy", { y: desktop ? -50 : -20 }, 0)
          .to(
            ".amz-title-scroll",
            {
              x: desktop ? -12 : 0,
              letterSpacing: desktop ? "-0.055em" : "-0.04em",
            },
            0,
          )
          .to(
            ".amz-photo-scroll",
            {
              y: desktop ? -22 : -15,
              rotationY: desktop ? -7 : 0,
              rotationZ: desktop ? 2 : 0,
              scale: desktop ? 1.035 : 1,
            },
            0,
          )
          .fromTo(
            ".amz-photo-image",
            { scale: 1.12 },
            {
              scale: 1,
              yPercent: -3,
            },
            0,
          )
          .to(
            ".amz-badge-one",
            {
              y: desktop ? -90 : -35,
              x: desktop ? -18 : 0,
              rotation: -8,
            },
            0,
          )
          .to(
            ".amz-badge-two",
            {
              y: desktop ? 45 : 20,
              x: desktop ? 18 : 0,
              rotation: 7,
            },
            0,
          )
          .to(".amz-orbit", { rotation: 100, scale: 1.1 }, 0)
          .to(".amz-glow", { y: -100, scale: 1.35 }, 0)
          .to(".amz-grid", { y: -40 }, 0)
          .fromTo(".amz-progress", { scaleX: 0 }, { scaleX: 1 }, 0)
          .to(".amz-scroll-label", { autoAlpha: 0, duration: 0.2 }, 0);
      },
      root,
    );

    // Clean up animations when the component unmounts.
    return () => mm.revert();
  }, []);

  return (
    <section
      ref={root}
      aria-label="Sami AMZ Pro introduction"
      className="relative isolate overflow-hidden bg-[#05090d] pt-[76px] text-white"
    >
      <style>{`
        @media (prefers-reduced-motion: no-preference) {
          .amz-heading .amz-letter {
            background-image: linear-gradient(
              110deg,
              currentColor 0%,
              currentColor 35%,
              #101010 45%,
              #000000 50%,
              #101010 55%,
              currentColor 65%,
              currentColor 100%
            );
            background-size: 300% 100%;
            background-position: 100% 50%;
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
            animation: amz-heading-black-sweep 3s linear infinite;
            animation-delay: calc(var(--amz-index, 0) * 0.16s - 3s);
          }
        }

        @keyframes amz-heading-black-sweep {
          from {
            background-position: 100% 50%;
          }
          to {
            background-position: 0% 50%;
          }
        }
      `}</style>

      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="amz-glow absolute -right-40 top-20 h-[600px] w-[600px] rounded-full bg-cyan-500/15 blur-[120px]" />

        <div className="absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-cyan-500/5 blur-[100px]" />

        <div
          className="amz-grid absolute -inset-20 opacity-[0.055]"
          style={{
            backgroundImage:
              "linear-gradient(#22d3ee 1px, transparent 1px),linear-gradient(90deg,#22d3ee 1px,transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage: "linear-gradient(black,transparent 90%)",
          }}
        />

        <span className="absolute bottom-8 left-4 select-none text-[19vw] font-black leading-none tracking-[-0.08em] text-white/[0.018]">
          BUILD. GROW.
        </span>
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 pt-12 pb-20 sm:px-8 lg:min-h-[calc(100svh-76px)] lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:px-10 lg:py-14">
        <div className="amz-copy relative z-10">
          <div className="amz-reveal mb-7 inline-flex items-center gap-3 rounded-full border border-cyan-300/15 bg-cyan-300/5 px-4 py-2.5">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_12px_#22d3ee]" />

            <span className="text-[9px] font-semibold tracking-[0.22em] text-cyan-200 sm:text-[10px]">
              AMAZON BUSINESS EDUCATION
            </span>
          </div>

          <div
            className="amz-title-scroll"
            style={{ letterSpacing: "-0.04em" }}
          >
            <h1
              aria-label="Sami AMZ Pro"
              className="amz-heading text-[clamp(3.5rem,7vw,6.6rem)] leading-[1.02] font-extrabold"
            >
              <span aria-hidden="true" className="block overflow-hidden pb-2">
                {"Sami".split("").map((letter, i) => (
                  <span
                    key={i}
                    className="amz-letter inline-block"
                    style={{ "--amz-index": i }}
                  >
                    {letter}
                  </span>
                ))}
              </span>

              <span
                aria-hidden="true"
                className="block overflow-hidden pb-3 text-cyan-400"
              >
                {"AMZ Pro".split("").map((letter, i) => (
                  <span
                    key={i}
                    className="amz-letter inline-block"
                    style={{ "--amz-index": i + 4 }}
                  >
                    {letter === " " ? "\u00a0" : letter}
                  </span>
                ))}

                <span
                  className="amz-letter inline-block text-white"
                  style={{ "--amz-index": 11 }}
                >
                  .
                </span>
              </span>
            </h1>
          </div>

          <p className="amz-reveal mt-6 max-w-md text-base leading-[1.85] text-slate-400 sm:text-lg">
            Learn how to find winning products, launch your store and grow a
            profitable Amazon business, step by step.
          </p>

          <div className="amz-reveal mt-8 flex flex-wrap items-center gap-5">
            <Link
              to="/courses"
              className="group relative inline-flex items-center gap-5 overflow-hidden rounded-full bg-cyan-400 px-7 py-4 text-sm font-bold text-[#04232b] shadow-[0_10px_40px_-12px_rgba(34,211,238,0.5)] transition hover:bg-cyan-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-200"
            >
              Start Learning
              {/* <span
                aria-hidden="true"
                className="text-xl transition-transform group-hover:translate-x-1"
              >
                ↗
              </span> */}
            </Link>

            <span className="text-xs tracking-wide text-slate-400">
              Learn. Build. Grow.
            </span>
          </div>

          <div className="amz-reveal mt-10 flex items-center gap-5 border-t border-white/10 pt-5 text-[10px] tracking-[0.15em] text-slate-500 sm:gap-7">
            <span>PRODUCT RESEARCH</span>
            <span className="text-cyan-400/60">/</span>
            <span>STORE LAUNCH</span>
            <span className="text-cyan-400/60">/</span>
            <span>GROWTH</span>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[480px] [perspective:1200px]">
          <div
            aria-hidden="true"
            className="amz-orbit pointer-events-none absolute -inset-5 rounded-[45%] border border-cyan-400/10 sm:-inset-8"
          >
            <span className="absolute top-8 left-8 h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_18px_#22d3ee]" />
          </div>

          <div className="amz-photo-scroll relative">
            <div className="amz-photo-enter relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/15 bg-[#0d1920] shadow-[0_35px_90px_-35px_rgba(6,182,212,0.35)]">
              {!imgError ? (
                <img
                  src={PHOTO}
                  alt="Sami, Amazon business mentor"
                  onError={() => setImgError(true)}
                  fetchPriority="high"
                  decoding="async"
                  className="amz-photo-image absolute inset-0 h-[108%] w-full object-cover object-top"
                />
              ) : (
                <div className="amz-photo-image absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#153341] to-[#071018] text-[140px] font-black text-cyan-400/60">
                  S
                </div>
              )}

              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-[#03090e] via-transparent to-cyan-900/10"
              />

              <div
                aria-hidden="true"
                className="absolute inset-3 rounded-[1.4rem] border border-white/10"
              />

              <div className="absolute top-7 left-7 flex items-center gap-2 rounded-full border border-white/15 bg-black/25 px-3 py-2 text-[8px] tracking-[0.2em] backdrop-blur-md">
                <span className="h-1 w-1 rounded-full bg-cyan-300" />
                LEARN WITH SAMI
              </div>

              <div className="absolute right-7 bottom-8 left-7">
                <p className="text-[9px] tracking-[0.25em] text-cyan-300">
                  AMAZON BUSINESS MENTOR
                </p>

                <div className="mt-3 flex items-end justify-between">
                  <p className="text-2xl font-semibold tracking-tight sm:text-3xl">
                    Sami AMZ Pro
                  </p>

                  <span aria-hidden="true" className="text-2xl text-cyan-300">
                    ↗
                  </span>
                </div>

                <div className="mt-5 h-px bg-white/15">
                  <div className="h-px w-1/3 bg-cyan-300" />
                </div>
              </div>
            </div>
          </div>

          <div className="amz-badge-one absolute top-[18%] -left-3 sm:-left-8">
            <div className="amz-badge-enter flex items-center gap-3 rounded-2xl border border-cyan-300/20 bg-[#0a171f]/95 p-3 shadow-2xl sm:p-4">
              <span
                aria-hidden="true"
                className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-300/10 text-xl text-cyan-300"
              >
                ⌕
              </span>

              <div>
                <p className="text-[9px] tracking-wider text-slate-500">
                  FIRST STEP
                </p>

                <p className="mt-1 text-xs font-semibold">Find your product</p>
              </div>
            </div>
          </div>

          <div className="amz-badge-two absolute right-[-8px] bottom-[24%] sm:-right-8">
            <div className="amz-badge-enter flex items-center gap-3 rounded-2xl border border-cyan-200/30 bg-cyan-400 p-3 text-cyan-950 shadow-[0_12px_40px_-12px_rgba(34,211,238,0.5)] sm:p-4">
              <span aria-hidden="true" className="text-3xl">
                ↗
              </span>

              <div>
                <p className="text-[9px] tracking-wider opacity-60">
                  YOUR NEXT CHAPTER
                </p>

                <p className="mt-1 text-xs font-bold">Build your business</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="amz-scroll-label pointer-events-none absolute bottom-5 left-1/2 hidden -translate-x-1/2 items-center gap-3 text-[8px] tracking-[0.25em] text-slate-500 lg:flex"
      >
        <span className="h-5 w-px bg-gradient-to-b from-cyan-300 to-transparent" />{" "}
        SCROLL TO EXPLORE
      </div>

      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-px bg-white/5"
      >
        <div className="amz-progress h-full origin-left scale-x-0 bg-cyan-300" />
      </div>
    </section>
  );
}
