"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { HiBriefcase, HiLocationMarker, HiCalendar } from "react-icons/hi";
import { experience } from "@/lib/data";

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="experience"
      ref={ref}
      className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Work Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-500 to-purple-600" />

          {experience.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={
                isInView
                  ? { opacity: 1, x: 0 }
                  : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }
              }
              transition={{ delay: index * 0.2 }}
              className={`relative mb-12 md:mb-16 ${
                index % 2 === 0 ? "md:pr-1/2" : "md:pl-1/2 md:ml-auto"
              } md:w-1/2`}
            >
              {/* Timeline Dot */}
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ delay: index * 0.2 + 0.3 }}
                className="hidden md:block absolute top-8 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-800 z-10"
                style={{
                  left: index % 2 === 0 ? "100%" : "0%",
                  transform: "translateX(-50%)",
                }}
              />

              {/* Card */}
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                className={`glass p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ${
                  index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                }`}
              >
                {/* Header */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <HiBriefcase className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                      {job.title}
                    </h3>
                    <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold mb-2">
                      {job.company}
                    </p>
                    <div className="flex flex-wrap gap-3 text-sm text-gray-600 dark:text-gray-400">
                      <span className="flex items-center gap-1">
                        <HiCalendar className="w-4 h-4" />
                        {job.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <HiLocationMarker className="w-4 h-4" />
                        {job.location}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Highlights */}
                <ul className="space-y-2">
                  {job.highlights.map((highlight, hIndex) => (
                    <motion.li
                      key={hIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: index * 0.2 + hIndex * 0.1 }}
                      className="flex items-start gap-2 text-gray-700 dark:text-gray-300"
                    >
                      <span className="flex-shrink-0 w-1.5 h-1.5 bg-blue-600 rounded-full mt-2" />
                      <span>{highlight}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
