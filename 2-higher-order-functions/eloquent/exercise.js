// Challenge 1. Flattening
let arrays = [[1, 2, 3], [4, 5], [6]];

arrays.reduce((acc, elm) => {
  acc.concat(elm)
}, [])
// → [1, 2, 3, 4, 5, 6]

// Challenge 2. Your own loop
function myLoop(n, condition, update, fn) {
  while(condition(n)) {
    fn(n);
    n = update(n)
  }
}

myLoop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1

// Challenge 3. Everything
function every(array, test) {
 
}

console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true

// Challenge 4. Dominant writing direction
function dominantDirection(text) {
  let arr = [];
  for(elm of array) {
    if()
  }
}

console.log(dominantDirection("Hello!"));
// → ltr
console.log(dominantDirection("Hey, مساء الخير"));
// → rtl
