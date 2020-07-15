/*
Day 21: Generics
Objective
Today we're discussing Generics; be aware that not all languages support this construct, so fewer languages are enabled for this challenge.
Task
Write a single generic function named printArray; this function must take an array of generic elements as a parameter (the exception to this is C++, which takes a vector). The locked Solution class in your editor tests your function.
Note: You must use generics to solve this challenge. Do not write overloaded functions.
Input Format
The locked Solution class in your editor will pass different types of arrays to your printArray function.
Constraints
You must have exactly  function named printArray.
Output Format
Your printArray function should print each element of its generic array parameter on a new line.
*/

// solution 
public static <Element> void printArray(Element[] array) {
    for (Element element : array) {
        System.out.println(element);
    }

}