"use client";

import { useState, useRef, useCallback } from "react";
import {
  motion,
  AnimatePresence,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { HiExternalLink } from "react-icons/hi";
import { FaGithub, FaHeart, FaComment } from "react-icons/fa";
import { professionalProjects, hackathons } from "@/lib/data";

const tabs = ["Professional", "Hackathons"] as const;
type Tab = (typeof tabs)[number];

function TiltCard({
  children,
  onClick,
  onKeyDown,
  className,
  role,
  tabIndex,
}: {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  onKeyDown?: React.KeyboardEventHandler<HTMLDivElement>;
  className?: string;
  role?: string;
  tabIndex?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const sx = useSpring(mx, { stiffness: 180, damping: 20 });
  const sy = useSpring(my, { stiffness: 180, damping: 20 });

  const rotateX = useTransform(sy, [0, 1], [6, -6]);
  const rotateY = useTransform(sx, [0, 1], [-6, 6]);

  const spotlight = useTransform([sx, sy], (latest) => {
    const [x, y] = latest as [number, number];
    return `radial-gradient(420px circle at ${x * 100}% ${y * 100}%, rgba(251,146,60,0.22), transparent 55%)`;
  });

  const handleMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (reduced || !ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      mx.set((e.clientX - rect.left) / rect.width);
      my.set((e.clientY - rect.top) / rect.height);
    },
    [reduced, mx, my]
  );

  const handleLeave = useCallback(() => {
    mx.set(0.5);
    my.set(0.5);
  }, [mx, my]);

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      onClick={onClick}
      onKeyDown={onKeyDown}
      role={role}
      tabIndex={tabIndex}
      style={{
        rotateX: reduced ? 0 : rotateX,
        rotateY: reduced ? 0 : rotateY,
        transformPerspective: 1000,
        transformStyle: "preserve-3d",
      }}
      whileHover={reduced ? undefined : { y: -6 }}
      className={className}
    >
      {!reduced && (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-[1] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"
          style={{ background: spotlight }}
        />
      )}
      {children}
    </motion.div>
  );
}

export default function WorkSection() {
  const [activeTab, setActiveTab] = useState<Tab>("Professional");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
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
      id="work"
      ref={ref}
      className="relative py-24 overflow-hidden bg-gray-50 dark:bg-[#030014] transition-colors"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(251,146,60,0.05),transparent_55%)] dark:bg-[radial-gradient(ellipse_at_top_right,rgba(251,146,60,0.10),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(245,158,11,0.04),transparent_55%)] dark:bg-[radial-gradient(ellipse_at_bottom_left,rgba(244,63,94,0.08),transparent_55%)]" />
      <div className="grain-overlay" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <span className="section-eyebrow">03 / Work</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-4">
              Selected <span className="heading-accent">Projects</span>
            </h2>
          </motion.div>

          {/* Tab Switcher */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center mb-10"
          >
            <div className="inline-flex bg-gray-100 dark:bg-white/5 backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-2xl p-1.5">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`relative px-6 py-2.5 text-sm font-medium rounded-xl transition-colors ${
                    activeTab === tab
                      ? "text-white"
                      : "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                  }`}
                >
                  {activeTab === tab && (
                    <motion.div
                      layoutId="activeWorkTab"
                      className="absolute inset-0 rounded-xl bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 dark:from-amber-400 dark:via-orange-400 dark:to-rose-400"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                  <span className="relative z-10">{tab}</span>
                </button>
              ))}
            </div>
          </motion.div>

          {/* Quick switch link */}
          <motion.div variants={itemVariants} className="text-center mb-8">
            {activeTab === "Professional" ? (
              <button
                onClick={() => setActiveTab("Hackathons")}
                className="text-sm font-medium text-amber-600 dark:text-amber-300 hover:text-amber-500 dark:hover:text-amber-200 transition-colors"
              >
                View latest hackathon projects &rarr;
              </button>
            ) : (
              <button
                onClick={() => setActiveTab("Professional")}
                className="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-white transition-colors"
              >
                &larr; Back to professional projects
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
                className="space-y-12"
              >
                {professionalProjects.map((group) => (
                  <div key={group.company}>
                    <h3 className="text-lg font-semibold text-gray-400 dark:text-gray-500 mb-5 font-mono">
                      {group.company}
                    </h3>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                      {group.projects.map((project) => (
                        <motion.div
                          key={project.name}
                          whileHover={{ y: -6, scale: 1.02 }}
                          className="group relative"
                        >
                          <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-400/25 via-orange-500/25 to-rose-500/25 dark:from-amber-300/30 dark:via-orange-400/30 dark:to-rose-400/30 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-opacity" />
                          <div className="relative p-6 rounded-2xl bg-white dark:bg-white/5 backdrop-blur-xl border border-gray-200/50 dark:border-white/10 hover:border-amber-300 dark:hover:border-amber-400/30 transition-all h-full shadow-sm dark:shadow-none">
                            <div className="flex items-start justify-between mb-3">
                              <h4 className="text-base font-bold text-gray-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-300 transition-colors">
                                {project.name}
                              </h4>
                              {project.url && (
                                <a
                                  href={project.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-gray-400 dark:text-gray-500 hover:text-amber-600 dark:hover:text-amber-300 transition-colors flex-shrink-0 ml-2"
                                  aria-label={`Visit ${project.name}`}
                                >
                                  <HiExternalLink className="w-4 h-4" />
                                </a>
                              )}
                            </div>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 line-clamp-3 leading-relaxed">
                              {project.description}
                            </p>
                            <div className="flex flex-wrap gap-1.5">
                              {project.techStack.slice(0, 4).map((tech) => (
                                <span
                                  key={tech}
                                  className="px-2.5 py-1 text-xs font-medium rounded-lg bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-400"
                                >
                                  {tech}
                                </span>
                              ))}
                              {project.techStack.length > 4 && (
                                <span className="px-2.5 py-1 text-xs font-medium rounded-lg bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-400 dark:text-gray-500">
                                  +{project.techStack.length - 4}
                                </span>
                              )}
                            </div>
                          </div>
                        </motion.div>
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
                  <TiltCard
                    key={hack.name}
                    className="group relative rounded-2xl overflow-hidden border border-gray-200 dark:border-white/10 hover:border-amber-400 dark:hover:border-amber-400/40 transition-colors duration-300 cursor-pointer shadow-sm dark:shadow-none"
                    role={hack.links.devpost ? "link" : undefined}
                    tabIndex={hack.links.devpost ? 0 : undefined}
                    onClick={() => {
                      if (hack.links.devpost) {
                        window.open(
                          hack.links.devpost,
                          "_blank",
                          "noopener,noreferrer"
                        );
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
                    <div className="p-5 relative overflow-hidden bg-gradient-to-br from-amber-500 via-orange-500 to-rose-500 dark:from-amber-400 dark:via-orange-500 dark:to-rose-500">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.18),transparent_55%)]" />
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_55%,rgba(0,0,0,0.18))]" />
                      <p className="text-[11px] text-[#1a0f00]/75 dark:text-[#1a0f00]/80 mb-1.5 font-mono tracking-wider uppercase relative">
                        {hack.hackathon} &middot; {hack.date}
                      </p>
                      <h4 className="text-lg font-bold text-[#1a0f00] relative leading-tight">
                        {hack.name}
                      </h4>
                    </div>

                    {/* Body */}
                    <div className="p-6 bg-white dark:bg-white/5 backdrop-blur-xl">
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 line-clamp-3 leading-relaxed">
                        {hack.description}
                      </p>

                      {/* Tech Stack Pills */}
                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {hack.techStack.slice(0, 5).map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 text-xs font-medium rounded-lg bg-amber-50 dark:bg-amber-500/10 border border-amber-200/60 dark:border-amber-500/25 text-amber-700 dark:text-amber-200"
                          >
                            {tech}
                          </span>
                        ))}
                        {hack.techStack.length > 5 && (
                          <span className="px-2.5 py-1 text-xs font-medium rounded-lg bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-400 dark:text-gray-500">
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
                            className="text-amber-600 dark:text-amber-300 hover:text-amber-500 dark:hover:text-amber-200 font-medium transition-colors"
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
                            className="text-gray-400 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"
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
                            className="text-amber-600 dark:text-amber-300 hover:text-amber-500 dark:hover:text-amber-200 text-xs font-medium transition-colors"
                          >
                            Devpost
                          </a>
                        )}

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
                  </TiltCard>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
