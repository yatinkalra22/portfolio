"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { HiExternalLink } from "react-icons/hi";
import { FaGithub, FaHeart, FaComment } from "react-icons/fa";
import { professionalProjects, hackathons } from "@/lib/data";

const tabs = ["Professional", "Hackathons"] as const;
type Tab = (typeof tabs)[number];

export default function Work() {
  const [activeTab, setActiveTab] = useState<Tab>("Professional");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="work"
      ref={ref}
      className="py-20 bg-white dark:bg-gray-900 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Left-aligned header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          className="mb-8"
        >
          <span className="text-sm font-mono text-gray-400 dark:text-gray-500 tracking-wider uppercase">
            03 / Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-2">
            Selected Work
          </h2>
        </motion.div>

        {/* Tab Switcher */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="inline-flex bg-gray-100 dark:bg-gray-800 rounded-full p-1 mb-10"
        >
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative px-6 py-2 text-sm font-medium rounded-full transition-colors ${
                activeTab === tab
                  ? "text-white"
                  : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
              }`}
            >
              {activeTab === tab && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-gray-900 dark:bg-white rounded-full"
                  transition={{
                    type: "spring",
                    stiffness: 380,
                    damping: 30,
                  }}
                />
              )}
              <span className="relative z-10 dark:mix-blend-normal">
                {activeTab === tab ? (
                  <span className="text-white dark:text-gray-900">{tab}</span>
                ) : (
                  tab
                )}
              </span>
            </button>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15 }}
          className="mb-8"
        >
          {activeTab === "Professional" ? (
            <button
              onClick={() => setActiveTab("Hackathons")}
              className="text-sm font-medium text-violet-600 dark:text-violet-400 hover:underline"
            >
              View latest hackathon projects →
            </button>
          ) : (
            <button
              onClick={() => setActiveTab("Professional")}
              className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:underline"
            >
              ← Back to professional projects
            </button>
          )}
        </motion.div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          {activeTab === "Professional" ? (
            <motion.div
              key="professional"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-10"
            >
              {professionalProjects.map((group) => (
                <div key={group.company}>
                  <h3 className="text-lg font-semibold text-gray-500 dark:text-gray-400 mb-4">
                    {group.company}
                  </h3>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {group.projects.map((project) => (
                      <div
                        key={project.name}
                        className="p-5 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-colors"
                      >
                        <div className="flex items-start justify-between mb-2">
                          <h4 className="text-base font-bold text-gray-900 dark:text-white">
                            {project.name}
                          </h4>
                          {project.url && (
                            <a
                              href={project.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex-shrink-0 ml-2"
                              aria-label={`Visit ${project.name}`}
                            >
                              <HiExternalLink className="w-4 h-4" />
                            </a>
                          )}
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-3">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {project.techStack.slice(0, 4).map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-0.5 text-xs font-medium rounded-full bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300"
                            >
                              {tech}
                            </span>
                          ))}
                          {project.techStack.length > 4 && (
                            <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400">
                              +{project.techStack.length - 4}
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="hackathons"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {hackathons.map((hack) => (
                <div
                  key={hack.name}
                  className="rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 transition-colors hover:border-violet-400 dark:hover:border-violet-500 cursor-pointer"
                  role={hack.links.devpost ? "link" : undefined}
                  tabIndex={hack.links.devpost ? 0 : undefined}
                  onClick={() => {
                    if (hack.links.devpost) {
                      window.open(hack.links.devpost, "_blank", "noopener,noreferrer");
                    }
                  }}
                  onKeyDown={(e) => {
                    if (!hack.links.devpost) return;
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      window.open(
                        hack.links.devpost,
                        "_blank",
                        "noopener,noreferrer"
                      );
                    }
                  }}
                >
                  {/* Gradient Header */}
                  <div className="bg-gradient-to-r from-violet-600 to-blue-600 p-4">
                    <p className="text-xs text-white/80 mb-1">
                      {hack.hackathon} &middot; {hack.date}
                    </p>
                    <h4 className="text-lg font-bold text-white">
                      {hack.name}
                    </h4>
                  </div>

                  {/* Body */}
                  <div className="p-5 bg-white dark:bg-gray-800">
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                      {hack.description}
                    </p>

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {hack.techStack.slice(0, 5).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 text-xs font-medium rounded-full bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300"
                        >
                          {tech}
                        </span>
                      ))}
                      {hack.techStack.length > 5 && (
                        <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400">
                          +{hack.techStack.length - 5}
                        </span>
                      )}
                    </div>

                    {/* Links */}
                    <div className="flex items-center gap-3 text-sm">
                      {hack.links.demo && (
                        <a
                          href={hack.links.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                        >
                          Demo
                        </a>
                      )}
                      {hack.links.github && (
                        <a
                          href={hack.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                          aria-label="GitHub"
                        >
                          <FaGithub className="w-4 h-4" />
                        </a>
                      )}
                      {hack.links.devpost && (
                        <a
                          href={hack.links.devpost}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="text-blue-600 dark:text-blue-400 hover:underline text-xs"
                        >
                          Devpost
                        </a>
                      )}

                      {/* Likes/Comments */}
                      <div className="ml-auto flex items-center gap-3 text-xs text-gray-400 dark:text-gray-500">
                        <span className="flex items-center gap-1">
                          <FaHeart className="w-3 h-3" />
                          {hack.likes}
                        </span>
                        <span className="flex items-center gap-1">
                          <FaComment className="w-3 h-3" />
                          {hack.comments}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
