// "use client";

// import Image from "next/image";
// import { motion } from "framer-motion";
// import Link from "next/link";

// export default function LandingSection() {
//   return (
//     <section className="min-h-screen flex items-center pt-20 pb-3">
//       <div className="container mx-auto px-6 lg:px-16 flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
//         {/* Text Content */}
//         <motion.div
//           initial={{ opacity: 0, x: -40 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//           className="w-full lg:w-1/2 text-left space-y-6"
//         >
//           <h2 className="text-rose-500 font-semibold tracking-wide uppercase">
//             Welcome To My World
//           </h2>

//           <h1 className="text-3xl md:text-5xl font-bold leading-tight">
//             I&apos;m{" "}
//             <span className="text-sky-500 italic">
//               Mohamed
//               <br />
//               Mahmoud
//               <br />
//               Abo Al Magd
//             </span>
//           </h1>

//           <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-xl lg:mx-0">
//             A passionate and detail-oriented Full-Stack{" "}
//             <span className="text-green-500">(MERN Stack)</span> Developer.
//             <br />
//             I enjoy transforming ideas into clean, scalable, and user-focused
//             digital experiences.
//             <br />I believe in writing structured, maintainable code and
//             continuously pushing myself to grow technically and creatively.
//           </p>

//           {/* Buttons Section */}
//           <div className="pt-6 w-full max-w-md mx-auto lg:mx-0">
//             <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
//               <Link
//                 href="#contact"
//                 className="flex items-center justify-center h-12 rounded-xl font-semibold text-white bg-rose-500 hover:bg-rose-600 transition-all duration-300 shadow-lg shadow-rose-500/30 hover:-translate-y-1 active:scale-95"
//               >
//                 Contact Me
//               </Link>

//               <Link
//                 href="#projects"
//                 className="flex items-center justify-center h-12 rounded-xl font-semibold text-white bg-sky-500 hover:bg-sky-600 transition-all duration-300 shadow-lg shadow-sky-500/30 hover:-translate-y-1 active:scale-95"
//               >
//                 View Projects
//               </Link>

//               <Link
//                 href="/MyCV.pdf"
//                 className="col-span-2 lg:col-span-1 flex items-center justify-center h-12 rounded-xl font-semibold border border-green-500 text-green-500 hover:bg-green-500 hover:text-white transition-all duration-300 hover:-translate-y-1 active:scale-95"
//               >
//                 View My CV
//               </Link>
//             </div>
//           </div>
//         </motion.div>

//         {/* Hero Image */}
//         <motion.div
//           initial={{ opacity: 0, x: 40 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//           className="w-full lg:w-1/2 flex justify-center"
//         >
//           <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 xl:w-112.5 xl:h-112.5 group">
//             <Image
//               src="/images/MyPic.jpg"
//               alt="Mohamed Mahmoud Abo Al Magd"
//               fill
//               className="object-cover rounded-2xl border border-sky-500 shadow-2xl shadow-sky-500/30 transition-transform duration-500 ease-in-out group-hover:scale-105 group-hover:shadow-sky-500/60"
//               priority
//             />
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function LandingSection() {
  return (
    <section className="min-h-screen flex items-center pt-24 pb-12 lg:pt-20 lg:pb-3">
      <div className="container mx-auto px-6 lg:px-16 flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-12">
        
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 text-center lg:text-left space-y-6"
        >
          <h2 className="text-rose-500 font-semibold tracking-wide uppercase text-sm md:text-base">
            Welcome To My World
          </h2>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            I&apos;m{" "}
            <span className="text-sky-500 italic">
              Mohamed
              <br />
              Mahmoud
              <br />
              Abo Al Magd
            </span>
          </h1>

          <p className="text-gray-400 text-sm md:text-base lg:text-lg leading-relaxed max-w-lg mx-auto lg:mx-0">
            A passionate and detail-oriented Full-Stack{" "}
            <span className="text-green-500 font-medium">(MERN Stack)</span> Developer.
            <br className="hidden md:block" />
            I enjoy transforming ideas into clean, scalable, and user-focused
            digital experiences.
            <br className="hidden md:block" />
            I believe in writing structured, maintainable code and
            continuously pushing myself to grow technically and creatively.
          </p>

          <div className="pt-4 w-full max-w-md mx-auto lg:mx-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
              <Link
                href="#contact"
                className="flex items-center justify-center h-12 rounded-xl font-semibold text-white bg-rose-500 hover:bg-rose-600 transition-all duration-300 shadow-lg shadow-rose-500/30 hover:-translate-y-1 active:scale-95"
              >
                Contact Me
              </Link>

              <Link
                href="#projects"
                className="flex items-center justify-center h-12 rounded-xl font-semibold text-white bg-sky-500 hover:bg-sky-600 transition-all duration-300 shadow-lg shadow-sky-500/30 hover:-translate-y-1 active:scale-95"
              >
                View Projects
              </Link>

              <Link
                href="/MyCV.pdf"
                className="sm:col-span-2 lg:col-span-1 flex items-center justify-center h-12 rounded-xl font-semibold border border-green-500 text-green-500 hover:bg-green-500 hover:text-white transition-all duration-300 hover:-translate-y-1 active:scale-95"
              >
                View My CV
              </Link>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 flex justify-center"
        >
          <div className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 group">
            <Image
              src="/images/MyPic.jpg"
              alt="Mohamed Mahmoud Abo Al Magd"
              fill
              className="object-cover rounded-2xl border border-sky-500 shadow-2xl shadow-sky-500/30 transition-transform duration-500 ease-in-out group-hover:scale-105 group-hover:shadow-sky-500/60"
              priority
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
