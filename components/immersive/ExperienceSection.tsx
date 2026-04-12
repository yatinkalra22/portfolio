"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { experience } from "@/lib/data";

export default function ExperienceSection() {
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
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "spring" as const, stiffness: 80, damping: 20 },
    },
  };

  return (
    <section
      id="experience"
      ref={ref}
      className="relative py-24 overflow-hidden bg-white dark:bg-[#030014] transition-colors"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center_left,rgba(168,85,247,0.04),transparent_50%)] dark:bg-[radial-gradient(ellipse_at_center_left,rgba(168,85,247,0.08),transparent_50%)]" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="text-sm font-mono text-indigo-600 dark:text-cyan-400 tracking-wider uppercase">
              02 / Experience
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-4">
              Work{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-cyan-500 dark:from-purple-400 dark:to-cyan-400 bg-clip-text text-transparent">
                Timeline
              </span>
            </h2>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-400/30 via-purple-400/30 to-transparent dark:from-purple-500/50 dark:via-cyan-500/50 dark:to-transparent" />

            {experience.map((exp, index) => {
              const isLeft = index % 2 === 0;
              return (
                <motion.div
                  key={exp.company}
                  variants={itemVariants}
                  className={`relative flex items-start mb-12 ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 md:left-1/2 w-3 h-3 -translate-x-1/2 mt-8 z-10">
                    <div className="w-full h-full rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 dark:from-purple-500 dark:to-cyan-500" />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 dark:from-purple-500 dark:to-cyan-500 animate-ping opacity-30" />
                  </div>

                  {/* Card */}
                  <div
                    className={`ml-14 md:ml-0 ${
                      isLeft ? "md:w-[45%] md:pr-12" : "md:w-[45%] md:pl-12"
                    } ${isLeft ? "" : "md:ml-auto"}`}
                  >
                    <motion.div
                      whileHover={{ y: -4 }}
                      className="group relative"
                    >
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500/20 to-cyan-500/20 dark:from-purple-600/30 dark:to-cyan-600/30 rounded-xl opacity-0 group-hover:opacity-100 blur transition-opacity" />
                      <div className="relative bg-white dark:bg-white/5 backdrop-blur-xl border border-gray-200/50 dark:border-white/10 rounded-xl p-6 hover:border-indigo-300 dark:hover:border-purple-500/30 transition-all shadow-sm dark:shadow-none">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                              {exp.title}
                            </h3>
                            <p className="text-indigo-600 dark:text-cyan-400 font-medium">
                              {exp.company}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-4">
                          <span>{exp.period}</span>
                          <span className="text-gray-300 dark:text-gray-600">&middot;</span>
                          <span>{exp.location}</span>
                        </div>
                        <ul className="space-y-2">
                          {exp.highlights.map((h, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300"
                            >
                              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-400 dark:bg-purple-400 shrink-0" />
                              {h}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
