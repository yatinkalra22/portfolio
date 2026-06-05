"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { HiMail, HiPhone, HiLocationMarker } from "react-icons/hi";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { personalInfo } from "@/lib/data";

function TerminalText({ text, delay = 0 }: { text: string; delay?: number }) {
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    let i = 0;
    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayed(text.slice(0, i + 1));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 30);
    return () => clearInterval(interval);
  }, [started, text]);

  return (
    <span>
      {displayed}
      {started && displayed.length < text.length && (
        <span className="animate-pulse text-cyan-500 dark:text-cyan-400">|</span>
      )}
    </span>
  );
}

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
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
      id="contact"
      ref={ref}
      className="relative py-24 overflow-hidden bg-gray-50 dark:bg-[#030014] transition-colors"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(245,158,11,0.06),transparent_55%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(251,191,36,0.10),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(234,88,12,0.04),transparent_55%)] dark:bg-[radial-gradient(ellipse_at_bottom,rgba(244,63,94,0.08),transparent_55%)]" />
      <div className="grain-overlay" />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <span className="section-eyebrow">05 / Contact</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-4 mb-4">
              Let&apos;s Work <span className="heading-accent">Together</span>
            </h2>
            <p className="text-lg text-gray-500 dark:text-gray-400 max-w-xl mx-auto leading-relaxed">
              I&apos;m always open to discussing new opportunities,
              collaborations, or just having a chat about technology.
            </p>
          </motion.div>

          {/* Terminal Card */}
          <motion.div variants={itemVariants} className="group relative mb-10">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-400 via-orange-500 to-rose-500 dark:from-amber-300 dark:via-orange-400 dark:to-rose-400 rounded-2xl opacity-15 dark:opacity-25 group-hover:opacity-30 dark:group-hover:opacity-40 blur transition-opacity" />
            <div className="relative bg-[#1a1a2e] dark:bg-[#0a0a1a] border border-gray-700/50 dark:border-white/10 rounded-2xl overflow-hidden">
              {/* Terminal Header */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-700/50 dark:border-white/10 bg-gray-800/50 dark:bg-white/5">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="ml-3 text-xs text-gray-500 font-mono">
                  contact@yatin-kalra ~ %
                </span>
              </div>

              {/* Terminal Body */}
              <div className="p-6 font-mono text-sm space-y-3">
                {isInView && (
                  <>
                    <div className="text-gray-400">
                      <span className="text-cyan-400">$ </span>
                      <TerminalText text="cat contact.json" delay={300} />
                    </div>
                    <div className="text-gray-300 mt-4">
                      <span className="text-purple-400">{"{"}</span>
                      <div className="pl-4 space-y-1 mt-1">
                        <div>
                          <span className="text-cyan-400">&quot;name&quot;</span>
                          <span className="text-gray-500">: </span>
                          <span className="text-green-400">
                            &quot;{personalInfo.name}&quot;
                          </span>
                          <span className="text-gray-500">,</span>
                        </div>
                        <div>
                          <span className="text-cyan-400">&quot;email&quot;</span>
                          <span className="text-gray-500">: </span>
                          <a
                            href={`mailto:${personalInfo.email}`}
                            className="text-green-400 hover:text-green-300 transition-colors"
                          >
                            &quot;{personalInfo.email}&quot;
                          </a>
                          <span className="text-gray-500">,</span>
                        </div>
                        <div>
                          <span className="text-cyan-400">&quot;phone&quot;</span>
                          <span className="text-gray-500">: </span>
                          <a
                            href={`tel:${personalInfo.phone}`}
                            className="text-green-400 hover:text-green-300 transition-colors"
                          >
                            &quot;{personalInfo.phone}&quot;
                          </a>
                          <span className="text-gray-500">,</span>
                        </div>
                        <div>
                          <span className="text-cyan-400">
                            &quot;location&quot;
                          </span>
                          <span className="text-gray-500">: </span>
                          <span className="text-green-400">
                            &quot;{personalInfo.location}&quot;
                          </span>
                          <span className="text-gray-500">,</span>
                        </div>
                        <div>
                          <span className="text-cyan-400">
                            &quot;status&quot;
                          </span>
                          <span className="text-gray-500">: </span>
                          <span className="text-green-400">
                            &quot;Available for opportunities&quot;
                          </span>
                        </div>
                      </div>
                      <span className="text-purple-400">{"}"}</span>
                    </div>
                    <div className="text-gray-400 mt-4">
                      <span className="text-cyan-400">$ </span>
                      <span className="animate-pulse text-cyan-400">|</span>
                    </div>
                  </>
                )}
              </div>
            </div>
          </motion.div>

          {/* Email CTA */}
          <motion.div variants={itemVariants} className="text-center mb-10">
            <a
              href={`mailto:${personalInfo.email}`}
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-full font-medium text-[#1a0f00] overflow-hidden relative hover:scale-105 transition-all"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-amber-400 via-orange-500 to-rose-500" />
              <span className="absolute inset-0 bg-gradient-to-r from-amber-400 via-orange-500 to-rose-500 blur-xl opacity-50 group-hover:opacity-80 transition-opacity" />
              <span className="relative flex items-center gap-3">
                <HiMail className="w-5 h-5" />
                {personalInfo.email}
              </span>
            </a>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            variants={itemVariants}
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
                className="p-3 rounded-full bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-500 dark:text-gray-400 hover:text-amber-600 dark:hover:text-amber-300 hover:border-amber-300 dark:hover:border-amber-400/50 hover:bg-gray-200 dark:hover:bg-white/10 transition-all"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </motion.div>

          {/* Phone & Location */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-6 text-sm text-gray-500"
          >
            <a
              href={`tel:${personalInfo.phone}`}
              className="flex items-center gap-2 hover:text-amber-600 dark:hover:text-amber-300 transition-colors"
            >
              <HiPhone className="w-4 h-4" />
              {personalInfo.phone}
            </a>
            <span className="flex items-center gap-2">
              <HiLocationMarker className="w-4 h-4" />
              {personalInfo.location}
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
