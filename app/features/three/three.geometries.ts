import * as THREE from "three";
import type { GeometryType } from "./three.types";

export function createGeometry(type: GeometryType): THREE.BufferGeometry {
  switch (type) {
    case "sphere":
      return new THREE.SphereGeometry(0.8, 32, 32);
    case "icosahedron":
      return new THREE.IcosahedronGeometry(0.9, 0);
    case "torus":
      return new THREE.TorusGeometry(0.6, 0.25, 16, 64);
    case "box":
    default:
      return new THREE.BoxGeometry(1, 1, 1);
  }
}
