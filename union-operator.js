const num1 = [4, 5, 6, 7, 8];
const num2 = [5, 6, 8, 4, 7];

function union() {
  arrayOne = [...num1, ...num2];
  return [...new Set(arrayOne)];
}
console.log(union().sort().reverse());
