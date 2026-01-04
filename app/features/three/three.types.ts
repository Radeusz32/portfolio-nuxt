import * as THREE from "three";

export type GeometryType = "box" | "sphere" | "icosahedron" | "torus";

export type RotationMode = "auto" | "mouse" | "static";

export interface ThreeSceneState {
  geometry: GeometryType;
  material: "primary" | "glass" | "dark";
  rotation: RotationMode;
  color?: number;
}
