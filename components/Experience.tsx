"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { HiCalendar, HiLocationMarker } from "react-icons/hi";
import { experience } from "@/lib/data";

const borderColors = [
  "border-l-blue-600",
  "border-l-violet-600",
  "border-l-emerald-600",
  "border-l-amber-600",
  "border-l-rose-600",
];

export default function Experience() {
  const ref = useRef(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="experience"
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
            02 / Experience
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-2">
            Work Experience
          </h2>
        </motion.div>

        {/* Desktop: Horizontal scroll-snap */}
        <div className="hidden md:block">
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="text-sm text-gray-400 dark:text-gray-500 mb-4"
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
                transition={{ delay: index * 0.15 }}
                className={`snap-center flex-shrink-0 w-[400px] p-6 rounded-xl bg-white dark:bg-gray-900 shadow-md border-l-4 ${borderColors[index % borderColors.length]}`}
              >
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                  {job.title}
                </h3>
                <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold mb-3">
                  {job.company}
                </p>
                <div className="flex flex-wrap gap-3 text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <span className="flex items-center gap-1">
                    <HiCalendar className="w-4 h-4" />
                    {job.period}
                  </span>
                  <span className="flex items-center gap-1">
                    <HiLocationMarker className="w-4 h-4" />
                    {job.location}
                  </span>
                </div>
                <ul className="space-y-2">
                  {job.highlights.map((highlight, hIndex) => (
                    <li
                      key={hIndex}
                      className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300"
                    >
                      <span className="flex-shrink-0 w-1.5 h-1.5 bg-blue-600 rounded-full mt-1.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile: Vertical stack */}
        <div className="md:hidden space-y-4">
          {experience.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              className={`p-5 rounded-xl bg-white dark:bg-gray-900 shadow-md border-l-4 ${borderColors[index % borderColors.length]}`}
            >
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                {job.title}
              </h3>
              <p className="text-blue-600 dark:text-blue-400 font-semibold mb-2">
                {job.company}
              </p>
              <div className="flex flex-wrap gap-2 text-xs text-gray-500 dark:text-gray-400 mb-3">
                <span className="flex items-center gap-1">
                  <HiCalendar className="w-3 h-3" />
                  {job.period}
                </span>
                <span className="flex items-center gap-1">
                  <HiLocationMarker className="w-3 h-3" />
                  {job.location}
                </span>
              </div>
              <ul className="space-y-1.5">
                {job.highlights.map((highlight, hIndex) => (
                  <li
                    key={hIndex}
                    className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300"
                  >
                    <span className="flex-shrink-0 w-1.5 h-1.5 bg-blue-600 rounded-full mt-1.5" />
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
