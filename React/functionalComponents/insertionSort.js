

const nums1 = [5,3,4,2,1];
// expected output [1,2,3,4,5]
const nums2 = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const nums3 = [10, 9, 10, 8, 7, 6, 5, 4, 3, 2, 1];

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++){
        let temp  = arr[i];
        for (let j = i - 1; j >= 0; j--){
            if (temp < arr[j]) {
                arr[j+1] = arr[j];
                arr[j] = temp;
            }
            else {
                break;
            }
        }
    }
    return arr;
}

console.log(insertionSort(nums1));
console.log(insertionSort(nums2));
console.log(insertionSort(nums3));