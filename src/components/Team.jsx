import React from "react";
import { motion } from "framer-motion";

const TeamMember = ({ name, role, image, index }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }} 
    transition={{ delay: index * 0.1, duration: 0.5 }}
    className="flex flex-col items-center group cursor-pointer"
  >
    <div className="w-44 h-44 md:w-52 md:h-52 bg-white/5 border border-white/10 rounded-[2rem] overflow-hidden mb-6 relative transition-all duration-500 group-hover:border-blue-500 group-hover:shadow-[0_0_30px_rgba(37,99,235,0.3)] group-hover:-translate-y-2">
      
      <img 
        src={image} 
        alt={name}
        className="w-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-110"
        onError={(e) => { e.target.src = "https://via.placeholder.com/400?text=Member"; }} 
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>

    <h4 className="text-white font-bold uppercase text-lg tracking-wide group-hover:text-blue-400 transition-colors">{name}</h4>
    <p className="text-blue-500/60 font-mono text-[10px] uppercase tracking-[0.2em] mt-2 group-hover:text-blue-400 transition-colors">
      {role}
    </p>
  </motion.div>
);

export default function Team() {
  const departments = [
    {
      title: "Board",
      members: [
        { name: "Ibrahem Beshr", role: "CEO", image: "/beshr.jpg" },
        { name: "Omar Fayed", role: "Electrical CTO", image: "/fayed.jpg" },
        { name: "Ahmed Farahat", role: "Mechanical CTO", image: "/farahat.jpg" },
      ],
    },
    {
      title: "Electrical",
      members: [
        { name: "Mohamed Yousry", role: "Software Head", image: "/yousry.jpg" },
        { name: "Mohamed Khamis", role: "Firmware Head", image: "/khamis.jpg" },
        { name: "Ibrahem Ismail", role: "Hardware Head", image: "/ismail.jpg" },
      ],
    },
    {
      title: "Mechanical",
      members: [
        { name: "Youssef Abobakr", role: "Frame Head", image: "/abobakr.jpg" },
        { name: "Abdelrahman Okab", role: "Manipulator Head", image: "/okab.jpg" },
        { name: "Moamen Ahmed", role: "Sealing Head", image: "/moamen.jpg" },
      ],
    },
  ];

  return (

    <section className="min-h-screen py-32 px-6 md:px-10 bg-ocean-900 relative overflow-hidden">
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-24"
        >
             <h2 className="text-5xl md:text-7xl font-black uppercase italic text-white mb-4">The <span className="text-blue-600">Team</span></h2>
             <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full" />
        </motion.div>

        <div className="space-y-32">
          {departments.map((dept, dIdx) => (
            <div key={dIdx}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 mb-16"
              >
                <h3 className="text-3xl md:text-4xl font-black uppercase italic text-blue-100/90">
                  {dept.title}
                </h3>
                <div className="h-[1px] flex-1 bg-white/10" />
              </motion.div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 justify-items-center">
                {dept.members.map((m, mIdx) => (
                  <TeamMember key={mIdx} {...m} index={mIdx} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}