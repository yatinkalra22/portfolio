"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  SiReact,
  SiNodedotjs,
  SiTypescript,
  SiJavascript,
  SiNextdotjs,
  SiTailwindcss,
  SiGraphql,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiAmazon,
  SiDocker,
  SiJenkins,
} from "react-icons/si";
import { skills } from "@/lib/data";

const skillIcons: { [key: string]: any } = {
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  React: SiReact,
  "Next.js": SiNextdotjs,
  "Tailwind CSS": SiTailwindcss,
  "Node.js": SiNodedotjs,
  GraphQL: SiGraphql,
  PostgreSQL: SiPostgresql,
  MongoDB: SiMongodb,
  Redis: SiRedis,
  AWS: SiAmazon,
  Docker: SiDocker,
  Jenkins: SiJenkins,
};

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <section
      id="skills"
      ref={ref}
      className="py-20 bg-white dark:bg-gray-900 transition-colors overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Technical Skills
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
        </motion.div>

        {/* Skills Grid */}
        <div className="space-y-12">
          {Object.entries(skills).map(([category, skillList], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: categoryIndex * 0.1 }}
            >
              {/* Category Title */}
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: categoryIndex * 0.1 + 0.2 }}
                className="text-2xl font-bold text-gray-900 dark:text-white mb-6"
              >
                {category}
              </motion.h3>

              {/* Skills Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {skillList.map((skill, skillIndex) => {
                  const Icon = skillIcons[skill];
                  return (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{
                        delay: categoryIndex * 0.1 + skillIndex * 0.05,
                      }}
                      whileHover={{ scale: 1.1, y: -5 }}
                      onHoverStart={() => setHoveredSkill(skill)}
                      onHoverEnd={() => setHoveredSkill(null)}
                      className="relative group"
                    >
                      <div className="glass p-4 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer">
                        <div className="flex flex-col items-center gap-2">
                          {Icon && (
                            <motion.div
                              animate={{
                                rotate: hoveredSkill === skill ? 360 : 0,
                              }}
                              transition={{ duration: 0.5 }}
                            >
                              <Icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                            </motion.div>
                          )}
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center">
                            {skill}
                          </span>
                        </div>

                        {/* Glow effect on hover */}
                        <motion.div
                          className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none"
                          animate={{
                            opacity: hoveredSkill === skill ? 0.2 : 0,
                          }}
                        />
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Floating Background Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-600/10 rounded-full blur-2xl"
              animate={{
                x: [0, 100, 0],
                y: [0, -100, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 10 + i * 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                top: `${20 + i * 15}%`,
                left: `${10 + i * 20}%`,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
