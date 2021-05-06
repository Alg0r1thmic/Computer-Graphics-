import { Mesh } from 'three';
import { createMilkyWayGeometries } from './geometries';
import { createMilkyWayMaterials } from './materials';

export function createMilkyWayMesh() {
  const geometries = createMilkyWayGeometries();
  const materials = createMilkyWayMaterials();

  const milkyWay = new Mesh(geometries.milkyWay, materials.milkyWayStyle);
  return {
    milkyWay
  };
}
