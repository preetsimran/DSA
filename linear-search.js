function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

const array = [1, 2, 3, 4, 5, 6, 7];
const targetValue = 4;

const result = linearSearch(array, targetValue);

if (result !== -1) {
  console.log(`Element ${targetValue} found at index ${result}.`);
} else {
  console.log(`Element ${targetValue} not found in the array.`);
}
