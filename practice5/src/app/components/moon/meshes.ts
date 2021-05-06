import { Mesh } from 'three';
import { createGeometries } from './geometries';
import { createMaterials } from './materials';

export function createMesh() {
  const geometries = createGeometries();
  const materials = createMaterials();

  const mesh = new Mesh(geometries.geometry, materials.material);
  return {
    mesh
  };
}
