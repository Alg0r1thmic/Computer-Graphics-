import { AU, sunSize } from 'src/app/utils/constants';
import { getRandomArbitrary } from 'src/app/utils/utils';
import { Group } from 'three';
import { createMesh } from './meshes';

class Mercury extends Group {
    mercuryOrbitRadius = sunSize + (AU * 0.4);
    mercuryOrbitAngle = getRandomArbitrary(0, 360);
    mercuryOrbitSpeed = 0.8;
    mercuryRotateSpeed = 0.05;
    meshes = createMesh();
    constructor() {
        super();
        this.add(
            this.meshes.mesh
        );
    }

    tick(delta) {
        this.mercuryOrbitAngle -= this.mercuryOrbitSpeed;
        var radians = this.mercuryOrbitAngle * Math.PI / 180;
        this.meshes.mesh.position.x = Math.cos(radians) * this.mercuryOrbitRadius;
        this.meshes.mesh.position.z = Math.sin(radians) * this.mercuryOrbitRadius;
        this.meshes.mesh.rotation.y += this.mercuryRotateSpeed;
    }
}

export { Mercury };
