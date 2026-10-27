import { useLayoutEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Your image must be inside the public folder.
const PHOTO = "/Warmly Lit Bearded Man Portrait.png";

const STEPS = ["Find your product", "Launch your store", "Build your brand"];

function Arrow() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M5 12h14M12 5l7 7-7 7"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Hero() {
  const root = useRef(null);
  const tilt = useRef(null);

  const [imgError, setImgError] = useState(false);

  useLayoutEffect(() => {
    const mm = gsap.matchMedia();

    mm.add(
      "(prefers-reduced-motion: no-preference)",
      () => {
        gsap.from(".sap-reveal", {
          y: 28,
          autoAlpha: 0,
          duration: 0.9,
          stagger: 0.1,
          ease: "power3.out",
        });

        gsap.from(".sap-portrait-enter", {
          y: 40,
          autoAlpha: 0,
          scale: 0.96,
          duration: 1.2,
          delay: 0.18,
          ease: "power3.out",
        });

        gsap.from(".sap-float-enter", {
          y: 20,
          autoAlpha: 0,
          duration: 0.8,
          stagger: 0.15,
          delay: 0.6,
          ease: "power3.out",
        });

        // Show the complete name first, then repeat typing.
        gsap
          .timeline({
            repeat: -1,
            repeatDelay: 2.5,
            delay: 4,
          })
          .to(".sap-letter", {
            autoAlpha: 0,
            duration: 0.025,
            stagger: {
              each: 0.045,
              from: "end",
            },
          })
          .to(
            ".sap-letter",
            {
              autoAlpha: 1,
              duration: 0.025,
              stagger: 0.09,
            },
            "+=0.2",
          );
      },
      root,
    );

    mm.add(
      "(min-width: 1024px) and (prefers-reduced-motion: no-preference)",
      () => {
        gsap.to(".sap-portrait-scroll", {
          y: -35,
          ease: "none",
          scrollTrigger: {
            trigger: root.current,
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
        });
      },
      root,
    );

    mm.add(
      "(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)",
      () => {
        const element = tilt.current;

        if (!element) return;

        const rotateX = gsap.quickTo(element, "rotationX", {
          duration: 0.7,
          ease: "power3.out",
        });

        const rotateY = gsap.quickTo(element, "rotationY", {
          duration: 0.7,
          ease: "power3.out",
        });

        const parent = element.parentElement;

        const move = (event) => {
          const box = parent.getBoundingClientRect();

          const x = (event.clientX - box.left) / box.width - 0.5;

          const y = (event.clientY - box.top) / box.height - 0.5;

          rotateX(-y * 8);
          rotateY(x * 10);
        };

        const reset = () => {
          rotateX(0);
          rotateY(0);
        };

        parent.addEventListener("pointermove", move);
        parent.addEventListener("pointerleave", reset);

        return () => {
          parent.removeEventListener("pointermove", move);
          parent.removeEventListener("pointerleave", reset);

          rotateX.tween.kill();
          rotateY.tween.kill();
        };
      },
      root,
    );

    return () => mm.revert();
  }, []);

  return (
    <section
      ref={root}
      className="sap-hero"
      aria-label="Sami AMZ Pro introduction"
    >
      <style>{styles}</style>

      {/* Background */}
      <div className="sap-atmosphere" aria-hidden="true">
        <div className="sap-grid" />

        <div className="sap-aura sap-aura-one" />

        <div className="sap-aura sap-aura-two" />

        <div className="sap-horizon" />

        <span className="sap-watermark">NEXT CHAPTER.</span>
      </div>

      <div className="sap-layout">
        {/* Left content */}
        <div className="sap-copy">
          <div className="sap-reveal sap-eyebrow">
            <span />
            AMAZON BUSINESS EDUCATION
          </div>

          <p className="sap-reveal sap-intro">
            Your ambition. A clear direction.
          </p>

          <h1 className="sap-reveal sap-title" aria-label="Sami AMZ Pro">
            <span className="sap-title-white" aria-hidden="true">
              {"SAMI".split("").map((letter, index) => (
                <span className="sap-letter" key={index}>
                  {letter}
                </span>
              ))}
            </span>

            <span className="sap-title-color" aria-hidden="true">
              {"AMZ PRO".split("").map((letter, index) => (
                <span className="sap-letter" key={index}>
                  {letter === " " ? "\u00a0" : letter}
                </span>
              ))}

              <span className="sap-title-dot">.</span>
            </span>
          </h1>

          <div className="sap-reveal sap-promise">
            Learn the business.
            <br />
            <span>Build your next chapter.</span>
          </div>

          <p className="sap-reveal sap-description">
            Turn your interest in Amazon into practical skills. Learn product
            research, store setup, and brand building — one clear step at a
            time.
          </p>

          <div className="sap-reveal sap-actions">
            <Link to="/courses" className="sap-cta">
              <span>Start Learning</span>

              <span className="sap-cta-icon">
                <Arrow />
              </span>
            </Link>

            <span className="sap-action-note">
              <span className="sap-check">✓</span>
              Start with the fundamentals
            </span>
          </div>

          <div className="sap-reveal sap-path" aria-label="Your learning path">
            {STEPS.map((step, index) => (
              <div className="sap-path-item" key={step}>
                <span className="sap-step-number">0{index + 1}</span>

                <span>{step}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right visual */}
        <div className="sap-visual">
          <div className="sap-orbit" aria-hidden="true">
            <span />
          </div>

          <div className="sap-orbit sap-orbit-two" aria-hidden="true" />

          <div className="sap-portrait-scroll">
            <div className="sap-perspective">
              <div ref={tilt} className="sap-portrait-tilt">
                <div className="sap-portrait-enter">
                  <div className="sap-portrait">
                    {!imgError ? (
                      <img
                        src={PHOTO}
                        alt="Sami, Amazon business mentor"
                        fetchPriority="high"
                        decoding="async"
                        onError={() => setImgError(true)}
                      />
                    ) : (
                      <div
                        className="sap-photo-fallback"
                        aria-label="Sami AMZ Pro"
                      >
                        S
                      </div>
                    )}

                    <div className="sap-photo-shade" aria-hidden="true" />

                    <div className="sap-photo-outline" aria-hidden="true" />

                    <div className="sap-photo-top">
                      <span className="sap-mini-mark">S.</span>

                      <span>THE MINDSET TO BUILD.</span>
                    </div>

                    <div className="sap-photo-caption">
                      <span className="sap-caption-label">
                        LEARN WITH YOUR MENTOR
                      </span>

                      <div className="sap-caption-name">
                        Sami AMZ Pro
                        <span>
                          <Arrow />
                        </span>
                      </div>

                      <div className="sap-caption-line" />

                      <div className="sap-caption-bottom">
                        <span>Knowledge into action.</span>

                        <span>01 / 03</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating research card */}
          <div className="sap-float-enter sap-research-position">
            <div className="sap-research sap-floating">
              <span className="sap-search-icon" aria-hidden="true">
                <svg width="23" height="23" viewBox="0 0 24 24" fill="none">
                  <circle
                    cx="10.5"
                    cy="10.5"
                    r="6.5"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  />

                  <path
                    d="m16 16 4 4"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                </svg>
              </span>

              <div>
                <span className="sap-card-label">IT STARTS WITH AN IDEA</span>

                <strong>Find your opportunity.</strong>
              </div>
            </div>
          </div>

          {/* Floating roadmap card */}
          <div className="sap-float-enter sap-roadmap-position">
            <div className="sap-roadmap sap-floating">
              <div className="sap-roadmap-top">
                <span>YOUR LEARNING ROADMAP</span>

                <Arrow />
              </div>

              <div className="sap-roadmap-bars" aria-hidden="true">
                <i />
                <i />
                <i />
                <i />
                <i />
                <i />
                <i />
              </div>

              <strong>Learn. Launch. Grow.</strong>

              <p>A clear path to your next step.</p>
            </div>
          </div>

          <div className="sap-visual-footnote">
            <span />
            PRACTICAL SKILLS. REAL POSSIBILITIES.
          </div>
        </div>
      </div>

      <div className="sap-bottom">
        <span>FROM YOUR FIRST IDEA TO YOUR NEXT MOVE.</span>

        <span className="sap-scroll" aria-hidden="true">
          SCROLL TO EXPLORE
          <span>↓</span>
        </span>
      </div>
    </section>
  );
}

const styles = `
  .sap-hero {
    --sap-cyan: #53EAFD;
    position: relative;
    isolation: isolate;
    overflow: hidden;
    background: #070d11;
    color: #f1f6f7;
    padding-top: 88px;
    font-family: inherit;
  }

  .sap-hero * {
    box-sizing: border-box;
  }

  .sap-atmosphere {
    position: absolute;
    inset: 0;
    z-index: -1;
    pointer-events: none;
    overflow: hidden;
  }

  .sap-grid {
    position: absolute;
    inset: 0;
    background-image:
      linear-gradient(#b3e8ea08 1px, transparent 1px),
      linear-gradient(90deg, #b3e8ea08 1px, transparent 1px);
    background-size: 88px 88px;
    mask-image: linear-gradient(
      90deg,
      transparent,
      #000 70%
    );
  }

  .sap-aura {
    position: absolute;
    border-radius: 50%;
    filter: blur(90px);
  }

  .sap-aura-one {
    width: 570px;
    height: 570px;
    right: -90px;
    top: 6%;
    background: #0e77773b;
  }

  .sap-aura-two {
    width: 340px;
    height: 340px;
    left: -240px;
    bottom: 0;
    background: #1ac6c521;
  }

  .sap-horizon {
    position: absolute;
    width: 85%;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent,
      #4ce5e225,
      transparent
    );
    top: 24%;
    left: 25%;
    transform: rotate(-35deg);
  }

  .sap-watermark {
    position: absolute;
    bottom: 25px;
    left: 2%;
    font-size: clamp(70px, 13.4vw, 210px);
    font-weight: 900;
    letter-spacing: -0.07em;
    white-space: nowrap;
    color: #ffffff02;
  }

  .sap-layout {
    max-width: 1320px;
    margin: auto;
    padding: 64px 64px 74px;
    display: grid;
    grid-template-columns: 1.05fr 1fr;
    gap: 74px;
    align-items: center;
    min-height: min(820px, calc(100svh - 140px));
  }

  .sap-copy {
    position: relative;
    z-index: 2;
    min-width: 0;
  }

  .sap-eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    border: 1px solid #4ce5e227;
    border-radius: 100px;
    padding: 9px 13px;
    background: #4ce5e209;
    font-size: 9px;
    font-weight: 650;
    letter-spacing: 0.17em;
    color: #b5f4ef;
  }

  .sap-eyebrow > span,
  .sap-visual-footnote > span {
    width: 5px;
    height: 5px;
    flex-shrink: 0;
    border-radius: 100%;
    background: var(--sap-cyan);
    box-shadow: 0 0 14px #4ce5e280;
  }

  .sap-intro {
    margin: 26px 0 14px;
    font-size: 13px;
    letter-spacing: 0.02em;
    color: #9aaeb8;
  }

  .sap-title {
    margin: 0;
    font-size: clamp(65px, 7.6vw, 108px);
    font-weight: 900;
    line-height: 0.94;
    letter-spacing: -0.075em;
  }

  .sap-title-white,
  .sap-title-color {
    display: block;
    white-space: nowrap;
    padding-bottom: 8px;
  }

  .sap-title-color {
    color: var(--sap-cyan);
    position: relative;
  }

  .sap-letter {
    display: inline-block;
  }

  .sap-title-dot {
    color: #f7ba70;
  }

  .sap-promise {
    font-size: clamp(21px, 2.4vw, 30px);
    line-height: 1.35;
    font-weight: 550;
    letter-spacing: -0.035em;
    margin-top: 22px;
  }

  .sap-promise > span {
    color: #9aaeb8;
  }

  .sap-description {
    font-size: 14px;
    line-height: 1.85;
    max-width: 390px;
    color: #a0b0b9;
    margin: 19px 0 0;
  }

  .sap-actions {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 17px;
    margin-top: 28px;
  }

  .sap-cta {
    display: inline-flex;
    align-items: center;
    gap: 23px;
    padding: 8px 8px 8px 23px;
    border-radius: 100px;
    background: var(--sap-cyan);
    color: #062b2c;
    text-decoration: none;
    font-size: 13px;
    font-weight: 750;
    box-shadow: 0 8px 40px #36d3d318;
    transition:
      background 0.25s,
      box-shadow 0.25s,
      transform 0.25s;
  }

  .sap-cta-icon {
    display: grid;
    place-items: center;
    width: 38px;
    height: 38px;
    background: #072e2b;
    border-radius: 50%;
    color: #a7ffef;
  }

  .sap-cta:hover {
    background: #a4ffef;
    box-shadow: 0 10px 40px #36d3d330;
    transform: translateY(-2px);
  }

  .sap-cta svg {
    transition: transform 0.25s;
  }

  .sap-cta:hover svg {
    transform: rotate(-35deg);
  }

  .sap-cta:focus-visible {
    outline: 2px solid #fff;
    outline-offset: 6px;
  }

  .sap-action-note {
    display: flex;
    align-items: center;
    gap: 6px;
    color: #98aab3;
    font-size: 10px;
  }

  .sap-check {
    color: var(--sap-cyan);
    font-size: 13px;
  }

  .sap-path {
    display: flex;
    gap: 20px;
    border-top: 1px solid #ffffff13;
    padding-top: 21px;
    margin-top: 34px;
    max-width: 430px;
  }

  .sap-path-item {
    display: flex;
    flex-direction: column;
    gap: 8px;
    flex: 1;
    font-size: 10px;
    color: #a2b1b8;
    line-height: 1.4;
  }

  .sap-step-number {
    font-size: 9px;
    letter-spacing: 0.08em;
    color: var(--sap-cyan);
  }

  .sap-visual {
    position: relative;
    width: 100%;
    max-width: 450px;
    margin: auto;
    padding: 15px 0 24px;
    min-width: 0;
  }

  .sap-perspective {
    perspective: 1200px;
  }

  .sap-portrait-tilt {
    transform-style: preserve-3d;
  }

  .sap-portrait {
    position: relative;
    aspect-ratio: 4 / 5;
    overflow: hidden;
    border-radius: 160px 160px 26px 26px;
    background: #14242b;
    border: 1px solid #91f6e82e;
    box-shadow: 0 35px 90px #0007;
  }

  .sap-portrait img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
    object-position: center top;
  }

  .sap-photo-fallback {
    height: 100%;
    display: grid;
    place-items: center;
    font-size: 180px;
    font-weight: 850;
    color: #4ce5e2;
    background: radial-gradient(
      ellipse at 40% 30%,
      #24525b,
      #0d191e 75%
    );
  }

  .sap-photo-shade {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      180deg,
      #06131925,
      transparent 35%,
      #04101555 63%,
      #040e13 100%
    );
  }

  .sap-photo-outline {
    position: absolute;
    inset: 10px;
    border: 1px solid #ffffff14;
    border-radius: 150px 150px 18px 18px;
    pointer-events: none;
  }

  .sap-photo-top {
    position: absolute;
    top: 30px;
    left: 30px;
    right: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    color: #fff;
    font-size: 7px;
    font-weight: 600;
    letter-spacing: 0.16em;
    text-shadow: 0 1px 10px #000;
  }

  .sap-mini-mark {
    display: grid;
    place-items: center;
    width: 35px;
    height: 35px;
    border: 1px solid #ffffff50;
    border-radius: 50%;
    font-size: 17px;
    letter-spacing: -0.08em;
    background: #07131845;
  }

  .sap-photo-caption {
    position: absolute;
    left: 28px;
    right: 28px;
    bottom: 24px;
  }

  .sap-caption-label {
    font-size: 8px;
    color: #92e9df;
    letter-spacing: 0.19em;
  }

  .sap-caption-name {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 650;
    font-size: 25px;
    letter-spacing: -0.04em;
    margin-top: 9px;
  }

  .sap-caption-name > span {
    display: grid;
    place-items: center;
    border: 1px solid #ffffff24;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    color: #a6eee4;
    transform: rotate(-35deg);
  }

  .sap-caption-line {
    height: 1px;
    background: linear-gradient(
      90deg,
      #4ce5e2 30%,
      #ffffff24 30%
    );
    margin: 17px 0 12px;
  }

  .sap-caption-bottom {
    display: flex;
    justify-content: space-between;
    font-size: 8px;
    color: #9dadb3;
    letter-spacing: 0.03em;
  }

  .sap-orbit {
    position: absolute;
    inset: -12px -25px 0;
    border: 1px solid #4ce5e21c;
    border-radius: 48% 48% 43% 43%;
    transform: rotate(13deg);
    pointer-events: none;
  }

  .sap-orbit > span {
    position: absolute;
    left: 25px;
    top: 25%;
    width: 7px;
    height: 7px;
    background: #66efdf;
    border-radius: 50%;
    box-shadow: 0 0 20px #4ce5e2aa;
  }

  .sap-orbit-two {
    inset: 6px -38px 10px;
    transform: rotate(-13deg);
    border-style: dashed;
    border-color: #4ce5e20c;
  }

  .sap-research-position {
    position: absolute;
    top: 28%;
    left: -48px;
    z-index: 2;
  }

  .sap-research {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 14px;
    border-radius: 15px;
    border: 1px solid #b2fff52b;
    background: #0c1b22f2;
    box-shadow: 0 15px 40px #0004;
  }

  .sap-search-icon {
    display: grid;
    place-items: center;
    width: 36px;
    height: 36px;
    border-radius: 11px;
    background: #4ce5e212;
    color: #7ff3e9;
  }

  .sap-card-label {
    display: block;
    font-size: 7px;
    letter-spacing: 0.1em;
    color: #92aaaf;
  }

  .sap-research strong {
    display: block;
    font-size: 11px;
    font-weight: 550;
    margin-top: 5px;
  }

  .sap-roadmap-position {
    position: absolute;
    right: -32px;
    bottom: 18%;
    z-index: 2;
  }

  .sap-roadmap {
    width: 185px;
    padding: 16px;
    background: #c0f6e6;
    color: #113b37;
    border: 1px solid #e0fff5;
    border-radius: 16px;
    box-shadow: 0 15px 50px #0004;
    animation-delay: -2.5s;
  }

  .sap-roadmap-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 7px;
    font-weight: 750;
    letter-spacing: 0.08em;
  }

  .sap-roadmap-top svg {
    width: 15px;
    height: 15px;
    transform: rotate(-35deg);
  }

  .sap-roadmap-bars {
    display: flex;
    align-items: flex-end;
    gap: 5px;
    height: 44px;
    margin: 9px 0 12px;
  }

  .sap-roadmap-bars i {
    flex: 1;
    background: #1f796c26;
    border-radius: 3px 3px 0 0;
    height: 22%;
  }

  .sap-roadmap-bars i:nth-child(2) {
    height: 36%;
  }

  .sap-roadmap-bars i:nth-child(3) {
    height: 30%;
  }

  .sap-roadmap-bars i:nth-child(4) {
    height: 55%;
  }

  .sap-roadmap-bars i:nth-child(5) {
    height: 68%;
  }

  .sap-roadmap-bars i:nth-child(6) {
    height: 79%;
    background: #2c8b78;
  }

  .sap-roadmap-bars i:nth-child(7) {
    height: 100%;
    background: #174e45;
  }

  .sap-roadmap strong {
    font-size: 13px;
    letter-spacing: -0.02em;
  }

  .sap-roadmap p {
    margin: 5px 0 0;
    font-size: 8px;
    color: #40645c;
  }

  .sap-visual-footnote {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    font-size: 7px;
    letter-spacing: 0.16em;
    color: #8aa7ad;
    margin-top: 24px;
  }

  .sap-bottom {
    position: relative;
    max-width: 1192px;
    margin: auto;
    padding: 20px 0;
    border-top: 1px solid #ffffff12;
    display: flex;
    justify-content: space-between;
    gap: 20px;
    font-size: 8px;
    letter-spacing: 0.15em;
    color: #80959f;
  }

  .sap-scroll {
    display: flex;
    align-items: center;
    gap: 14px;
  }

  .sap-scroll > span {
    color: var(--sap-cyan);
    font-size: 14px;
  }

  @media (prefers-reduced-motion: no-preference) {
    .sap-floating {
      animation: sap-float 6s ease-in-out infinite;
    }

    .sap-roadmap.sap-floating {
      animation-delay: -2.5s;
    }

    .sap-title-color .sap-letter {
      background-image: linear-gradient(
        110deg,
        #4ce5e2 20%,
        #bfffea 43%,
        #228981 51%,
        #4ce5e2 65%
      );
      background-size: 260% 100%;
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      animation: sap-shine 5s linear infinite;
    }

    .sap-scroll > span {
      animation: sap-scroll 2s ease-in-out infinite;
    }
  }

  @keyframes sap-float {
    0%,
    100% {
      transform: translateY(0);
    }

    50% {
      transform: translateY(-10px);
    }
  }

  @keyframes sap-shine {
    from {
      background-position: 220% 0;
    }

    to {
      background-position: -40% 0;
    }
  }

  @keyframes sap-scroll {
    0%,
    100% {
      transform: translateY(-3px);
    }

    50% {
      transform: translateY(3px);
    }
  }

  @media (min-width: 1450px) {
    .sap-layout {
      padding-top: 78px;
      padding-bottom: 84px;
    }
  }

  @media (max-width: 1100px) {
    .sap-layout {
      padding: 50px 44px 60px;
      gap: 50px;
    }

    .sap-title {
      font-size: clamp(62px, 7.8vw, 90px);
    }

    .sap-research-position {
      left: -24px;
    }

    .sap-roadmap-position {
      right: -18px;
    }

    .sap-bottom {
      margin: 0 44px;
    }
  }

  @media (max-width: 850px) {
    .sap-layout {
      grid-template-columns: 1fr;
      gap: 55px;
      max-width: 640px;
      padding: 42px 28px 38px;
      min-height: 0;
    }

    .sap-title {
      font-size: clamp(70px, 13vw, 100px);
    }

    .sap-description {
      max-width: 440px;
    }

    .sap-path {
      max-width: 100%;
    }

    .sap-visual {
      max-width: 390px;
      width: calc(100% - 28px);
    }

    .sap-promise {
      font-size: 28px;
    }

    .sap-bottom {
      margin: 0 28px;
    }

    .sap-bottom > span:first-child {
      max-width: 190px;
      line-height: 1.6;
    }

    .sap-aura-one {
      top: 40%;
      right: -250px;
    }

    .sap-intro {
      margin-top: 23px;
    }
  }

  @media (max-width: 430px) {
    .sap-hero {
      padding-top: 78px;
    }

    .sap-layout {
      padding: 30px 22px 30px;
      gap: 43px;
    }

    .sap-title {
      font-size: clamp(57px, 16vw, 69px);
    }

    .sap-intro {
      font-size: 11px;
    }

    .sap-eyebrow {
      font-size: 8px;
      letter-spacing: 0.12em;
    }

    .sap-promise {
      font-size: 25px;
      margin-top: 20px;
    }

    .sap-description {
      font-size: 13px;
    }

    .sap-actions {
      gap: 13px;
    }

    .sap-action-note {
      font-size: 9px;
    }

    .sap-path {
      gap: 10px;
      margin-top: 27px;
    }

    .sap-path-item {
      font-size: 9px;
    }

    .sap-visual {
      width: calc(100% - 18px);
    }

    .sap-research-position {
      left: -16px;
      top: 27%;
    }

    .sap-research {
      padding: 10px;
      gap: 8px;
    }

    .sap-research strong {
      font-size: 9px;
    }

    .sap-card-label {
      font-size: 6px;
    }

    .sap-search-icon {
      width: 29px;
      height: 29px;
    }

    .sap-roadmap-position {
      right: -12px;
      bottom: 20%;
    }

    .sap-roadmap {
      width: 153px;
      padding: 12px;
    }

    .sap-roadmap-top {
      font-size: 6px;
    }

    .sap-roadmap strong {
      font-size: 11px;
    }

    .sap-roadmap-bars {
      height: 32px;
    }

    .sap-photo-top {
      left: 24px;
      right: 24px;
      font-size: 6px;
    }

    .sap-photo-caption {
      left: 23px;
      right: 23px;
      bottom: 22px;
    }

    .sap-caption-name {
      font-size: 22px;
    }

    .sap-bottom {
      margin: 0 22px;
      font-size: 7px;
      letter-spacing: 0.09em;
    }

    .sap-orbit-two {
      inset: 6px -19px 10px;
    }

    .sap-orbit {
      inset: -9px -16px 0;
    }

    .sap-visual-footnote {
      font-size: 6px;
      letter-spacing: 0.12em;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .sap-hero * {
      animation: none !important;
      transition: none !important;
    }
  }
`;
