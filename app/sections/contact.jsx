"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  faEnvelope,
  faPhone,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import {
  faWhatsapp,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (res.ok) {
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } else {
      setStatus("error");
    }

    setLoading(false);
  };

  return (
    <section
      id="contact"
      className="min-h-screen py-20 px-6 lg:px-24 bg-linear-to-b from-transparent to-gray-900/30"
    >
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-black italic tracking-tight">
          CONTACT<span className="text-rose-500">.</span>
          <br />
          <span className="text-gray-500 text-2xl">
            Let&apos;s Work Together
          </span>
        </h1>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="space-y-8"
        >
          <div className="bg-gray-900/40 backdrop-blur-sm p-6 rounded-2xl border border-gray-700 shadow-lg">
            <h3 className="text-xl font-bold text-rose-500 mb-6">
              Contact Info
            </h3>

            <div className="space-y-4 text-gray-300">
              <p>
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="text-sky-500 mr-3"
                />
                abo.al.magd.404@gmail.com
              </p>

              <p>
                <FontAwesomeIcon
                  icon={faPhone}
                  className="text-green-500 mr-3"
                />
                +20 109 555 4022
              </p>

              <p>
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  className="text-green-500 mr-3"
                />
                <a
                  href="https://wa.me/201095554022"
                  target="_blank"
                  className="hover:text-green-400 transition"
                >
                  WhatsApp Direct
                </a>
              </p>
            </div>

            {/* Social */}
            <div className="flex gap-4 mt-6">
              <Link
                href="https://github.com/abo-al-magd-404"
                target="_blank"
                className="flex items-center justify-center w-12 h-12 rounded-xl bg-gray-800 hover:bg-sky-500 transition-all duration-300 hover:-translate-y-1"
              >
                <FontAwesomeIcon icon={faGithub} className="text-lg" />
              </Link>

              <Link
                href="https://www.linkedin.com/in/mohamed-mahmoud-9082673b2"
                target="_blank"
                className="flex items-center justify-center w-12 h-12 rounded-xl bg-gray-800 hover:bg-rose-500 transition-all duration-300 hover:-translate-y-1"
              >
                <FontAwesomeIcon icon={faLinkedin} className="text-lg" />
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Right Side - Form */}
        <motion.form
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          onSubmit={handleSubmit}
          className="bg-gray-900/40 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 shadow-lg space-y-6"
        >
          <h3 className="text-xl font-bold text-sky-500">Send Me A Message</h3>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 focus:border-sky-500 outline-none"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 focus:border-sky-500 outline-none"
          />

          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 focus:border-sky-500 outline-none"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 bg-rose-500 hover:bg-rose-600 text-white py-3 rounded-xl font-semibold transition-all duration-300 hover:-translate-y-1 active:scale-95 disabled:opacity-50"
          >
            <FontAwesomeIcon icon={faPaperPlane} />
            {loading ? "Sending..." : "Send Message"}
          </button>

          {status === "success" && (
            <p className="text-green-500 text-sm">Message sent successfully!</p>
          )}

          {status === "error" && (
            <p className="text-red-500 text-sm">
              Something went wrong. Try again.
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
}
