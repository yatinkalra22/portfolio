"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense, ReactNode } from "react";

interface SceneProps {
  children: ReactNode;
  className?: string;
  camera?: { position: [number, number, number]; fov: number };
}

export default function Scene({
  children,
  className = "",
  camera = { position: [0, 0, 5], fov: 75 },
}: SceneProps) {
  return (
    <Canvas
      className={className}
      camera={camera}
      dpr={[1, 1.5]}
      gl={{
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
      }}
    >
      <Suspense fallback={null}>{children}</Suspense>
    </Canvas>
  );
}
