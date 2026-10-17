import React from "react";
import { motion, useReducedMotion } from "framer-motion";

const DeveloperCredit = () => {
  const reduceMotion = useReducedMotion();

  const socialLinks = [
    {
      name: "WhatsApp",
      icon: "fa-brands fa-whatsapp",
      href: "https://wa.me/93787172152",
    },
    {
      name: "Instagram",
      icon: "fa-brands fa-instagram",
      href: "https://www.instagram.com/milad_shaieq02?stkn=ejA1MWdvZXR4MjZp&utm_source=qr",
    },
    {
      name: "Facebook",
      icon: "fa-brands fa-facebook-f",
      href: "https://www.facebook.com/share/19a8S5b2Mv/?mibextid=wwXIfr",
    },
  ];

  return (
    <section className="relative isolate overflow-hidden border-t border-cyan-400/15 bg-[#070B10] px-5 py-8 text-white sm:py-9">
      {/* Subtle cyan grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.045]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(34,211,238,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.6) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 top-0 -z-10 h-48 w-48 rounded-full bg-cyan-500/10 blur-[90px]"
      />

      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: reduceMotion ? 0 : 0.6,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 sm:flex-row"
      >
        {/* Developer information */}
        <div className="text-center sm:text-left">
          <p className="flex items-center justify-center gap-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-500 sm:justify-start sm:text-xs">
            <span className="h-px w-6 bg-cyan-400/70" />
            Website Designed & Developed By
          </p>

          <motion.h3
            whileHover={reduceMotion ? undefined : { x: 3 }}
            className="mt-2 text-xl font-bold tracking-tight text-white sm:text-2xl"
          >
            <span className="text-cyan-400">Milad</span> Shaieq
          </motion.h3>

          <p className="mt-1 flex items-center justify-center gap-2 text-xs text-slate-400 sm:justify-start">
            <i className="fa-solid fa-code text-cyan-400" aria-hidden="true" />
            Web Developer
          </p>
        </div>

        {/* Social media links */}
        <div className="flex items-center gap-3">
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit Milad Shaieq on ${social.name}`}
              title={social.name}
              initial={reduceMotion ? false : { opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: reduceMotion ? 0 : 0.35,
                delay: reduceMotion ? 0 : index * 0.08,
              }}
              whileHover={reduceMotion ? undefined : { y: -4, scale: 1.06 }}
              whileTap={reduceMotion ? undefined : { scale: 0.94 }}
              className="group flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/20 bg-white/[0.04] text-cyan-400 shadow-sm transition-colors duration-300 hover:border-cyan-300 hover:bg-cyan-400 hover:text-[#070B10] hover:shadow-[0_0_22px_rgba(34,211,238,0.2)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#070B10]"
            >
              <i className={`${social.icon} text-lg`} aria-hidden="true" />
            </motion.a>
          ))}
        </div>
      </motion.div>

      {/* Bottom divider and credit */}
      <div className="mx-auto mt-7 max-w-7xl border-t border-white/[0.07] pt-4">
        <p className="text-center text-[11px] text-slate-600">
          Crafted with{" "}
          <i
            className="fa-solid fa-heart mx-1 text-cyan-500"
            aria-hidden="true"
          />
          by <span className="font-medium text-slate-400">Milad Shaieq</span>
        </p>
      </div>
    </section>
  );
};

export default DeveloperCredit;
