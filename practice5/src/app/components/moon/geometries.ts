import { SphereGeometry } from 'three';

export function createGeometries() {
  const geometry = new SphereGeometry(0.5, 15, 15);
  return {
    geometry
  };
}

