import { BoxBufferGeometry, CylinderBufferGeometry } from 'three';

export function createHouseGeometries() {
  const body = new CylinderBufferGeometry(0.3,0.3, 1.5,12);

  const ceiling = new CylinderBufferGeometry(0, 0.6, 1.2, 12);

  return {
    body,
    ceiling,
  };
}

