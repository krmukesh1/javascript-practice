let num = 5;
var isprimenumber = true;
for (var i = 2; i < num; i++) {
  if (num % i === 0) {
    isprimenumber = false;
  }
}
if (isprimenumber === true) {
  console.log(`${num} is  a prime number`);
} else {
  console.log(`${num} is not a prime number`);
}
