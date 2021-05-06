import { createCamera } from "./helpers/camera";
import { createAxesHelper, createGridHelper } from "./helpers/helpers";
import { createLights } from "./helpers/lights";
import { createScene } from "./helpers/scene";
import { createControls } from "./systems/controls";
import { Loop } from "./systems/loop";
import { createRenderer } from "./systems/renderer";
import { Resizer } from "./systems/resizer";
import { SimpleHouse } from "./house/house";
import { WindMill } from "./windmill";
import { Tree } from "./tree";
import { BoxBufferGeometry, Matrix4, Mesh, MeshStandardMaterial } from "three";



let camera;
let renderer;
let scene;
let loop;

class World {
  constructor(container) {
    camera = createCamera();
    renderer = createRenderer();
    scene = createScene();
    loop = new Loop(camera, scene, renderer);
    container.append(renderer.domElement);

    const controls = createControls(camera, renderer.domElement);
    const { ambientLight, mainLight } = createLights();
    const box = new BoxBufferGeometry(2, 2.25, 1.5);
    const boxMaterial = new MeshStandardMaterial({
      color: 'lemonchiffon',
      flatShading: true,
    });
  
    const boxMesh = new Mesh(box, boxMaterial);
    boxMesh.position.set(0, 1, 0);
    const translation1=new Matrix4();
    translation1.set(
      1,0,0,0.01,
      0,1,0,0,
      0,0,1,0,
      0,0,0,1);
    const translation2=new Matrix4();
    translation2.set(
      1,0,0,0.01,
      0,1,0,0,
      0,0,1,0.02,
      0,0,0,1);

    const scale1=new Matrix4();
    scale1.set(
      1,0,0,0,
      0,1.01,0,0,
      0,0,1,0,
      0,0,0,1);
    
    const scale2=new Matrix4();
    scale2.set(
      1.01,0,0,0,
      0,1.01,0,0,
      0,0,1.01,0,
      0,0,0,1);
    let sin=Math.sin;
    let cos=Math.cos;
  
    //boxMesh.geometry.applyMatrix4();  
    scene.add(ambientLight, mainLight,boxMesh);

    const resizer = new Resizer(container, camera, renderer);

    scene.add(createAxesHelper(), createGridHelper());
  }

  render() {
    renderer.render(scene, camera);
  }

  start() {
    loop.start();
  }

  stop() {
    loop.stop();
  }
}

export { World };
