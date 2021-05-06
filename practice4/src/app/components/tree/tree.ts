import { Group, MathUtils } from 'three';
import { createHouseMeshes } from './meshes';


const wheelSpeed = MathUtils.degToRad(24);

class Tree extends Group {
    meshes = createHouseMeshes();
    constructor() {
        super();
        this.add(
            this.meshes.body,
            this.meshes.ceiling,
        );
    }

    // tick(delta) {
    //     this.meshes.bigWheel.rotation.y += wheelSpeed * delta;
    //     this.meshes.smallWheelRear.rotation.y += wheelSpeed * delta;
    //     this.meshes.smallWheelCenter.rotation.y += wheelSpeed * delta;
    //     this.meshes.smallWheelFront.rotation.y += wheelSpeed * delta;
    // }
}

export { Tree };
