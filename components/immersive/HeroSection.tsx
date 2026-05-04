"use client";

import {
  motion,
  AnimatePresence,
  useReducedMotion,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { useEffect, useState, useRef, useCallback } from "react";
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
  "DevOps",
  "DevSecOps",
  "Automation Tester",
  "Business Analyst",
  "Full Stack Engineer",
  "Cloud Architect",
  "System Designer",
  "Tech Lead",
];

function HeroCanvas({
  isDark,
  enableBloom,
  active,
}: {
  isDark: boolean;
  enableBloom: boolean;
  active: boolean;
}) {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 75 }}
      dpr={[1, 1.5]}
      frameloop={active ? "always" : "demand"}
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
          count={130}
          color={isDark ? "#6366f1" : "#4f46e5"}
          size={0.022}
          spread={12}
        />
        <FloatingParticles
          count={70}
          color={isDark ? "#06b6d4" : "#0891b2"}
          size={0.018}
          spread={10}
        />
        <FloatingParticles
          count={30}
          color={isDark ? "#a855f7" : "#7c3aed"}
          size={0.028}
          spread={8}
        />

        <HeroText3D
          text="Yatin Kalra"
          position={[0, 1.4, 0]}
          size={0.7}
          color={isDark ? "#a78bfa" : "#6366f1"}
          emissive={isDark ? "#6366f1" : "#4f46e5"}
        />

        <CameraRig />

        {enableBloom && (
          <EffectComposer>
            <Bloom
              luminanceThreshold={isDark ? 0.2 : 0.6}
              luminanceSmoothing={0.9}
              intensity={isDark ? 0.8 : 0.3}
            />
          </EffectComposer>
        )}
      </Suspense>
    </Canvas>
  );
}

function MagneticCTA({
  href,
  onClick,
  children,
  primary,
}: {
  href: string;
  onClick?: (e: React.MouseEvent) => void;
  children: React.ReactNode;
  primary?: boolean;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 18, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 200, damping: 18, mass: 0.4 });
  const reduced = useReducedMotion();

  const handleMove = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (reduced || !ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      x.set((e.clientX - cx) * 0.25);
      y.set((e.clientY - cy) * 0.35);
    },
    [reduced, x, y]
  );

  const handleLeave = useCallback(() => {
    x.set(0);
    y.set(0);
  }, [x, y]);

  return (
    <motion.a
      ref={ref}
      href={href}
      onClick={onClick}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ x: sx, y: sy }}
      className={
        primary
          ? "group relative px-8 py-4 rounded-full font-medium text-white overflow-hidden transition-shadow hover:shadow-xl hover:shadow-purple-500/25"
          : "px-8 py-4 rounded-full font-medium text-gray-600 dark:text-gray-300 bg-white/60 dark:bg-white/5 backdrop-blur-xl border border-gray-200 dark:border-white/10 hover:border-purple-400 dark:hover:border-purple-500/50 hover:bg-white/80 dark:hover:bg-white/10 transition-colors"
      }
    >
      {primary && (
        <>
          <span className="absolute inset-0 bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-600" />
          <span className="absolute inset-0 bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-600 blur-xl opacity-50 group-hover:opacity-80 transition-opacity" />
        </>
      )}
      <span className="relative flex items-center gap-2">{children}</span>
    </motion.a>
  );
}

export default function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [is3DReady, setIs3DReady] = useState(false);
  const [inView, setInView] = useState(true);
  const sectionRef = useRef<HTMLElement>(null);
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const reduced = useReducedMotion();

  // Detect mobile/coarse pointer once for perf gates
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const m = window.matchMedia("(max-width: 768px), (pointer: coarse)");
    const update = () => setIsMobile(m.matches);
    update();
    m.addEventListener("change", update);
    return () => m.removeEventListener("change", update);
  }, []);

  // Defer 3D mount slightly so the rest of the page TTI isn't blocked
  useEffect(() => {
    if (reduced) return;
    const timer = setTimeout(() => setIs3DReady(true), 150);
    return () => clearTimeout(timer);
  }, [reduced]);

  // Pause Canvas frameloop when hero scrolls out of view
  useEffect(() => {
    if (!sectionRef.current) return;
    const obs = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0 }
    );
    obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  // Cycle roles
  useEffect(() => {
    if (reduced) return;
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2400);
    return () => clearInterval(interval);
  }, [reduced]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.4 },
    },
  };

  const itemVariants = {
    hidden: { y: 24, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring" as const, stiffness: 90, damping: 18 },
    },
  };

  const showCanvas = is3DReady && !reduced;
  const enableBloom = isDark && !isMobile;

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#faf9ff] dark:bg-[#030014] transition-colors"
    >
      {/* 3D Canvas Background — full bleed, masked by gradient overlays */}
      <div className="absolute inset-0">
        {showCanvas && (
          <HeroCanvas
            isDark={isDark}
            enableBloom={enableBloom}
            active={inView}
          />
        )}
      </div>

      {/* Static fallback gradient for reduced-motion / pre-canvas */}
      {!showCanvas && (
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_30%,rgba(99,102,241,0.18),transparent_55%),radial-gradient(ellipse_at_70%_60%,rgba(6,182,212,0.14),transparent_50%)] dark:bg-[radial-gradient(ellipse_at_30%_30%,rgba(168,85,247,0.25),transparent_55%),radial-gradient(ellipse_at_70%_60%,rgba(6,182,212,0.18),transparent_50%)]" />
          <h1 className="absolute top-[18%] left-1/2 -translate-x-1/2 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight bg-gradient-to-r from-indigo-600 to-cyan-500 dark:from-purple-400 dark:to-cyan-400 bg-clip-text text-transparent">
            Yatin Kalra
          </h1>
        </div>
      )}

      {/* Soft overlay so 3D text reads through gradient toward bottom content */}
      <div className="absolute inset-x-0 bottom-0 h-[55%] bg-gradient-to-b from-transparent via-[#faf9ff]/60 to-[#faf9ff] dark:via-[#030014]/60 dark:to-[#030014] pointer-events-none z-[1]" />

      {/* Content overlay — vertically centered, sits in lower-middle band */}
      <motion.div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 sm:pt-40 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          {/* Animated role */}
          <motion.div variants={itemVariants} className="mb-4 h-12">
            <AnimatePresence mode="wait">
              <motion.h2
                key={roleIndex}
                initial={{ y: 16, opacity: 0, filter: "blur(6px)" }}
                animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                exit={{ y: -16, opacity: 0, filter: "blur(6px)" }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="text-2xl sm:text-3xl md:text-4xl font-semibold bg-gradient-to-r from-indigo-600 via-purple-500 to-cyan-500 dark:from-cyan-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent"
              >
                {roles[roleIndex]}
              </motion.h2>
            </AnimatePresence>
          </motion.div>

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

          {/* Tagline */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed"
          >
            Building scalable systems with{" "}
            <span className="text-indigo-600 dark:text-cyan-400 font-semibold">
              8+ years
            </span>{" "}
            across fintech, healthcare & SaaS — shipping AI agents,
            cloud-native platforms, and resilient infra.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-4 mb-8"
          >
            <MagneticCTA
              href="#contact"
              primary
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <HiMail className="w-5 h-5" />
              Get In Touch
            </MagneticCTA>

            <MagneticCTA
              href="#work"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#work")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              View My Work
            </MagneticCTA>
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

      {/* Scroll Indicator — hidden on small viewports */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="hidden md:block absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={reduced ? undefined : { y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-gray-400 dark:text-gray-500"
        >
          <HiArrowDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
}
