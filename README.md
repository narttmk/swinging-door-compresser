# Swinging door compression

This base on [https://github.com/Dymerz/swingingpy/](https://github.com/Dymerz/swingingpy)

Algorithm: [Swing Door Compression Algorithm](https://www.envisioniot.com/docs/time-series-data/en/2.3.0/reference/compression_algorithm.html)
https://www.youtube.com/watch?v=89hg2mme7S0&ab_channel=AVEVAPISystemLearning

### Example:

```typescript
import { CPoint, SwingDoor } from "swing-door-compressor";

const compDev = 1;
const compMax = 5;
const original = new CPoint(1, 2);
const snapshot = new CPoint(2, 2);
const swing = new SwingDoor(compDev, compMax, original, snapshot);

const points = [
  new CPoint(3, 2),
  new CPoint(4, 1),
  new CPoint(5, 3),
  new CPoint(6, 5),
];

points.forEach((p) => {
    if (swing.check(p)) {
        console.log(p)
    }
})
```