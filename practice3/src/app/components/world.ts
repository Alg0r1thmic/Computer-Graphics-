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
    const house = new SimpleHouse();
    const tree = new Tree();
    const tree2 = new Tree();
    const tree3 = new Tree();
    const tree4 = new Tree();
    const tree5 = new Tree();
    const tree6 = new Tree();

    const windmill = new WindMill();
    house.translateX(-4)
    tree.translateZ(-4);
    tree2.translateZ(-2);
    tree2.translateX(-2);
    tree3.translateX(4);
    tree4.translateX(3);
    tree4.translateZ(-2);
    tree5.translateZ(-1.5);
    tree5.translateX(1);
    tree6.translateX(-6);
    
    
    loop.updatables.push(controls, windmill);
    scene.add(ambientLight, mainLight, tree, windmill, house,
      tree2,
      tree3,
      tree4,
      tree5,
      tree6,
    );

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
