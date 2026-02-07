import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    year: "2025",
    company: "Aquaphoton",
    icon: "/ap.png",
    achievements: [
      "Third place in MATE ROV Regional Competition.",
      "First place in UMVC Competition.",
      "Best Marketing Display in MATE ROV Regional Competition.",
      "Best Innovative Solution in MATE ROV Regional Competition.",
    ],
  },
  {
    year: "2024",
    company: "Aquaphoton",
    icon: "/ap.png",
    achievements: [
      "Fifth Place in 2024 NOAA Ocean Exploration Video International Challenge",
      "Sixth place in MATE ROV International competition.",
      "Second place in MATE ROV competition.",
      "Best technical report, presentation, and innovative solution.",
      "Best pilot in MATE ROV competition.",
      "Best marketing display in MATE ROV competition.",
    ],
  },
  {
    year: "2023",
    company: "Aquaphoton",
    icon: "/ap.png",
    achievements: [
      "Fifth place in MATE ROV international competition.",
      "First place in MATE ROV regional competition.",
      "Best Pilot in 2023 MATE ROV regional competition",
      "Best Programming and Image Processing in 2023 MATE ROV regional competition",
      "Best technical report, pilot and software solution.",
      "Third place in Underwater Robotics Challenges (UWRC) Egypt.",
    ],
  },
  {
    year: "2022",
    company: "Aquaphoton",
    icon: "/ap.png",
    achievements: [
      "Best technical report and marketing display in MATE ROV regional competition.",
      "Best Marketing display in 2022 MATE ROV regional competition",
    ],
  },
];

const ExperienceCard = ({ exp, index }) => (
  <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group mb-12">
    <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-blue-500 bg-ocean-900 z-10 shadow-[0_0_15px_rgba(59,130,246,0.5)] md:absolute md:left-1/2 md:-translate-x-1/2">
      <img
        src={exp.icon}
        alt="icon"
        className="w-6 h-6 object-contain opacity-80"
      />
    </div>

    {/* Content Card */}
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, ease: "easeOut", delay: index * 0.2 }}
      className="w-[calc(100%-4rem)] md:w-[45%] bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-2xl hover:border-blue-500/40 transition-all shadow-xl"
    >
      <span className="text-blue-500 font-black text-2xl block mb-1">
        {exp.year}
      </span>
      <p className="text-gray-400 font-mono text-sm mb-4 uppercase tracking-widest">
        {exp.company}
      </p>

      <ul className="space-y-2">
        {exp.achievements.map((item, i) => (
          <li key={i} className="text-gray-200 text-sm flex items-start">
            <span className="text-blue-500 mr-2">•</span>
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  </div>
);
export default function Experience() {
  return (
    <section
      id="experience"
      className="py-32 px-10 bg-ocean-900 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto relative">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="text-6xl font-black mb-24 uppercase italic text-center"
        >
          Our <span className="text-blue-600">Titles</span>
        </motion.h2>

        <div className="absolute left-5 md:left-1/2 top-40 bottom-0 w-[2px] bg-gradient-to-b from-blue-600 via-blue-900/20 via-[90%] to-transparent md:-translate-x-1/2" />

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} exp={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
