import * as THREE from "three";

export function createMaterial(
  variant: "primary" | "glass" | "dark",
  color = 0x3b82f6
): THREE.Material {
  switch (variant) {
    case "glass":
      return new THREE.MeshPhysicalMaterial({
        color,
        metalness: 0.4,
        roughness: 0.15,
        clearcoat: 0.8,
        clearcoatRoughness: 0.1,
      });

    case "dark":
      return new THREE.MeshStandardMaterial({
        color: 0x111827,
        metalness: 0.2,
        roughness: 0.6,
      });

    case "primary":
    default:
      return new THREE.MeshStandardMaterial({
        color,
        metalness: 0.6,
        roughness: 0.25,
      });
  }
}
