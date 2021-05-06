import { Group, MathUtils } from 'three';
import { createHouseMeshes } from './meshes';


const wheelSpeed = MathUtils.degToRad(300);

class WindMill extends Group {
    meshes = createHouseMeshes();
    constructor() {
        super();
        this.add(
            this.meshes.body,
            this.meshes.ceiling,
            this.meshes.door,
            this.meshes.window,
            this.meshes.propeller1,
            this.meshes.propeller2,
            this.meshes.wood
        );
    }

    tick(delta) {
        this.meshes.propeller1.rotation.z += wheelSpeed * delta;
        this.meshes.propeller2.rotation.z += wheelSpeed * delta;
    }
}

export { WindMill };
