"use client";

import { motion } from "framer-motion";
import { FaHeart } from "react-icons/fa";
import { personalInfo } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-8 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center gap-4">
          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gray-400 text-sm text-center"
          >
            © {new Date().getFullYear()} {personalInfo.name}. All rights
            reserved.
          </motion.p>

          {/* Made with love */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 text-gray-400 text-sm"
          >
            <span>Built with</span>
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <FaHeart className="text-red-500" />
            </motion.span>
            <span>using Next.js, TypeScript & Framer Motion</span>
          </motion.div>

          {/* Scroll to top */}
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.9 }}
            className="mt-4 px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-sm font-medium hover:shadow-lg transition-all duration-300"
          >
            Back to Top ↑
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
