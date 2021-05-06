import { DoubleSide, ImageUtils, MeshBasicMaterial, MeshStandardMaterial, TextureLoader } from 'three';
const loader = new TextureLoader();

export function createMilkyWayMaterials() {
  const milkyWayStyle = new MeshBasicMaterial({
    map:loader.load('assets/milky-way.jpg'),
    side:DoubleSide
  });


  return { milkyWayStyle};
}
