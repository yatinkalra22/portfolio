"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function CameraRig() {
  const target = useRef(new THREE.Vector3());

  useFrame(({ camera, pointer }) => {
    target.current.set(pointer.x * 0.5, pointer.y * 0.3, 5);
    camera.position.lerp(target.current, 0.025);
    camera.lookAt(0, 0, 0);
  });

  return null;
}
