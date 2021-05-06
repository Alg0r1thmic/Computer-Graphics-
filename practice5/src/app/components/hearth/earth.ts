import { AU, sunSize } from 'src/app/utils/constants';
import { getRandomArbitrary } from 'src/app/utils/utils';
import { Group } from 'three';
import { createMesh } from './meshes';
import { createMesh as createMoonMesh } from './../moon'
class Earth extends Group {
    earthOrbitRadius = sunSize + AU;
    earthOrbitAngle = getRandomArbitrary(0, 360);
    earthOrbitSpeed = 0.6;
    earthRotateSpeed = 0.05;
    
    moonOrbitRadius = 6;
    moonOrbitAngle = getRandomArbitrary(0, 360);
    moonOrbitSpeed = 2;
    moonRotateSpeed = 0.5;
    
    meshes = createMesh();
    moonMesh= createMoonMesh();


    constructor() {
        super();
        this.add(
            this.meshes.mesh,
            this.moonMesh.mesh
        );
    }

    tick(delta) {

        this.earthOrbitAngle -= this.earthOrbitSpeed;
        var radians = this.earthOrbitAngle * Math.PI / 180;
        this.meshes.mesh.position.x = Math.cos(radians) * this.earthOrbitRadius;
        this.meshes.mesh.position.z = Math.sin(radians) * this.earthOrbitRadius;
        this.meshes.mesh.rotation.y += this.earthRotateSpeed;

        this.moonOrbitAngle -= this.moonOrbitSpeed;
        var radian1 = this.moonOrbitAngle * Math.PI / 180;
        this.moonMesh.mesh.rotation.y += this.moonRotateSpeed;

        this.moonMesh.mesh.position.x=Math.cos(radian1) * this.moonOrbitRadius+this.meshes.mesh.position.x;
        this.moonMesh.mesh.position.z=Math.sin(radian1) * this.moonOrbitRadius+this.meshes.mesh.position.z;
    }
}

export { Earth };
