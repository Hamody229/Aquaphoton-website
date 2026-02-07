import React, { useState, useEffect, useRef, useMemo } from "react";
import { useGLTF, Float } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function UnderwaterModel({ path }) {
  const { scene } = useGLTF(path);
  const modelRef = useRef();

  const [isMobile, setIsMobile] = useState(() => 
    typeof window !== "undefined" ? window.innerWidth < 768 : false
  );

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const baseRotationY = Math.PI;
  const baseY = isMobile ? -0.5 : 0.2;

  const optimizedScene = useMemo(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.frustumCulled = true; 
        child.castShadow = false;
        child.receiveShadow = false;
        
        if (child.material) {
          child.material.precision = "lowp";
          child.material.flatShading = true; 
        }
      }
    });
    return scene;
  }, [scene]);

  useFrame((state) => {
    if (!modelRef.current) return;

    const t = state.clock.elapsedTime;

    if (isMobile) {
      modelRef.current.rotation.y = baseRotationY + Math.sin(t * 0.15) * 0.15;
    } else {
      modelRef.current.rotation.y = baseRotationY + Math.sin(t * 0.2) * 0.2;
      modelRef.current.rotation.x = Math.sin(t * 0.3) * 0.05;
      modelRef.current.position.x = Math.sin(t * 0.1) * 0.15;
      modelRef.current.position.y = baseY + Math.sin(t * 0.6) * 0.06;
    }
  });

  let scale = 0.08;
  let position = [0, baseY, 0];

  if (path.includes("doc_ricketts_rov")) {
    scale = isMobile ? 0.75 : 1.5;
  } else if (path.includes("underwater_play")) {
    scale = isMobile ? 0.002 : 0.0038;
    position = [0, baseY - 0.3, 0];
  }

  if (isMobile) {
    return (
      <primitive
        ref={modelRef}
        object={optimizedScene}
        scale={scale}
        position={position}
      />
    );
  }

  return (
    <Float 
      speed={0.4} 
      rotationIntensity={0.08} 
      floatIntensity={0.15}
    >
      <primitive
        ref={modelRef}
        object={optimizedScene}
        scale={scale}
        position={position}
      />
    </Float>
  );
}

// Preload the model
useGLTF.preload("/octa_final/comp_octa.glb");