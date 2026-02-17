"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { HiMail } from "react-icons/hi";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { personalInfo } from "@/lib/data";
import ParticleBackground from "./ParticleBackground";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const nameY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const taglineY = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const ctaY = useTransform(scrollYProgress, [0, 1], [0, -20]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
      },
    },
  };

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-mesh"
    >
      <ParticleBackground />

      <motion.div
        style={{ opacity }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          {/* Name with parallax */}
          <motion.h1
            variants={itemVariants}
            style={{ y: nameY }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-4"
          >
            <span className="text-gray-900 dark:text-white">Yatin Kalra</span>
          </motion.h1>

          {/* Title */}
          <motion.div
            variants={itemVariants}
            style={{ y: taglineY }}
            className="mb-8"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-700 dark:text-gray-300">
              Senior Full Stack Engineer
            </h2>
          </motion.div>

          {/* Tagline */}
          <motion.p
            variants={itemVariants}
            style={{ y: taglineY }}
            className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-12"
          >
            Crafting scalable web applications with{" "}
            <span className="text-blue-600 dark:text-blue-400 font-semibold">
              8+ years
            </span>{" "}
            of expertise in React, Node.js, AWS, and modern technologies
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            style={{ y: ctaY }}
            className="flex flex-wrap items-center justify-center gap-4 mb-12"
          >
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
            >
              Get In Touch
            </a>

            <a
              href="#work"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#work")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-full font-medium border border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500 transition-colors shadow-md hover:shadow-lg"
            >
              View My Work
            </a>
          </motion.div>

          {/* Social Row */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center gap-5 text-gray-500 dark:text-gray-400"
          >
            <a
              href={`mailto:${personalInfo.email}`}
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              aria-label="Email"
            >
              <HiMail className="w-6 h-6" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#0077b5] transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-5 h-5" />
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-900 dark:hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <FaGithub className="w-5 h-5" />
            </a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, repeat: Infinity, duration: 2 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex items-start justify-center p-2">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="w-1.5 h-1.5 bg-gray-600 dark:bg-gray-400 rounded-full"
              />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
