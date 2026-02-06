import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const sessionData = [
  // --- Bootcamps ---
  { 
    id: 1, 
    type: 'Bootcamp', 
    category: 'Hardware', 
    title: 'Electronics Basics', 
    image: '/electronics.JPG', 
    date: '2026',
    description: "The electronics session was held as part of the Hardware Bootcamp organized by Aquaphoton Academy. The session focused on building a strong foundation in electronics and covering essential concepts."
  },
  { 
    id: 2, 
    type: 'Bootcamp', 
    category: 'Hardware', 
    title: 'Altium and PCB design', 
    image: '/altium.JPG', 
    date: '2026',
    description: "A deep dive into professional PCB design. Participants learned how to move from schematic capture to board layout using Altium Designer, mastering routing techniques and design rules for manufacturing."
  },
  { 
    id: 5, 
    type: 'Bootcamp', 
    category: 'Hardware', 
    title: 'Adv. PCB Design', 
    image: '/altium2.JPG', 
    date: '2026',
    description: "Pushing the boundaries of hardware design. This advanced session covered multi-layer stackups, high-speed signal integrity, and impedance control, preparing students for industry-standard complex boards."
  },

  // --- Training Sessions ---
  { 
    id: 3, 
    type: 'Training', 
    category: 'Electrical', 
    title: 'PCB Manufacturing', 
    image: '/hardware-manif.jpg', 
    date: '2025',
    description: "Bridging the gap between design and reality. We covered the full fabrication process, from etching and drilling to soldering and component assembly, ensuring every board works as intended."
  },
  { 
    id: 4, 
    type: 'Training', 
    category: 'Mechanical', 
    title: 'Mechanical Training', 
    image: '/mechanical-session.jpeg', 
    date: '2025',
    description: "Focused on the physical structure of ROVs. Students gained hands-on experience with CAD modeling, material selection, and waterproofing techniques essential for underwater robotics."
  },
  { 
    id: 6, 
    type: 'Training', 
    category: 'Electrical', 
    title: 'Embedded Training', 
    image: '/embedded.jpg', 
    date: '2025',
    description: "The brain behind the machine. This training introduced microcontroller programming, interrupt handling, and writing efficient C code to control hardware peripherals in real-time."
  },

  // --- AlexDuino ---
  { 
    id: 7, 
    type: 'AlexDuino', 
    category: 'Electronics', 
    title: 'Basic Electronics', 
    image: '/alex-duino.jpg', 
    date: '2026',
    description: "Part of the AlexDuino initiative: An interactive introduction to the world of circuits. Students built their first circuits, understood voltage and current, and learned how components interact."
  },
  { 
    id: 8, 
    type: 'AlexDuino', 
    category: 'Embedded', 
    title: 'Communication Protocols', 
    image: '/alexduino2.jpg', 
    date: '2026',
    description: "Unlocking connectivity. We explored how devices talk to each other using UART, SPI, and I2C protocols, enabling students to interface sensors and modules with their microcontrollers."
  },
  { 
    id: 9, 
    type: 'AlexDuino', 
    category: 'Event', 
    title: 'Hardware Carnival', 
    image: '/alexduino3.jpg', 
    date: '2026',
    description: "A celebration of innovation! The Hardware Carnival brought together students to showcase their projects, compete in friendly challenges, and witness the creative potential of engineering."
  },
];

const tabs = ['Bootcamps', 'Training Sessions', 'AlexDuino'];

export default function Sessions() {
  const [activeTab, setActiveTab] = useState('Bootcamps');
  const [selectedId, setSelectedId] = useState(null);

  const filteredItems = sessionData.filter(item => {
    if (activeTab === 'Bootcamps') return item.type === 'Bootcamp';
    if (activeTab === 'Training Sessions') return item.type === 'Training';
    if (activeTab === 'AlexDuino') return item.type === 'AlexDuino';
    return false;
  });

  return (
    <section id="bootcamps" className="min-h-screen py-32 md:py-40 px-6 relative bg-ocean-900 overflow-hidden">
      
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* --- Header --- */}
        <div className="text-center mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 mb-4 text-blue-400"
          >
            <div className="h-[1px] w-12 bg-current"></div>
            <span className="font-mono text-xs tracking-[0.4em] uppercase">Knowledge Transfer</span>
            <div className="h-[1px] w-12 bg-current"></div>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black uppercase tracking-tighter italic text-white"
          >
            Our <span className="text-blue-600">Sessions</span>
          </motion.h2>
        </div>

        {/* --- Tabs --- */}
        <div className="flex justify-center mb-16">
          <div className="bg-white/5 p-1 rounded-full border border-white/10 backdrop-blur-md inline-flex flex-wrap justify-center gap-2 md:gap-0">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 md:px-8 py-2 md:py-3 rounded-full text-[10px] md:text-sm font-mono uppercase tracking-widest transition-all duration-300 relative overflow-hidden whitespace-nowrap ${
                  activeTab === tab 
                    ? 'text-white shadow-[0_0_20px_rgba(37,99,235,0.5)]' 
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {activeTab === tab && (
                  <motion.div 
                    layoutId="activeTabBg"
                    className="absolute inset-0 bg-blue-600 rounded-full"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{tab}</span>
              </button>
            ))}
          </div>
        </div>

        {/* --- Grid --- */}
        <motion.div 
          layout 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode='popLayout'>
            {filteredItems.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedId(item.id)}
                className="group relative cursor-pointer"
              >
                <div className="aspect-[4/3] rounded-[2rem] overflow-hidden border border-white/10 bg-white/5 relative shadow-lg group-hover:shadow-blue-900/20 transition-all duration-500 group-hover:-translate-y-2">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => { e.target.src = "https://via.placeholder.com/600x400/001d3d/3b82f6?text=Session"; }} 
                  />
                  
                  <div className="absolute top-4 left-4 z-20">
                     <span className="bg-black/60 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full text-[8px] font-mono uppercase tracking-widest text-blue-400">
                       {item.category}
                     </span>
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-ocean-900 via-ocean-900/50 to-transparent opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <h3 className="text-white font-bold text-xl uppercase italic leading-none mb-2">{item.title}</h3>
                    <p className="text-slate-300 text-xs">{item.date}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* --- Modal --- */}
        <AnimatePresence>
          {selectedId && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4"
              onClick={() => setSelectedId(null)}
            >
              <motion.div 
                layoutId={selectedId}
                className="relative max-w-5xl w-full bg-ocean-900 border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh] overflow-y-auto md:overflow-hidden"
                onClick={(e) => e.stopPropagation()} 
              >
                {(() => {
                  const item = sessionData.find(i => i.id === selectedId);
                  return (
                    <>
                      <div className="w-full md:w-1/2 h-64 md:h-auto relative shrink-0">
                        <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-blue-600/10 mix-blend-overlay" />
                        <button 
                          onClick={() => setSelectedId(null)} 
                          className="absolute top-4 right-4 md:hidden w-8 h-8 bg-black/50 rounded-full text-white flex items-center justify-center"
                        >✕</button>
                      </div>

                      <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center bg-ocean-900">
                         <div className="flex items-center gap-3 mb-4">
                           <span className="px-3 py-1 rounded-full bg-blue-600/20 text-blue-400 text-[10px] font-mono uppercase tracking-widest border border-blue-600/30">
                             {item.category}
                           </span>
                           <span className="text-slate-500 text-[10px] font-mono uppercase tracking-widest">
                             {item.date}
                           </span>
                         </div>
                         
                         <h3 className="text-3xl md:text-4xl font-black text-white uppercase italic mb-6 leading-tight">
                           {item.title}
                         </h3>
                         
                         <p className="text-slate-400 leading-relaxed text-sm mb-8 border-l-2 border-blue-600 pl-4">
                           {item.description}
                         </p>

                         <button 
                           onClick={() => setSelectedId(null)} 
                           className="self-start px-8 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-xs font-bold uppercase tracking-widest transition-all"
                         >
                           Close Details
                         </button>
                      </div>
                    </>
                  );
                })()}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}