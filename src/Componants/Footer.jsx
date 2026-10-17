import React from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";

const socialLinks = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/share/1CoSRjm266/?mibextid=wwXIfr",
    icon: "fa-brands fa-facebook-f",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/sami_amzpro?stkn=ZW01dDhuanByNjM2&utm_source=qr",
    icon: "fa-brands fa-instagram",
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/message/XEPM2Y5RRXSBF1",
    icon: "fa-brands fa-whatsapp",
  },
];

const quickLinks = [
  { name: "Home", to: "/" },
  { name: "Courses", to: "/courses" },
  { name: "About Instructor", to: "/about" },
  { name: "Contact", to: "/contact" },
];

const learningTopics = [
  "Amazon FBA",
  "Product Research",
  "Alibaba & Sourcing",
  "Amazon PPC",
];

const contactDetails = [
  {
    icon: "fa-solid fa-envelope",
    label: "Email",
    value: "samiamzpro.org@gmail.com",
    href: "mailto:samiamzpro.org@gmail.com",
  },
  {
    icon: "fa-brands fa-whatsapp",
    label: "WhatsApp",
    value: "+93 777 965 959",
    href: "https://wa.me/message/XEPM2Y5RRXSBF1",
  },
  {
    icon: "fa-solid fa-location-dot",
    label: "Location",
    value: "Kabul, Afghanistan",
    href: "https://www.google.com/maps/search/?api=1&query=Kabul%2C%20Afghanistan",
  },
];

function FooterIcon({ icon, className = "" }) {
  return <i className={`${icon} ${className}`} aria-hidden="true" />;
}

export default function Footer() {
  const reduceMotion = useReducedMotion();

  const fadeUp = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 18 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <footer className="relative isolate overflow-hidden border-t border-cyan-400/15 bg-[#070B10] text-white">
      {/* Background effects */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div
          className="absolute inset-0 opacity-[0.055]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(34,211,238,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.5) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />

        <div className="absolute -left-32 top-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-[110px]" />
        <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-cyan-400/10 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-5 pb-6 pt-14 sm:px-8 sm:pt-16 lg:px-10">
        {/* Main footer grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          transition={{ staggerChildren: reduceMotion ? 0 : 0.1 }}
          className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12"
        >
          {/* Brand */}
          <motion.div variants={fadeUp} className="space-y-5">
            <Link
              to="/"
              aria-label="SAMI AMZ PRO home"
              className="inline-flex items-center rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            >
              <img
                src="/SamiAMZ Cyan Smile Logo.png"
                alt="SAMI AMZ PRO"
                className="h-16 w-auto max-w-[190px] object-contain object-left"
                loading="lazy"
              />
            </Link>

            <p className="max-w-sm text-sm leading-7 text-slate-400">
              Learn Amazon business with practical guidance, clear strategies,
              and step-by-step training designed to help you build your skills
              and move forward with confidence.
            </p>

            <div className="flex flex-wrap gap-3 pt-1">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  title={social.name}
                  className="group flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/20 bg-white/[0.04] text-cyan-400 transition duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:bg-cyan-400 hover:text-[#070B10] hover:shadow-[0_0_24px_rgba(34,211,238,0.2)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                >
                  <FooterIcon icon={social.icon} className="text-lg" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick links */}
          <motion.div variants={fadeUp}>
            <h3 className="mb-6 text-base font-bold text-white">
              Quick Links
              <span className="mt-3 block h-0.5 w-10 rounded-full bg-cyan-400" />
            </h3>

            <ul className="space-y-4">
              {quickLinks.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="group inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                  >
                    <FooterIcon
                      icon="fa-solid fa-angle-right"
                      className="text-xs text-cyan-500 transition group-hover:translate-x-1"
                    />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Learning topics */}
          <motion.div variants={fadeUp}>
            <h3 className="mb-6 text-base font-bold text-white">
              What You Can Learn
              <span className="mt-3 block h-0.5 w-10 rounded-full bg-cyan-400" />
            </h3>

            <ul className="space-y-4">
              {learningTopics.map((topic, index) => (
                <li key={topic}>
                  <Link
                    to="/courses"
                    className="group inline-flex items-center gap-3 text-sm text-slate-400 transition hover:text-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-cyan-400/15 bg-cyan-400/[0.06] text-cyan-400 transition group-hover:border-cyan-400/40 group-hover:bg-cyan-400/10">
                      <FooterIcon
                        icon={
                          [
                            "fa-solid fa-box-open",
                            "fa-solid fa-magnifying-glass-chart",
                            "fa-solid fa-truck-fast",
                            "fa-solid fa-chart-line",
                          ][index]
                        }
                        className="text-xs"
                      />
                    </span>
                    {topic}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={fadeUp}>
            <h3 className="mb-6 text-base font-bold text-white">
              Get in Touch
              <span className="mt-3 block h-0.5 w-10 rounded-full bg-cyan-400" />
            </h3>

            <ul className="space-y-5">
              {contactDetails.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target={item.label === "Location" ? "_blank" : undefined}
                    rel={
                      item.label === "Location"
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="group flex items-start gap-3 rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/[0.06] text-cyan-400 transition group-hover:bg-cyan-400 group-hover:text-[#070B10]">
                      <FooterIcon icon={item.icon} className="text-sm" />
                    </span>

                    <span className="min-w-0 pt-0.5">
                      <span className="block text-xs font-medium uppercase tracking-wider text-slate-500">
                        {item.label}
                      </span>
                      <span className="mt-1 block break-words text-sm text-slate-300 transition group-hover:text-cyan-300">
                        {item.value}
                      </span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            <p className="mt-5 flex items-center gap-2 text-xs text-slate-500">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-50" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
              </span>
              Available for learning and business inquiries
            </p>
          </motion.div>
        </motion.div>

        {/* CTA banner */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mt-14 overflow-hidden rounded-2xl border border-cyan-400/20 bg-white/[0.035] p-6 sm:mt-16 sm:flex sm:items-center sm:justify-between sm:gap-6 sm:p-8"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-10 -top-20 h-48 w-48 rounded-full bg-cyan-400/10 blur-3xl"
          />

          <div className="relative">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-400">
              Your next step starts here
            </p>
            <h3 className="mt-2 text-xl font-bold text-white sm:text-2xl">
              Ready to learn Amazon business?
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              Explore the courses and find the right place to start.
            </p>
          </div>

          <Link
            to="/courses"
            className="relative mt-5 inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-cyan-400 px-6 py-3 text-sm font-bold text-[#070B10] transition hover:bg-cyan-300 hover:shadow-[0_0_28px_rgba(34,211,238,0.2)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200 focus-visible:ring-offset-2 focus-visible:ring-offset-[#070B10] sm:mt-0"
          >
            Explore Courses
            <FooterIcon icon="fa-solid fa-arrow-right" />
          </Link>
        </motion.div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-center sm:flex-row sm:text-left">
          <p className="text-xs leading-6 text-slate-500">
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-slate-300">SAMI AMZ PRO</span>.
            All rights reserved.
          </p>

          <a
            href="mailto:samiamzpro.org@gmail.com"
            className="inline-flex items-center gap-2 text-xs text-slate-500 transition hover:text-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
          >
            <FooterIcon icon="fa-solid fa-paper-plane" />
            Let's connect
          </a>
        </div>
      </div>
    </footer>
  );
}
