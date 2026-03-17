"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { HiCalendar, HiLocationMarker } from "react-icons/hi";
import { experience } from "@/lib/data";

const accentColors = [
  "bg-accent-600",
  "bg-brand-800",
  "bg-emerald-500",
  "bg-amber-500",
  "bg-rose-500",
];

const accentBorders = [
  "border-accent-600/30",
  "border-brand-800/30",
  "border-emerald-500/30",
  "border-amber-500/30",
  "border-rose-500/30",
];

export default function Experience() {
  const ref = useRef(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="experience"
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
            02 / Experience
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-2">
            Work Experience
          </h2>
        </motion.div>

        {/* Desktop: Horizontal scroll */}
        <div className="hidden md:block">
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="text-sm text-gray-400 dark:text-gray-500 mb-6 font-mono"
          >
            Scroll to explore &rarr;
          </motion.p>
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto snap-x-mandatory scrollbar-hide pb-4"
          >
            {experience.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 60 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.12 }}
                className={`snap-center flex-shrink-0 w-[420px] p-7 rounded-2xl bg-gray-50 dark:bg-[#1a1840]/50 border ${accentBorders[index % accentBorders.length]} hover:shadow-lg hover:shadow-gray-200/50 dark:hover:shadow-gray-900/50 transition-all duration-300 group`}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-2 h-2 rounded-full mt-2.5 flex-shrink-0 ${accentColors[index % accentColors.length]}`} />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {job.title}
                    </h3>
                    <p className="text-lg font-semibold gradient-text-subtle">
                      {job.company}
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3 text-sm text-gray-500 dark:text-gray-400 mb-5 ml-6">
                  <span className="flex items-center gap-1.5">
                    <HiCalendar className="w-4 h-4" />
                    {job.period}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <HiLocationMarker className="w-4 h-4" />
                    {job.location}
                  </span>
                </div>
                <ul className="space-y-3 ml-6">
                  {job.highlights.map((highlight, hIndex) => (
                    <li
                      key={hIndex}
                      className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-300"
                    >
                      <span className={`flex-shrink-0 w-1 h-1 rounded-full mt-2 ${accentColors[index % accentColors.length]}`} />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile: Vertical stack */}
        <div className="md:hidden space-y-5">
          {experience.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              className={`p-6 rounded-2xl bg-gray-50 dark:bg-[#1a1840]/50 border ${accentBorders[index % accentBorders.length]}`}
            >
              <div className="flex items-start gap-3 mb-3">
                <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${accentColors[index % accentColors.length]}`} />
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    {job.title}
                  </h3>
                  <p className="font-semibold gradient-text-subtle">
                    {job.company}
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 text-xs text-gray-500 dark:text-gray-400 mb-4 ml-5">
                <span className="flex items-center gap-1">
                  <HiCalendar className="w-3 h-3" />
                  {job.period}
                </span>
                <span className="flex items-center gap-1">
                  <HiLocationMarker className="w-3 h-3" />
                  {job.location}
                </span>
              </div>
              <ul className="space-y-2 ml-5">
                {job.highlights.map((highlight, hIndex) => (
                  <li
                    key={hIndex}
                    className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300"
                  >
                    <span className={`flex-shrink-0 w-1 h-1 rounded-full mt-2 ${accentColors[index % accentColors.length]}`} />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
