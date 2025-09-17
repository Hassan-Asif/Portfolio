import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

export default function App() {
  return (
    <div className="relative bg-gradient-to-br from-gray-900 via-indigo-950 to-black text-white min-h-screen font-sans overflow-hidden">
      {/* Animated Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-1/3 w-72 h-72 bg-purple-600 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-indigo-500 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute top-1/2 left-10 w-60 h-60 bg-pink-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse"></div>
      </div>

      {/* Hero Section */}
      <header className="relative text-center py-32 px-6">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl md:text-7xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-500 bg-clip-text text-transparent"
        >
          👋 Hi, I'm Hassan
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-2xl text-indigo-300 mt-6"
        >
          React Developer • Django • UI/UX Enthusiast
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex justify-center gap-8 mt-8 text-4xl text-indigo-400"
        >
          <a
            href="https://github.com/Hassan-Asif"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-125 hover:text-indigo-200 transition transform"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/hassan-asif-3a0349260/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-125 hover:text-indigo-200 transition transform"
          >
            <FaLinkedin />
          </a>
        </motion.div>
      </header>

      {/* About Section */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold text-center mb-12 text-indigo-400">About Me</h2>
          <p className="text-gray-300 text-lg leading-relaxed text-center max-w-3xl mx-auto">
            I'm a passionate front-end developer with experience in React, Django, and Tailwind CSS.
            I thrive on crafting beautiful, responsive, and user-friendly interfaces. With a love for UI/UX
            design and prototyping in Figma, I aim to create digital experiences that are both functional and delightful.
          </p>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section className="py-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto px-6"
        >
          <h2 className="text-5xl font-bold text-center mb-12 text-indigo-400">Skills</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center">
            {["React", "Django", "Tailwind", "HTML/CSS", "Wix", "Figma", "Vue", "JavaScript"].map(
              (skill, i) => (
                <motion.div
                  key={skill}
                  whileHover={{ scale: 1.1 }}
                  className="bg-gray-800/60 p-5 rounded-xl shadow-lg text-indigo-200 hover:bg-indigo-800/70 transition"
                >
                  {skill}
                </motion.div>
              )
            )}
          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold text-center mb-12 text-indigo-400">Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                title: "✨ My Creative Space",
                tech: "React + Tailwind + Firebase",
                desc: "A sleek personal portfolio showcasing my journey as a developer.",
              },
              {
                title: "📝 Django Journal",
                tech: "Django + SQLite + Auth",
                desc: "A full-stack blogging platform with authentication and a custom post editor.",
              },
              {
                title: "🏡 Rentify Hub",
                tech: "React + Django + PostgreSQL",
                desc: "A modern renting platform where clients can browse, list, and manage rental properties.",
              },
              {
                title: "🛒 ShopSphere",
                tech: "React + Stripe + Django REST",
                desc: "A powerful e-commerce solution with secure payments and product management.",
              },
              {
                title: "💬 Connectify",
                tech: "React + WebRTC + Socket.IO",
                desc: "A real-time chatting and video calling application for seamless communication.",
              },
            ].map((project, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-xl hover:shadow-2xl transition"
              >
                <h3 className="text-2xl font-semibold text-indigo-300">{project.title}</h3>
                <p className="text-gray-400 mt-2 text-sm">{project.tech}</p>
                <p className="text-gray-300 mt-4 leading-relaxed">{project.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 text-sm text-gray-500 border-t border-indigo-500">
        &copy; {new Date().getFullYear()} Hassan Asif — All Rights Reserved.
      </footer>
    </div>
  );
}