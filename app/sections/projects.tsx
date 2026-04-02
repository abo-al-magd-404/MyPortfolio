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

const PROJECTS = [
  {
    id: 1,
    title: "Portfolio Website",
    description:
      "A high-performance personal portfolio featuring smooth Framer Motion animations and a fully responsive design tailored for all devices.",
    image: "/projects/portfolio.png",
    technologies: ["Next.js", "Framer Motion", "Tailwind CSS"],
    live: "#",
    github: "https://github.com/abo-al-magd-404/MyPortfolio",
  },
  {
    id: 2,
    title: "MATJARNA E-commerce",
    description:
      "A modern e-commerce solution with focus on user experience, featuring dynamic product filtering and a sleek checkout flow.",
    image: "/projects/matjarna.png",
    technologies: ["Next.js", "Redux Toolkit", "Node.js"],
    live: "https://matjarna-nu.vercel.app/",
    github: "https://github.com/abo-al-magd-404/Matjarna",
  },
];

export default function ProjectsSection() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const next = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % PROJECTS.length);
  };

  const prev = () => {
    setDirection(-1);
    setIndex((prev) => (prev === 0 ? PROJECTS.length - 1 : prev - 1));
  };

  const currentProject = PROJECTS[index];

  const variants = {
    enter: (direction: number) => ({
      y: direction > 0 ? 30 : -30,
      opacity: 0,
    }),
    center: { y: 0, opacity: 1 },
    exit: (direction: number) => ({
      y: direction < 0 ? 30 : -30,
      opacity: 0,
    }),
  };

  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col justify-between py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-12 lg:px-24 text-white bg-transparent relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full mb-8 md:mb-12 flex items-end justify-between border-b border-white/5 pb-6 md:pb-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-none uppercase">
            Featured <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-gray-400 to-gray-700 italic">
              Projects
            </span>
          </h1>
        </motion.div>

        <div className="flex gap-2 md:gap-3 h-fit">
          <button
            onClick={prev}
            className="w-9 h-9 md:w-10 md:h-10 lg:w-12 lg:h-12 flex items-center justify-center rounded-full border border-white/10 hover:border-sky-500/50 transition-all active:scale-90"
          >
            <FontAwesomeIcon icon={faChevronLeft} className="text-[10px] md:text-xs lg:text-sm" />
          </button>
          <button
            onClick={next}
            className="w-9 h-9 md:w-10 md:h-10 lg:w-12 lg:h-12 flex items-center justify-center rounded-full border border-white/10 hover:border-sky-500/50 transition-all active:scale-90"
          >
            <FontAwesomeIcon icon={faChevronRight} className="text-[10px] md:text-xs lg:text-sm" />
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto w-full grow flex items-center">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={index}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5, ease: "circOut" }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 lg:gap-20 items-center w-full py-4 md:py-8"
          >
            <div className="lg:col-span-7 group order-1 lg:order-2">
              <div className="relative aspect-video w-full rounded-xl md:rounded-2xl overflow-hidden border border-white/10 bg-gray-900/50 shadow-2xl">
                <Image
                  src={currentProject.image}
                  alt={currentProject.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-1000"
                  priority
                />
                <div className="hidden lg:block absolute -bottom-10 -right-10 text-[10rem] xl:text-[12rem] font-black text-white/5 select-none pointer-events-none italic">
                  {index + 1}
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-5 md:space-y-6 lg:space-y-8 order-2 lg:order-1">
              <div className="space-y-3 md:space-y-4">
                <div className="flex items-center gap-3 md:gap-4 text-sky-500 font-mono text-lg md:text-xl font-black">
                  <span>0{index + 1}</span>
                  <div className="h-px w-8 md:w-12 bg-sky-500/30" />
                </div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight uppercase">
                  {currentProject.title}
                </h3>
                <p className="text-gray-400 text-sm md:text-base lg:text-lg leading-relaxed font-light max-w-md">
                  {currentProject.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 md:gap-2">
                {currentProject.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-[8px] md:text-[10px] uppercase tracking-widest font-bold px-3 py-1.5 md:px-4 md:py-2 rounded-lg bg-white/5 border border-white/10 text-gray-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-2 md:pt-4">
                <a
                  href={currentProject.live}
                  className="flex items-center justify-center gap-3 bg-white text-black hover:bg-sky-500 hover:text-white px-6 md:px-8 py-3 md:py-4 rounded-xl font-bold transition-all active:scale-95 text-sm md:text-base"
                >
                  LIVE PREVIEW{" "}
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-[10px]" />
                </a>
                <a
                  href={currentProject.github}
                  className="flex items-center justify-center gap-3 bg-transparent border border-white/10 hover:bg-white/10 px-6 md:px-8 py-3 md:py-4 rounded-xl font-bold transition-all active:scale-95 text-sm md:text-base"
                >
                  <FontAwesomeIcon icon={faGithub} /> SOURCE
                </a>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="max-w-7xl mx-auto w-full mt-8 md:mt-12 border-t border-white/5 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6">
        <div className="text-[9px] md:text-[10px] text-gray-600 font-mono tracking-[0.2em] md:tracking-[0.3em] uppercase">
          Based in Egypt / 2026
        </div>

        <div className="flex gap-2">
          {PROJECTS.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > index ? 1 : -1);
                setIndex(i);
              }}
              className={`h-1 md:h-1.5 transition-all duration-500 rounded-full ${
                i === index
                  ? "w-8 md:w-12 bg-sky-500"
                  : "w-2 md:w-3 bg-gray-800 hover:bg-gray-600"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
