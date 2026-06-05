"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { education, certifications, achievements } from "@/lib/data";
import { HiAcademicCap, HiBadgeCheck, HiStar } from "react-icons/hi";

export default function EducationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
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
      id="education"
      ref={ref}
      className="relative py-24 overflow-hidden bg-white dark:bg-[#030014] transition-colors"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(245,158,11,0.05),transparent_55%)] dark:bg-[radial-gradient(ellipse_at_bottom_left,rgba(251,191,36,0.09),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(244,63,94,0.04),transparent_55%)] dark:bg-[radial-gradient(ellipse_at_top_right,rgba(244,63,94,0.07),transparent_55%)]" />
      <div className="grain-overlay" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="section-eyebrow">04 / Education</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-4">
              Education & <span className="heading-accent">Credentials</span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Education Timeline */}
            <motion.div variants={itemVariants}>
              <div className="flex items-center gap-2 mb-8">
                <HiAcademicCap className="w-5 h-5 text-amber-600 dark:text-amber-300" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Education</h3>
              </div>
              <div className="relative pl-8 border-l-2 border-amber-200 dark:border-amber-400/25 space-y-10">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="relative group"
                  >
                    <div className="absolute -left-[25px] top-1 w-3 h-3 bg-gradient-to-r from-amber-400 to-orange-500 dark:from-amber-300 dark:to-rose-400 rounded-full ring-4 ring-amber-100 dark:ring-amber-500/20" />

                    <div className="p-4 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200/50 dark:border-white/10 group-hover:border-amber-300 dark:group-hover:border-amber-400/30 transition-all">
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                        {edu.degree}
                      </h3>
                      <p className="text-amber-600 dark:text-amber-300 font-medium">
                        {edu.institution}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        {edu.period} &middot; {edu.location}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* Certification */}
              {certifications.map((cert, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  whileHover={{ y: -4 }}
                  className="group relative"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-400/20 to-orange-400/20 dark:from-amber-500/30 dark:to-orange-500/30 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-opacity" />
                  <div className="relative p-6 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-500/10 dark:to-orange-500/10 border border-amber-200/50 dark:border-amber-500/20">
                    <div className="flex items-center gap-2 mb-3">
                      <HiBadgeCheck className="w-5 h-5 text-amber-500 dark:text-amber-400" />
                      <span className="text-xs font-mono text-amber-600 dark:text-amber-400 uppercase tracking-wider">
                        Certification
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                      {cert.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">{cert.issuer}</p>
                    <p className="text-sm text-amber-600 dark:text-amber-400 mt-3 font-medium">
                      {cert.period}
                    </p>
                  </div>
                </motion.div>
              ))}

              {/* Leadership */}
              <motion.div
                variants={itemVariants}
                whileHover={{ y: -4 }}
                className="group relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-400/25 via-orange-500/25 to-rose-500/25 dark:from-amber-300/30 dark:via-orange-400/30 dark:to-rose-400/30 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-opacity" />
                <div className="relative p-6 rounded-2xl bg-gray-50 dark:bg-white/5 backdrop-blur-xl border border-gray-200/50 dark:border-white/10">
                  <div className="flex items-center gap-2 mb-5">
                    <HiStar className="w-5 h-5 text-amber-500 dark:text-amber-300" />
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
                        <span className="flex-shrink-0 w-1.5 h-1.5 bg-gradient-to-r from-amber-400 to-orange-500 dark:from-amber-300 dark:to-rose-400 rounded-full mt-2" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
