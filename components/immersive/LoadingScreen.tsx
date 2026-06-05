"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const loadingSteps = [
  "Initializing renderer...",
  "Loading shaders...",
  "Compiling materials...",
  "Building particle system...",
  "Generating 3D geometry...",
  "Applying post-processing...",
  "Rendering scene...",
  "Ready.",
];

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsComplete(true), 600);
          return 100;
        }
        const increment =
          prev < 30
            ? Math.random() * 6 + 2
            : prev < 70
            ? Math.random() * 8 + 3
            : Math.random() * 12 + 5;
        return Math.min(prev + increment, 100);
      });
    }, 120);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const stepIndex = Math.min(
      Math.floor((progress / 100) * loadingSteps.length),
      loadingSteps.length - 1
    );
    setCurrentStep(stepIndex);
  }, [progress]);

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] bg-[#030014] flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Grid background */}
          <div
            className="absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(251,191,36,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(251,191,36,0.6) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          {/* Radial glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(251,146,60,0.10),transparent_60%)]" />

          {/* Orbiting ring */}
          <div className="relative mb-12">
            {/* Outer rotating ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="w-28 h-28 rounded-full border border-amber-400/20"
              style={{
                borderTopColor: "rgba(251, 191, 36, 0.7)",
                borderRightColor: "rgba(251, 146, 60, 0.5)",
              }}
            />
            {/* Inner counter-rotating ring */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="absolute inset-3 rounded-full border border-orange-500/20"
              style={{
                borderBottomColor: "rgba(251, 146, 60, 0.7)",
                borderLeftColor: "rgba(244, 63, 94, 0.5)",
              }}
            />
            {/* Center logo */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-3xl font-bold bg-gradient-to-r from-amber-300 via-orange-400 to-rose-400 bg-clip-text text-transparent"
              >
                YK
              </motion.div>
            </div>
            {/* Glow pulse */}
            <motion.div
              animate={{ opacity: [0.2, 0.5, 0.2], scale: [0.95, 1.05, 0.95] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 rounded-full bg-amber-500/10 blur-xl"
            />
          </div>

          {/* Progress bar with glow */}
          <div className="relative w-72">
            <div className="h-[2px] bg-white/5 rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full relative"
                style={{
                  background:
                    "linear-gradient(90deg, #fbbf24, #fb923c, #f43f5e)",
                }}
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.15 }}
              />
            </div>
            {/* Glow under progress bar */}
            <motion.div
              className="absolute top-0 h-4 blur-md rounded-full -mt-1"
              style={{
                background:
                  "linear-gradient(90deg, #fbbf24, #fb923c)",
                opacity: 0.45,
              }}
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.15 }}
            />
          </div>

          {/* Progress percentage */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-6 flex items-center gap-3"
          >
            <span className="text-2xl font-mono font-bold bg-gradient-to-r from-amber-300 via-orange-400 to-rose-400 bg-clip-text text-transparent">
              {Math.round(progress)}%
            </span>
          </motion.div>

          {/* Terminal-style loading step */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-4 font-mono text-xs text-gray-500 flex items-center gap-2"
          >
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              className="text-amber-400"
            >
              &gt;
            </motion.span>
            <AnimatePresence mode="wait">
              <motion.span
                key={currentStep}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.2 }}
              >
                {loadingSteps[currentStep]}
              </motion.span>
            </AnimatePresence>
          </motion.div>

          {/* Corner decorations */}
          <div className="absolute top-8 left-8 w-16 h-16 border-l border-t border-amber-400/25" />
          <div className="absolute top-8 right-8 w-16 h-16 border-r border-t border-orange-500/25" />
          <div className="absolute bottom-8 left-8 w-16 h-16 border-l border-b border-orange-500/25" />
          <div className="absolute bottom-8 right-8 w-16 h-16 border-r border-b border-rose-500/25" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
