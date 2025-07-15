/**
 * Properties of a single floating triangle
 */
export type Triangle = {
  /** Unique identifier for the triangle */
  id: number;
  /** Horizontal position as a percentage (0-100) */
  x: number;
  /** Vertical position as a percentage (0-100) */
  y: number;
  /** Size of the triangle in pixels */
  size: number;
  /** Rotation angle in degrees */
  rotation: number;
  /** Movement speed in units per frame */
  speed: number;
  /** Opacity value between 0 and 1 */
  opacity: number;
} 