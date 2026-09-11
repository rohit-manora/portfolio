"use client";

import { Canvas } from "@react-three/fiber";
import { ArchitectureField } from "./ArchitectureField";

interface Props {
  tier: "full" | "reduced";
  /** Pauses the frameloop when the hero scrolls out of view — frees the GPU. */
  active: boolean;
}

export function SceneCanvas({ tier, active }: Props) {
  return (
    <Canvas
      frameloop={active ? "always" : "never"}
      dpr={[1, 1.75]}
      gl={{
        antialias: false,
        powerPreference: "high-performance",
        alpha: true,
      }}
      camera={{ fov: 42, position: [1.2, 0, 14], near: 0.1, far: 60 }}
      style={{ pointerEvents: "none" }}
    >
      <ArchitectureField tier={tier} />
    </Canvas>
  );
}
