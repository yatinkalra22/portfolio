"use client";

import { personalInfo } from "@/lib/data";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="py-8 bg-gray-100 dark:bg-[#08071a] border-t border-gray-200 dark:border-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-500 dark:text-gray-500">
          &copy; {new Date().getFullYear()} {personalInfo.name}
        </p>
        <div className="flex items-center gap-4">
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-400 transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="w-4 h-4" />
          </a>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-400 transition-colors"
            aria-label="GitHub"
          >
            <FaGithub className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
