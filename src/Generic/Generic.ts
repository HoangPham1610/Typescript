function identity<T>(arg: T): T {
  return arg;
}

let num1 = identity<number>(1);
let str1 = identity<string>("string");
