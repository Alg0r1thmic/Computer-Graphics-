import { createCamera } from "./helpers/camera";
import { createAxesHelper, createGridHelper } from "./helpers/helpers";
import { createLights } from "./helpers/lights";
import { createScene } from "./helpers/scene";
import { createControls } from "./systems/controls";
import { Loop } from "./systems/loop";
import { createRenderer } from "./systems/renderer";
import { Resizer } from "./systems/resizer";

import { AmbientLight, FogExp2 } from "three";
import { createMilkyWayMesh } from "./milky-way";
import { createSunMesh } from './sun';
import { Sun } from "./sun/sun";
import { Earth } from "./hearth";
import { Mercury } from "./mercury";
import { Moon } from "./moon";


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
    scene.add(new AmbientLight(0x222222))
    
    
    const meshes=createMilkyWayMesh();
    const sun=new Sun();
    const earth=new Earth();
    const mercury=new Mercury();
    loop.updatables.push(controls, sun,mercury,earth);
    scene.add(ambientLight, mainLight,
      meshes.milkyWay,
      sun,mercury,earth
    );
    scene.fog=new FogExp2(0x000000, 0.00008);

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
