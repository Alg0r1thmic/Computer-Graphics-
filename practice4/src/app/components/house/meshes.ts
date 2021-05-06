import { Mesh } from 'three';
import { createHouseGeometries } from './geometries';
import { createHouseMaterials } from './materials';

function createHouseMeshes() {
  const geometries = createHouseGeometries();
  const materials = createHouseMaterials();

  const body = new Mesh(geometries.body, materials.body);
  body.position.set(0, 1, 0);

  const ceiling = new Mesh(geometries.ceiling, materials.detail);
  ceiling.position.set(0, 2.5, 0);

  const door = new Mesh(geometries.door, materials.doorStyle);
  door.position.set(-1, 0.5, 0);
  door.rotation.z = Math.PI / 2;

  const window = new Mesh(geometries.window, materials.windowStyle);
  window.position.set(0,1.5,0.75);
  window.rotation.z = Math.PI / 2;

  
  return {
    body,
    ceiling,
    door,
    window,
  };
}

export { createHouseMeshes };
