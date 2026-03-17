"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { education, certifications, achievements } from "@/lib/data";
import { HiAcademicCap, HiBadgeCheck, HiStar } from "react-icons/hi";

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="education"
      ref={ref}
      className="py-24 bg-white dark:bg-[#110f24] transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          className="mb-16"
        >
          <span className="text-sm font-mono text-accent-600 dark:text-accent-300 tracking-wider uppercase">
            04 / Education
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-2">
            Education & Credentials
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education Timeline */}
          <div>
            <div className="flex items-center gap-2 mb-8">
              <HiAcademicCap className="w-5 h-5 text-accent-600 dark:text-accent-300" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Education
              </h3>
            </div>
            <div className="relative pl-8 border-l-2 border-gray-200 dark:border-gray-800 space-y-10">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.15 }}
                  className="relative"
                >
                  <div className="absolute -left-[25px] top-1 w-3 h-3 bg-accent-600 rounded-full border-2 border-white dark:border-[#110f24] ring-4 ring-accent-600/10" />

                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    {edu.degree}
                  </h3>
                  <p className="text-accent-600 dark:text-accent-300 font-medium">
                    {edu.institution}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    {edu.period} &middot; {edu.location}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {certifications.map((cert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 }}
                className="p-6 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/30 border border-amber-200/60 dark:border-amber-800/40"
              >
                <div className="flex items-center gap-2 mb-3">
                  <HiBadgeCheck className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                  <span className="text-xs font-mono text-amber-600 dark:text-amber-400 uppercase tracking-wider">
                    Certification
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                  {cert.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {cert.issuer}
                </p>
                <p className="text-sm text-amber-600 dark:text-amber-400 mt-3 font-medium">
                  {cert.period}
                </p>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.35 }}
              className="p-6 rounded-2xl bg-gray-50 dark:bg-[#1a1840]/50 border border-gray-200/80 dark:border-gray-800"
            >
              <div className="flex items-center gap-2 mb-5">
                <HiStar className="w-5 h-5 text-brand-600 dark:text-brand-400" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Leadership
                </h3>
              </div>
              <ul className="space-y-4">
                {achievements.map((achievement, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-gray-600 dark:text-gray-300"
                  >
                    <span className="flex-shrink-0 w-1.5 h-1.5 bg-brand-600 dark:bg-brand-400 rounded-full mt-2" />
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
