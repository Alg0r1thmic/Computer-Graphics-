import { MeshStandardMaterial } from 'three';

export function createHouseMaterials() {
  const bodyStyle = new MeshStandardMaterial({
    color: 'lemonchiffon',
    flatShading: true,
  });

  const ceilingStyle = new MeshStandardMaterial({
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
  const propeller = new MeshStandardMaterial({
    color: 'slategray',
    flatShading: true,
  });
  const wood = new MeshStandardMaterial({
    color: 'olive',
    flatShading: true,
  });

  return { wood,bodyStyle, ceilingStyle ,windowStyle,doorStyle,propeller};
}
