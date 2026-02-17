"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { professionalSummary, skills, certifications } from "@/lib/data";

const borderColors: Record<string, string> = {
  Frontend: "border-l-cyan-500",
  Backend: "border-l-emerald-500",
  "Cloud & DevOps": "border-l-amber-500",
  Database: "border-l-rose-500",
  Core: "border-l-violet-500",
};

export default function AboutBento() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const springIn = (delay: number) => ({
    initial: { scale: 0.8, opacity: 0 },
    animate: isInView
      ? { scale: 1, opacity: 1 }
      : { scale: 0.8, opacity: 0 },
    transition: { type: "spring" as const, stiffness: 200, damping: 20, delay },
  });

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 bg-white dark:bg-gray-900 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Left-aligned header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          className="mb-12"
        >
          <span className="text-sm font-mono text-gray-400 dark:text-gray-500 tracking-wider uppercase">
            01 / About
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-2">
            About Me
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Summary Card - spans 2 cols */}
          <motion.div
            {...springIn(0)}
            className="md:col-span-2 p-6 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
          >
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              {professionalSummary}
            </p>
          </motion.div>

          {/* Stats Card - inverted colors */}
          <motion.div
            {...springIn(0.1)}
            className="p-6 rounded-xl bg-gray-900 dark:bg-white text-white dark:text-gray-900"
          >
            <div className="space-y-4">
              <div>
                <div className="text-3xl font-bold">8+</div>
                <div className="text-sm text-gray-300 dark:text-gray-600">
                  Years Experience
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold">10+</div>
                <div className="text-sm text-gray-300 dark:text-gray-600">
                  Projects Delivered
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold">3</div>
                <div className="text-sm text-gray-300 dark:text-gray-600">
                  Hackathon Projects
                </div>
              </div>
            </div>
          </motion.div>

          {/* Certification Card - warm amber gradient */}
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              {...springIn(0.2)}
              className="p-6 rounded-xl bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border border-amber-200 dark:border-amber-800"
            >
              <div className="text-sm font-medium text-amber-600 dark:text-amber-400 mb-1">
                Certification
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                {cert.name}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {cert.issuer}
              </p>
              <p className="text-xs text-amber-600 dark:text-amber-400 mt-2">
                {cert.period}
              </p>
            </motion.div>
          ))}

          {/* Skill Category Cards */}
          {Object.entries(skills).map(([category, skillList], index) => (
            <motion.div
              key={category}
              {...springIn(0.25 + index * 0.05)}
              className={`p-5 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 border-l-4 ${borderColors[category]}`}
            >
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-3 uppercase tracking-wider">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillList.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 text-xs font-medium rounded-full bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-600"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
