"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { HiMail, HiPhone, HiLocationMarker } from "react-icons/hi";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { personalInfo } from "@/lib/data";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="contact"
      ref={ref}
      className="py-24 relative overflow-hidden bg-gray-50 dark:bg-transparent"
    >
      {/* Dark mode background */}
      <div
        className="absolute inset-0 hidden dark:block"
        style={{
          background:
            "linear-gradient(135deg, #1a1942 0%, #2a1020 50%, #0a0a14 100%)",
        }}
      />
      <div className="absolute inset-0 hidden dark:block bg-[radial-gradient(circle_at_30%_50%,rgba(61,59,142,0.2),transparent_50%)]" />
      <div className="absolute inset-0 hidden dark:block bg-[radial-gradient(circle_at_70%_50%,rgba(81,13,10,0.15),transparent_50%)]" />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.span
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          className="text-sm font-mono text-accent-600 dark:text-accent-300 tracking-wider uppercase"
        >
          05 / Contact
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-4 mb-4"
        >
          Let&apos;s Work{" "}
          <span className="gradient-text">Together</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="text-lg text-gray-600 dark:text-gray-400 mb-10 max-w-xl mx-auto leading-relaxed"
        >
          I&apos;m always open to discussing new opportunities, collaborations,
          or just having a chat about technology.
        </motion.p>

        {/* Email CTA */}
        <motion.a
          href={`mailto:${personalInfo.email}`}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="group inline-flex items-center gap-3 px-8 py-4 rounded-full font-medium text-white overflow-hidden relative hover:scale-105 transition-all hover:shadow-xl hover:shadow-accent-600/25 mb-10"
        >
          <span
            className="absolute inset-0"
            style={{
              background: "linear-gradient(135deg, #3D3B8E, #510D0A)",
            }}
          />
          <span className="relative flex items-center gap-3">
            <HiMail className="w-5 h-5" />
            {personalInfo.email}
          </span>
        </motion.a>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4 }}
          className="flex justify-center gap-4 mb-10"
        >
          {[
            {
              href: personalInfo.linkedin,
              icon: <FaLinkedin className="w-5 h-5" />,
              label: "LinkedIn",
            },
            {
              href: personalInfo.github,
              icon: <FaGithub className="w-5 h-5" />,
              label: "GitHub",
            },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-200 dark:bg-white/5 border border-gray-300 dark:border-white/10 text-gray-500 dark:text-gray-400 hover:text-accent-600 dark:hover:text-white hover:bg-gray-300 dark:hover:bg-white/10 transition-all"
              aria-label={link.label}
            >
              {link.icon}
            </a>
          ))}
        </motion.div>

        {/* Phone & Location */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap justify-center gap-6 text-sm text-gray-500 dark:text-gray-500"
        >
          <a
            href={`tel:${personalInfo.phone}`}
            className="flex items-center gap-2 hover:text-accent-600 dark:hover:text-gray-300 transition-colors"
          >
            <HiPhone className="w-4 h-4" />
            {personalInfo.phone}
          </a>
          <span className="flex items-center gap-2">
            <HiLocationMarker className="w-4 h-4" />
            {personalInfo.location}
          </span>
        </motion.div>
      </div>
    </section>
  );
}
