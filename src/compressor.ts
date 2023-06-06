import { CPoint } from "./cpoint";

type NullableCpoint = CPoint | null;

export class SwingDoor {
  original: NullableCpoint;
  snapshot: NullableCpoint;
  comDev: number;
  comMax: number;
  slopeHigh: number;
  slopeLow: number;

  constructor(comDev: number, comMax: number =- 1, original: NullableCpoint = null, snapshot: NullableCpoint = null) {
    this.comDev = comDev;
    this.comMax = comMax;
    this.original = original;
    this.slopeHigh = Infinity;
    this.slopeLow = -Infinity;
    this.snapshot = snapshot;
    if (this.original && this.snapshot) {
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
  }
  
  caculateWindow(point: NullableCpoint) {
    this.slopeHigh = Infinity;
    this.slopeLow = -Infinity;
    if (this.snapshot) {
      this.original = this.snapshot;
    }
    this.snapshot = point;
  }

  check(point: CPoint) {
    if (!this.original) {
      this.original = point;
      return point;
    }

    let store: NullableCpoint;
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
  
    if (this.original && this.snapshot) {
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
    this.snapshot = point;
    return null;
  }

}