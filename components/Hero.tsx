"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { HiMail, HiArrowDown } from "react-icons/hi";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { personalInfo } from "@/lib/data";
import ParticleBackground from "./ParticleBackground";

const roles = [
  "Full Stack Engineer",
  "Cloud Architect",
  "System Designer",
  "Tech Lead",
];

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.8], [1, 0.95]);

  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring" as const, stiffness: 80, damping: 20 },
    },
  };

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-mesh"
    >
      <ParticleBackground />

      {/* Floating gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-accent-600/15 dark:bg-accent-600/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-brand-800/10 dark:bg-brand-800/8 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-accent-500/10 dark:bg-accent-500/5 rounded-full blur-3xl animate-float" />
      </div>

      <motion.div
        style={{ opacity, scale }}
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          {/* Availability badge */}
          <motion.div variants={itemVariants} className="mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium glass border border-accent-200/30 dark:border-accent-500/20 text-gray-700 dark:text-gray-300">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              Available for opportunities
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight"
          >
            <span className="text-gray-900 dark:text-white">Yatin</span>{" "}
            <span className="gradient-text">Kalra</span>
          </motion.h1>

          {/* Animated role */}
          <motion.div variants={itemVariants} className="mb-6 h-12">
            <motion.h2
              key={roleIndex}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-600 dark:text-gray-400"
            >
              {roles[roleIndex]}
            </motion.h2>
          </motion.div>

          {/* Tagline */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Building scalable systems with{" "}
            <span className="text-accent-600 dark:text-accent-300 font-semibold">
              8+ years
            </span>{" "}
            of expertise across fintech, healthcare & SaaS
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
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
              className="group relative px-8 py-4 rounded-full font-medium text-white overflow-hidden transition-all hover:scale-105 hover:shadow-xl hover:shadow-accent-600/25"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-accent-600 to-brand-800" />
              <span className="relative flex items-center gap-2">
                <HiMail className="w-5 h-5" />
                Get In Touch
              </span>
            </a>

            <a
              href="#work"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#work")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-8 py-4 rounded-full font-medium text-gray-700 dark:text-gray-300 glass glow-hover hover:scale-105 transition-all"
            >
              View My Work
            </a>
          </motion.div>

          {/* Social Row */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center gap-4"
          >
            {[
              {
                href: `mailto:${personalInfo.email}`,
                icon: <HiMail className="w-5 h-5" />,
                label: "Email",
              },
              {
                href: personalInfo.linkedin,
                icon: <FaLinkedin className="w-5 h-5" />,
                label: "LinkedIn",
                external: true,
              },
              {
                href: personalInfo.github,
                icon: <FaGithub className="w-5 h-5" />,
                label: "GitHub",
                external: true,
              },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="p-3 rounded-full glass text-gray-500 dark:text-gray-400 hover:text-accent-600 dark:hover:text-accent-300 hover:scale-110 transition-all"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="text-gray-400 dark:text-gray-600"
            >
              <HiArrowDown className="w-5 h-5" />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
