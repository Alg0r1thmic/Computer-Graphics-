import { MeshStandardMaterial } from 'three';

export function createHouseMaterials() {
  const body = new MeshStandardMaterial({
    color: 'lemonchiffon',
    flatShading: true,
  });

  const detail = new MeshStandardMaterial({
    color: 'darkslategray',
    flatShading: true,
  });
  const windowStyle = new MeshStandardMaterial({
    color: 'cyan',
    flatShading: true,
  });
  const doorStyle = new MeshStandardMaterial({
    color: 'slategray',
    flatShading: true,
  });

  return { body, detail ,windowStyle,doorStyle};
}
