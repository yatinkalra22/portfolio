"use client";

import { useState, useEffect, useCallback } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useSpring,
} from "framer-motion";
import { HiMenu, HiX, HiSun, HiMoon } from "react-icons/hi";
import { useTheme } from "../ThemeProvider";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Work", href: "#work" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export default function NavigationImmersive() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mounted, setMounted] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const { scrollYProgress } = useScroll();
  const progressScaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 22,
    restDelta: 0.001,
  });

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = navItems.map((item) => item.href.replace("#", ""));
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { rootMargin: "-40% 0px -50% 0px" }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const handleNavClick = useCallback(
    (href: string) => {
      if (isOpen) {
        setIsOpen(false);
        setTimeout(() => {
          document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
        }, 300);
      } else {
        document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
      }
    },
    [isOpen]
  );

  const isDark = theme === "dark";

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? isDark
            ? "bg-[#030014]/80 backdrop-blur-2xl shadow-lg shadow-amber-500/5 border-b border-white/5"
            : "bg-white/80 backdrop-blur-2xl shadow-lg shadow-black/5 border-b border-gray-200/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#home");
              }}
              className="group inline-flex items-baseline gap-1 font-mono text-[15px] tracking-tight text-gray-900 dark:text-white hover:opacity-90 transition-opacity"
              aria-label="Yatin Kalra — Home"
            >
              <span className="font-semibold">yk</span>
              <span className="text-amber-500 dark:text-amber-400">/</span>
              <span className="text-gray-400 dark:text-gray-500 font-normal hidden sm:inline">
                portfolio
              </span>
              <span
                aria-hidden
                className="ml-1 inline-block w-1.5 h-1.5 rounded-full bg-amber-500 dark:bg-amber-400 translate-y-[-1px] motion-safe:animate-pulse"
              />
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item, index) => {
              const isActive = activeSection === item.href.replace("#", "");
              return (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors duration-300 ${
                    isActive
                      ? "text-gray-900 dark:text-white"
                      : "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                  }`}
                >
                  <span className="font-mono text-[10px] text-amber-500 dark:text-amber-400 mr-1.5 align-text-top tabular-nums">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {item.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavImmersive"
                      className="absolute left-3 right-3 -bottom-0.5 h-[2px] bg-gradient-to-r from-amber-400 via-orange-500 to-rose-500 dark:from-amber-300 dark:via-orange-400 dark:to-rose-400 rounded-full"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </motion.a>
              );
            })}

            {/* Theme Toggle */}
            <motion.button
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
              onClick={toggleTheme}
              className="ml-3 p-2.5 rounded-full bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:bg-gray-200 dark:hover:bg-white/10 transition-all"
              aria-label="Toggle theme"
            >
              {mounted && (
                <AnimatePresence mode="wait">
                  {isDark ? (
                    <motion.div
                      key="sun"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <HiSun className="w-4 h-4 text-amber-400" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="moon"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <HiMoon className="w-4 h-4 text-slate-700" />
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </motion.button>
          </div>

          {/* Mobile */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10"
              aria-label="Toggle theme"
            >
              {mounted && (
                <>
                  {isDark ? (
                    <HiSun className="w-4 h-4 text-amber-400" />
                  ) : (
                    <HiMoon className="w-4 h-4 text-slate-700" />
                  )}
                </>
              )}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-full text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/10 transition-all"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <HiX className="h-5 w-5" />
              ) : (
                <HiMenu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Scroll progress rail */}
      <motion.div
        aria-hidden
        style={{ scaleX: progressScaleX, transformOrigin: "0% 50%" }}
        className="absolute left-0 right-0 bottom-0 h-[2px] bg-gradient-to-r from-amber-400 via-orange-500 to-rose-500 dark:from-amber-300 dark:via-orange-400 dark:to-rose-400 origin-left"
      />

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 dark:bg-[#030014]/95 backdrop-blur-2xl border-b border-gray-200/50 dark:border-white/5"
          >
            <div className="px-4 pt-2 pb-4 space-y-1">
              {navItems.map((item, index) => {
                const isActive = activeSection === item.href.replace("#", "");
                return (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * index }}
                    className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                      isActive
                        ? "text-gray-900 dark:text-white bg-amber-50 dark:bg-amber-500/10 border-l-2 border-amber-500 dark:border-amber-400"
                        : "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white border-l-2 border-transparent"
                    }`}
                  >
                    <span className="font-mono text-[10px] text-amber-500 dark:text-amber-400 tabular-nums">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {item.name}
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
