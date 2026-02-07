import React from "react";
import { motion } from "framer-motion";
import { Cpu, Terminal, PenTool, Layers, Zap, Database } from "lucide-react";

const technologies = [
  {
    id: 1,
    title: "Embedded Systems",
    icon: <Cpu size={32} />,
    description: "The brain and nervous system of our ROVs.",
    skills: [
      "Microcontrollers (STM32, ESP32)",
      "Sensors (IMU, Depth, Pressure)",
      "Power Distribution Systems",
      "Motor Drivers (ESCs)",
      "Communication Protocols (I2C, UART)",
      "Wiring & Harnessing",
    ],
  },
  {
    id: 2,
    title: "Software & AI",
    icon: <Terminal size={32} />,
    description: "Breathing life into machines with intelligent code.",
    skills: [
      "ROS / ROS2 (Robot Operating System)",
      "Version Control (Git/GitHub)",
      "Embedded C / C++",
      "Python Scripting",
      "Computer Vision (OpenCV)",
      "Control Algorithms (PID)",
      "Autonomous Navigation",
    ],
  },
  {
    id: 3,
    title: "Hardware Design",
    icon: <PenTool size={32} />,
    description: "Ensuring reliability through precision electronics.",
    skills: [
      "PCB Design (Altium)",
      "Circuit Simulation",
      "System Integration",
      "Signal Integrity",
      "Testing & Debugging",
      "PCB Fabrication",
    ],
  },
  {
    id: 4,
    title: "Mechanical Structure",
    icon: <Layers size={32} />,
    description: "Robust engineering to withstand deep-sea pressure.",
    skills: [
      "SolidWorks",
      "Ansys",
      "ROV forces",
      "Bouyancy",
      "Static Sealing",
      "Dynamic Sealing",
      "Manipulators",
      "Hydrodynamics",
    ],
  },
];

export default function Technologies() {
  return (
    <section
      id="technologies"
      className="py-32 px-6 bg-ocean-900 relative overflow-hidden"
    >
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-900/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* --- Header --- */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <div className="h-[1px] w-12 bg-blue-500"></div>
            <span className="text-blue-400 font-mono text-xs tracking-[0.4em] uppercase">
              Tech Stack
            </span>
            <div className="h-[1px] w-12 bg-blue-500"></div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-black uppercase tracking-tighter italic text-white"
          >
            Technologies <span className="text-blue-600">& Tools</span>
          </motion.h2>
        </div>

        {/* --- Grid Cards --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative p-6 rounded-[2rem] border border-white/5 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors duration-500 flex flex-col"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 via-blue-600/0 to-blue-600/5 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="w-14 h-14 rounded-2xl bg-blue-600/20 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                {tech.icon}
              </div>

              <h3 className="text-xl font-bold text-white uppercase italic tracking-wide mb-3">
                {tech.title}
              </h3>
              <p className="text-slate-400 text-sm mb-6 font-light leading-relaxed flex-grow">
                {tech.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {tech.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 rounded-md text-[10px] font-mono uppercase tracking-wider text-blue-200 bg-blue-900/30 border border-blue-500/20 group-hover:border-blue-500/40 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
