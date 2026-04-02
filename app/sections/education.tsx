// "use client";

// import { useState, ReactNode, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faChevronLeft,
//   faChevronRight,
//   faGraduationCap,
//   faChalkboardTeacher,
//   faCertificate,
//   faDownload,
//   faTimes,
// } from "@fortawesome/free-solid-svg-icons";
// import Image from "next/image";

// const TimelineCard = ({
//   children,
//   borderColor,
// }: {
//   children: ReactNode;
//   borderColor: string;
// }) => (
//   <motion.div
//     initial={{ opacity: 0, y: 10 }}
//     whileInView={{ opacity: 1, y: 0 }}
//     viewport={{ once: true }}
//     className={`bg-gray-800/10 backdrop-blur-sm p-4 rounded-xl border-l-4 ${borderColor} hover:bg-gray-800/20 transition-all duration-300 shadow-sm mb-4 relative z-10`}
//   >
//     <div className="flex items-center text-sm md:text-base lg:text-lg">{children}</div>
//   </motion.div>
// );

// const SectionHeader = ({
//   title,
//   icon,
//   color,
// }: {
//   title: string;
//   icon: any;
//   color: string;
// }) => (
//   <div className="flex items-center gap-3 md:gap-4 mb-8 md:mb-10">
//     <div className={`p-2.5 md:p-3 rounded-xl bg-gray-800/40 ${color}`}>
//       <FontAwesomeIcon icon={icon} className="text-xl md:text-2xl" />
//     </div>
//     <h2 className={`text-xl md:text-2xl font-black uppercase tracking-widest ${color}`}>
//       {title}
//     </h2>
//   </div>
// );

// export default function EducationSection() {
//   const [certIndex, setCertIndex] = useState(0);
//   const [selectedCert, setSelectedCert] = useState<any>(null);

//   useEffect(() => {
//     if (selectedCert) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "unset";
//     }
//     return () => { document.body.style.overflow = "unset"; };
//   }, [selectedCert]);

//   const COLLEGE_SUBJECTS = [
//     "English Language", "Math & Statistics", "Introduction to Computer Science",
//     "Algorithms & Data Structures", "Database Systems", "Software Engineering",
//     "Data Analysis", "Computer Networks", "Web Development", "Front End Technologies",
//     "Back End Technologies", "Practical Training", "Graduation Project", "Elective Subjects",
//   ];

//   const COURSES_TIMELINE = [
//     { title: "Advanced Python Programming", provider: "Internal", period: "Aug 2024 - Sep 2024", status: "completed" },
//     { title: "Front End Development (React.js & Next.js)", provider: "Self-Learning", period: "Dec 2024 - Sep 2025", status: "completed" },
//     { title: "Back End Development (Node.js)", provider: "Route Academy", period: "Nov 2025 - Jun 2026", status: "ongoing" },
//   ];

//   const CERTIFICATES = [
//     { id: 1, name: "Python Programming Certificate", file: "/MyCertificates/python-cert.jpeg", issuer: "University" },
//     { id: 2, name: "Top Performer", file: "/MyCertificates/top-performer.png", issuer: "Route Academy" },
//   ];

//   return (
//     <section className="min-h-screen py-16 md:py-24 px-4 sm:px-6 lg:px-24 bg-transparent overflow-x-hidden" id="education">
      
//       <div className="text-center mb-16 md:mb-24">
//         <h1 className="text-4xl sm:text-5xl md:text-7xl font-black italic tracking-tighter text-white">
//           EDUCATION<span className="text-sky-500">.</span>
//         </h1>
//         <p className="text-gray-500 font-bold uppercase tracking-[0.3em] md:tracking-[0.5em] text-[10px] md:text-xs mt-4">
//           Academic & Professional History
//         </p>
//       </div>

//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 max-w-7xl mx-auto">
        
//         <div className="relative">
//           <SectionHeader title="Academic Path" icon={faGraduationCap} color="text-rose-500" />

//           <div className="absolute left-[19px] md:left-7.75 top-24 bottom-0 w-1 bg-linear-to-b from-rose-500/50 via-rose-500/10 to-transparent" />

//           <div className="space-y-4">
//             <div className="flex items-center gap-4 md:gap-6 mb-8 md:mb-12 ml-1 md:ml-2">
//               <span className="text-rose-500 font-black italic text-lg md:text-xl tracking-wider">2023 - 2027</span>
//               <div className="h-px flex-1 bg-gray-800 mt-1" />
//             </div>

//             {COLLEGE_SUBJECTS.map((subject, idx) => (
//               <div key={idx} className="relative pl-10 md:pl-12">
//                 <div className="absolute left-[15px] md:left-6.75 top-1/2 -translate-y-1/2 w-2.5 h-2.5 md:w-3 h-3 bg-black border-2 border-rose-500 rounded-full z-20" />
//                 <TimelineCard borderColor="border-rose-500/40">
//                   <span className="text-rose-500 font-black mr-3 md:mr-4 text-[10px] md:text-xs">
//                     {String(idx + 1).padStart(2, "0")}
//                   </span>
//                   <span className="text-gray-200 font-bold tracking-tight text-sm md:text-base">
//                     {subject}
//                   </span>
//                 </TimelineCard>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="space-y-16">
//           <div className="space-y-6">
//             <SectionHeader title="Expertise Courses" icon={faChalkboardTeacher} color="text-sky-400" />
//             {COURSES_TIMELINE.map((course, idx) => (
//               <TimelineCard key={idx} borderColor="border-sky-500/50">
//                 <div className="w-full">
//                   <div className="flex justify-between items-start mb-2 gap-2">
//                     <h3 className="text-white text-base md:text-lg leading-tight font-semibold">
//                       {course.title}
//                     </h3>
//                     <span className={`text-[8px] md:text-[9px] px-2 py-1 rounded font-semibold uppercase whitespace-nowrap ${
//                         course.status === "completed" ? "bg-green-500/10 text-green-500 border border-green-500/20" : "bg-sky-500/10 text-sky-500 border border-sky-500/20"
//                       }`}>
//                       {course.status}
//                     </span>
//                   </div>
//                   <div className="flex flex-col sm:flex-row justify-between sm:items-center text-xs md:text-sm gap-1">
//                     <p className="text-sky-400 font-bold">{course.provider}</p>
//                     <span className="text-gray-500 italic font-medium">{course.period}</span>
//                   </div>
//                 </div>
//               </TimelineCard>
//             ))}
//           </div>

//           <div className="space-y-8 flex flex-col items-center lg:items-start text-center lg:text-left w-full">
//             <SectionHeader title="Certificates" icon={faCertificate} color="text-emerald-400" />
//             <div className="bg-gray-800/5 border border-gray-800/50 p-4 md:p-5 rounded-[2rem] md:rounded-[2.5rem] w-full max-w-lg lg:mx-0">
//               <div 
//                 className="relative w-full aspect-[4/3] sm:aspect-video rounded-xl overflow-hidden border border-gray-700 shadow-xl group cursor-pointer"
//                 onClick={() => setSelectedCert(CERTIFICATES[certIndex])}
//               >
//                 <Image src={CERTIFICATES[certIndex].file} alt={CERTIFICATES[certIndex].name} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
//               </div>
//               <div className="mt-5">
//                 <h3 className="text-base md:text-lg font-black text-white truncate px-2">{CERTIFICATES[certIndex].name}</h3>
//                 <p className="text-emerald-400 text-[9px] md:text-[10px] font-bold uppercase tracking-widest mt-1">{CERTIFICATES[certIndex].issuer}</p>
//                 <div className="flex justify-center items-center gap-4 md:gap-6 mt-5">
//                   <button onClick={() => setCertIndex((prev) => (prev - 1 + CERTIFICATES.length) % CERTIFICATES.length)} className="text-emerald-400 hover:scale-125 transition-transform p-2">
//                     <FontAwesomeIcon icon={faChevronLeft} />
//                   </button>
//                   <button onClick={() => setSelectedCert(CERTIFICATES[certIndex])} className="px-5 md:px-6 py-2 bg-emerald-600 text-white font-black rounded-full text-[9px] md:text-[10px] uppercase tracking-widest hover:bg-emerald-500 transition-all shadow-lg shadow-emerald-600/20">
//                     Expand
//                   </button>
//                   <button onClick={() => setCertIndex((prev) => (prev + 1) % CERTIFICATES.length)} className="text-emerald-400 hover:scale-125 transition-transform p-2">
//                     <FontAwesomeIcon icon={faChevronRight} />
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <motion.div className="p-8 md:p-10 border border-gray-800 rounded-[2rem] md:rounded-[2.5rem] bg-gray-900/5 relative overflow-hidden group">
//             <FontAwesomeIcon icon={faGraduationCap} className="absolute -top-6 -right-6 text-7xl md:text-9xl text-white/5 group-hover:text-white/10 transition-all duration-1000" />
//             <p className="text-xl md:text-3xl font-black italic text-transparent bg-clip-text bg-linear-to-r from-sky-400 via-emerald-400 to-rose-400 leading-tight relative z-10">
//               “Education is the most powerful weapon which you can use to change the world.”
//             </p>
//           </motion.div>
//         </div>
//       </div>

//       <AnimatePresence>
//         {selectedCert && (
//           <motion.div
//             initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
//             className="fixed inset-0 bg-black/95 backdrop-blur-xl z-[999] flex items-center justify-center p-4"
//             onClick={() => setSelectedCert(null)}
//           >
//             <motion.div 
//               initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
//               className="relative w-full max-w-4xl flex flex-col items-center gap-6"
//               onClick={(e) => e.stopPropagation()}
//             >
//               <button 
//                 onClick={() => setSelectedCert(null)}
//                 className="absolute -top-12 right-0 md:-right-12 text-white text-3xl hover:text-rose-500 transition-colors"
//               >
//                 <FontAwesomeIcon icon={faTimes} />
//               </button>
              
//               <div className="relative w-full h-[50vh] md:h-[70vh] rounded-2xl overflow-hidden border border-white/10 bg-black shadow-2xl">
//                 <Image src={selectedCert.file} alt="FullCert" fill className="object-contain" />
//               </div>

//               <div className="text-center space-y-4 w-full">
//                 <div>
//                   <h2 className="text-2xl md:text-4xl font-black text-white tracking-tighter">{selectedCert.name}</h2>
//                   <p className="text-emerald-500 font-bold uppercase tracking-widest text-xs md:text-sm mt-1">{selectedCert.issuer}</p>
//                 </div>
//                 <a href={selectedCert.file} download className="inline-flex items-center gap-3 bg-white text-black px-8 py-3 rounded-full font-black uppercase text-[10px] md:text-xs tracking-widest hover:bg-emerald-500 hover:text-white transition-all">
//                   <FontAwesomeIcon icon={faDownload} /> Download Certificate
//                 </a>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </section>
//   );
// }

"use client";

import { useState, ReactNode, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faGraduationCap,
  faChalkboardTeacher,
  faCertificate,
  faDownload,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

const TimelineCard = ({
  children,
  borderColor,
}: {
  children: ReactNode;
  borderColor: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className={`bg-gray-800/10 backdrop-blur-sm p-4 rounded-xl border-l-4 ${borderColor} hover:bg-gray-800/20 transition-all duration-300 shadow-sm mb-4 relative z-10`}
  >
    <div className="flex items-center text-sm md:text-base lg:text-lg">{children}</div>
  </motion.div>
);

const SectionHeader = ({
  title,
  icon,
  color,
}: {
  title: string;
  icon: any;
  color: string;
}) => (
  <div className="flex items-center gap-3 md:gap-4 mb-8 md:mb-10">
    <div className={`p-2.5 md:p-3 rounded-xl bg-gray-800/40 ${color}`}>
      <FontAwesomeIcon icon={icon} className="text-xl md:text-2xl" />
    </div>
    <h2 className={`text-xl md:text-2xl font-black uppercase tracking-widest ${color}`}>
      {title}
    </h2>
  </div>
);

export default function EducationSection() {
  const [certIndex, setCertIndex] = useState(0);
  const [selectedCert, setSelectedCert] = useState<any>(null);

  useEffect(() => {
    if (selectedCert) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [selectedCert]);

  const COLLEGE_SUBJECTS = [
    "English Language", "Math & Statistics", "Introduction to Computer Science",
    "Algorithms & Data Structures", "Database Systems", "Software Engineering",
    "Data Analysis", "Computer Networks", "Web Development", "Front End Technologies",
    "Back End Technologies", "Practical Training", "Graduation Project", "Elective Subjects",
  ];

  const COURSES_TIMELINE = [
    { title: "Advanced Python Programming", provider: "Internal", period: "Aug 2024 - Sep 2024", status: "completed" },
    { title: "Front End Development (React.js & Next.js)", provider: "Self-Learning", period: "Dec 2024 - Sep 2025", status: "completed" },
    { title: "Back End Development (Node.js)", provider: "Route Academy", period: "Nov 2025 - Jun 2026", status: "ongoing" },
  ];

  const CERTIFICATES = [
    { id: 1, name: "Python Programming Certificate", file: "/MyCertificates/python-cert.jpeg", issuer: "University" },
    { id: 2, name: "Top Performer", file: "/MyCertificates/top-performer.png", issuer: "Route Academy" },
  ];

  return (
    <section className="min-h-screen py-16 md:py-24 px-4 sm:px-6 lg:px-24 bg-transparent overflow-x-hidden" id="education">
      
      <div className="text-center mb-16 md:mb-24">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-black italic tracking-tighter text-white">
          EDUCATION<span className="text-sky-500">.</span>
        </h1>
        <p className="text-gray-500 font-bold uppercase tracking-[0.3em] md:tracking-[0.5em] text-[10px] md:text-xs mt-4">
          Academic & Professional History
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 max-w-7xl mx-auto">
        
        {/* Academic Path */}
        <div className="relative">
          <SectionHeader title="Academic Path" icon={faGraduationCap} color="text-rose-500" />

          {/* Adjusted top value to be further down from the year */}
          <div className="absolute left-[19px] md:left-7.75 top-32 bottom-0 w-1 bg-linear-to-b from-rose-500/50 via-rose-500/10 to-transparent" />

          <div className="space-y-4">
            <div className="flex items-center gap-4 md:gap-6 mb-8 md:mb-12 ml-1 md:ml-2">
              <span className="text-rose-500 font-black italic text-lg md:text-xl tracking-wider">2023 - 2027</span>
              <div className="h-px flex-1 bg-gray-800 mt-1" />
            </div>

            {COLLEGE_SUBJECTS.map((subject, idx) => (
              <div key={idx} className="relative pl-10 md:pl-12">
                <div className="absolute left-[15px] md:left-6.75 top-1/2 -translate-y-1/2 w-2.5 h-2.5 md:w-3 h-3 bg-black border-2 border-rose-500 rounded-full z-20" />
                <TimelineCard borderColor="border-rose-500/40">
                  <span className="text-rose-500 font-black mr-3 md:mr-4 text-[10px] md:text-xs">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span className="text-gray-200 font-bold tracking-tight text-sm md:text-base">
                    {subject}
                  </span>
                </TimelineCard>
              </div>
            ))}
          </div>
        </div>

        {/* Courses & Certificates */}
        <div className="space-y-16">
          <div className="space-y-6">
            <SectionHeader title="Expertise Courses" icon={faChalkboardTeacher} color="text-sky-400" />
            {COURSES_TIMELINE.map((course, idx) => (
              <TimelineCard key={idx} borderColor="border-sky-500/50">
                <div className="w-full">
                  <div className="flex justify-between items-start mb-2 gap-2">
                    <h3 className="text-white text-base md:text-lg leading-tight font-semibold">
                      {course.title}
                    </h3>
                    <span className={`text-[8px] md:text-[9px] px-2 py-1 rounded font-semibold uppercase whitespace-nowrap ${
                        course.status === "completed" ? "bg-green-500/10 text-green-500 border border-green-500/20" : "bg-sky-500/10 text-sky-500 border border-sky-500/20"
                      }`}>
                      {course.status}
                    </span>
                  </div>
                  <div className="flex flex-col sm:flex-row justify-between sm:items-center text-xs md:text-sm gap-1">
                    <p className="text-sky-400 font-bold">{course.provider}</p>
                    <span className="text-gray-500 italic font-medium">{course.period}</span>
                  </div>
                </div>
              </TimelineCard>
            ))}
          </div>

          <div className="space-y-8 flex flex-col items-center lg:items-start text-center lg:text-left w-full">
            <SectionHeader title="Certificates" icon={faCertificate} color="text-emerald-400" />
            {/* Removed max-w-lg to match the width of elements above */}
            <div className="bg-gray-800/5 border border-gray-800/50 p-4 md:p-5 rounded-[2rem] md:rounded-[2.5rem] w-full max-w-none lg:mx-0">
              <div 
                className="relative w-full aspect-[4/3] sm:aspect-video rounded-xl overflow-hidden border border-gray-700 shadow-xl group cursor-pointer"
                onClick={() => setSelectedCert(CERTIFICATES[certIndex])}
              >
                <Image src={CERTIFICATES[certIndex].file} alt={CERTIFICATES[certIndex].name} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="mt-5">
                <h3 className="text-base md:text-lg font-black text-white truncate px-2">{CERTIFICATES[certIndex].name}</h3>
                <p className="text-emerald-400 text-[9px] md:text-[10px] font-bold uppercase tracking-widest mt-1">{CERTIFICATES[certIndex].issuer}</p>
                <div className="flex justify-center items-center gap-4 md:gap-6 mt-5">
                  <button onClick={() => setCertIndex((prev) => (prev - 1 + CERTIFICATES.length) % CERTIFICATES.length)} className="text-emerald-400 hover:scale-125 transition-transform p-2">
                    <FontAwesomeIcon icon={faChevronLeft} />
                  </button>
                  <button onClick={() => setSelectedCert(CERTIFICATES[certIndex])} className="px-5 md:px-6 py-2 bg-emerald-600 text-white font-black rounded-full text-[9px] md:text-[10px] uppercase tracking-widest hover:bg-emerald-500 transition-all shadow-lg shadow-emerald-600/20">
                    Expand
                  </button>
                  <button onClick={() => setCertIndex((prev) => (prev + 1) % CERTIFICATES.length)} className="text-emerald-400 hover:scale-125 transition-transform p-2">
                    <FontAwesomeIcon icon={faChevronRight} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <motion.div className="p-8 md:p-10 border border-gray-800 rounded-[2rem] md:rounded-[2.5rem] bg-gray-900/5 relative overflow-hidden group">
            <FontAwesomeIcon icon={faGraduationCap} className="absolute -top-6 -right-6 text-7xl md:text-9xl text-white/5 group-hover:text-white/10 transition-all duration-1000" />
            <p className="text-xl md:text-3xl font-black italic text-transparent bg-clip-text bg-linear-to-r from-sky-400 via-emerald-400 to-rose-400 leading-tight relative z-10">
              “Education is the most powerful weapon which you can use to change the world.”
            </p>
          </motion.div>
        </div>
      </div>

      {/* Modal for Certificates */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-xl z-[999] flex items-center justify-center p-4"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-4xl flex flex-col items-center gap-6"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Adjusted (X) button position for better visibility on large screens */}
              <button 
                onClick={() => setSelectedCert(null)}
                className="absolute -top-12 md:-top-16 right-0 md:right-0 text-white text-3xl md:text-4xl hover:text-rose-500 transition-colors p-2"
              >
                <FontAwesomeIcon icon={faTimes} />
              </button>
              
              <div className="relative w-full h-[50vh] md:h-[70vh] rounded-2xl overflow-hidden border border-white/10 bg-black shadow-2xl">
                <Image src={selectedCert.file} alt="FullCert" fill className="object-contain" />
              </div>

              <div className="text-center space-y-4 w-full">
                <div>
                  <h2 className="text-2xl md:text-4xl font-black text-white tracking-tighter">{selectedCert.name}</h2>
                  <p className="text-emerald-500 font-bold uppercase tracking-widest text-xs md:text-sm mt-1">{selectedCert.issuer}</p>
                </div>
                <a href={selectedCert.file} download className="inline-flex items-center gap-3 bg-white text-black px-8 py-3 rounded-full font-black uppercase text-[10px] md:text-xs tracking-widest hover:bg-emerald-500 hover:text-white transition-all">
                  <FontAwesomeIcon icon={faDownload} /> Download Certificate
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
