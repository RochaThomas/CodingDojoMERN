

const nums1 = [5,3,4,2,1];
// expected output [1,2,3,4,5]
const nums2 = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const nums3 = [10, 9, 10, 8, 7, 6, 5, 4, 3, 2, 1];

/*
use recursion that splits array until length of the aray is 1
then have another helper function that merges the arrays
*/

function mergeSort(arr) {
    if (arr.length == 1){
        return arr;
    }

    let mid = Math.floor(arr.length/2);
    let left = arr.slice(0, mid); 
    let right = arr.slice(mid, arr.length);
    
    let arrLeft = mergeSort(left);
    let arrRight = mergeSort(right);
    return mergeSortedArrays(arrLeft, arrRight);
}

var mergeArr2 = [55,66];
var mergeArr1 = [33,44];

var mergeArrA = [33,44,55];
var mergeArrB = [11,66];

var arrLeft = [22];
var arrRight = [11,33];

function mergeSortedArrays(arrLeft, arrRight){
    let sortedArr = [];
    let leftIdx = 0;
    let rightIdx = 0;

    while (leftIdx < arrLeft.length && rightIdx < arrRight.length){
        if (arrLeft[leftIdx] < arrRight[rightIdx]) {
            sortedArr.push(arrLeft[leftIdx]);
            leftIdx++;
        }
        else {
            sortedArr.push(arrRight[rightIdx]);
            rightIdx++;
        }
    }
    while (leftIdx < arrLeft.length) {
        sortedArr.push(arrLeft[leftIdx]);
        leftIdx++;
    }
    while (rightIdx < arrRight.length) {
        sortedArr.push(arrRight[rightIdx]);
        rightIdx++;
    }
    //check length of input arrays
    //push to sorted array
    return sortedArr;
}

console.log(mergeSortedArrays(mergeArr2, mergeArr1));
console.log(mergeSortedArrays(mergeArrA, mergeArrB));
console.log(mergeSortedArrays(arrLeft, arrRight));
console.log("-------------------");

console.log(mergeSort(nums1));
console.log(mergeSort(nums2));
console.log(mergeSort(nums3));
