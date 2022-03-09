const nums1 = [5,3,4,2,1];
// expected output [1,2,3,4,5]
const nums2 = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const nums3 = [10, 9, 10, 8, 7, 6, 5, 4, 3, 2, 1];

function selectionSort(nums){
    for (let i = 0; i < nums.length - 1; i++){
        let minIdx = i;
        for (let j = i + 1; j < nums.length; j++){
            if (nums[j] < nums[minIdx]){
                minIdx = j;
            }
        }
        [nums[i],nums[minIdx]] = [nums[minIdx],nums[i]];
    }
    return nums;
}

console.log(selectionSort(nums1));
console.log(selectionSort(nums2));
console.log(selectionSort(nums3));
