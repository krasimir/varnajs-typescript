// ---------------------------------------------------
// Interface type
interface PointI {
  x: number;
  y: number;
}
interface SetPointI {
  (x: number, y: number): void;
}
// Type alias
type Point = {
  x: number;
  y: number;
};
type SetPoint = (x: number, y: number) => void;

// ---------------------------------------------------
// Only with type aliases

// primitive
type Name = string;
// object and then union
type PartialPointX = { x: number };
type PartialPointY = { y: number };
type PartialPoint = PartialPointX | PartialPointY;
// tuple
type Data = [number, string];

// ---------------------------------------------------
// Extending

// Interface extends interface
interface FooI {
  x: number;
}
interface BarI extends FooI {
  y: number;
}
// Type alias extends type alias
type Foo = { x: number };
type Bar = Foo & { y: number };
// Interface extends type alias
type AAA = { x: number };
interface BBB extends PartialPointX {
  y: number;
}
// Type alias extends interface
interface CCC {
  x: number;
}
type DDD = CCC & { y: number };

// ---------------------------------------------------
// Implementing

interface PPP {
  x: number;
  y: number;
}
class SomePoint implements Point {
  constructor(x: number, y: number) {
    this.x = 1;
    this.y = 2;
  }

  x: 1;

  y: 2;
}

type PPP2 = {
  x: number;
  y: number;
};

class SomePoint2 implements PPP2 {
  constructor(x: number, y: number) {
    this.x = 1;
    this.y = 2;
  }

  x: 1;

  y: 2;
}

type PPPUnion = { x: number } | { y: number };

// FIXME: can not implement a union type
/*
class SomePartialPoint implements PPPUnion {
  x: 1;

  y: 2;
}
*/

// ---------------------------------------------------
// Declaration merging
interface PP {
  x: number;
}
interface PP {
  y: number;
}
