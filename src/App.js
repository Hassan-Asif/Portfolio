import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function App() {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-indigo-900 to-black text-white min-h-screen font-sans">
      {/* Header Section */}
      <header className="text-center py-20 px-4">
        <h1 className="text-6xl font-extrabold tracking-tight animate-pulse">👋 Hi, I'm Hassan</h1>
        <p className="text-xl text-indigo-300 mt-4">React Developer • Django • UI/UX Enthusiast</p>
        <div className="flex justify-center gap-6 mt-6 text-3xl text-indigo-400">
          <a
            href="https://github.com/Hassan-Asif"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-200 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/hassan-asif-3a0349260/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-200 transition"
          >
            <FaLinkedin />
          </a>
        </div>
      </header>

      {/* Content Section */}
      <section className="max-w-6xl mx-auto px-6 space-y-24">
        {/* About */}
        <div className="fade-in-section">
          <h2 className="text-4xl font-bold text-indigo-400 border-b border-indigo-500 pb-2 mb-6">About Me</h2>
          <p className="text-gray-300 leading-relaxed text-lg">
            I'm a passionate front-end developer with experience in building responsive websites using React, Django, and Tailwind CSS.
            I love UI/UX design, prototyping in Figma, and creating seamless user experiences. I strive to bridge the gap between design
            and development to build products that delight users.
          </p>
        </div>

        {/* Skills */}
        <div className="fade-in-section">
          <h2 className="text-4xl font-bold text-indigo-400 border-b border-indigo-500 pb-2 mb-6">Skills</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-center text-indigo-200">
            {["React", "Django", "Tailwind", "HTML/CSS", "Wix", "Figma", "Firebase", "JavaScript"].map((skill) => (
              <div
                key={skill}
                className="bg-gray-800 p-3 rounded-lg shadow hover:bg-indigo-800 transition"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>

        {/* Projects */}
        <div className="fade-in-section">
          <h2 className="text-4xl font-bold text-indigo-400 border-b border-indigo-500 pb-2 mb-6">Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                desc: "A modern renting website where clients can browse, list, and manage rental properties.",
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
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg transition hover:scale-105 hover:shadow-2xl"
              >
                <h3 className="text-2xl font-semibold text-indigo-300">{project.title}</h3>
                <p className="text-gray-400 mt-1 text-sm">{project.tech}</p>
                <p className="text-gray-300 mt-3 leading-relaxed">{project.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center pt-20 pb-8 text-sm text-gray-500 border-t border-indigo-500 mt-20">
        &copy; {new Date().getFullYear()} Hassan Asif — All Rights Reserved.
      </footer>
    </div>
  );
}
