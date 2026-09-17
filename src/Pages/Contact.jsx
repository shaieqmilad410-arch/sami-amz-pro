import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Send form information to WhatsApp
  const handleSubmit = (e) => {
    e.preventDefault();

    // Your WhatsApp number
    // Afghanistan country code = 93
    // Remove the + and the first 0
    const whatsappNumber = "93777965959";

    // Create the WhatsApp message
    const message = `
Hello, I would like to contact you.

Name: ${formData.name}
Email: ${formData.email}
Subject: ${formData.subject}

Message:
${formData.message}
`;

    // Create WhatsApp URL
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message,
    )}`;

    // Open WhatsApp
    window.open(whatsappURL, "_blank");

    // Clear the form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section className="relative overflow-hidden bg-[#f8fafc] py-24">
      {/* Background Decorations */}

      <motion.div
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-orange-400/10 blur-3xl"
      />

      <motion.div
        animate={{
          x: [0, -30, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-blue-400/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="mb-4 inline-block rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600">
            Get In Touch
          </span>

          <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Let's Talk About Your
            <span className="text-[#FF9900]"> Amazon Journey.</span>
          </h2>

          <p className="mt-5 text-lg leading-8 text-gray-600">
            Have questions about our courses, Amazon business training, or
            getting started? Send us a message and our team will get back to
            you.
          </p>
        </motion.div>

        {/* Main Contact Area */}

        <div className="grid overflow-hidden rounded-3xl bg-white shadow-xl lg:grid-cols-5">
          {/* Left Side */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden bg-gray-900 p-8 text-white sm:p-10 lg:col-span-2 lg:p-12"
          >
            {/* Orange Glow */}

            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#FF9900]/20 blur-3xl" />

            <div className="relative">
              <span className="text-sm font-semibold uppercase tracking-wider text-[#FF9900]">
                Contact Us
              </span>

              <h3 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
                Have a question?
                <br />
                We're here to help.
              </h3>

              <p className="mt-6 leading-7 text-gray-300">
                Whether you are completely new to Amazon or already building
                your business, feel free to reach out. We're happy to help you
                understand the next step.
              </p>

              {/* Contact Details */}

              <div className="mt-10 space-y-6">
                {/* Email */}

                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-4"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#FF9900] text-lg">
                    ✉
                  </div>

                  <div>
                    <p className="text-sm text-gray-400">Email</p>

                    <p className="mt-1 font-medium">samiamzpro.org@gmail.com</p>
                  </div>
                </motion.div>

                {/* Phone */}

                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-4"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#FF9900] text-lg">
                    ☎
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Phone</p>
                    +93 777 986 692
                    <p className="mt-1 font-medium"></p>
                  </div>
                </motion.div>

                {/* Support */}

                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-4"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#FF9900] text-lg">
                    ?
                  </div>

                  <div>
                    <p className="text-sm text-gray-400">Support</p>

                    <p className="mt-1 font-medium">
                      We're here to answer your questions.
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Bottom Badge */}

              <div className="mt-12 rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    <div className="h-9 w-9 rounded-full border-2 border-gray-900 bg-orange-400" />

                    <div className="h-9 w-9 rounded-full border-2 border-gray-900 bg-blue-400" />

                    <div className="h-9 w-9 rounded-full border-2 border-gray-900 bg-gray-300" />
                  </div>

                  <div>
                    <p className="text-sm font-semibold">
                      Ready to get started?
                    </p>

                    <p className="text-xs text-gray-400">
                      Let's build your next step.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Form */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="p-8 sm:p-10 lg:col-span-3 lg:p-12"
          >
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900">
                Send us a message
              </h3>

              <p className="mt-2 text-gray-500">
                Fill out the form below and we'll get back to you.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name + Email */}

              <div className="grid gap-6 sm:grid-cols-2">
                {/* Name */}

                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-semibold text-gray-700"
                  >
                    Your Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-gray-900 outline-none transition-all placeholder:text-gray-400 focus:border-[#FF9900] focus:bg-white focus:ring-4 focus:ring-orange-100"
                  />
                </div>

                {/* Email */}

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-semibold text-gray-700"
                  >
                    Email Address
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    required
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-gray-900 outline-none transition-all placeholder:text-gray-400 focus:border-[#FF9900] focus:bg-white focus:ring-4 focus:ring-orange-100"
                  />
                </div>
              </div>

              {/* Subject */}

              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-semibold text-gray-700"
                >
                  Subject
                </label>

                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What would you like to ask?"
                  required
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-gray-900 outline-none transition-all placeholder:text-gray-400 focus:border-[#FF9900] focus:bg-white focus:ring-4 focus:ring-orange-100"
                />
              </div>

              {/* Message */}

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-semibold text-gray-700"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us how we can help..."
                  required
                  className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-gray-900 outline-none transition-all placeholder:text-gray-400 focus:border-[#FF9900] focus:bg-white focus:ring-4 focus:ring-orange-100"
                />
              </div>

              {/* Submit Button */}

              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="group flex w-full items-center justify-center gap-3 rounded-xl bg-[#FF9900] px-6 py-4 font-semibold text-white shadow-lg shadow-orange-200 transition-all duration-300 hover:bg-orange-500 hover:shadow-xl sm:w-auto"
              >
                Send Message
                <motion.span
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                  className="text-lg"
                >
                  →
                </motion.span>
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Bottom CTA */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600">Want to start learning right away?</p>

          <Link
            to="/courses"
            className="mt-4 inline-flex items-center gap-2 font-semibold text-gray-900 transition hover:text-[#FF9900]"
          >
            Explore our courses
            <span className="text-[#FF9900]">→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
