"use client";

import { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Text3D, Center } from "@react-three/drei";
import * as THREE from "three";

interface HeroText3DProps {
  text: string;
  position?: [number, number, number];
  color?: string;
  emissive?: string;
  size?: number;
}

export default function HeroText3D({
  text,
  position = [0, 0, 0],
  color = "#a78bfa",
  emissive = "#6366f1",
  size = 0.8,
}: HeroText3DProps) {
  const meshRef = useRef<THREE.Mesh>(null!);
  const { viewport } = useThree();

  // Scale text down on narrow viewports so it never overflows.
  // helvetiker at size=s is roughly s * 0.6 wide per glyph including kerning,
  // so reserve ~text.length * 0.65 * size and keep 12% horizontal padding.
  const approxWidth = text.length * size * 0.65;
  const maxWidth = viewport.width * 0.88;
  const responsiveSize =
    approxWidth > maxWidth ? size * (maxWidth / approxWidth) : size;
  const bevelScale = responsiveSize / size;

  useFrame(({ clock, pointer }) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y =
      Math.sin(clock.elapsedTime * 0.3) * 0.03 + pointer.x * 0.05;
    meshRef.current.rotation.x = pointer.y * -0.03;
  });

  return (
    <Center position={position}>
      <Text3D
        ref={meshRef}
        font="/fonts/helvetiker_regular.typeface.json"
        size={responsiveSize}
        height={0.12 * bevelScale}
        curveSegments={8}
        bevelEnabled
        bevelThickness={0.02 * bevelScale}
        bevelSize={0.015 * bevelScale}
        bevelOffset={0}
        bevelSegments={3}
      >
        {text}
        <meshStandardMaterial
          color={color}
          emissive={emissive}
          emissiveIntensity={0.35}
          metalness={0.6}
          roughness={0.25}
        />
      </Text3D>
    </Center>
  );
}
