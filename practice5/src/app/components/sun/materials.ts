import { DoubleSide, ImageUtils, MeshBasicMaterial, MeshStandardMaterial, TextureLoader } from 'three';
const loader = new TextureLoader();

export function createSunMaterials() {
  const sunStyle = new MeshBasicMaterial({
    map:loader.load('assets/sun.jpg'),
    side:DoubleSide
  });


  return { sunStyle};
}
