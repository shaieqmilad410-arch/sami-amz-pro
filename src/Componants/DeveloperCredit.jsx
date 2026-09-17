import React from "react";
import { motion } from "framer-motion";

const DeveloperCredit = () => {
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
    <section className="bg-[#0b1220] px-5 py-8 text-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 sm:flex-row"
      >
        {/* Developer Info */}
        <div className="text-center sm:text-left">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-gray-500">
            Website Designed & Developed By
          </p>

          <motion.h3
            whileHover={{ x: 3 }}
            className="mt-2 text-lg font-bold text-white"
          >
            <span className="text-[#FF9900]">Milad</span> Shaieq
          </motion.h3>

          <p className="mt-1 text-xs text-gray-500">Web Developer</p>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-3">
          {socialLinks.map((social) => (
            <motion.a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              whileHover={{
                y: -4,
                scale: 1.08,
              }}
              whileTap={{
                scale: 0.92,
              }}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-700 bg-gray-800 text-gray-400 transition-all duration-300 hover:border-[#FF9900] hover:bg-[#FF9900] hover:text-white"
            >
              <i className={social.icon} />
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default DeveloperCredit;
