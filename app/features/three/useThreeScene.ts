import { onBeforeUnmount, watch, type Ref } from "vue";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { createGeometry } from "./three.geometries";
import { createMaterial } from "./three.materials";
import { updateRotation } from "./three.controls";
import type { ThreeSceneState } from "./three.types";

export function useThreeScene(
  canvas: HTMLCanvasElement,
  host: HTMLElement,
  state: Ref<ThreeSceneState>
) {
  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(55, 1, 0.1, 100);
  camera.position.set(0, 0.6, 3);

  const renderer = new THREE.WebGLRenderer({
    canvas,
    alpha: true,
    antialias: true,
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.outputColorSpace = THREE.SRGBColorSpace;

  const controls = new OrbitControls(camera, canvas);
  controls.enableDamping = true;
  controls.enablePan = false;

  scene.add(new THREE.AmbientLight(0xffffff, 0.4));
  const light = new THREE.DirectionalLight(0x60a5fa, 1.2);
  light.position.set(3, 4, 2);
  scene.add(light);

  let mesh = new THREE.Mesh(
    createGeometry(state.value.geometry),
    createMaterial(state.value.material, state.value.color)
  );
  scene.add(mesh);

  // 🔁 REAKTYWNOŚĆ
  watch(
    () => state.value.geometry,
    (g) => {
      mesh.geometry.dispose();
      mesh.geometry = createGeometry(g);
    }
  );

  watch(
    () => [state.value.material, state.value.color],
    ([m, c]) => {
      (mesh.material as any).dispose?.();
      mesh.material = createMaterial(m, c);
    }
  );

  let mouseX = 0;
  window.addEventListener("mousemove", (e) => {
    mouseX = (e.clientX / window.innerWidth) * 2 - 1;
  });

  const resize = () => {
    const { width, height } = host.getBoundingClientRect();
    renderer.setSize(width, height, false);
    camera.aspect = width / Math.max(height, 1);
    camera.updateProjectionMatrix();
  };

  resize();
  const ro = new ResizeObserver(resize);
  ro.observe(host);

  let raf = 0;
  const tick = () => {
    raf = requestAnimationFrame(tick);
    updateRotation(mesh, state.value.rotation, mouseX);
    controls.update();
    renderer.render(scene, camera);
  };

  tick();

  onBeforeUnmount(() => {
    cancelAnimationFrame(raf);
    ro.disconnect();
    controls.dispose();
    renderer.dispose();
    mesh.geometry.dispose();
    (mesh.material as any).dispose?.();
  });
}
