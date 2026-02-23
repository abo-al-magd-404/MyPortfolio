"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
  faBootstrap,
} from "@fortawesome/free-brands-svg-icons";

// ====================
// Reusable Components
// ====================

const SectionHeader = ({ title, icon, color }) => (
  <div className="flex items-center gap-3 mb-6">
    <FontAwesomeIcon icon={icon} className={`${color} text-xl`} />
    <h2 className={`text-xl font-bold uppercase tracking-wider ${color}`}>
      {title}
    </h2>
  </div>
);

const SkillCard = ({ title, icon, color, skills }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="bg-gray-900/40 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 shadow-lg"
  >
    <SectionHeader title={title} icon={icon} color={color} />

    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
      {skills.map((skill, idx) => (
        <motion.div
          key={idx}
          whileHover={{ scale: 1.05 }}
          className="flex flex-col items-center justify-center bg-gray-800/40 p-4 rounded-xl border border-gray-700 hover:border-gray-500 transition-all duration-300"
        >
          <FontAwesomeIcon
            icon={skill.icon}
            className={`text-2xl mb-2 ${skill.color}`}
          />
          <span className="text-sm text-gray-200 font-medium text-center">
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
    <section
      id="skills"
      className="min-h-screen py-20 px-6 lg:px-24 bg-linear-to-b from-transparent to-gray-900/30"
    >
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-black italic tracking-tight">
          SKILLS<span className="text-sky-500">.</span>
          <br />
          <span className="text-gray-500 text-2xl">
            Technologies I Work With
          </span>
        </h1>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Frontend */}
        <SkillCard
          title="Frontend"
          icon={faCode}
          color="text-sky-500"
          skills={[
            { name: "HTML5", icon: faHtml5, color: "text-orange-500" },
            { name: "CSS3", icon: faCss3Alt, color: "text-blue-500" },
            { name: "SCSS", icon: faCss3Alt, color: "text-pink-500" },
            { name: "Tailwind CSS", icon: faCss3Alt, color: "text-cyan-400" },
            { name: "Bootstrap", icon: faBootstrap, color: "text-purple-500" },
            { name: "JavaScript (ES6+)", icon: faJs, color: "text-yellow-400" },
            { name: "TypeScript", icon: faJs, color: "text-blue-400" },
            { name: "jQuery", icon: faJs, color: "text-blue-300" },
            { name: "React.js", icon: faReact, color: "text-cyan-400" },
            { name: "Redux", icon: faReact, color: "text-purple-500" },
            { name: "Next.js", icon: faReact, color: "text-gray-200" },
            { name: "Jest", icon: faJs, color: "text-red-400" },
          ]}
        />

        {/* Backend */}
        <SkillCard
          title="Backend"
          icon={faServer}
          color="text-rose-500"
          skills={[
            { name: "Node.js", icon: faNodeJs, color: "text-green-500" },
            { name: "Express.js", icon: faNodeJs, color: "text-gray-300" },
            { name: "RESTful APIs", icon: faTerminal, color: "text-sky-400" },
            {
              name: "Authentication (JWT)",
              icon: faShieldHalved,
              color: "text-rose-400",
            },
            { name: "Sequelize", icon: faDatabase, color: "text-blue-400" },
            { name: "Mongoose", icon: faDatabase, color: "text-green-400" },
          ]}
        />

        {/* Databases */}
        <SkillCard
          title="Databases"
          icon={faDatabase}
          color="text-emerald-500"
          skills={[
            { name: "MongoDB", icon: faDatabase, color: "text-green-500" },
            { name: "MySQL", icon: faDatabase, color: "text-blue-500" },
          ]}
        />

        {/* Programming Languages */}
        <SkillCard
          title="Programming Languages"
          icon={faTerminal}
          color="text-indigo-500"
          skills={[
            { name: "JavaScript", icon: faJs, color: "text-yellow-400" },
            { name: "TypeScript", icon: faJs, color: "text-blue-400" },
            { name: "Python", icon: faPython, color: "text-yellow-500" },
            { name: "C++", icon: faCode, color: "text-blue-300" },
          ]}
        />

        {/* Tools */}
        <SkillCard
          title="Tools & Environment"
          icon={faTools}
          color="text-yellow-500"
          skills={[
            { name: "Git", icon: faGitAlt, color: "text-orange-500" },
            { name: "GitHub", icon: faGithub, color: "text-gray-200" },
            { name: "Postman", icon: faTerminal, color: "text-orange-400" },
            { name: "Vercel", icon: faTerminal, color: "text-gray-300" },
            { name: "NPM", icon: faNpm, color: "text-red-500" },
            { name: "Yarn", icon: faNpm, color: "text-blue-400" },
            {
              name: "Chrome DevTools",
              icon: faTerminal,
              color: "text-green-400",
            },
          ]}
        />
      </div>
    </section>
  );
}
