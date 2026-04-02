"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  faEnvelope,
  faPhone,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"success" | "error" | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-center py-20 px-6 md:px-12 lg:px-24 text-white bg-transparent relative overflow-hidden"
    >
      {/* Header Area */}
      <div className="max-w-7xl mx-auto w-full mb-16 flex flex-col md:flex-row md:items-end justify-between border-b border-white/5 pb-8 gap-4 relative z-20">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.85] uppercase">
            Get In <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-rose-500 via-rose-400 to-rose-600 italic">
              Touch
            </span>
          </h1>
        </motion.div>

        <div className="text-left md:text-right">
          <p className="text-gray-500 font-mono text-[10px] md:text-xs uppercase tracking-[0.3em]">
            Available for new projects / 2026
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start relative z-20">
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div className="space-y-6">
            <h3 className="text-sky-500 font-mono tracking-[0.2em] uppercase text-xs font-bold">
              / Contact Details
            </h3>

            <div className="space-y-8">
              <div className="group flex items-center gap-6">
                <div className="shrink-0 w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full border border-white/10 group-hover:border-sky-500/50 transition-colors">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="text-gray-400 group-hover:text-sky-500 transition-colors"
                  />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">
                    Email Me
                  </p>
                  <p className="text-base md:text-lg font-medium break-all">
                    abo.al.magd.404@gmail.com
                  </p>
                </div>
              </div>

              <div className="group flex items-center gap-6">
                <div className="shrink-0 w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full border border-white/10 group-hover:border-green-500/50 transition-colors">
                  <FontAwesomeIcon
                    icon={faWhatsapp}
                    className="text-gray-400 group-hover:text-green-500 transition-colors"
                  />
                </div>
                <div>
                  <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">
                    Text Me
                  </p>
                  <a
                    href="https://wa.me/201095554022"
                    target="_blank"
                    className="text-base md:text-lg font-medium hover:text-green-500 transition-colors"
                  >
                    +20 109 555 4022
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-rose-500 font-mono tracking-[0.2em] uppercase text-xs font-bold">
              / Social Profiles
            </h3>
            <div className="flex gap-4">
              <a
                href="https://github.com/abo-al-magd-404"
                target="_blank"
                className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all duration-300 active:scale-95"
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  className="text-xl md:text-2xl"
                />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                required
                placeholder="NAME"
                value={form.name}
                onChange={handleChange}
                className="w-full p-4 md:p-5 bg-white/5 border border-white/10 focus:border-rose-500/50 outline-none transition-colors rounded-xl font-mono text-sm uppercase tracking-widest"
              />
              <input
                type="email"
                name="email"
                required
                placeholder="EMAIL"
                value={form.email}
                onChange={handleChange}
                className="w-full p-4 md:p-5 bg-white/5 border border-white/10 focus:border-rose-500/50 outline-none transition-colors rounded-xl font-mono text-sm uppercase tracking-widest"
              />
            </div>
            <textarea
              name="message"
              required
              rows={6}
              placeholder="YOUR MESSAGE"
              value={form.message}
              onChange={handleChange}
              className="w-full p-4 md:p-5 bg-white/5 border border-white/10 focus:border-rose-500/50 outline-none transition-colors rounded-xl font-mono text-sm uppercase tracking-widest resize-none"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-4 bg-white text-black hover:bg-rose-500 hover:text-white py-4 md:py-5 rounded-xl font-black uppercase tracking-[0.2em] text-sm transition-all duration-500 active:scale-[0.98] disabled:opacity-50"
            >
              <FontAwesomeIcon icon={faPaperPlane} className="text-xs" />
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </motion.div>
      </div>

      {/* FIXED: Decorative Background "CONTACT" Visibility */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center z-0">
        <h2
          className="text-[20vw] md:text-[22vw] font-black select-none opacity-[0.04] leading-none 
          rotate-90 md:rotate-0 whitespace-nowrap tracking-tighter"
        >
          CONTACT
        </h2>
      </div>
    </section>
  );
}
