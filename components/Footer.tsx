"use client";

import { personalInfo } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="py-6 bg-gray-950 text-gray-500 text-sm text-center">
      <p>
        &copy; {new Date().getFullYear()} {personalInfo.name}. All rights
        reserved.
      </p>
    </footer>
  );
}
