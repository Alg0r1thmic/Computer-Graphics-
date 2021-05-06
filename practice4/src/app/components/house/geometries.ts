import { BoxBufferGeometry, CylinderBufferGeometry } from 'three';

export function createHouseGeometries() {
  const body = new BoxBufferGeometry(2, 2.25, 1.5);

  const ceiling = new CylinderBufferGeometry(0, 1.7, 1.2, 12);

  const door = new BoxBufferGeometry(1.2, 0.1, 0.8);

  const window =new BoxBufferGeometry(0.4, 1, 0.1);

    
  return {
    body,
    ceiling,
    door,
    window,
  };
}

