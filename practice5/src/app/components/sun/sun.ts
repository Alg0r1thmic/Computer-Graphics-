import { Group, MathUtils } from 'three';
import { createSunMesh } from './meshes';


class Sun extends Group {
    meshes = createSunMesh();
    constructor() {
        super();
        this.add(
            this.meshes.sun
        );
    }

    tick(delta) {
        this.meshes.sun.rotation.y += 0.001;
    }
}

export { Sun };
