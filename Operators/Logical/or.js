let alert1 = false;
let alert2 = false;
let alert3 = true;

console.log(alert1 || alert2);    // false
console.log(alert2 || alert3);    // true
console.log(alert1 || alert3);    // true

let num1 = 0;
let num2 = 1;
let num3 = 0;

console.log(num1 || num2);    // 1
console.log(num2 || num3);    // 1
console.log(num1 || num3);    // 0