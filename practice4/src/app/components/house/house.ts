import { Group, MathUtils } from 'three';
import { createHouseMeshes } from './meshes';



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

}

export { SimpleHouse };
