// - Binary Search

// - Iterative
function bin_search(nums, t){
    let low = 0, high = nums.length - 1;

    if(low <= high){
        let mid = (low + high) >> 1;

        if(nums[mid] === t){
            return true;
        }
        else if(nums[mid] < t){
            low = mid + 1;
        }
        else{
            right = mid - 1;
        }
    }
    return false;
}

// - Recursive
function binarySearch(arr, low, high, x) {
    if (low > high) return -1;

    let mid = Math.floor((low + high) / 2);

    if (arr[mid] === x) return mid;

    if (arr[mid] > x) {
        return binarySearch(arr, low, mid - 1, x); // Search in left half
    } else {
        return binarySearch(arr, mid + 1, high, x); // Search in right half
    }
}

// - Iterative
console.log(bin_search([7, 1, 9, 8, 10, 5, 4], 2));

// Example Usage - Recursive (Returns index)
let arr = [1, 3, 5, 7, 9, 11, 15];
let target = 7;
console.log(binarySearch(arr, 0, arr.length - 1, target)); // Output: 3