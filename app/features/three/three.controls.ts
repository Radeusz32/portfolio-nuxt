import type { RotationMode } from "./three.types";
import type { Mesh } from "three";

export function updateRotation(mesh: Mesh, mode: RotationMode, mouseX = 0) {
  if (mode === "auto") {
    mesh.rotation.y += 0.003;
    mesh.rotation.x += 0.001;
  }

  if (mode === "mouse") {
    mesh.rotation.y = mouseX * 0.8;
  }
}
