import {  MeshLambertMaterial, MeshPhongMaterial, SmoothShading, TextureLoader } from 'three';
const loader = new TextureLoader();

export function createMaterials() {
  const material = new MeshPhongMaterial({
    map:loader.load('assets/mercury.jpg'),
    flatShading:true
  });

  return { material};
}
