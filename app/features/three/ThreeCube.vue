<script setup lang="ts">
import { onMounted, reactive, ref } from "vue";
import { useThreeScene } from "./useThreeScene";
import type { ThreeSceneState } from "./three.types";

const host = ref<HTMLDivElement | null>(null);
const canvas = ref<HTMLCanvasElement | null>(null);

const state = ref<ThreeSceneState>({
  geometry: "icosahedron",
  material: "glass",
  rotation: "mouse",
  color: 0x3b82f6,
});

onMounted(() => {
  if (!host.value || !canvas.value) return;
  useThreeScene(canvas.value, host.value, state);
});
</script>

<template>
  <div class="relative space-y-6">
    <!-- SCENA 3D -->
    <div
      ref="host"
      class="relative w-full h-[420px] rounded-2xl overflow-hidden bg-black border border-white/10"
    >
      <canvas ref="canvas" class="w-full h-full" />

      <div class="absolute top-4 left-4 text-xs text-white/50">
        Drag • Scroll • Rotate
      </div>
    </div>

    <!-- PANEL STEROWANIA -->
    <div
      class="mx-auto max-w-4xl rounded-xl border border-white/10 bg-blue/5 backdrop-blur px-6 py-4"
    >
      <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <!-- Shape -->
        <div class="flex flex-col gap-2">
          <label class="ui-label">Shape</label>
          <select v-model="state.geometry" class="ui-select">
            <option value="box">Cube</option>
            <option value="sphere">Sphere</option>
            <option value="icosahedron">Icosahedron</option>
            <option value="torus">Torus</option>
          </select>
        </div>

        <!-- Material -->
        <div class="flex flex-col gap-2">
          <label class="ui-label">Material</label>
          <select v-model="state.material" class="ui-select">
            <option value="primary">Primary</option>
            <option value="glass">Glass</option>
            <option value="dark">Dark</option>
          </select>
        </div>

        <!-- Rotation -->
        <div class="flex flex-col gap-2">
          <label class="ui-label">Rotation</label>
          <select v-model="state.rotation" class="ui-select">
            <option value="auto">Auto</option>
            <option value="mouse">Mouse</option>
            <option value="static">Static</option>
          </select>
        </div>

        <!-- Color -->
        <div class="flex flex-col gap-2">
          <label class="ui-label">Color</label>
          <input
            type="color"
            v-model="state.color"
            class="h-10 w-full cursor-pointer rounded-md border border-white/20 bg-transparent"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
/* =========================
   PANEL – tło i glass look
   ========================= */

.bg-blue\/5 {
  background: linear-gradient(
    180deg,
    rgba(59, 130, 246, 0.08),
    rgba(0, 0, 0, 0.35)
  );
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.6),
    inset 0 1px 0 rgba(255, 255, 255, 0.05);
}

/* =========================
   LABELS
   ========================= */

.ui-label {
  font-size: 0.6rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: rgba(147, 197, 253, 0.75); /* blue-300 */
}

/* =========================
   SELECTS – dark / premium
   ========================= */

.ui-select {
  height: 2.75rem;
  width: 100%;
  padding: 0 0.85rem;

  font-size: 0.85rem;
  color: #e5e7eb; /* gray-200 */

  background: linear-gradient(180deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4));

  border: 1px solid rgba(59, 130, 246, 0.25);
  border-radius: 0.75rem;

  appearance: none;
  outline: none;
  cursor: pointer;

  transition: border-color 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
}

.ui-select:hover {
  border-color: rgba(59, 130, 246, 0.45);
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.45));
}

.ui-select:focus {
  border-color: #3b82f6;
  box-shadow: 0 0 0 1px rgba(59, 130, 246, 0.8),
    0 8px 24px rgba(59, 130, 246, 0.25);
}

/* =========================
   COLOR INPUT – spójny
   ========================= */

input[type="color"] {
  height: 2.75rem;
  border-radius: 0.75rem;
  border: 1px solid rgba(59, 130, 246, 0.35);
  background: rgba(0, 0, 0, 0.6);
  cursor: pointer;
}

input[type="color"]::-webkit-color-swatch-wrapper {
  padding: 0.25rem;
}

input[type="color"]::-webkit-color-swatch {
  border: none;
  border-radius: 0.5rem;
}

/* =========================
   DROBNY LIFT CAŁOŚCI
   ========================= */

div[class*="rounded-xl"] {
  backdrop-filter: blur(18px);
}
</style>
