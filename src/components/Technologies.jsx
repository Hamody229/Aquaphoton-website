import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Terminal, PenTool, Layers, Zap, Database } from 'lucide-react';

const technologies = [
  {
    id: 1,
    title: "Hardware",
    icon: <Cpu size={32} />,
    description: "Building the physical brain and body of our ROVs.",
    skills: [
      "Microcontrollers (Arduino, STM32, ESP32)",
      "Sensors (IMU, Pressure, Depth)",
      "Power Systems & ESCs",
      "Motor Drivers",
      "Custom PCBs",
      "Cameras"
    ]
  },
  {
    id: 2,
    title: "Software",
    icon: <Terminal size={32} />,
    description: "Breathing life into machines with intelligent code.",
    skills: [
      "Embedded C / C++",
      "Python Scripting",
      "ROS / ROS2",
      "Computer Vision",
      "Image Processing",
      "Algorithms"
    ]
  },
  {
    id: 3,
    title: "Design & Tools",
    icon: <PenTool size={32} />,
    description: "Precision engineering from concept to simulation.",
    skills: [
      "PCB Design (Altium)",
      "Mechanical Design (SolidWorks)",
      "Simulation & Testing",
      "Version Control (Git)",
      "3D Printing",
      "System Integration"
    ]
  }
];

export default function Technologies() {
  return (
    <section id="technologies" className="py-32 px-6 bg-ocean-900 relative overflow-hidden">
      
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
            <span className="text-blue-400 font-mono text-xs tracking-[0.4em] uppercase">Tech Stack</span>
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="group relative p-8 rounded-[2rem] border border-white/5 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors duration-500"
            >
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 via-blue-600/0 to-blue-600/5 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-blue-600/20 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                {tech.icon}
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-white uppercase italic tracking-wide mb-3">{tech.title}</h3>
              <p className="text-slate-400 text-sm mb-8 font-light leading-relaxed min-h-[40px]">
                {tech.description}
              </p>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2">
                {tech.skills.map((skill, i) => (
                  <span 
                    key={i} 
                    className="px-3 py-1.5 rounded-lg text-[10px] md:text-xs font-mono uppercase tracking-wider text-blue-200 bg-blue-900/30 border border-blue-500/20 group-hover:border-blue-500/40 transition-colors"
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