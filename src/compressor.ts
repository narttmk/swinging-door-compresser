import { CPoint } from "./cpoint";

export class SwingDoor {
  original: CPoint;
  snapshot: CPoint;
  comDev: number;
  comMax: number;
  slopeHigh: number;
  slopeLow: number;

  constructor(comDev: number, comMax: number =- 1, original: CPoint, snapshot: CPoint) {
    this.comDev = comDev;
    this.comMax = comMax;
    this.original = original;
    this.slopeHigh = Infinity;
    this.slopeLow = -Infinity;
    this.snapshot = snapshot;
    this.slopeHigh = Math.min(
      this.slopeHigh,
      (this.snapshot.y + this.comDev - this.original.y) /
        (this.snapshot.y - this.original.y)
    );

    this.slopeLow = Math.max(
      this.slopeHigh,
      (this.snapshot.y - this.comDev - this.original.y) /
        (this.snapshot.y - this.original.y)
    );
  }
  
  caculateWindow(point: CPoint) {
    this.slopeHigh = Infinity;
    this.slopeLow = -Infinity;
    if (this.snapshot !== null) {
      this.original = this.snapshot;
    }
    this.snapshot = point;
  }

  check(point: CPoint) {
    let store: CPoint;
    let slope = (point.y - this.original.y) / (point.x - this.original.x);
    let timeDiff = point.x - this.original.x;

    if (slope < this.slopeLow || slope > this.slopeHigh) {
      store = this.snapshot;
      this.caculateWindow(store);
      return store;
    } else if (timeDiff > this.comMax) {
      store = point
			this.caculateWindow(point);
    }
  
    this.slopeHigh = Math.min(
      this.slopeHigh,
      (this.snapshot.y + this.comDev - this.original.y) /
        (this.snapshot.y - this.original.y)
    );

    this.slopeLow = Math.max(
      this.slopeHigh,
      (this.snapshot.y - this.comDev - this.original.y) /
        (this.snapshot.y - this.original.y)
    );
    this.snapshot = point;
    return null;
  }

}