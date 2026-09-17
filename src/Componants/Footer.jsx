import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Footer = () => {
  // =========================
  // SOCIAL MEDIA LINKS
  // =========================
  const socialLinks = [
    {
      name: "Facebook",
      icon: "fa-brands fa-facebook-f",
      href: "https://www.facebook.com/share/1CoSRjm266/?mibextid=wwXIfr",
    },
    {
      name: "Instagram",
      icon: "fa-brands fa-instagram",
      href: "https://www.instagram.com/sami_amzpro?stkn=ZW01dDhuanByNjM2&utm_source=qr",
    },
    {
      name: "WhatsApp",
      icon: "fa-brands fa-whatsapp",
      href: "https://wa.me/message/XEPM2Y5RRXSBF1",
    },
  ];

  return (
    <footer className="relative overflow-hidden bg-[#111827] text-white">
      {/* Decorative Glow */}
      <div className="absolute -top-32 left-1/4 h-72 w-72 rounded-full bg-[#FF9900]/10 blur-3xl" />

      <div className="absolute -bottom-32 right-1/4 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8">
        {/* =========================
            MAIN FOOTER
        ========================== */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* =========================
              BRAND
          ========================== */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link to="/" className="inline-block">
              <h1 className="text-3xl font-bold">
                <span className="text-white">SAMI </span>
                <span className="text-[#FF9900]">AMZ PRO</span>
              </h1>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-gray-400">
              Learn Amazon business strategies, build real skills, and develop
              the knowledge needed to grow your online business.
            </p>

            {/* SOCIAL MEDIA */}
            <div className="mt-7 flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  whileHover={{
                    y: -5,
                    scale: 1.08,
                  }}
                  whileTap={{
                    scale: 0.92,
                  }}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-700 bg-gray-800 text-gray-300 transition-all duration-300 hover:border-[#FF9900] hover:bg-[#FF9900] hover:text-white"
                >
                  <i className={`${social.icon} text-base`} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* =========================
              QUICK LINKS
          ========================== */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.1,
            }}
          >
            <h3 className="text-lg font-semibold">Quick Links</h3>

            <ul className="mt-6 space-y-4 text-sm text-gray-400">
              <li>Home</li>

              <li>Courses</li>

              <li>About Instructor</li>

              <li>Contact</li>
            </ul>
          </motion.div>

          {/* =========================
              LEARNING
          ========================== */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.2,
            }}
          >
            <h3 className="text-lg font-semibold">What You Can Learn</h3>

            <ul className="mt-6 space-y-4 text-sm text-gray-400">
              <li>Amazon FBA</li>

              <li>Product Research</li>

              <li>Alibaba & Sourcing</li>

              <li>Amazon PPC</li>
            </ul>
          </motion.div>

          {/* =========================
              CONTACT
          ========================== */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.3,
            }}
          >
            <h3 className="text-lg font-semibold">Get In Touch</h3>

            <div className="mt-6 space-y-5 text-sm text-gray-400">
              {/* EMAIL */}
              <a
                href="mailto:samiamzpro.org@gmail.com"
                className="group flex items-start gap-4 transition hover:text-[#FF9900]"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gray-800 text-[#FF9900] transition group-hover:bg-[#FF9900] group-hover:text-white">
                  <i className="fa-solid fa-envelope" />
                </span>

                <span className="pt-1">samiamzpro.org@gmail.com</span>
              </a>

              {/* WHATSAPP */}
              <a
                href="https://wa.me/message/XEPM2Y5RRXSBF1"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-4 transition hover:text-[#FF9900]"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gray-800 text-[#FF9900] transition group-hover:bg-[#FF9900] group-hover:text-white">
                  <i className="fa-brands fa-whatsapp" />
                </span>

                <span className="pt-1">+93 777 965 959</span>
              </a>

              {/* ADDRESS */}
              <a
                href="https://www.google.com/maps/search/?api=1&query=Your+Center+Address"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-4 transition hover:text-[#FF9900]"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gray-800 text-[#FF9900] transition group-hover:bg-[#FF9900] group-hover:text-white">
                  <i className="fa-solid fa-location-dot" />
                </span>

                <span className="pt-1 leading-6">Kabul , Afghanistan</span>
              </a>

              {/* AVAILABILITY */}
              <div className="flex items-start gap-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gray-800 text-[#FF9900]">
                  <i className="fa-regular fa-clock" />
                </span>

                <span className="pt-1 leading-6">
                  Available for learning
                  <br />& business inquiries
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* DIVIDER */}
        <div className="my-12 h-px bg-gray-800" />

        {/* =========================
            BOTTOM FOOTER
        ========================== */}
        <div className="flex flex-col items-center justify-between gap-5 text-sm text-gray-500 md:flex-row">
          <p>© {new Date().getFullYear()} SAMI AMZ PRO. All rights reserved.</p>

          <div className="flex gap-6">
            <a href="#" className="transition hover:text-[#FF9900]">
              Privacy Policy
            </a>

            <a href="#" className="transition hover:text-[#FF9900]">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
