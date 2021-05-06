import { Mesh } from 'three';
import { createHouseGeometries } from './geometries';
import { createHouseMaterials } from './materials';

function createHouseMeshes() {
  const geometries = createHouseGeometries();
  const materials = createHouseMaterials();

  const body = new Mesh(geometries.body, materials.body);
  body.position.set(0, 0.8, 0);

  const ceiling = new Mesh(geometries.ceiling, materials.detail);
  ceiling.position.set(0, 2.1, 0);


  

  return {
    body,
    ceiling,
  };
}

export { createHouseMeshes };
