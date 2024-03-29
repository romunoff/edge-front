import { Body } from 'cannon-es';
import { Mesh } from 'three';

export interface PlayerGeometry {
  id: string;
  body?: Body;
  geometry?: Mesh;
}
