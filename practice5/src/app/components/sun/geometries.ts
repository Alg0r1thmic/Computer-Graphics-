import { SphereGeometry } from 'three';

export const sunSize = 50;
export function createSunGeometries() {
  const sun = new SphereGeometry(sunSize, 35, 35);
  return {
    sun
  };
}

