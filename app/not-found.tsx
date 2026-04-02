"use client";

/**
 * Custom 404 Not Found Page
 * -----------------------------------------
 * - Styled to match dark theme (neutral palette + sky accents)
 * - Glassmorphism card with blur effect
 * - Smooth entrance animation using Framer Motion
 * - Action buttons for navigation (Home + Back)
 */

import Link from "next/link";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faHome } from "@fortawesome/free-solid-svg-icons";

export default function NotFound() {
  return (
    /**
     * Root container
     * - Full viewport height
     * - Centered content (flexbox)
     * - Dark background
     * - Overflow hidden to contain background glow effects
     */
    <div className="min-h-screen flex items-center justify-center text-gray-300 px-6 relative overflow-hidden">
      {/* ================================
          Main Content Card
          Glassmorphism container
      ================================== */}
      <motion.div
        /**
         * Entrance animation
         * - Fade in
         * - Slight upward movement
         */
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="
          relative z-10
          bg-neutral-900/70 backdrop-blur-lg
          border border-neutral-800
          rounded-2xl
          shadow-2xl
          p-10
          max-w-xl w-full
          text-center
        "
      >
        {/* ================================
            404 Title
            Styled like code syntax
        ================================== */}
        <h1 className="text-6xl font-extrabold tracking-wide mb-4">
          <span className="text-sky-400">&lt;</span>
          <span className="text-white">404</span>
          <span className="text-sky-400">/&gt;</span>
        </h1>

        {/* Subtitle */}
        <h2 className="text-2xl font-semibold text-white mb-4">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="text-gray-400 leading-relaxed mb-8">
          The page you are looking for does not exist or has been moved. Let’s
          get you back on track.
        </p>

        {/* ================================
            Action Buttons
            Primary + Secondary CTA
        ================================== */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {/* Home Button */}
          <Link
            href="/"
            className="
              group
              px-6 py-3 rounded-xl
              bg-sky-500 text-white
              font-medium
              transition-all duration-300
              hover:bg-sky-600
              hover:scale-105
              shadow-lg
            "
          >
            <FontAwesomeIcon icon={faHome} className="mr-2" />
            Back to Home
          </Link>

          {/* Back Button (Browser History) */}
          <button
            onClick={() => window.history.back()}
            className="
              group
              px-6 py-3 rounded-xl
              bg-neutral-800
              border border-neutral-700
              text-gray-300
              font-medium
              transition-all duration-300
              hover:border-sky-500
              hover:text-white
              hover:scale-105
            "
          >
            <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
            Go Back
          </button>
        </div>
      </motion.div>
    </div>
  );
}
