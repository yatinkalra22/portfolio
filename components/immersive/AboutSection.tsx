"use client";

import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";
import { useEffect, useRef } from "react";
import {
  professionalSummary,
  skills,
  certifications,
} from "@/lib/data";

function CountUp({
  value,
  suffix = "",
  active,
}: {
  value: number;
  suffix?: string;
  active: boolean;
}) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (!active) return;
    const controls = animate(count, value, {
      duration: 1.6,
      ease: [0.16, 1, 0.3, 1],
    });
    return controls.stop;
  }, [active, value, count]);

  return (
    <span>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

export default function AboutSection() {
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

  const stats = [
    { label: "Years Experience", value: 8, suffix: "+" },
    { label: "Projects Delivered", value: 10, suffix: "+" },
    { label: "Hackathon Projects", value: 11, suffix: "" },
  ];

  const skillCategories = Object.entries(skills);

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-24 overflow-hidden bg-gray-50 dark:bg-[#030014] transition-colors"
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(99,102,241,0.05),transparent_50%)] dark:bg-[radial-gradient(ellipse_at_top_left,rgba(99,102,241,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(6,182,212,0.04),transparent_50%)] dark:bg-[radial-gradient(ellipse_at_bottom_right,rgba(6,182,212,0.08),transparent_50%)]" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="text-sm font-mono text-indigo-600 dark:text-cyan-400 tracking-wider uppercase">
              01 / About
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-4 mb-4">
              Who I{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-cyan-500 dark:from-purple-400 dark:to-cyan-400 bg-clip-text text-transparent">
                Am
              </span>
            </h2>
          </motion.div>

          {/* Main glass card */}
          <motion.div
            variants={itemVariants}
            className="relative group"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-cyan-500 dark:from-purple-600 dark:to-cyan-600 rounded-2xl opacity-10 dark:opacity-20 group-hover:opacity-20 dark:group-hover:opacity-30 blur transition-opacity" />
            <div className="relative bg-white/80 dark:bg-white/5 backdrop-blur-xl border border-gray-200/50 dark:border-white/10 rounded-2xl p-8 md:p-10">
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-8">
                {professionalSummary}
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="text-center p-4 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5"
                  >
                    <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-600 to-cyan-500 dark:from-purple-400 dark:to-cyan-400 bg-clip-text text-transparent tabular-nums">
                      <CountUp
                        value={stat.value}
                        suffix={stat.suffix}
                        active={isInView}
                      />
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Certifications */}
              {certifications.map((cert) => (
                <div
                  key={cert.name}
                  className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-r from-indigo-50 to-cyan-50 dark:from-purple-500/10 dark:to-cyan-500/10 border border-indigo-200/50 dark:border-purple-500/20 mb-6"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-500 dark:from-purple-500 dark:to-cyan-500 flex items-center justify-center text-white font-bold text-sm">
                    AWS
                  </div>
                  <div>
                    <div className="text-gray-900 dark:text-white font-medium">{cert.name}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {cert.issuer} &middot; {cert.period}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Skills Grid */}
          <motion.div variants={itemVariants} className="mt-12">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Technical{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-cyan-500 dark:from-purple-400 dark:to-cyan-400 bg-clip-text text-transparent">
                Arsenal
              </span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {skillCategories.map(([category, skillList], idx) => (
                <motion.div
                  key={category}
                  variants={itemVariants}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="group relative"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500/30 to-cyan-500/30 dark:from-purple-600/40 dark:to-cyan-600/40 rounded-xl opacity-0 group-hover:opacity-100 blur transition-opacity" />
                  <div className="relative bg-white/80 dark:bg-white/5 backdrop-blur-xl border border-gray-200/50 dark:border-white/10 rounded-xl p-6 h-full">
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold text-white"
                        style={{
                          background: `linear-gradient(135deg, ${
                            [
                              "#6366f1",
                              "#8b5cf6",
                              "#06b6d4",
                              "#10b981",
                              "#f59e0b",
                            ][idx % 5]
                          }, ${
                            [
                              "#8b5cf6",
                              "#06b6d4",
                              "#10b981",
                              "#f59e0b",
                              "#ef4444",
                            ][idx % 5]
                          })`,
                        }}
                      >
                        {category.charAt(0)}
                      </div>
                      <h4 className="text-gray-900 dark:text-white font-semibold">{category}</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skillList.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 text-xs font-medium rounded-full bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-300 hover:border-indigo-400 dark:hover:border-purple-500/50 hover:text-indigo-600 dark:hover:text-white transition-all"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
