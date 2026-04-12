"use client";

import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { HiMail, HiArrowDown } from "react-icons/hi";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { personalInfo } from "@/lib/data";
import FloatingParticles from "../3d/FloatingParticles";
import HeroText3D from "../3d/HeroText3D";
import CameraRig from "../3d/CameraRig";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { useTheme } from "../ThemeProvider";

const roles = [
  "Full Stack Engineer",
  "Cloud Architect",
  "System Designer",
  "Tech Lead",
];

function HeroCanvas({ isDark }: { isDark: boolean }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 75 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      style={{ position: "absolute", inset: 0 }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={isDark ? 0.3 : 0.6} />
        <pointLight
          position={[10, 10, 10]}
          intensity={isDark ? 0.8 : 0.5}
          color={isDark ? "#6366f1" : "#4f46e5"}
        />
        <pointLight
          position={[-10, -5, 5]}
          intensity={isDark ? 0.5 : 0.3}
          color={isDark ? "#06b6d4" : "#0891b2"}
        />
        <pointLight
          position={[0, -10, 0]}
          intensity={0.3}
          color={isDark ? "#a855f7" : "#7c3aed"}
        />

        <FloatingParticles
          count={400}
          color={isDark ? "#6366f1" : "#4f46e5"}
          size={0.02}
          spread={12}
        />
        <FloatingParticles
          count={200}
          color={isDark ? "#06b6d4" : "#0891b2"}
          size={0.015}
          spread={10}
        />
        <FloatingParticles
          count={100}
          color={isDark ? "#a855f7" : "#7c3aed"}
          size={0.025}
          spread={8}
        />

        <HeroText3D
          text="Yatin Kalra"
          position={[0, 0.8, 0]}
          size={0.55}
          color={isDark ? "#a78bfa" : "#6366f1"}
          emissive={isDark ? "#6366f1" : "#4f46e5"}
        />

        <CameraRig />

        <EffectComposer>
          <Bloom
            luminanceThreshold={isDark ? 0.2 : 0.6}
            luminanceSmoothing={0.9}
            intensity={isDark ? 0.8 : 0.3}
          />
        </EffectComposer>
      </Suspense>
    </Canvas>
  );
}

export default function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [is3DReady, setIs3DReady] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { theme } = useTheme();
  const isDark = theme === "dark";

  useEffect(() => {
    const timer = setTimeout(() => setIs3DReady(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.5 },
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
      id="home"
      ref={sectionRef}
      className="relative min-h-screen flex items-end justify-center overflow-hidden bg-[#faf9ff] dark:bg-[#030014] transition-colors"
    >
      {/* 3D Canvas Background - takes top portion */}
      <div className="absolute inset-0 bottom-[45%]">
        {is3DReady && <HeroCanvas isDark={isDark} />}
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#faf9ff] dark:to-[#030014] pointer-events-none z-[1]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,var(--bg-primary)_70%)] pointer-events-none z-[1]" />

      {/* Content overlay - positioned in bottom half */}
      <motion.div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          {/* Availability badge */}
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-white/60 dark:bg-white/5 backdrop-blur-xl border border-indigo-200/30 dark:border-white/10 text-gray-600 dark:text-gray-300">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              Available for opportunities
            </span>
          </motion.div>

          {/* Animated role */}
          <motion.div variants={itemVariants} className="mb-5 h-12">
            <motion.h2
              key={roleIndex}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="text-2xl sm:text-3xl md:text-4xl font-semibold bg-gradient-to-r from-indigo-600 via-purple-500 to-cyan-500 dark:from-cyan-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent"
            >
              {roles[roleIndex]}
            </motion.h2>
          </motion.div>

          {/* Tagline */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Building scalable systems with{" "}
            <span className="text-indigo-600 dark:text-cyan-400 font-semibold">
              8+ years
            </span>{" "}
            of expertise across fintech, healthcare & SaaS
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-4 mb-10"
          >
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group relative px-8 py-4 rounded-full font-medium text-white overflow-hidden transition-all hover:scale-105 hover:shadow-xl hover:shadow-purple-500/25"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-600" />
              <span className="absolute inset-0 bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-600 blur-xl opacity-50 group-hover:opacity-80 transition-opacity" />
              <span className="relative flex items-center gap-2">
                <HiMail className="w-5 h-5" />
                Get In Touch
              </span>
            </a>

            <a
              href="#work"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#work")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-8 py-4 rounded-full font-medium text-gray-600 dark:text-gray-300 bg-white/60 dark:bg-white/5 backdrop-blur-xl border border-gray-200 dark:border-white/10 hover:border-purple-400 dark:hover:border-purple-500/50 hover:bg-white/80 dark:hover:bg-white/10 hover:scale-105 transition-all"
            >
              View My Work
            </a>
          </motion.div>

          {/* Social Row */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center gap-4"
          >
            {[
              {
                href: `mailto:${personalInfo.email}`,
                icon: <HiMail className="w-5 h-5" />,
                label: "Email",
              },
              {
                href: personalInfo.linkedin,
                icon: <FaLinkedin className="w-5 h-5" />,
                label: "LinkedIn",
                external: true,
              },
              {
                href: personalInfo.github,
                icon: <FaGithub className="w-5 h-5" />,
                label: "GitHub",
                external: true,
              },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="p-3 rounded-full bg-white/60 dark:bg-white/5 backdrop-blur-xl border border-gray-200 dark:border-white/10 text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-cyan-400 hover:border-indigo-300 dark:hover:border-cyan-500/50 hover:bg-white dark:hover:bg-white/10 hover:scale-110 transition-all"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-gray-400 dark:text-gray-500"
        >
          <HiArrowDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
}
