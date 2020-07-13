// DAY: 19 Interfaces
// Objective
// Today, we’re learning about Interfaces. Check out the Tutorial tab for learning materials and an instructional video!

// Task
// The AdvancedArithmetic interface and the method declaration for the abstract int divisorSum(int n) method are provided for you in the editor below. Write the Calculator class, which implements the AdvancedArithmetic interface. The implementation for the divisorSum method must be public and take an integer parameter, , and return the sum of all its divisors.

// Note: Because we are writing multiple classes in the same file, do not use an access modifier (e.g.: public) in your class declaration (or your code will not compile); however, you must use the public access modifier before your method declaration for it to be accessible by the other classes in the file.

// Input Format

// A single line containing an integer, .

// Constraints

// Output Format

// You are not responsible for printing anything to stdout. The locked Solution class in the editor below will call your code and print the necessary output.

// Sample Input

// 6
// Sample Output

// I implemented: AdvancedArithmetic
// 12
// Explanation

// The integer is evenly divisible by , , , and . Our divisorSum method should return the sum of these numbers, which is . The Solution class then prints on the first line, followed by the sum returned by divisorSum (which is ) on the second line.


import java.io.*;
import java.util.*;

interface AdvancedArithmetic{
   int divisorSum(int n);
}
class Calculator implements AdvancedArithmetic {
    public int sum;
    public int divisorSum(int n) {
        for(int m = n; m > 0; m--) {
            if(n%m ==0) {
                sum += m;
            }
        }
        return sum;
    }
}

class Solution {

    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int n = scan.nextInt();
        scan.close();
        
      	AdvancedArithmetic myCalculator = new Calculator(); 
        int sum = myCalculator.divisorSum(n);
        System.out.println("I implemented: " + myCalculator.getClass().getInterfaces()[0].getName() );
        System.out.println(sum);
    }
}