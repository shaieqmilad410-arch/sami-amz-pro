import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";

const CYAN = "#06B6D4";
const CYAN_LIGHT = "#22D3EE";

const Contact = () => {
  const shouldReduceMotion = useReducedMotion();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // WhatsApp number in international format, without + or spaces.
    // Confirm this is the correct number before publishing.
    const whatsappNumber = "93777965959";

    const whatsappMessage = [
      "Hello, I would like to contact you.",
      "",
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      `Subject: ${formData.subject}`,
      "",
      "Message:",
      formData.message,
    ].join("\n");

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage,
    )}`;

    window.open(whatsappURL, "_blank", "noopener,noreferrer");

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  const reveal = (delay = 0, x = 0) => ({
    initial: shouldReduceMotion ? false : { opacity: 0, y: 20, x },
    whileInView: { opacity: 1, y: 0, x: 0 },
    viewport: { once: true, amount: 0.15 },
    transition: {
      duration: shouldReduceMotion ? 0 : 0.6,
      delay: shouldReduceMotion ? 0 : delay,
    },
  });

  const inputClass =
    "w-full rounded-xl border border-white/10 bg-[#0B1119] px-4 py-3.5 text-sm text-white outline-none transition-all duration-200 placeholder:text-slate-600 hover:border-white/20 focus:border-cyan-400/70 focus:bg-[#0D1620] focus:ring-4 focus:ring-cyan-400/10";

  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden bg-[#070B10] py-20 text-white sm:py-28"
    >
      {/* Background grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.12]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(34,211,238,0.13) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.13) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)",
        }}
      />

      {/* Ambient cyan glows */}
      <motion.div
        aria-hidden="true"
        animate={
          shouldReduceMotion ? undefined : { x: [0, 20, 0], y: [0, -15, 0] }
        }
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -left-32 top-20 -z-10 h-80 w-80 rounded-full bg-cyan-500/[0.09] blur-[110px]"
      />

      <motion.div
        aria-hidden="true"
        animate={
          shouldReduceMotion ? undefined : { x: [0, -20, 0], y: [0, 15, 0] }
        }
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -right-32 bottom-10 -z-10 h-80 w-80 rounded-full bg-cyan-400/[0.08] blur-[110px]"
      />

      {/* Top accent */}
      <div
        aria-hidden="true"
        className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Heading */}
        <motion.div
          {...reveal()}
          className="mx-auto mb-14 max-w-3xl text-center sm:mb-16"
        >
          <div className="mb-5 inline-flex items-center gap-2.5 rounded-full border border-cyan-400/20 bg-cyan-400/[0.07] px-4 py-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-50" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
            </span>

            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
              Get in touch
            </span>
          </div>

          <h2 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Let's Talk About Your
            <br className="hidden sm:block" />{" "}
            <span
              className="bg-gradient-to-r from-cyan-300 to-cyan-500 bg-clip-text text-transparent"
              style={{ WebkitBackgroundClip: "text" }}
            >
              Amazon Journey.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
            Have questions about our courses, Amazon business training, or
            getting started? Send us a message and our team will help you
            understand your next step.
          </p>
        </motion.div>

        {/* Main contact panel */}
        <div className="grid overflow-hidden rounded-3xl border border-white/10 bg-[#0A1018]/90 shadow-2xl shadow-black/30 backdrop-blur-xl lg:grid-cols-5">
          {/* Left information panel */}
          <motion.div
            {...reveal(0, -25)}
            className="relative overflow-hidden border-b border-white/10 bg-gradient-to-br from-[#0E1924] via-[#0A111A] to-[#080D14] p-7 sm:p-10 lg:col-span-2 lg:border-b-0 lg:border-r lg:border-white/10 lg:p-12"
          >
            {/* Decorative glow */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-cyan-400/[0.10] blur-[90px]"
            />

            <div className="relative">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">
                Contact us
              </span>

              <h3 className="mt-5 text-3xl font-bold leading-tight text-white sm:text-4xl">
                Have a question?
                <br />
                <span className="text-slate-400">We're here to help.</span>
              </h3>

              <p className="mt-6 text-sm leading-7 text-slate-400 sm:text-base">
                Whether you are completely new to Amazon or already building
                your business, feel free to reach out. We're happy to help you
                understand the next step.
              </p>

              {/* Contact details */}
              <div className="mt-10 space-y-7">
                {/* Email */}
                <motion.a
                  href="mailto:samiamzpro.org@gmail.com"
                  whileHover={shouldReduceMotion ? undefined : { x: 4 }}
                  className="group flex items-start gap-4 rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-400"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 transition-colors group-hover:bg-cyan-400/20">
                    <svg
                      width="21"
                      height="21"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <rect x="3" y="5" width="18" height="14" rx="2" />
                      <path d="m3 7 9 6 9-6" />
                    </svg>
                  </div>

                  <div className="min-w-0 pt-1">
                    <p className="text-xs text-slate-500">Email us</p>
                    <p className="mt-1 break-all text-sm font-medium text-slate-200 transition-colors group-hover:text-cyan-300">
                      samiamzpro.org@gmail.com
                    </p>
                  </div>
                </motion.a>

                {/* Phone */}
                <motion.a
                  href="tel:+93777986692"
                  whileHover={shouldReduceMotion ? undefined : { x: 4 }}
                  className="group flex items-start gap-4 rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-400"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 transition-colors group-hover:bg-cyan-400/20">
                    <svg
                      width="21"
                      height="21"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8 8.9a16 16 0 0 0 6 6l1.2-1.3a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.8 2.1Z" />
                    </svg>
                  </div>

                  <div className="pt-1">
                    <p className="text-xs text-slate-500">Call us</p>
                    <p className="mt-1 text-sm font-medium text-slate-200 transition-colors group-hover:text-cyan-300">
                      +93 777 986 692
                    </p>
                  </div>
                </motion.a>

                {/* Support */}
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
                    <svg
                      width="21"
                      height="21"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <circle cx="12" cy="12" r="9" />
                      <path d="M9.6 9a2.5 2.5 0 1 1 4.2 1.8c-1.1.9-1.8 1.2-1.8 2.7" />
                      <path d="M12 17h.01" />
                    </svg>
                  </div>

                  <div className="pt-1">
                    <p className="text-xs text-slate-500">Support</p>
                    <p className="mt-1 text-sm leading-6 text-slate-200">
                      We're here to answer your questions.
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom panel */}
              <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.035] p-5 sm:mt-12">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M12 3v3" />
                      <path d="M12 18v3" />
                      <path d="M3 12h3" />
                      <path d="M18 12h3" />
                      <path d="m5.6 5.6 2.1 2.1" />
                      <path d="m16.3 16.3 2.1 2.1" />
                      <path d="m18.4 5.6-2.1 2.1" />
                      <path d="m7.7 16.3-2.1 2.1" />
                      <circle cx="12" cy="12" r="4" />
                    </svg>
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-white">
                      Ready to get started?
                    </p>
                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      Let's build your next step.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right form panel */}
          <motion.div
            {...reveal(0.1, 25)}
            className="p-7 sm:p-10 lg:col-span-3 lg:p-12"
          >
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-white sm:text-3xl">
                Send us a message
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">
                Fill out the form and continue to WhatsApp to send your message
                to our team.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name and email */}
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="mb-2 block text-sm font-medium text-slate-300"
                  >
                    Your name
                  </label>

                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                    className={inputClass}
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="mb-2 block text-sm font-medium text-slate-300"
                  >
                    Email address
                  </label>

                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    required
                    className={inputClass}
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="contact-subject"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Subject
                </label>

                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What would you like to ask?"
                  required
                  className={inputClass}
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Message
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us how we can help..."
                  required
                  className={`${inputClass} resize-y`}
                />
              </div>

              {/* Submit */}
              <motion.button
                whileHover={shouldReduceMotion ? undefined : { y: -2 }}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.99 }}
                type="submit"
                className="group inline-flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-cyan-500 to-cyan-400 px-6 py-4 text-sm font-bold text-[#041016] shadow-lg shadow-cyan-950/30 transition-all duration-300 hover:from-cyan-400 hover:to-cyan-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300 sm:w-auto"
              >
                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M22 2 11 13" />
                  <path d="m22 2-7 20-4-9-9-4Z" />
                </svg>
                Continue to WhatsApp
                <span
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </motion.button>

              <p className="text-xs leading-5 text-slate-500">
                Your message will open in WhatsApp for you to review and send.
                It is not sent automatically by this form.
              </p>
            </form>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div {...reveal(0.15)} className="mt-12 text-center">
          <p className="text-sm text-slate-400 sm:text-base">
            Want to start learning right away?
          </p>

          <Link
            to="/courses"
            className="mt-4 inline-flex items-center gap-2 font-semibold text-cyan-300 transition-colors hover:text-cyan-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-400"
          >
            Explore our courses
            <span
              aria-hidden="true"
              className="transition-transform duration-200 hover:translate-x-1"
            >
              →
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
