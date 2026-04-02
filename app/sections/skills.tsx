"use client";

import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faCode,
  faServer,
  faDatabase,
  faTools,
  faTerminal,
  faShieldHalved,
} from "@fortawesome/free-solid-svg-icons";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faNodeJs,
  faGitAlt,
  faGithub,
  faNpm,
  faPython,
} from "@fortawesome/free-brands-svg-icons";

// ====================
// Types
// ====================

interface Skill {
  name: string;
  icon: IconDefinition;
  color: string;
}

interface SectionHeaderProps {
  title: string;
  icon: IconDefinition;
  color: string;
}

interface SkillCardProps {
  title: string;
  icon: IconDefinition;
  color: string;
  skills: Skill[];
  className?: string;
}

// ====================
// Reusable Components
// ====================

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  icon,
  color,
}) => (
  <div className="flex flex-col items-center justify-center gap-3 mb-6 md:mb-8 w-full">
    <div
      className={`p-2.5 md:p-3 rounded-full bg-gray-800/30 border border-gray-700/50 ${color}`}
    >
      <FontAwesomeIcon icon={icon} className="text-xl md:text-2xl" />
    </div>
    <h2 className={`text-lg md:text-xl font-bold uppercase tracking-[0.2em] ${color}`}>
      {title}
    </h2>
    <div className="h-1 w-12 bg-gray-800 rounded-full"></div>
  </div>
);

const SkillCard: React.FC<SkillCardProps> = ({
  title,
  icon,
  color,
  skills,
  className,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className={`bg-transparent p-6 md:p-10 rounded-2xl md:rounded-3xl border border-gray-800 flex flex-col items-center w-full ${className}`}
  >
    <SectionHeader title={title} icon={icon} color={color} />

    <div className="grid grid-cols-2 sm:grid-cols-3 lg:flex lg:flex-wrap justify-center gap-3 md:gap-4 w-full">
      {skills.map((skill, idx) => (
        <motion.div
          key={idx}
          whileHover={{ scale: 1.05, borderColor: "rgba(156, 163, 175, 0.5)" }}
          className="flex flex-col items-center justify-center bg-gray-900/20 aspect-square w-full lg:w-28 lg:h-28 rounded-xl md:rounded-2xl border border-gray-800 transition-all duration-300"
        >
          <FontAwesomeIcon
            icon={skill.icon}
            className={`text-2xl md:text-3xl mb-2 md:mb-3 ${skill.color}`}
          />
          <span className="text-[9px] md:text-[11px] text-gray-400 font-bold uppercase tracking-tighter text-center px-1 md:px-2">
            {skill.name}
          </span>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

// ====================
// Main Section
// ====================

export default function SkillsSection() {
  return (
    <section id="skills" className="min-h-screen py-16 md:py-24 px-4 sm:px-6 lg:px-24 overflow-x-hidden">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-center mb-12 md:mb-20"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black italic tracking-tighter mb-4 text-white">
          SKILLS<span className="text-sky-500">.</span>
        </h1>
        <div className="flex items-center justify-center gap-3 md:gap-4">
          <span className="h-px w-8 md:w-12 bg-gray-800"></span>
          <span className="text-gray-600 font-medium tracking-[0.2em] md:tracking-[0.3em] uppercase text-[10px] md:text-sm">
            Tech Stack
          </span>
          <span className="h-px w-8 md:w-12 bg-gray-800"></span>
        </div>
      </motion.div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        <SkillCard
          title="Frontend"
          icon={faCode}
          color="text-sky-400"
          skills={[
            { name: "HTML5", icon: faHtml5, color: "text-orange-500" },
            { name: "CSS3", icon: faCss3Alt, color: "text-blue-500" },
            { name: "Tailwind", icon: faCss3Alt, color: "text-cyan-400" },
            { name: "React.js", icon: faReact, color: "text-cyan-400" },
            { name: "Next.js", icon: faReact, color: "text-white" },
            { name: "TypeScript", icon: faJs, color: "text-blue-400" },
          ]}
        />

        <SkillCard
          title="Backend"
          icon={faServer}
          color="text-rose-500"
          skills={[
            { name: "Node.js", icon: faNodeJs, color: "text-green-500" },
            { name: "Express.js", icon: faNodeJs, color: "text-gray-300" },
            { name: "Rest API", icon: faTerminal, color: "text-sky-400" },
            { name: "Auth/JWT", icon: faShieldHalved, color: "text-rose-400" },
          ]}
        />

        <SkillCard
          title="Databases"
          icon={faDatabase}
          color="text-emerald-500"
          skills={[
            { name: "MongoDB", icon: faDatabase, color: "text-green-500" },
            { name: "MySQL", icon: faDatabase, color: "text-blue-500" },
            { name: "Mongoose", icon: faDatabase, color: "text-green-400" },
            { name: "Sequelize", icon: faDatabase, color: "text-blue-400" },
          ]}
        />

        <SkillCard
          title="Languages"
          icon={faTerminal}
          color="text-indigo-500"
          skills={[
            { name: "JavaScript", icon: faJs, color: "text-yellow-400" },
            { name: "Python", icon: faPython, color: "text-yellow-500" },
            { name: "C++", icon: faCode, color: "text-blue-300" },
          ]}
        />

        <SkillCard
          title="Tools & Environment"
          icon={faTools}
          color="text-yellow-500"
          className="md:col-span-2 max-w-full lg:max-w-4xl mx-auto"
          skills={[
            { name: "Git", icon: faGitAlt, color: "text-orange-500" },
            { name: "GitHub", icon: faGithub, color: "text-white" },
            { name: "Postman", icon: faTerminal, color: "text-orange-400" },
            { name: "Vercel", icon: faTerminal, color: "text-gray-300" },
            { name: "NPM", icon: faNpm, color: "text-red-500" },
          ]}
        />
      </div>
    </section>
  );
}
