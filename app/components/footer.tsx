"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  const links = [
    {
      icon: faEnvelope,
      label: "Email",
      href: "mailto:abo.al.magd.404@gmail.com",
      color: "text-rose-400",
    },
    {
      icon: faWhatsapp,
      label: "WhatsApp",
      href: "https://wa.me/201095554022",
      color: "text-green-400",
    },
    {
      icon: faGithub,
      label: "GitHub",
      href: "https://github.com/abo-al-magd-404",
      color: "text-gray-300",
    },
    {
      icon: faLinkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/mohamed-mahmoud-9082673b2",
      color: "text-sky-400",
    },
    {
      icon: faPhone,
      label: "Phone",
      href: "tel:+201095554022",
      color: "text-violet-400",
    },
  ];

  return (
    <footer className="bg-neutral-950 text-gray-300 border-t border-neutral-800 rounded-t-3xl">
      <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row gap-16">
        {/* ===== Left Side ===== */}
        <div className="flex-1 space-y-6">
          <h3 className="text-3xl font-bold tracking-wide">
            <span className="text-sky-400">&lt;</span>
            <span className="text-white">Abo Al Magd</span>
            <span className="text-sky-400"> /&gt;</span>
          </h3>

          {/* Quote */}
          <div className="space-y-3 max-w-md">
            <p className="text-lg italic text-gray-200 leading-relaxed">
              “The best way to predict the future is to
              <span className="font-bold text-sky-400"> invent it.</span>”
            </p>

            <p className="text-sm font-semibold text-cyan-400 tracking-wide">
              | Alan Kay
            </p>
          </div>

          <p className="text-sm text-gray-500">
            <span className="font-medium text-gray-400">Software Engineer</span>{" "}
            •<span className="italic text-gray-500"> MERN-Stack Developer</span>
          </p>
        </div>

        {/* ===== Right Side ===== */}
        <div className="flex-1 grid sm:grid-cols-2 gap-6">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                p-5 rounded-xl
                bg-neutral-900
                border border-neutral-800
                transition-all duration-300
                hover:border-sky-500
                hover:-translate-y-1
                hover:shadow-lg
              "
            >
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 flex items-center justify-center rounded-lg bg-neutral-800 group-hover:bg-neutral-700 transition">
                  <FontAwesomeIcon
                    icon={link.icon}
                    className={`${link.color}`}
                  />
                </div>

                <span className="text-base font-medium text-gray-300 group-hover:text-white transition">
                  {link.label}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* ===== Bottom Line ===== */}
      <div className="border-t border-neutral-800">
        <p className="text-center text-xs text-gray-500 py-6">
          © {new Date().getFullYear()}{" "}
          <span className="font-bold text-sky-400">&lt;Abo Al Magd/&gt;</span>
          <span className="italic text-gray-600"> All rights reserved.</span>
        </p>
      </div>
    </footer>
  );
}
