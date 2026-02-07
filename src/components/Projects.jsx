import React from "react";
import { motion } from "framer-motion";

export default function Projects() {
  const projectList = [
    {
      id: 1,
      title: "Remotely Operated Vehicles",
      subtitle: "(ROVs)",
      category: "Underwater Systems",
      image: "/ROV.png",
      features: [
        "Custom-designed underwater vehicles",
        "Thruster control, depth holding, and stability using PID",
        "Live camera streaming and sensor feedback",
        "Competition-ready systems",
      ],
    },
    {
      id: 2,
      title: "Rovers",
      subtitle: "(UGVs)",
      category: "Ground Systems",
      image: "/ROVER.png",
      features: [
        "Ground vehicles with autonomous and manual modes",
        "Obstacle detection and navigation",
        "Sensor fusion and control systems",
        "Modular and scalable designs",
      ],
    },
    {
      id: 3, 
      title: "Float",
      subtitle: "(Profiling Float)",
      category: "Underwater Systems",
      image: "/float.jpg",
      features: [
        "Integrated pressure sensor for precise depth control.",
        "Variable buoyancy engine for vertical profiling.",
        "Hydrodynamic Stability.",
        "Robust design for deep-sea operations.",
      ],
    },
  ];

  return (
    <section className="min-h-screen py-32 px-6 md:px-10 bg-ocean-900 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-blue-900/20 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black uppercase italic text-white mb-6"
          >
            Our <span className="text-blue-600">Projects</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="w-24 h-1 bg-blue-600 mx-auto rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 mb-24">
          {projectList.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group bg-white/5 backdrop-blur-lg border border-white/10 p-6 md:p-8 rounded-[2.5rem] hover:border-blue-500/50 transition-all duration-500 hover:-translate-y-2 flex flex-col h-full shadow-lg"
            >
              {/* Image Area */}
              <div className="h-57 rounded-[2rem] mb-8 overflow-hidden relative border border-white/5 bg-black/20">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  onError={(e) => {
                    e.target.src =
                      "https://via.placeholder.com/400x300/001d3d/3b82f6?text=Project";
                  }}
                />
                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-4 py-1 rounded-full text-[10px] font-mono uppercase tracking-widest text-blue-400 border border-white/10 shadow-lg">
                  {project.category}
                </div>
              </div>

              {/* Text Content */}
              <div className="flex-grow flex flex-col">
                <h3 className="text-2xl lg:text-3xl font-bold text-white uppercase italic leading-none mb-1">
                  {project.title}
                </h3>
                <span className="text-blue-500 font-mono text-sm tracking-widest uppercase mb-6 block">
                  {project.subtitle}
                </span>

                {/* Features List */}
                <ul className="space-y-4 mt-auto">
                  {project.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-slate-300 text-sm font-light leading-relaxed"
                    >
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0 shadow-[0_0_8px_#3b82f6]" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- Footer Statement --- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center border-t border-white/10 pt-16"
        >
          <p className="text-xl md:text-3xl font-bold text-white/90 italic leading-relaxed">
            "Each project is <span className="text-blue-500">built</span>,
            tested, <span className="text-red-500">failed</span>,{" "}
            <span className="text-green-500">improved</span>, and tested again."
          </p>
          <p className="mt-4 text-blue-400 font-mono text-xs uppercase tracking-[0.4em]">
            — Just like real engineering
          </p>
        </motion.div>
      </div>
    </section>
  );
}