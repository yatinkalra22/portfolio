"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { education, certifications, achievements } from "@/lib/data";

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="education"
      ref={ref}
      className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Left-aligned header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          className="mb-12"
        >
          <span className="text-sm font-mono text-gray-400 dark:text-gray-500 tracking-wider uppercase">
            04 / Education
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-2">
            Education & Credentials
          </h2>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Education Timeline */}
          <div>
            <div className="relative pl-8 border-l-2 border-gray-200 dark:border-gray-700 space-y-10">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.15 }}
                  className="relative"
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-[25px] top-1 w-3 h-3 bg-blue-600 rounded-full border-2 border-white dark:border-gray-800" />

                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    {edu.degree}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium">
                    {edu.institution}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    {edu.period} &middot; {edu.location}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Certifications + Achievements */}
          <div className="space-y-8">
            {/* AWS Certification - Warm gradient card */}
            {certifications.map((cert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 }}
                className="p-6 rounded-xl bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border border-amber-200 dark:border-amber-800"
              >
                <div className="text-sm font-medium text-amber-600 dark:text-amber-400 mb-1">
                  Certification
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                  {cert.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {cert.issuer}
                </p>
                <p className="text-sm text-amber-600 dark:text-amber-400 mt-2">
                  {cert.period}
                </p>
              </motion.div>
            ))}

            {/* Achievements */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.35 }}
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Leadership
              </h3>
              <ul className="space-y-3">
                {achievements.map((achievement, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-gray-700 dark:text-gray-300"
                  >
                    <span className="flex-shrink-0 w-1.5 h-1.5 bg-violet-500 rounded-full mt-2" />
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
