/* 

Day 9: Recursion 3
Objective
Today, we’re learning and practicing an algorithmic concept called Recursion. Check out the Tutorial tab for learning materials and an instructional video!

Recursive Method for Calculating Factorial

Recursive Method for Calculating Factorial
Recursive Method for Calculating Factorial

Task
Write a factorial function that takes a positive integer, N as a parameter and prints the result of N! (N factorial).

Note: If you fail to use recursion or fail to name your recursive function factorial or Factorial, you will get a score of 0.

Input Format
A single integer, N (the argument to pass to factorial).

Constraints
2 <= N <= 12
Your submission must contain a recursive function named factorial.
Output Format
Print a single integer denoting N!.

Sample Input
1
3
Sample Output
1
6
Explanation
Consider the following steps:

factorial(3) = 3 X factorial(2)
factorial(2) = 2 X factorial(1)
factorial(1) = 1
From steps 2 and 3, we can say factorial(2) = 2 X 1 = 2; then when we apply the value from factorial(2) to step 1, we get factorial(3) = 3 X 2 X 1 = 6. Thus, we print 6 as our answer.

*/

/*jshint esversion: 6 */

// solution 1
function factorial(n) {
    return (!+n) ? 1 : n * factorial(n - 1);
}

// solution 2
let memoization = [0, 1];

const factorial = (n) => {
    (typeof memoization[n] !== 'number') && (
        memoization[n] = (n - 1) > 0 ? n * factorial(n - 1) : 1
    );

    return memoization[n];
}