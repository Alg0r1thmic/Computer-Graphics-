import { Mesh } from 'three';
import { createHouseGeometries } from './geometries';
import { createHouseMaterials } from './materials';

function createHouseMeshes() {
  const geometries = createHouseGeometries();
  const materials = createHouseMaterials();

  const body = new Mesh(geometries.body, materials.bodyStyle);
  body.position.set(0, 1.5, 0);

  const ceiling = new Mesh(geometries.ceiling, materials.ceilingStyle);
  ceiling.position.set(0, 3.5, 0);

  const door = new Mesh(geometries.door, materials.doorStyle);
  door.position.set(-1.1, 0.4,0.2);
  door.rotation.z = Math.PI / 2.2;

  const propeller1 = new Mesh(geometries.propeller1, materials.wood);
  propeller1.position.set(0,3,1.6);
  propeller1.rotation.z = Math.PI / 3;
  
  
  const propeller2 = new Mesh(geometries.propeller2, materials.wood);
  propeller2.position.set(0, 3,1.6);
  propeller2.rotation.z = Math.PI / 1.5;
 
  const wood = new Mesh(geometries.wood, materials.wood);
  wood.position.set(0, 3,1.2);
  wood.rotation.x= Math.PI / 2;



  const window = new Mesh(geometries.window, materials.windowStyle);
  window.position.set(0.3,2.1,0.8);
  window.rotation.z = Math.PI / 2.1;
  window.rotation.x = Math.PI / 1.1;

  

  return {
    body,
    ceiling,
    door,
    window,
    propeller1,propeller2,wood
  };
}

export { createHouseMeshes };
