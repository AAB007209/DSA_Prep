// - Merge Sort Algorithm

function mergeSort(arr){
    // Base Case: An array of size 1 is already sorted
    if(arr.length <= 1) return arr;

    // Split the array into two halves
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    return merge(mergeSort(left), mergeSort(right)); // Recursive calls for the left and right arrays for getting sorted at last we merge the sorted arrays.
}

function merge(left, right){
    const result = [];
    let i=0, j=0;

    while(i < left.length && j < right.length){
        if(left[i] < right[j]){
            result.push(left[i]);
            i++;
        }else{
            result.push(right[j]);
            j++;
        }
    }

    // Left out elements in left array to be added to result array
    while(i < left.length){
        result.push(left[i]);
        i++;
    }

    // Left out elements in right array to be added to result array
    while(j < right.length){
        result.push(right[j]);
        j++;
    }

    return result;
}

// - Driver code
console.log(mergeSort([2, 4, 1, 3, 5]));