function reversePair<T,U>(value1:T,value2:U):[U,T] {
  return [value2,value1];
}

const reversedPair = reversePair("Hello", 42);
console.log(reversedPair);

// Generic function to combine two values into an array
function combineValues<T, U>(value1: T, value2: U): [T, U] {
  return [value1, value2];
}

const combinedStringAndNumber = combineValues("Hello", 42);
console.log(combinedStringAndNumber);
