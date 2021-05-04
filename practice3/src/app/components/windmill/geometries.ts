import { BoxBufferGeometry, CylinderBufferGeometry } from 'three';

export function createHouseGeometries() {
    const body = new CylinderBufferGeometry(0.75, 1.2, 3, 12);

    const wood = new CylinderBufferGeometry(0.1, 0.1, 1, 12);

    const ceiling = new CylinderBufferGeometry(0, 1.5, 1.2, 12);

    const door = new BoxBufferGeometry(0.8, 0.1, 0.6);

    const window = new BoxBufferGeometry(0.2, 0.2, 0.1);

    const propeller1 = new BoxBufferGeometry(0.2,1.5, 0.1);

    const propeller2 = new BoxBufferGeometry(0.2, 1.5, 0.1);


    return {
        body,
        ceiling,
        door,
        window,
        propeller1,
        propeller2,wood
    };
}

