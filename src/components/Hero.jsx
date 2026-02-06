import React, { Suspense, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { motion } from "framer-motion";
import UnderwaterModel from "./UnderwaterModel";

export default function Hero() {
  const bubbles = useMemo(() => {
    return [...Array(50)].map((_, i) => ({
      id: i,
      size: Math.random() * 10 + 5,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: Math.random() * 5 + 8,
    }));
  }, []);

  return (
    <section
      id="home"
      className="h-screen w-full relative flex flex-col items-center justify-center md:justify-end pb-0 md:pb-40 overflow-hidden bg-ocean-900"
    >
      <div className="absolute inset-0 pointer-events-none z-0">
        {bubbles.map((bubble) => (
          <motion.div
            key={bubble.id}
            initial={{ y: "110vh", opacity: 0 }}
            animate={{
              y: "-10vh",
              opacity: [0, 0.4, 0.4, 0],
              x: ["0%", "5%", "-5%", "0%"],
            }}
            transition={{
              duration: bubble.duration,
              repeat: Infinity,
              delay: bubble.delay,
              ease: "linear",
            }}
            style={{
              left: `${bubble.left}%`,
              width: bubble.size,
              height: bubble.size,
            }}
            className="absolute rounded-full bg-blue-500/10 blur-[1px]"
          />
        ))}
      </div>

      <div className="absolute top-0 left-0 w-full h-[65vh] md:h-full z-10 opacity-60 blur-[1px] pointer-events-none">
        <Canvas camera={{ position: [0, 1, 11], fov: 40 }}>
          <Suspense fallback={null}>
            <ambientLight intensity={1.2} />
            <directionalLight position={[10, 10, 5]} intensity={2} />
            <pointLight position={[0, -5, -5]} color="#0044ff" intensity={2} />
            <UnderwaterModel path="/octa_final/comp_octa.glb" />
            <OrbitControls
              enableZoom={false}
              autoRotate
              autoRotateSpeed={0.6}
            />
          </Suspense>
        </Canvas>
      </div>

      <div className="absolute inset-0 z-20 bg-gradient-to-t from-ocean-950 via-ocean-900/40 to-transparent pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-30 max-w-5xl mx-auto px-4 text-center mt-20 md:mt-0"
      >
        <h1
          style={{
            fontFamily:
              '"Century Gothic", CenturyGothic, AppleGothic, sans-serif',
            fontWeight: 900,
          }}
          className="text-5xl sm:text-7xl md:text-[10rem] font-black tracking-tighter italic leading-none text-white drop-shadow-2xl"
        >
          AQUA<span className="text-blue-600">PHOTON</span>
        </h1>

        <p className="text-white-300 font-mono text-xs sm:text-sm md:text-2xl tracking-[0.5em] md:tracking-[0.8em] uppercase mt-2 mb-4 md:mb-8 font-bold drop-shadow-md">
          Academy
        </p>

        <div className="w-16 md:w-24 h-1 bg-blue-600 mx-auto mb-6 md:mb-8 rounded-full shadow-[0_0_10px_#2563eb]" />

        {/* Description */}
        <div className="max-w-3xl mx-auto space-y-3 md:space-y-4">
          <p className="text-base sm:text-xl md:text-2xl text-white font-medium leading-relaxed drop-shadow-lg px-2">
            A hands-on engineering academy focused on designing, building, and
            competing with <span className="text-blue-400 font-bold">ROVs</span>{" "}
            & Rovers.
          </p>

          <p className="text-slate-300 text-[10px] sm:text-xs md:text-base font-light leading-relaxed mx-auto max-w-xl drop-shadow-md px-4">
            We turn theory into real hardware, empowering students to innovate,
            experiment, and solve real-world engineering challenges.
          </p>
        </div>
      </motion.div>

      {/* --- Scroll Button --- */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-20 md:bottom-10 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center gap-3"
      >
        <span className="text-[8px] font-mono uppercase tracking-[0.3em] text-blue-300/80 animate-pulse">
          Scroll to Dive
        </span>
        <div className="w-5 h-8 md:w-6 md:h-10 border-2 border-blue-400/30 rounded-full flex justify-center p-1 relative backdrop-blur-sm bg-blue-900/10">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-1.5 md:h-2 bg-blue-400 rounded-full shadow-[0_0_8px_#60a5fa]"
          />
        </div>
      </motion.div>
    </section>
  );
}
