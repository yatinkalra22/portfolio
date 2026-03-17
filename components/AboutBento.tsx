"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { professionalSummary, skills, certifications } from "@/lib/data";
import { HiCode, HiServer, HiCloud, HiDatabase, HiCog } from "react-icons/hi";

const categoryIcons: Record<string, React.ReactNode> = {
  Frontend: <HiCode className="w-5 h-5" />,
  Backend: <HiServer className="w-5 h-5" />,
  "Cloud & DevOps": <HiCloud className="w-5 h-5" />,
  Database: <HiDatabase className="w-5 h-5" />,
  Core: <HiCog className="w-5 h-5" />,
};

const categoryColors: Record<string, string> = {
  Frontend: "from-cyan-500/15 to-blue-500/15 dark:from-cyan-500/10 dark:to-blue-500/10",
  Backend: "from-emerald-500/15 to-teal-500/15 dark:from-emerald-500/10 dark:to-teal-500/10",
  "Cloud & DevOps": "from-amber-500/15 to-orange-500/15 dark:from-amber-500/10 dark:to-orange-500/10",
  Database: "from-rose-500/15 to-pink-500/15 dark:from-rose-500/10 dark:to-pink-500/10",
  Core: "from-accent-500/15 to-accent-600/15 dark:from-accent-500/10 dark:to-accent-600/10",
};

const categoryTextColors: Record<string, string> = {
  Frontend: "text-cyan-600 dark:text-cyan-400",
  Backend: "text-emerald-600 dark:text-emerald-400",
  "Cloud & DevOps": "text-amber-600 dark:text-amber-400",
  Database: "text-rose-600 dark:text-rose-400",
  Core: "text-accent-600 dark:text-accent-300",
};

export default function AboutBento() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const fadeUp = (delay: number) => ({
    initial: { y: 30, opacity: 0 },
    animate: isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 },
    transition: { type: "spring" as const, stiffness: 100, damping: 20, delay },
  });

  return (
    <section
      id="about"
      ref={ref}
      className="py-24 bg-gray-50/50 dark:bg-[#0d0c1e] transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          className="mb-16"
        >
          <span className="text-sm font-mono text-accent-600 dark:text-accent-300 tracking-wider uppercase">
            01 / About
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-2">
            About Me
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Summary Card */}
          <motion.div
            {...fadeUp(0)}
            className="md:col-span-2 p-8 rounded-2xl bg-white dark:bg-[#151335] border border-gray-200/80 dark:border-gray-800 glow-hover transition-all"
          >
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              {professionalSummary}
            </p>
          </motion.div>

          {/* Stats Card */}
          <motion.div
            {...fadeUp(0.1)}
            className="p-8 rounded-2xl text-white relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, #3D3B8E, #510D0A)",
            }}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.15),transparent_50%)]" />
            <div className="relative space-y-6">
              <div>
                <div className="text-4xl font-bold">8+</div>
                <div className="text-sm text-white/70">Years Experience</div>
              </div>
              <div>
                <div className="text-4xl font-bold">10+</div>
                <div className="text-sm text-white/70">Projects Delivered</div>
              </div>
              <div>
                <div className="text-4xl font-bold">6</div>
                <div className="text-sm text-white/70">Hackathon Projects</div>
              </div>
            </div>
          </motion.div>

          {/* AWS Cert Card */}
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              {...fadeUp(0.2)}
              className="p-6 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/30 border border-amber-200/60 dark:border-amber-800/40"
            >
              <div className="text-xs font-mono text-amber-600 dark:text-amber-400 uppercase tracking-wider mb-3">
                Certification
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                {cert.name}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {cert.issuer}
              </p>
              <p className="text-xs text-amber-600 dark:text-amber-400 mt-3 font-medium">
                {cert.period}
              </p>
            </motion.div>
          ))}

          {/* Skill Category Cards */}
          {Object.entries(skills).map(([category, skillList], index) => (
            <motion.div
              key={category}
              {...fadeUp(0.25 + index * 0.05)}
              className={`p-6 rounded-2xl bg-gradient-to-br ${categoryColors[category]} border border-gray-200/50 dark:border-gray-800/50 hover:scale-[1.02] transition-all duration-300`}
            >
              <div className={`flex items-center gap-2 mb-4 ${categoryTextColors[category]}`}>
                {categoryIcons[category]}
                <h3 className="text-sm font-semibold uppercase tracking-wider">
                  {category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skillList.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-xs font-medium rounded-lg bg-white/70 dark:bg-[#151335]/50 text-gray-700 dark:text-gray-300 border border-gray-200/50 dark:border-gray-700/50"
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
