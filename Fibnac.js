// const num = 100;
// let x = 0;
// let y = 1;

// var fn = x + y;
// console.log(x);
// console.log("outer fn" + fn);
// while (fn < num) {
//     debugger;
//   console.log(fn);
//   var fn = x + y;

//   x = y;
//   y = fn;
// }

function fab(n) {
  const array = [0, 1];

  for (var i = 2; i < n; i++) {
    array.push(array[i - 2] + array[i - 1]);
  }
  return array;
}
console.log(fab(10));
