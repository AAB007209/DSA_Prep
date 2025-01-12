// - Problem Description (Leetcode: 735: Asteroid Collision)

// Link - https://leetcode.com/problems/asteroid-collision/

/*
We are given an array asteroids of integers representing asteroids in a row. The indices of the asteriod in the array represent their relative position in space.

For each asteroid, the absolute value represents its size, and the sign represents its direction (positive meaning right, negative meaning left). Each asteroid moves at the same speed.

Find out the state of the asteroids after all collisions. If two asteroids meet, the smaller one will explode. If both are the same size, both will explode. Two asteroids moving in the same direction will never meet.
*/

// - Bruteforce Approach
// Time Complexity - O(N^2)
// Space Complexity - O(1)

function asteroidCollision(asteroids) {
    let i = 0;

    while (i < asteroids.length - 1) {

        // Check for a collision between adjacent asteroids
        if (asteroids[i] > 0 && asteroids[i + 1] < 0) {

            // Both asteroids collide
            if (Math.abs(asteroids[i]) > Math.abs(asteroids[i + 1])) {

                // Right-moving asteroid survives
                asteroids.splice(i + 1, 1); // Remove the left-moving asteroid
            } else if (Math.abs(asteroids[i]) < Math.abs(asteroids[i + 1])) {

                // Left-moving asteroid survives
                asteroids.splice(i, 1); // Remove the right-moving asteroid
                i = Math.max(0, i - 1); // Step back to check previous collisions
            } else {

                // Both asteroids are destroyed
                asteroids.splice(i, 2); // Remove both
                i = Math.max(0, i - 1); // Step back to check previous collisions
            }
        } else {
            i++; // No collision, move to the next pair
        }
    }

    return asteroids;
}

// - Optimal Approach
// Time Complexity - O(N)
// Space Complexity - O(N)

function asteroidCollision2(asteroids) {
    const stack = [];

    for (let i = 0; i < asteroids.length; i++) {
        let current = asteroids[i];
        let collisionOccurred = false;

        // Process collisions only if current asteroid is moving left
        // and there's a right-moving asteroid on the stack
        while (stack.length > 0 && current < 0 && stack[stack.length - 1] > 0) {
            let last = stack[stack.length - 1];

            if (Math.abs(current) > last) {
                // Current asteroid destroys the last asteroid on the stack
                stack.pop();
                continue; // Continue checking for further possible collisions
            } else if (Math.abs(current) === last) {
                // Both asteroids destroy each other
                stack.pop();
                collisionOccurred = true;
                break;
            } else {
                // Current asteroid is destroyed by the last asteroid on the stack
                collisionOccurred = true;
                break;
            }
        }

        if (!collisionOccurred) {
            // If no collision occurred, push the current asteroid onto the stack
            stack.push(current);
        }
        // If collision occurred and current asteroid is destroyed, do nothing
    }

    return stack;
}

// - Little more Optimal
// Time Complexity - O(N)
// Space Complexity - O(N

function asteroidCollision3(asteroids) {
    const stack = [];

    for (let i = 0; i < asteroids.length; i++) {
        const last = stack[stack.length - 1];
        const curr = asteroids[i];

        if (last > 0 && curr < 0) {
            // Colliding
            if (last + curr === 0) {
                stack.pop();
            } else if (Math.abs(last) < Math.abs(curr)) {
                stack.pop();
                i--;
            }
        } else {
            stack.push(curr);
        }
    }

    return stack;
}

// - Driver code

// Bruteforce
condCollision([5, 10, -5])); // Output: [ 5 , 10 ]
console.log(asteroidCollision([8, -8])); // Output: [ ]
console.log(asteroidCollision([10, 2, -5])); // Output: [ 10 ]

// Optimal 
console.log(asteroidCollision2([5, 10, -5])); // Output: [ 5 , 10 ]
console.log(asteroidCollision2([8, -8])); // Output: [ ]
console.log(asteroidCollision2([10, 2, -5])); // Output: [ 10 ]sole.log(asteroi

// Optimal 2
console.log(asteroidCollision3([5, 10, -5])); // Output: [ 5 , 10 ]
console.log(asteroidCollision3([8, -8])); // Output: [ ]
console.log(asteroidCollision3([10, 2, -5])); // Output: [ 10 ]