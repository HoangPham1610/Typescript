let num: number = 1;
let str: string = "";
let bool: boolean = true;
let symbol: symbol = Symbol("a");
let bigint: bigint = 1n;

// Array
let list: number[] = [1, 2, 3];

// Tuple
let x: [string, number];
x = ["hello", 10]; // OK

// Enum
enum Color {
  Red,
  Green,
  Blue,
}
let c: Color = Color.Green;

// Unknown
let notSure: unknown = 4;
notSure = "maybe a string instead";
notSure = false; // OK, definitely a boolean

// Any
let anyVar;

// Void
function warnUser(): void {
  console.log("This is my warning message");
}

function test() {}
let a = test();

// Null and Undefined
let u: undefined = undefined;
let n: null = null;

// Never
// Function returning never must not have a reachable end point
function error(message: string): never {
  throw new Error(message);
}

// Object
declare function create(o: object): void;
// OK
create({ prop: 0 });

// Type aliases

type StringOrNumber = string | number;
