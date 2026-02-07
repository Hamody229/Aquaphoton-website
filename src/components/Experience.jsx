import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    year: "2025",
    company: "Aquaphoton",
    icon: "/ap.png",
    rovImage: "/ROVS/rov25.png",
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
    rovImage: "/ROVS/rov24.png",
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
    rovImage: "/ROVS/rov23.png",
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
    rovImage: "/ROVS/rov22.png",
    achievements: [
      "Best technical report and marketing display in MATE ROV regional competition.",
      "Best Marketing display in 2022 MATE ROV regional competition",
    ],
  },
  {
    year: "2021",
    company: "Aquaphoton",
    icon: "/ap.png",
    rovImage: "/ROVS/rov21.png",
    achievements: [
      "Fifth place in MATE ROV international competition",
      "Second Place in 2021 MATE ROV regional competition",
      "Best technical report in 2021 MATE ROV regional competition.",
    ],
  },
];

const ExperienceCard = ({ exp, index, isMobile }) => {
  const cardAnim = isMobile
    ? { 
        initial: { opacity: 0 },
        whileInView: { opacity: 1 },
        viewport: { once: true, margin: "-50px" },
        transition: { duration: 0.5, delay: index * 0.1 } 
      } 
    : {
        initial: { opacity: 0, x: index % 2 === 0 ? 30 : -30 },
        whileInView: { opacity: 1, x: 0 },
        viewport: { once: true, margin: "-80px" },
        transition: { duration: 0.6, ease: "easeOut", delay: index * 0.15 }
      };

  const badgeAnim = isMobile
    ? {}
    : {
        initial: { scale: 0.8, opacity: 0 },
        whileInView: { scale: 1, opacity: 1 },
        viewport: { once: true },
        transition: { duration: 0.4, delay: index * 0.15 + 0.1 }
      };

  return (
    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group mb-12">
      <motion.div 
        {...(isMobile ? {} : badgeAnim)}
        className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-blue-500 bg-ocean-900 z-10 shadow-[0_0_15px_rgba(59,130,246,0.5)] md:absolute md:left-1/2 md:-translate-x-1/2"
      >
        <img
          src={exp.icon}
          alt="icon"
          className="w-6 h-6 object-contain opacity-80"
          loading="lazy"
        />
      </motion.div>

      {/* Content Card */}
      <motion.div
        {...cardAnim}
        className="w-[calc(100%-4rem)] md:w-[45%] bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-2xl hover:border-blue-500/40 transition-all shadow-xl overflow-hidden"
      >
        <div className="flex justify-between items-start mb-4">
          <div>
            <span className="text-blue-500 font-black text-2xl block mb-1">
              {exp.year}
            </span>
            <p className="text-gray-400 font-mono text-sm uppercase tracking-widest">
              {exp.company}
            </p>
          </div>
        </div>
        
        {exp.rovImage && (
          <motion.div 
            initial={isMobile ? {} : { opacity: 0, scale: 0.95 }}
            whileInView={isMobile ? {} : { opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 + 0.2 }}
            className="w-full h-56 mb-5 rounded-xl overflow-hidden border border-blue-500/30 relative group/image shadow-[inset_0_0_30px_rgba(0,10,40,0.7)] bg-[#0a1124]"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(3,7,18,0.8)_100%)] z-10 pointer-events-none mix-blend-hard-light" />
            <div className="absolute inset-0 bg-blue-900/10 z-10 pointer-events-none mix-blend-overlay" />

            <img
              src={exp.rovImage}
              alt={`ROV ${exp.year}`}
              className="w-full h-full object-contain object-center transform group-hover/image:scale-105 group-hover/image:brightness-110 transition-all duration-700 ease-in-out"
              loading="lazy"
            />
          </motion.div>
        )}

        <ul className="space-y-2">
          {exp.achievements.map((item, i) => (
            <motion.li 
              key={i}
              initial={isMobile ? {} : { opacity: 0, x: -10 }}
              whileInView={isMobile ? {} : { opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.15 + 0.3 + (i * 0.05) }}
              className="text-gray-200 text-sm flex items-start"
            >
              <span className="text-blue-500 mr-2 shrink-0">•</span>
              <span>{item}</span>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

export default function Experience() {
  const [isMobile, setIsMobile] = useState(() => 
    typeof window !== "undefined" ? window.innerWidth < 768 : true
  );

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const titleAnim = isMobile
    ? { 
        initial: { opacity: 0 },
        whileInView: { opacity: 1 },
        viewport: { once: true },
        transition: { duration: 0.6 }
      } 
    : {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.8 }
      };

  const lineAnim = isMobile
    ? {}
    : {
        initial: { scaleY: 0 },
        whileInView: { scaleY: 1 },
        viewport: { once: true },
        transition: { duration: 1.2, ease: "easeOut" }
      };

  return (
    <section
      id="experience"
      className="py-32 px-10 bg-ocean-900 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto relative">
        <motion.h2
          {...titleAnim}
          className="text-6xl font-black mb-24 uppercase italic text-center text-white"
        >
          Our <span className="text-blue-600">Titles</span>
        </motion.h2>

        <motion.div 
          {...lineAnim}
          style={isMobile ? {} : { transformOrigin: "top" }}
          className="absolute left-5 md:left-1/2 top-40 bottom-0 w-[2px] bg-gradient-to-b from-blue-600 via-blue-900/20 via-[90%] to-transparent md:-translate-x-1/2" 
        />

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <ExperienceCard 
                key={index} 
                exp={exp} 
                index={index} 
                isMobile={isMobile} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}