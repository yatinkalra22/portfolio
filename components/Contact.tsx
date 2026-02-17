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
      className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Section label */}
        <motion.span
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          className="text-sm font-mono text-gray-400 tracking-wider uppercase"
        >
          05 / Contact
        </motion.span>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold mt-4 mb-4"
        >
          Let&apos;s Work Together
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="text-lg text-gray-300 mb-10 max-w-xl mx-auto"
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
          className="inline-flex items-center gap-3 px-8 py-4 bg-white text-gray-900 rounded-full font-medium hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl mb-10"
        >
          <HiMail className="w-5 h-5" />
          {personalInfo.email}
        </motion.a>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4 }}
          className="flex justify-center gap-5 mb-8"
        >
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="w-6 h-6" />
          </a>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <FaGithub className="w-6 h-6" />
          </a>
        </motion.div>

        {/* Phone & Location */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap justify-center gap-6 text-sm text-gray-400"
        >
          <a
            href={`tel:${personalInfo.phone}`}
            className="flex items-center gap-2 hover:text-white transition-colors"
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
