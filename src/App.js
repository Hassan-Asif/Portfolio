
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaArrowRight,
  FaArrowUpRightFromSquare,
  FaCode,
  FaLaptopCode,
  FaLayerGroup,
  FaEnvelope,
  FaBars,
  FaXmark,
  FaReact,
  FaVuejs,
  FaPython,
} from "react-icons/fa6";

const profile = {
  name: "Hassan Asif",
  role: "Frontend & Full-Stack Developer",
  email: "your-email@example.com",
  github: "https://github.com/Hassan-Asif",
  linkedin: "https://www.linkedin.com/in/hassan-asif-3a0349260/",
};

const projects = [
  {
    number: "01",
    name: "NeonLEDs",
    category: "E-commerce",
    description:
      "A modern automotive accessories storefront built to make product discovery, vehicle compatibility, and order management simpler.",
    stack: ["Vue.js", "Tailwind CSS", "Firebase"],
    accent: "from-red-500/20 via-zinc-900 to-zinc-950",
    visual: "store",
    status: "Featured project",
    github: "",
    live: "",
  },
  {
    number: "02",
    name: "Wrap N Roll",
    category: "Business platform",
    description:
      "A product-focused packaging storefront with configurable product options, delivery calculations, checkout, and Firebase order management.",
    stack: ["Vue.js", "Firebase", "Tailwind CSS"],
    accent: "from-blue-500/20 via-zinc-900 to-zinc-950",
    visual: "orders",
    status: "Business solution",
    github: "",
    live: "",
  },
  {
    number: "03",
    name: "AqilLabs",
    category: "Automation & systems",
    description:
      "A business-focused approach to internal dashboards, inventory workflows, and tools that reduce repetitive manual work.",
    stack: ["React", "Python", "Firebase"],
    accent: "from-emerald-500/20 via-zinc-900 to-zinc-950",
    visual: "system",
    status: "Product concept",
    github: "",
    live: "",
  },
];

const skillGroups = [
  {
    title: "Frontend development",
    description: "Interfaces that feel intuitive and work across devices.",
    skills: ["React", "Vue.js", "JavaScript", "HTML & CSS", "Tailwind CSS"],
    icon: FaReact,
  },
  {
    title: "Backend development",
    description: "Application logic, data management, and integrations.",
    skills: ["Python", "Django", "Firebase", "Firestore", "REST APIs"],
    icon: FaPython,
  },
  {
    title: "Design & delivery",
    description: "From early ideas to polished, usable web experiences.",
    skills: ["Figma", "UI/UX", "Responsive design", "Git", "SEO"],
    icon: FaLayerGroup,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" },
  },
};

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mb-12 max-w-2xl">
      <p className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-blue-400">
        <span className="h-px w-8 bg-blue-400" />
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-5 max-w-xl text-base leading-7 text-zinc-400 sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}

function ProjectVisual({ type }) {
  if (type === "store") {
    return (
      <div className="relative flex h-full min-h-56 items-center justify-center overflow-hidden p-6 sm:min-h-64">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(239,68,68,0.14),transparent_65%)]" />
        <div className="relative w-full max-w-xs -rotate-2 rounded-xl border border-white/10 bg-zinc-950/90 p-4 shadow-2xl transition-transform duration-500 group-hover:rotate-0 group-hover:scale-[1.03]">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <span className="text-xs font-bold tracking-widest text-white">
              NEON<span className="text-red-400">LEDS</span>
            </span>
            <span className="text-[9px] text-zinc-500">AUTOMOTIVE</span>
          </div>
          <div className="grid grid-cols-2 gap-3 pt-4">
            <div className="rounded-lg border border-white/10 bg-zinc-900 p-3">
              <div className="mb-3 flex h-16 items-center justify-center rounded bg-red-500/10 text-3xl text-red-400">
                <FaCode />
              </div>
              <div className="h-1.5 w-3/4 rounded bg-zinc-600" />
              <div className="mt-2 h-1 w-1/2 rounded bg-zinc-800" />
            </div>
            <div className="rounded-lg border border-white/10 bg-zinc-900 p-3">
              <div className="mb-3 flex h-16 items-center justify-center rounded bg-zinc-800 text-3xl text-zinc-300">
                <FaLaptopCode />
              </div>
              <div className="h-1.5 w-3/4 rounded bg-zinc-600" />
              <div className="mt-2 h-1 w-1/2 rounded bg-zinc-800" />
            </div>
          </div>
          <div className="mt-3 rounded-md bg-red-500 px-3 py-2 text-center text-[10px] font-semibold tracking-wide text-white">
            EXPLORE PRODUCTS
          </div>
        </div>
      </div>
    );
  }

  if (type === "orders") {
    return (
      <div className="relative flex h-full min-h-56 items-center justify-center overflow-hidden p-6 sm:min-h-64">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.15),transparent_65%)]" />
        <div className="relative w-full max-w-xs rounded-xl border border-white/10 bg-zinc-950/95 p-4 shadow-2xl transition-transform duration-500 group-hover:scale-[1.03]">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[10px] uppercase tracking-widest text-zinc-500">
                Store dashboard
              </p>
              <p className="mt-1 text-sm font-semibold text-white">
                Order overview
              </p>
            </div>
            <span className="rounded-md border border-blue-400/20 bg-blue-400/10 px-2 py-1 text-[9px] text-blue-300">
              LIVE UI
            </span>
          </div>
          <div className="my-4 grid grid-cols-2 gap-3">
            <div className="rounded-lg border border-white/10 bg-zinc-900 p-3">
              <p className="text-[10px] text-zinc-500">Orders</p>
              <p className="mt-1 text-2xl font-semibold text-white">--</p>
            </div>
            <div className="rounded-lg border border-white/10 bg-zinc-900 p-3">
              <p className="text-[10px] text-zinc-500">Status</p>
              <p className="mt-2 text-xs font-medium text-blue-300">
                Order tracking
              </p>
            </div>
          </div>
          {["Order received", "Processing", "Ready for dispatch"].map(
            (item, index) => (
              <div
                key={item}
                className="flex items-center gap-3 border-t border-white/5 py-2.5"
              >
                <span
                  className={`h-2 w-2 rounded-full ${
                    index === 0 ? "bg-blue-400" : "bg-zinc-700"
                  }`}
                />
                <span className="text-xs text-zinc-300">{item}</span>
                <span className="ml-auto text-[9px] text-zinc-600">
                  0{index + 1}
                </span>
              </div>
            )
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="relative flex h-full min-h-56 items-center justify-center overflow-hidden p-6 sm:min-h-64">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.13),transparent_65%)]" />
      <div className="relative w-full max-w-xs rounded-xl border border-white/10 bg-zinc-950/95 p-5 shadow-2xl transition-transform duration-500 group-hover:scale-[1.03]">
        <div className="mb-5 flex items-center gap-2 border-b border-white/10 pb-3">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          <span className="text-xs text-zinc-300">workflow.config</span>
        </div>
        <div className="space-y-3 font-mono text-xs leading-relaxed">
          <p className="text-zinc-500">{"// Less manual work"}</p>
          <p>
            <span className="text-purple-300">const</span>{" "}
            <span className="text-emerald-300">workflow</span> = {"{"}
          </p>
          <p className="pl-4 text-zinc-300">
            tasks: <span className="text-amber-200">"automated"</span>,
          </p>
          <p className="pl-4 text-zinc-300">
            data: <span className="text-amber-200">"organized"</span>,
          </p>
          <p className="pl-4 text-zinc-300">
            process: <span className="text-amber-200">"simplified"</span>
          </p>
          <p>{"}"}</p>
        </div>
        <div className="mt-5 flex items-center gap-2 border-t border-white/10 pt-4">
          <FaLayerGroup className="text-emerald-400" />
          <span className="text-xs text-zinc-400">
            Systems built around real workflows
          </span>
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project }) {
  return (
    <motion.article
      variants={fadeUp}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.09] bg-[#101114] transition-colors duration-300 hover:border-white/20"
    >
      <div className={`relative overflow-hidden bg-gradient-to-br ${project.accent}`}>
        <div className="absolute left-5 top-5 z-10 rounded-full border border-white/10 bg-black/30 px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-zinc-300 backdrop-blur">
          {project.status}
        </div>
        <ProjectVisual type={project.visual} />
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <div className="mb-3 flex items-center justify-between gap-3">
          <span className="text-xs font-medium uppercase tracking-[0.15em] text-blue-400">
            {project.category}
          </span>
          <span className="font-mono text-xs text-zinc-600">
            {project.number}
          </span>
        </div>

        <h3 className="text-xl font-semibold tracking-tight text-white transition-colors group-hover:text-blue-300 sm:text-2xl">
          {project.name}
        </h3>

        <p className="mt-3 flex-1 text-sm leading-7 text-zinc-400">
          {project.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-white/[0.08] bg-white/[0.03] px-2.5 py-1.5 text-[11px] text-zinc-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {(project.live || project.github) && (
          <div className="mt-6 flex gap-4 border-t border-white/[0.08] pt-5">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-white transition-colors hover:text-blue-300"
              >
                Live preview <FaArrowUpRightFromSquare size={12} />
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-zinc-400 transition-colors hover:text-white"
              >
                <FaGithub size={14} /> Source code
              </a>
            )}
          </div>
        )}
      </div>
    </motion.article>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#09090b] font-sans text-white selection:bg-blue-500/30 selection:text-white">
      {/* Background */}
      <div className="pointer-events-none fixed inset-0 -z-0 overflow-hidden">
        <div className="absolute -top-48 left-1/2 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-blue-500/[0.07] blur-[130px]" />
        <div className="absolute right-[-200px] top-[950px] h-[400px] w-[400px] rounded-full bg-indigo-500/[0.05] blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:linear-gradient(to_bottom,black,transparent_75%)]" />
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-white/[0.07] bg-[#09090b]/85 backdrop-blur-xl">
        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
          <a
            href="#home"
            onClick={closeMenu}
            className="group flex items-center gap-3"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.05] font-mono text-sm font-bold text-white transition-colors group-hover:border-blue-400/50">
              H.
            </span>
            <span className="text-sm font-semibold tracking-tight text-white">
              Hassan Asif
              <span className="ml-2 hidden font-normal text-zinc-500 sm:inline">
                / Developer
              </span>
            </span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-zinc-400 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/[0.05] px-4 py-2.5 text-sm font-medium text-white transition-all hover:border-blue-400/50 hover:bg-blue-400/10"
            >
              Let's talk <FaArrowUpRightFromSquare size={11} />
            </a>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-zinc-300 md:hidden"
          >
            {menuOpen ? <FaXmark size={18} /> : <FaBars size={18} />}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-white/[0.07] bg-[#09090b] px-5 py-4 md:hidden">
            <div className="mx-auto flex max-w-7xl flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={closeMenu}
                  className="rounded-lg px-3 py-3 text-sm text-zinc-300 transition-colors hover:bg-white/5 hover:text-white"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={`mailto:${profile.email}`}
                onClick={closeMenu}
                className="mt-2 rounded-lg bg-blue-500 px-3 py-3 text-center text-sm font-medium text-white"
              >
                Get in touch
              </a>
            </div>
          </div>
        )}
      </nav>

      <main className="relative z-10">
        {/* Hero */}
        <section
          id="home"
          className="mx-auto grid max-w-7xl items-center gap-14 px-5 pb-24 pt-20 sm:px-8 sm:pb-32 sm:pt-28 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:px-12 lg:pb-36 lg:pt-32"
        >
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.12 },
              },
            }}
          >
            <motion.div
              variants={fadeUp}
              className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.035] px-3.5 py-2"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-40" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              <span className="text-xs font-medium tracking-wide text-zinc-300">
                Developer · Building for the web
              </span>
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="mb-5 text-sm font-medium uppercase tracking-[0.24em] text-zinc-500"
            >
              Hello, I'm Hassan Asif
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="max-w-3xl text-[clamp(3.2rem,8vw,6.3rem)] font-semibold leading-[0.98] tracking-[-0.065em] text-white"
            >
              I build digital
              <span className="mt-2 block bg-gradient-to-r from-blue-300 via-blue-400 to-indigo-400 bg-clip-text pb-2 text-transparent">
                experiences.
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-7 max-w-xl text-base leading-8 text-zinc-400 sm:text-lg"
            >
              I'm a developer focused on building thoughtful interfaces,
              full-stack web applications, and practical digital solutions
              that solve real problems.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-9 flex flex-col gap-3 sm:flex-row"
            >
              <a
                href="#projects"
                className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-zinc-950 transition-all hover:bg-blue-100"
              >
                Explore my work
                <FaArrowRight className="transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex min-h-12 items-center justify-center gap-3 rounded-lg border border-white/10 bg-white/[0.035] px-6 py-3 text-sm font-medium text-white transition-all hover:border-white/25 hover:bg-white/[0.07]"
              >
                <FaEnvelope />
                Get in touch
              </a>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-10 flex items-center gap-5"
            >
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="flex items-center gap-2 text-sm text-zinc-500 transition-colors hover:text-white"
              >
                <FaGithub size={19} /> GitHub
              </a>
              <span className="h-4 w-px bg-white/10" />
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="flex items-center gap-2 text-sm text-zinc-500 transition-colors hover:text-white"
              >
                <FaLinkedin size={19} /> LinkedIn
              </a>
            </motion.div>
          </motion.div>

          {/* Code-inspired visual */}
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.85, delay: 0.25 }}
            className="relative mx-auto w-full max-w-lg"
          >
            <div className="absolute -inset-5 rounded-[2rem] bg-blue-500/[0.06] blur-2xl" />
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#101114] shadow-2xl shadow-black/30">
              <div className="flex h-12 items-center justify-between border-b border-white/[0.07] px-4 sm:px-5">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                </div>
                <span className="font-mono text-[10px] text-zinc-500">
                  developer.js
                </span>
                <FaCode className="text-zinc-600" size={13} />
              </div>

              <div className="overflow-x-auto p-5 font-mono text-xs leading-7 sm:p-7 sm:text-sm sm:leading-8">
                <div className="mb-4 text-zinc-600">
                  {"// A little about how I work"}
                </div>
                <p>
                  <span className="text-purple-300">const</span>{" "}
                  <span className="text-blue-300">developer</span> = {"{"}
                </p>
                <p className="pl-4 sm:pl-6">
                  <span className="text-zinc-300">name:</span>{" "}
                  <span className="text-emerald-300">"Hassan Asif"</span>,
                </p>
                <p className="pl-4 sm:pl-6">
                  <span className="text-zinc-300">focus:</span>{" "}
                  <span className="text-emerald-300">"Web development"</span>,
                </p>
                <p className="pl-4 sm:pl-6">
                  <span className="text-zinc-300">frontend:</span> [
                </p>
                <p className="pl-8 sm:pl-12 text-amber-200">
                  "React", "Vue.js", "JavaScript"
                </p>
                <p className="pl-4 sm:pl-6">
                  <span className="text-zinc-300">]</span>,
                </p>
                <p className="pl-4 sm:pl-6">
                  <span className="text-zinc-300">backend:</span> [
                </p>
                <p className="pl-8 sm:pl-12 text-amber-200">
                  "Python", "Django", "Firebase"
                </p>
                <p className="pl-4 sm:pl-6">
                  <span className="text-zinc-300">]</span>,
                </p>
                <p className="pl-4 sm:pl-6">
                  <span className="text-zinc-300">mindset:</span>{" "}
                  <span className="text-emerald-300">"Keep building"</span>
                </p>
                <p>{"};"}</p>
                <p className="mt-5 text-zinc-500">
                  <span className="text-purple-300">export default</span>{" "}
                  developer;
                  <span className="ml-1 inline-block h-4 w-1 animate-pulse bg-blue-400 align-middle" />
                </p>
              </div>

              <div className="flex items-center justify-between gap-3 border-t border-white/[0.07] px-5 py-4">
                <span className="text-[10px] tracking-wide text-zinc-500 sm:text-xs">
                  DESIGNED WITH INTENTION
                </span>
                <span className="flex items-center gap-2 text-[10px] text-zinc-400 sm:text-xs">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                  Open to opportunities
                </span>
              </div>
            </div>
            <div className="absolute -bottom-5 -left-3 hidden rounded-xl border border-white/10 bg-[#15161a] px-4 py-3 shadow-xl sm:block md:-left-6">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-500/10 text-blue-300">
                  <FaLaptopCode size={17} />
                </div>
                <div>
                  <p className="text-xs font-medium text-white">
                    Thoughtful development
                  </p>
                  <p className="mt-1 text-[10px] text-zinc-500">
                    Design · Code · Refine
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Capabilities strip */}
        <section className="border-y border-white/[0.07] bg-white/[0.015]">
          <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-white/[0.07] px-5 sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:px-8 lg:px-12">
            {[
              {
                icon: FaReact,
                title: "Frontend",
                text: "Modern, responsive interfaces",
              },
              {
                icon: FaLayerGroup,
                title: "Full-stack",
                text: "Connected application experiences",
              },
              {
                icon: FaCode,
                title: "Problem solving",
                text: "Practical solutions for real needs",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex items-center gap-4 py-5 sm:px-6 sm:py-7 lg:px-9"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.035] text-blue-300">
                  <item.icon size={18} />
                </div>
                <div>
                  <p className="text-sm font-medium text-white">{item.title}</p>
                  <p className="mt-1 text-xs leading-5 text-zinc-500">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* About */}
        <section
          id="about"
          className="mx-auto max-w-7xl scroll-mt-24 px-5 py-24 sm:px-8 sm:py-28 lg:px-12 lg:py-32"
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20"
          >
            <div>
              <SectionHeading eyebrow="A little about me" title="The person behind the code." />
            </div>

            <div className="space-y-6 text-base leading-8 text-zinc-400 sm:text-lg">
              <p>
                I enjoy turning ideas into useful digital products. My work
                combines frontend development, backend fundamentals, and an
                interest in thoughtful UI/UX design.
              </p>
              <p>
                From storefronts and business websites to data-driven
                applications, I focus on building experiences that are clear,
                responsive, and straightforward to use.
              </p>
              <p>
                I'm continually learning, refining my process, and looking for
                opportunities to work on meaningful projects with people who
                care about the details.
              </p>

              <div className="grid gap-4 border-t border-white/[0.08] pt-7 sm:grid-cols-2">
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-zinc-600">
                    Based in
                  </p>
                  <p className="mt-2 text-sm font-medium text-zinc-200">
                    Karachi, Pakistan
                  </p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-zinc-600">
                    Main focus
                  </p>
                  <p className="mt-2 text-sm font-medium text-zinc-200">
                    Web development & UI/UX
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Skills */}
        <section
          id="skills"
          className="scroll-mt-24 border-y border-white/[0.07] bg-white/[0.015] py-24 sm:py-28 lg:py-32"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={fadeUp}
            >
              <SectionHeading
                eyebrow="Tools of the trade"
                title="Skills & technologies."
                description="A practical toolkit for designing, building, and improving modern web applications."
              />
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.12 },
                },
              }}
              className="grid gap-5 md:grid-cols-3"
            >
              {skillGroups.map((group, index) => (
                <motion.article
                  key={group.title}
                  variants={fadeUp}
                  className="rounded-2xl border border-white/[0.08] bg-[#101114] p-6 transition-colors hover:border-white/20 sm:p-7"
                >
                  <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-xl border border-blue-400/15 bg-blue-400/[0.08] text-blue-300">
                    <group.icon size={19} />
                  </div>
                  <p className="mb-2 font-mono text-xs text-zinc-600">
                    0{index + 1} / 03
                  </p>
                  <h3 className="text-lg font-semibold text-white">
                    {group.title}
                  </h3>
                  <p className="mt-3 min-h-[48px] text-sm leading-6 text-zinc-500">
                    {group.description}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-md border border-white/[0.07] bg-white/[0.025] px-2.5 py-2 text-xs text-zinc-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Projects */}
        <section
          id="projects"
          className="mx-auto max-w-7xl scroll-mt-24 px-5 py-24 sm:px-8 sm:py-28 lg:px-12 lg:py-32"
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={fadeUp}
          >
            <SectionHeading
              eyebrow="Selected work"
              title="Projects with purpose."
              description="A selection of web development and product concepts focused on practical functionality, clean interfaces, and real-world workflows."
            />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.08 }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.14 },
              },
            }}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {projects.map((project) => (
              <ProjectCard key={project.number} project={project} />
            ))}
          </motion.div>

          <div className="mt-10 flex flex-col items-start justify-between gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 sm:flex-row sm:items-center sm:p-8">
            <div>
              <p className="font-medium text-white">
                Interested in the code behind my work?
              </p>
              <p className="mt-2 text-sm leading-6 text-zinc-500">
                Visit my GitHub for repositories and development experiments.
              </p>
            </div>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-2 rounded-lg border border-white/10 px-4 py-3 text-sm font-medium text-white transition-colors hover:border-white/25 hover:bg-white/5"
            >
              <FaGithub size={16} /> Visit GitHub
              <FaArrowUpRightFromSquare size={11} />
            </a>
          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="scroll-mt-24 border-t border-white/[0.07] bg-white/[0.015] px-5 py-24 sm:px-8 sm:py-28 lg:px-12 lg:py-32"
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="mx-auto max-w-4xl text-center"
          >
            <p className="mb-5 flex items-center justify-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-blue-400">
              <span className="h-px w-8 bg-blue-400" />
              What's next?
              <span className="h-px w-8 bg-blue-400" />
            </p>

            <h2 className="text-4xl font-semibold tracking-[-0.045em] text-white sm:text-5xl md:text-6xl">
              Have a project in mind?
              <span className="mt-2 block text-zinc-500">
                Let's make it happen.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-zinc-400">
              Have an idea, a project, or an opportunity to discuss? I'd love
              to hear what you're working on.
            </p>

            <a
              href={`mailto:${profile.email}`}
              className="group mt-9 inline-flex min-h-12 items-center justify-center gap-3 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-zinc-950 transition-all hover:bg-blue-100"
            >
              <FaEnvelope />
              Start a conversation
              <FaArrowRight className="transition-transform group-hover:translate-x-1" />
            </a>

            <p className="mt-5 text-xs text-zinc-600">
              Prefer social? Connect with me on{" "}
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 underline underline-offset-4 transition-colors hover:text-white"
              >
                LinkedIn
              </a>
              .
            </p>
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/[0.07]">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-7 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
          <a href="#home" className="text-sm font-semibold text-zinc-300">
            Hassan Asif<span className="text-blue-400">.</span>
          </a>

          <p className="text-xs text-zinc-600">
            © {new Date().getFullYear()} Hassan Asif. Built with care.
          </p>

          <div className="flex items-center gap-4">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-zinc-500 transition-colors hover:text-white"
            >
              <FaGithub size={17} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-zinc-500 transition-colors hover:text-white"
            >
              <FaLinkedin size={17} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
