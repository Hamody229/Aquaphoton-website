import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import ProjectsPage from "./components/Projects";
import Technologies from "./components/Technologies";
import Bootcamps from "./components/Bootcamps";
import Team from "./components/Team";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import SideNav from "./components/SideNav";

const sectionVariant = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
  },
};

const Home = () => {
  const sections = [
    { Component: About, id: "about" },
    { Component: Experience, id: "experience" },
    { Component: Technologies, id: "technologies" },
    { Component: FAQ, id: "faq" },
    { Component: Contact, id: "contact" },
  ];

  return (
    <>
      <SideNav />
      <div id="home">
        <Hero />
      </div>

      {sections.map(({ Component, id }, index) => (
        <motion.div
          key={index}
          id={id}
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1, margin: "-100px" }}
          className="w-full"
        >
          <Component />
        </motion.div>
      ))}
    </>
  );
};

export default function App() {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      const element = document.getElementById(id);

      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash, key]);

  return (
    <div className="bg-ocean-900 min-h-screen text-white selection:bg-blue-500/30 selection:text-white relative font-sans overflow-x-hidden">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/team" element={<Team />} />
        <Route path="/sessions" element={<Bootcamps />} />
      </Routes>

      <footer className="py-10 text-center border-t border-white/5 opacity-40 text-[10px] md:text-xs font-mono uppercase tracking-[0.4em] px-4 bg-black/20">
        Aquaphoton Academy &copy; 2026
      </footer>
    </div>
  );
}
