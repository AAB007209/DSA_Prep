// - Problem Description (Book Allocation Problem)

// Link - https://takeuforward.org/data-structure/allocate-minimum-number-of-pages

/*
Problem Statement: Given an array ‘arr of integer numbers, ‘ar[i]’ represents the number of pages in the ‘i-th’ book. There are a ‘m’ number of students, and the task is to allocate all the books to the students.
Allocate books in such a way that:

Each student gets at least one book.
Each book should be allocated to only one student.
Book allocation should be in a contiguous manner.
You have to allocate the book to ‘m’ students such that the maximum number of pages assigned to a student is minimum. If the allocation of books is not possible. return -1
*/

// - Bruteforce Approach (Linear Search)
// Time Complexity - O(N * (sum(arr[])-max(arr[])+1))
// Space Complexity - O(1)

function countStudents(books, pages){
    let n = books.length;
    let students = 1;
    let pagesStudent = 0;

    for(let i=0; i<n; i++){
        if(pagesStudent + books[i] <= pages){
            pagesStudent += books[i];
        }else{
            students++;
            pagesStudent = books[i];
        }
    }
    return students;
}

function findPages1(books, students) {
    let n = books.length;
    if(students > n) return -1;

    let low = Math.max(...books);
    let high = books.reduce((a, b) => a + b);

    for(let pages = low; pages <= high; pages++){
        if(countStudents(books, pages) === students){
            return pages;
        }
    }
    return low;
}

// - Optimaal Approach (Binary Search)
// Time Complexity - O(N * log(sum(arr[])-max(arr[])+1))
// Space Complexity - O(1)
function findPages2(books, students) {
    let n = books.length;
    if(students > n) return -1;

    let low = Math.max(...books);
    let high = books.reduce((a, b) => a + b);

    while(low <= high){
        let mid = (low + high) >> 1;
        if(countStudents(books, mid) <= students){
            high = mid - 1;
        }else{
            low = mid + 1;
        }
    }
    return low;
}

// - Driver code
// Bruteforce
console.log(findPages1([25, 46, 28, 49, 24], 4)); // 71
console.log(findPages1([10, 10, 10, 10], 2)); // 20
console.log(findPages1([12, 34, 67, 90], 1)); // 203
console.log(findPages1([20, 30, 40], 5)); // -1
console.log(findPages1([10, 20, 30, 40, 50], 3)); // 60
console.log(findPages1([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 5)); // 150

// Optimal
console.log(findPages2([25, 46, 28, 49, 24], 4)); // 71
console.log(findPages2([10, 10, 10, 10], 2)); // 20
console.log(findPages2([12, 34, 67, 90], 1)); // 203
console.log(findPages2([20, 30, 40], 5)); // -1
console.log(findPages2([10, 20, 30, 40, 50], 3)); // 60
console.log(findPages2([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 5)); // 150