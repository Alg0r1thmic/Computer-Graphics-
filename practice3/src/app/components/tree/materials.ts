import { MeshStandardMaterial } from 'three';

export function createHouseMaterials() {
  const body = new MeshStandardMaterial({
    color: 'olive',
    flatShading: true,
  });

  const detail = new MeshStandardMaterial({
    color: 'green',
    flatShading: true,
  });

  return { body, detail };
}
