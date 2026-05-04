"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface FloatingParticlesProps {
  count?: number;
  color?: string;
  size?: number;
  spread?: number;
}

export default function FloatingParticles({
  count = 200,
  color = "#6366f1",
  size = 0.02,
  spread = 10,
}: FloatingParticlesProps) {
  const mesh = useRef<THREE.Points>(null!);
  const mouseRef = useRef({ x: 0, y: 0 });

  const [positions, velocities] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const vel = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * spread;
      pos[i * 3 + 1] = (Math.random() - 0.5) * spread;
      pos[i * 3 + 2] = (Math.random() - 0.5) * spread;
      vel[i * 3] = (Math.random() - 0.5) * 0.12;
      vel[i * 3 + 1] = (Math.random() - 0.5) * 0.12;
      vel[i * 3 + 2] = (Math.random() - 0.5) * 0.12;
    }
    return [pos, vel];
  }, [count, spread]);

  useFrame(({ pointer }, delta) => {
    if (!mesh.current) return;
    const dt = Math.min(delta, 0.05);

    mouseRef.current.x += (pointer.x * 0.5 - mouseRef.current.x) * 0.04;
    mouseRef.current.y += (pointer.y * 0.5 - mouseRef.current.y) * 0.04;

    const posArray = mesh.current.geometry.attributes.position
      .array as Float32Array;
    const half = spread / 2;
    const mx = mouseRef.current.x * 0.06 * dt;
    const my = mouseRef.current.y * 0.06 * dt;

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      posArray[i3] += velocities[i3] * dt + mx;
      posArray[i3 + 1] += velocities[i3 + 1] * dt + my;
      posArray[i3 + 2] += velocities[i3 + 2] * dt;

      if (Math.abs(posArray[i3]) > half) velocities[i3] *= -1;
      if (Math.abs(posArray[i3 + 1]) > half) velocities[i3 + 1] *= -1;
      if (Math.abs(posArray[i3 + 2]) > half) velocities[i3 + 2] *= -1;
    }

    mesh.current.geometry.attributes.position.needsUpdate = true;
    mesh.current.rotation.y += 0.018 * dt;
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        color={color}
        size={size}
        sizeAttenuation
        transparent
        opacity={0.6}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}
