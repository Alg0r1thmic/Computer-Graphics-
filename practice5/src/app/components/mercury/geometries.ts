import { SphereGeometry } from 'three';

export function createGeometries() {
  const geometry = new SphereGeometry(1.2, 15, 15);
  return {
    geometry
  };
}

