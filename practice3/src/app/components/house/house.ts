import { Group, MathUtils } from 'three';
import { createHouseMeshes } from './meshes';


const wheelSpeed = MathUtils.degToRad(24);

class SimpleHouse extends Group {
    meshes = createHouseMeshes();
    constructor() {
        super();
        this.add(
            this.meshes.body,
            this.meshes.ceiling,
            this.meshes.door,
            this.meshes.window,
        );
    }

    // tick(delta) {
    //     this.meshes.bigWheel.rotation.y += wheelSpeed * delta;
    //     this.meshes.smallWheelRear.rotation.y += wheelSpeed * delta;
    //     this.meshes.smallWheelCenter.rotation.y += wheelSpeed * delta;
    //     this.meshes.smallWheelFront.rotation.y += wheelSpeed * delta;
    // }
}

export { SimpleHouse };
