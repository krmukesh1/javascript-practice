const array1 = [1, 2, 2, 3, 4, 5];
const array2 = [2, 2, 3];

const interSect = array1.filter((curElem) => {
  return array2.includes(curElem);
});
console.log([...new Set(interSect)]);
