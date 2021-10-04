function revInt(num) {
  let intNum = num.toString().split("").reverse().join("");
  console.log(intNum);
  if (intNum.endsWith("-")) {
    intNum = "-" + intNum;
    return parseInt(intNum);
  } else {
    return parseInt(intNum);
  }
}
console.log(revInt(-123));
