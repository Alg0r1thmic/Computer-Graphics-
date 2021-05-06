import { PerspectiveCamera } from 'three';

function createCamera() {
  const camera = new PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 100000);

  camera.position.set(0, 100, 0);

  return camera;
}

export { createCamera };
