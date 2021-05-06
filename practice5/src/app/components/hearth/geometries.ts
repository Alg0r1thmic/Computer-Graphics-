import { SphereGeometry } from 'three';

export function createGeometries() {
  const geometry = new SphereGeometry(3, 15, 15);
  return {
    geometry
  };
}

