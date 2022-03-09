
const nums1 = [5,3,4,2,1];
// expected output [1,2,3,4,5]
const nums2 = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const nums3 = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

/*

second for loop let j = ... ; j < nums.length - 1; j++
*/

function bubbleSort(nums){
    for (let i = 0; i < nums.length; i++){
        for (let j = 0; j < nums.length; j++){
            if (nums[i] < nums[j]) {
                [nums[i],nums[j]] = [nums[j],nums[i]];
            }
        }
    }
    return nums;
}

console.log(bubbleSort(nums1));
console.log(bubbleSort(nums2));
console.log(bubbleSort(nums3));