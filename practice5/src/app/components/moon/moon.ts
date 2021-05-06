import { AU, sunSize } from 'src/app/utils/constants';
import { getRandomArbitrary } from 'src/app/utils/utils';
import { Group } from 'three';
import { createMesh } from './meshes';

class Moon extends Group {
    earthOrbitRadius = sunSize+3 + AU+3;
    earthOrbitAngle = getRandomArbitrary(0, 360);
    earthOrbitSpeed = 0.6;
    earthRotateSpeed = 0.05;
    meshes = createMesh();
    constructor() {
        super();
        this.add(
            this.meshes.mesh
        );
    }

    tick(delta) {

        this.earthOrbitAngle -= this.earthOrbitSpeed;
        var radians = this.earthOrbitAngle * Math.PI / 180;
        this.meshes.mesh.position.x = Math.cos(radians) * this.earthOrbitRadius;
        this.meshes.mesh.position.z = Math.sin(radians) * this.earthOrbitRadius;
        this.meshes.mesh.rotation.y += this.earthRotateSpeed;
    }
}

export { Moon };
