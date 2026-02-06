import React, { useState, useEffect, useRef } from "react";
import { useGLTF, Float } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function UnderwaterModel({ path }) {
  const { scene } = useGLTF(path);
  const modelRef = useRef();

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const baseRotationY = Math.PI;

  const baseY = isMobile ? -0.5 : 0.2;

  useFrame((state) => {
    if (!modelRef.current) return;

    const time = state.clock.getElapsedTime();

    modelRef.current.rotation.y =
      baseRotationY + Math.sin(time * 0.2) * 0.2;

    modelRef.current.rotation.x =
      Math.sin(time * 0.3) * 0.05;

    modelRef.current.position.x =
      Math.sin(time * 0.1) * 0.15;

    modelRef.current.position.y =
      baseY + Math.sin(time * 0.6) * 0.06;
  });

  let scale = 0.08;
  let position = [0, baseY, 0];

  if (path.includes("doc_ricketts_rov")) {
    scale = isMobile ? 0.75 : 1.5;
    position = [0, baseY, 0];
  } else if (path.includes("underwater_play")) {
    scale = isMobile ? 0.002 : 0.0038;
    position = [0, baseY - 0.3, 0];
  }

  return (
    <Float
      speed={0.6}
      rotationIntensity={0.1}
      floatIntensity={0.25}
    >
      <primitive
        ref={modelRef}
        object={scene}
        scale={scale}
        position={position}
      />
    </Float>
  );
}
