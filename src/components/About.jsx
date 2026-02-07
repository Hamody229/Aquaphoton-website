import React, { useState, useEffect } from "react"; 
import { motion } from "framer-motion";

export default function About() {
  const [isMobile, setIsMobile] = useState(() => 
    typeof window !== "undefined" ? window.innerWidth < 768 : false
  );

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile(); 
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const stats = [
    { label: "Students Trained", value: "2000+" },
    { label: "Workshops Delivered", value: "ROV, PCB & Robotics" },
    { label: "Community Impact", value: "Hands-on STEM" },
    { label: "Mentorship", value: "Knowledge Sharing" }
  ];

  const containerAnim = isMobile 
    ? { initial: { opacity: 1, y: 0 }, animate: { opacity: 1, y: 0 } }
    : { 
        initial: { opacity: 0, y: 30 }, 
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-50px" },
        transition: { duration: 0.6 }
      };

  const logoAnim = isMobile
    ? { initial: {}, animate: {} } 
    : {
        initial: {},
        animate: { y: [0, -15, 0] }, 
        transition: { duration: 3, repeat: Infinity, ease: "easeInOut" } 
      };

  const getStatAnim = (index) => isMobile 
    ? { initial: { opacity: 1, scale: 1 }, animate: { opacity: 1, scale: 1 } } 
    : {
        initial: { opacity: 0, scale: 0.95 },
        whileInView: { opacity: 1, scale: 1 },
        viewport: { once: true },
        transition: { delay: index * 0.05, duration: 0.4 } 
      };

  return (
    <section id="about" className="py-32 px-10 bg-ocean-900 text-white border-y border-white/5 relative overflow-hidden">
      <motion.div 
        {...containerAnim} 
        className="max-w-6xl mx-auto relative z-10"
      >
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* --- Logo Section --- */}
          <div className="w-full lg:w-1/2 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-600/20 rounded-full blur-[100px]"></div>
            <motion.img 
              {...logoAnim} 
              src="/Team_Logo.png" 
              alt="Aquaphoton Logo" 
              loading="lazy" 
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
                  {...getStatAnim(index)}
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