function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}

const sortedArray = [2, 4, 7, 10, 18, 23, 29, 30];
const targetValue = 18;

const result = binarySearch(sortedArray, targetValue);

if (result !== -1) {
  console.log(`Element ${targetValue} found at index ${result}.`);
} else {
  console.log(`Element ${targetValue} not found in the array.`);
}
