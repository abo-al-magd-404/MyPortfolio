"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

// ====================
// Projects Data
// ====================
const PROJECTS = [
  {
    id: 1,
    title: "Portfolio Website",
    description:
      "My personal portfolio built with modern animations and responsive design.",
    image: "/projects/portfolio.png",
    technologies: ["Next.js", "Framer Motion", "Tailwind"],
    live: "#",
    github: "#",
  },
  // Add more projects here for testing
];

export default function ProjectsSection() {
  const [index, setIndex] = useState(0);

  // ====================
  // Navigation Functions
  // ====================
  const next = () => setIndex((prev) => (prev + 1) % PROJECTS.length);
  const prev = () =>
    setIndex((prev) => (prev === 0 ? PROJECTS.length - 1 : prev - 1));

  const currentProject = PROJECTS[index];

  return (
    <section
      id="projects"
      className="min-h-screen py-24 px-4 md:px-12 lg:px-24 text-white"
    >
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 className="text-sky-500 font-mono tracking-widest uppercase text-sm mb-2 font-bold">
            / My Work
          </h2>
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter">
            FEATURED <span className="text-gray-600 italic">PROJECTS</span>
          </h1>
        </div>

        {/* Navigation Buttons */}
        <div className="flex gap-3">
          <button
            onClick={prev}
            className="p-4 rounded-full border border-gray-800 hover:border-sky-500/50 hover:bg-sky-500/5 transition-all group"
          >
            <FontAwesomeIcon
              icon={faChevronLeft}
              className="group-hover:-translate-x-1 transition-transform"
            />
          </button>
          <button
            onClick={next}
            className="p-4 rounded-full border border-gray-800 hover:border-sky-500/50 hover:bg-sky-500/5 transition-all group"
          >
            <FontAwesomeIcon
              icon={faChevronRight}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>
        </div>
      </div>

      {/* Main Project Card */}
      <div className="max-w-6xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: "circOut" }}
            className="group relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-gray-900/20 p-4 md:p-8 rounded-4xl border border-gray-800 hover:border-sky-500/30 transition-colors duration-500"
          >
            {/* Sky Border Glow */}
            <div className="absolute inset-0 rounded-4xl border border-sky-500/10 pointer-events-none group-hover:border-sky-500/40 transition-all duration-700" />

            {/* Project Info */}
            <div className="lg:col-span-5 flex flex-col h-full justify-center space-y-6">
              {/* Project Number */}
              <div className="flex items-center gap-4">
                <span className="text-sky-500 font-mono text-xl font-bold">
                  0{index + 1}
                </span>
                <div className="h-px w-12 bg-gray-700" />
              </div>

              {/* Title & Description */}
              <div>
                <h3 className="text-3xl md:text-4xl font-bold mb-4 group-hover:text-sky-400 transition-colors">
                  {currentProject.title}
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                  {currentProject.description}
                </p>
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {currentProject.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-medium px-3 py-1 rounded-full bg-sky-500/5 border border-sky-500/20 text-sky-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4 pt-4">
                <a
                  href={currentProject.live}
                  className="flex items-center gap-2 bg-sky-600 hover:bg-sky-500 text-white px-6 py-3 rounded-xl font-bold transition-all transform hover:-translate-y-1"
                >
                  Live Demo{" "}
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="sm" />
                </a>
                <a
                  href={currentProject.github}
                  className="flex items-center gap-2 bg-transparent border border-gray-700 hover:border-white px-6 py-3 rounded-xl font-bold transition-all"
                >
                  <FontAwesomeIcon icon={faGithub} /> Code
                </a>
              </div>
            </div>

            {/* Project Image */}
            <div className="lg:col-span-7 relative group/img rounded-2xl overflow-hidden border border-sky-500/30 bg-gray-950/50 h-62.5 md:h-100 flex items-center justify-center">
              {/* Blurred Background Image */}
              <Image
                src={currentProject.image}
                alt=""
                fill
                className="object-cover opacity-10 blur-xl scale-110 pointer-events-none"
              />

              {/* Main Image */}
              <div className="relative w-full h-full p-2 md:p-4">
                <Image
                  src={currentProject.image}
                  alt={currentProject.title}
                  fill
                  className="object-contain drop-shadow-[0_0_20px_rgba(14,165,233,0.2)] transition-transform duration-500 group-hover/img:scale-[1.02]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>

              {/* Image Border */}
              <div className="absolute inset-0 rounded-2xl border border-sky-500/20 pointer-events-none" />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center gap-2 mt-12">
        {PROJECTS.map((_, i) => (
          <div
            key={i}
            className={`h-1 transition-all duration-300 rounded-full ${
              i === index ? "w-8 bg-sky-500" : "w-2 bg-gray-800"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
