"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faGraduationCap,
  faChalkboardTeacher,
  faCertificate,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image.js";

// ====================
// --- DATA CONFIG ---
// ====================

const COLLEGE_SUBJECTS = [
  "English Language",
  "Math & Statistics",
  "Introduction to Computer Science",
  "Algorithms & Data Structures",
  "Database Systems",
  "Software Engineering",
  "Data Analysis",
  "Computer Networks",
  "Web Development",
  "Front End Technologies",
  "Back End Technologies",
  "Practical Training",
  "Graduation Project",
  "Elective Subjects",
];

const COURSES_TIMELINE = [
  {
    title: "Advanced Python Programming",
    provider: "Internal",
    period: "FROM > Aug 2024 > TO > Sep 2024",
    status: "completed",
  },
  {
    title: "Front End Development (React.js & Next.js)",
    provider: "Self-Learning",
    period: "FROM > Dec 2024  > TO >  Sep 2025",
    status: "completed",
  },
  {
    title: "Back End Development (Node.js)",
    provider: "Route Academy",
    period: "FROM > Nov 2025  > TO >  Jun 2026",
    status: "ongoing",
  },
];

const CERTIFICATES = [
  {
    id: 1,
    name: "Python Programming Certificate",
    file: "/MyCertificates/python-cert.jpeg",
    issuer: "University",
  },
];

// ====================
// --- REUSABLE COMPONENTS ---
// ====================

const TimelineCard = ({ children, borderColor }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{ scale: 1.01, x: 5 }}
    className={`bg-gray-800/30 backdrop-blur-sm p-4 rounded-xl border-l-4 ${borderColor} 
                hover:bg-gray-800/50 transition-all duration-300 shadow-sm mb-3`}
  >
    {children}
  </motion.div>
);

const SectionHeader = ({ title, icon, color }) => (
  <div className="flex items-center gap-3 mb-6">
    <FontAwesomeIcon icon={icon} className={`${color} text-xl`} />
    <h2 className={`text-xl font-bold uppercase tracking-wider ${color}`}>
      {title}
    </h2>
  </div>
);

const CertificatesSlider = ({ items }) => {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState(null);

  const next = () => setIndex((prev) => (prev + 1) % items.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + items.length) % items.length);

  // ✅ Use useEffect to access document safely
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.body.style.overflow = selected ? "hidden" : "auto";
    }
    return () => {
      if (typeof document !== "undefined") {
        document.body.style.overflow = "auto";
      }
    };
  }, [selected]);

  return (
    <div className="mt-8">
      <SectionHeader
        title="Certificates"
        icon={faCertificate}
        color="text-emerald-500"
      />

      <div className="relative group">
        <button
          onClick={prev}
          className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 bg-gray-800 p-2 rounded-full border border-emerald-500/50 hover:bg-emerald-500 transition-colors"
        >
          <FontAwesomeIcon icon={faChevronLeft} className="text-white text-xs" />
        </button>

        <div className="overflow-hidden rounded-xl border border-gray-700 bg-gray-900/50 p-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="text-center"
            >
              <h3 className="text-lg font-medium text-white">{items[index].name}</h3>
              <div className="my-2 flex justify-center">
                <Image
                  width={600}
                  height={600}
                  src={items[index].file}
                  alt={items[index].name}
                  className="w-32 h-20 object-contain rounded-lg border border-gray-600 cursor-pointer"
                  onClick={() => setSelected(items[index])}
                />
              </div>
              <p className="text-sm text-gray-400 mt-1">{items[index].issuer}</p>
              <button
                onClick={() => setSelected(items[index])}
                className="mt-3 bg-emerald-600 text-white px-4 py-1 rounded-lg hover:bg-emerald-700 text-sm"
              >
                View Certificate
              </button>
            </motion.div>
          </AnimatePresence>
        </div>

        <button
          onClick={next}
          className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 bg-gray-800 p-2 rounded-full border border-emerald-500/50 hover:bg-emerald-500 transition-colors"
        >
          <FontAwesomeIcon icon={faChevronRight} className="text-white text-xs" />
        </button>
      </div>

      {selected && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="bg-gray-900 border border-gray-700 p-6 rounded-2xl max-w-md w-full"
          >
            <h3 className="text-xl font-bold mb-4">{selected.name}</h3>
            <div className="aspect-video bg-gray-800 rounded-lg mb-6 flex items-center justify-center border border-dashed border-gray-600 overflow-hidden">
              <Image
                width={300}
                height={300}
                src={selected.file}
                alt={selected.name}
                className="object-contain w-full h-full"
              />
            </div>
            <p className="text-sm text-gray-400 mb-4">{selected.issuer}</p>
            <div className="flex gap-4">
              <a
                href={selected.file}
                download
                className="flex-1 bg-emerald-600 text-center py-2 rounded-lg font-semibold hover:bg-emerald-700"
              >
                Download
              </a>
              <button
                onClick={() => setSelected(null)}
                className="flex-1 bg-gray-700 py-2 rounded-lg hover:bg-gray-600"
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

// ====================
// --- MAIN SECTION ---
// ====================

export default function EducationSection() {
  return (
    <section
      className="min-h-screen py-20 px-6 lg:px-24 bg-linear-to-b from-transparent to-gray-900/20"
      id="education"
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-black italic tracking-tighter">
          EDUCATION<span className="text-blue-500">.</span> <br />
          <span className="text-gray-500 text-2xl ml-2">History</span>
        </h1>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div className="order-1">
          <SectionHeader
            title="Academic Path"
            icon={faGraduationCap}
            color="text-rose-500"
          />
          <h2 className="opacity-70 italic">
            <span className="text-rose-500">From &gt;</span> Oct / 2023{" "}
            <span className="text-rose-500">&gt; To &gt;</span> Jun / 2027
          </h2>
          <br />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-2">
            {COLLEGE_SUBJECTS.map((subject, idx) => (
              <TimelineCard key={idx} borderColor="border-rose-500">
                <span className="text-gray-400 mr-2 text-sm">{idx + 1}.</span>
                <span className="text-gray-200 font-medium">{subject}</span>
              </TimelineCard>
            ))}
          </div>
        </div>

        <div className="order-2 flex flex-col gap-12">
          <div>
            <SectionHeader
              title="Specialized Courses"
              icon={faChalkboardTeacher}
              color="text-sky-500"
            />
            <div className="space-y-4">
              {COURSES_TIMELINE.map((course, idx) => (
                <TimelineCard key={idx} borderColor="border-sky-500">
                  <h3 className="font-bold text-lg text-white">{course.title}</h3>
                  <div className="flex-col justify-between items-center mt-2">
                    <p className="text-sky-400 text-sm font-medium">{course.provider}</p>
                    <span className="text-xs text-gray-500">{course.period}</span>
                  </div>
                </TimelineCard>
              ))}
            </div>
          </div>

          <CertificatesSlider items={CERTIFICATES} />

          <div className="hidden lg:flex mt-12 justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-center max-w-3xl p-6 border border-gray-700 rounded-2xl bg-gray-900/50 backdrop-blur-sm shadow-lg"
            >
              <p className="text-2xl md:text-3xl font-black italic text-sky-500 tracking-tight">
                “Learning is the passport to the future, and every certificate is a step forward.”
              </p>
              <span className="block mt-4 text-rose-500 text-sm italic font-bold">
                | Step Towards Success
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
