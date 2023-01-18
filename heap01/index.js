function heapSort(arr) {
  for (let i = Math.floor(arr.length / 2); i >= 0; i--) {
    heapify(arr, i, arr.length);
  }

  for (let i = arr.length - 1; i > 0; i--) {
    // Move current root to end
    [arr[0], arr[i]] = [arr[i], arr[0]];

    // Call heapify on the reduced heap
    heapify(arr, 0, i);
  }
  console.log("AFTER", arr.join());

  return arr;
}

//BEFORE:  15,5,20,1,17,10,30
function heapify(arr, i, n) {
  let largest = i;
  let left = 2 * i + 1;
  let right = 2 * i + 2;

  if (left < n && arr[left] > arr[largest]) {
    largest = left;
  }
  if (right < n && arr[right] > arr[largest]) {
    largest = right;
  }

  if (i != largest) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]];
    heapify(arr, largest, n);
  }
}


let arr = [15, 5, 20, 1, 17, 10, 30];
console.log("BEFORE", arr.join());
const result = heapSort(arr);
