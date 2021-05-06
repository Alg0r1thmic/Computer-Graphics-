import { Mesh } from 'three';
import { createSunGeometries } from './geometries';
import { createSunMaterials } from './materials';

export function createSunMesh() {
  const geometries = createSunGeometries();
  const materials = createSunMaterials();

  const sun = new Mesh(geometries.sun, materials.sunStyle);
  return {
    sun
  };
}
