import { SwingDoor } from "../src/compressor";
import { CPoint } from "../src/cpoint";

const compDev = 1;
const compMax = 5;
const swing = new SwingDoor(compDev, compMax, null, null);

const points = [
    new CPoint(1, 2),
    new CPoint(2, 3),
    new CPoint(3, 2),
    new CPoint(4, 1),
    new CPoint(5, 1),
    new CPoint(6, 2),
    new CPoint(7, 6),
    new CPoint(8, 9),
    new CPoint(9, 5),
    new CPoint(10, 3),
    new CPoint(11, 2),
    new CPoint(12, 2),
    new CPoint(13, 2),
    new CPoint(14, 3),
    new CPoint(15, 2),
    new CPoint(16, 4),
    new CPoint(17, 2),
    new CPoint(18, 4),
    new CPoint(19, 7),
    new CPoint(20, 9),
    new CPoint(21, 12),
    new CPoint(22, 10),
    new CPoint(23, 8),
    new CPoint(24, 5),
    new CPoint(25, 4),
    new CPoint(26, 4),
    new CPoint(27, 2),
    new CPoint(28, 19),
    new CPoint(29, 8),
    new CPoint(30, 3),
];

points.forEach((p) => {
  if (swing.check(p)) {
    console.log(p);
  }
});

