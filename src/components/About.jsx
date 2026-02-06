import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  const stats = [
    { label: "Students Trained", value: "2000+" },
    { label: "Workshops Delivered", value: "ROV, PCB & Robotics" }, 
    { label: "Community Impact", value: "Hands-on STEM" },
    { label: "Mentorship", value: "Knowledge Sharing" }
  ];

  return (
    <section id="about" className="py-32 px-10 bg-ocean-900 text-white border-y border-white/5 relative overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto relative z-10"
      >
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* --- Logo Section --- */}
          <div className="w-full lg:w-1/2 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-600/20 rounded-full blur-[100px]"></div>
            <motion.img 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              src="/Team_Logo.png" 
              alt="Logo" 
              className="relative z-10 w-full max-w-sm mx-auto drop-shadow-[0_0_30px_rgba(37,99,235,0.4)]" 
            />
          </div>

          {/* --- Content Section --- */}
          <div className="w-full lg:w-1/2">
            <div className="flex items-center gap-2 mb-6">
              <div className="h-[1px] w-12 bg-blue-500"></div>
              <span className="text-blue-400 font-mono text-xs tracking-[0.4em] uppercase">Our Mission</span>
            </div>
            
            <h2 className="text-6xl md:text-7xl font-black mb-8 uppercase tracking-tighter leading-none italic">
              About <span className="text-blue-600">Us</span>
            </h2>

            <p className="text-lg text-slate-300 leading-relaxed mb-12 max-w-xl font-light">
              Aquaphoton Academy believes engineering should create <span className="text-white font-bold">real impact</span>. 
              We are dedicated to providing technical mentoring for beginners and fostering a community of innovation.
            </p>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 border border-white/10 bg-white/5 backdrop-blur-md rounded-2xl hover:border-blue-500/40 transition-colors group"
                >
                  <p className="text-[10px] font-mono uppercase text-blue-500 mb-2 tracking-widest group-hover:text-blue-400 transition-colors">
                    {stat.label}
                  </p>
                  <p className="text-xl md:text-2xl font-bold text-white uppercase tracking-tight leading-tight">
                    {stat.value}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </motion.div>
    </section>
  );
}