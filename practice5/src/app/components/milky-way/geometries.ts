import { SphereGeometry } from 'three';

export function createMilkyWayGeometries() {
  const milkyWaySize = 15500;
  const milkyWay = new SphereGeometry(milkyWaySize, 35, 35);
  return {
    milkyWay
  };
}

