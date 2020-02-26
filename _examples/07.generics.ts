function normalize<T>(arg: T): [T, Function] {
  return [arg, () => 42];
}

console.log(normalize('foo'));

/*

https://github.com/DefinitelyTyped/DefinitelyTyped/blob/24f1d0c82da2d898acd03fbb3e692eba3c431f82/types/react/index.d.ts#L865

function useState<S>(initialState: S | (() => S)): [S, Dispatch<SetStateAction<S>>];

*/
