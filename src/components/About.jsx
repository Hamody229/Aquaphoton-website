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
    ? { 
        initial: { opacity: 0 },
        whileInView: { opacity: 1 },
        viewport: { once: true, margin: "-50px" },
        transition: { duration: 0.6 }
      }
    : { 
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-50px" },
        transition: { duration: 0.8 }
      };

  const logoAnim = isMobile
    ? {
        initial: { opacity: 0, scale: 0.9 },
        whileInView: { opacity: 1, scale: 1 },
        viewport: { once: true },
        transition: { duration: 0.6 }
      }
    : {
        initial: { opacity: 0, scale: 0.9 },
        whileInView: { opacity: 1, scale: 1 },
        viewport: { once: true },
        transition: { duration: 0.8 }
      };

  const floatAnim = isMobile
    ? {} 
    : {
        animate: { y: [0, -12, 0] },
        transition: { 
          duration: 4, 
          repeat: Infinity, 
          ease: "easeInOut",
          repeatType: "reverse"
        }
      };

  const headerAnim = isMobile
    ? {
        initial: { opacity: 0 },
        whileInView: { opacity: 1 },
        viewport: { once: true },
        transition: { duration: 0.5, delay: 0.2 }
      }
    : {
        initial: { opacity: 0, x: -20 },
        whileInView: { opacity: 1, x: 0 },
        viewport: { once: true },
        transition: { duration: 0.6, delay: 0.2 }
      };

  const titleAnim = isMobile
    ? {
        initial: { opacity: 0 },
        whileInView: { opacity: 1 },
        viewport: { once: true },
        transition: { duration: 0.5, delay: 0.3 }
      }
    : {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.7, delay: 0.3 }
      };

  const descAnim = isMobile
    ? {
        initial: { opacity: 0 },
        whileInView: { opacity: 1 },
        viewport: { once: true },
        transition: { duration: 0.5, delay: 0.4 }
      }
    : {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.7, delay: 0.4 }
      };

  const getStatAnim = (index) => isMobile 
    ? { 
        initial: { opacity: 0 },
        whileInView: { opacity: 1 },
        viewport: { once: true },
        transition: { duration: 0.4, delay: 0.5 + (index * 0.08) } 
      } 
    : {
        initial: { opacity: 0, scale: 0.9 },
        whileInView: { opacity: 1, scale: 1 },
        viewport: { once: true },
        transition: { duration: 0.5, delay: 0.5 + (index * 0.1) }
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
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-600/20 rounded-full blur-[100px]"
            />
            
            <motion.div {...floatAnim}>
              <motion.img 
                {...logoAnim}
                src="/Team_Logo.png" 
                alt="Aquaphoton Logo" 
                loading="lazy"
                className="relative z-10 w-full max-w-sm mx-auto drop-shadow-[0_0_30px_rgba(37,99,235,0.4)]" 
              />
            </motion.div>
          </div>

          {/* --- Content Section --- */}
          <div className="w-full lg:w-1/2">
            <motion.div 
              {...headerAnim}
              className="flex items-center gap-2 mb-6"
            >
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: "3rem" }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="h-[1px] bg-blue-500"
              />
              <span className="text-blue-400 font-mono text-xs tracking-[0.4em] uppercase">Our Mission</span>
            </motion.div>
            
            {/* Title */}
            <motion.h2 
              {...titleAnim}
              className="text-6xl md:text-7xl font-black mb-8 uppercase tracking-tighter leading-none italic"
            >
              About <span className="text-blue-600">Us</span>
            </motion.h2>

            {/* Description */}
            <motion.p 
              {...descAnim}
              className="text-lg text-slate-300 leading-relaxed mb-12 max-w-xl font-light"
            >
              Aquaphoton Academy believes engineering should create <span className="text-white font-bold">real impact</span>. 
              We are dedicated to providing technical mentoring for beginners and fostering a community of innovation.
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  {...getStatAnim(index)}
                  whileHover={isMobile ? {} : { scale: 1.03 }}
                  transition={{ duration: 0.2 }}
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