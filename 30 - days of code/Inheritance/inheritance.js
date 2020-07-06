/* 
Day 12: Inheritance
Objective
Today, we’re delving into Inheritance. Check out the attached tutorial for learning materials and an instructional video!

Task
You are given two classes, Person and Student, where Person is the base class and Student is the derived class. Completed code for Person and a declaration for Student are provided for you in the editor. Observe that Student inherits all the properties of Person.

Complete the Student class by writing the following:

A Student class constructor, which has 4 parameters:
A string, firstName.
A string, lastName.
An integer, id.
An integer array (or vector) of test scores, scores.
A char calculate() method that calculates a Student object’s average and returns the grade character representative of their calculated average:
Grading Scale
Grading Scale

Input Format
The locked stub code in your editor calls your Student class constructor and passes it the necessary arguments. It also calls the calculate method (which takes no arguments).

You are not responsible for reading the following input from stdin:
The first line contains firstName, lastName, and id, respectively. The second line contains the number of test scores. The third line of space-separated integers describes scores.

Constraints
1 <= |firstName|,|lastName| <= 10
|id| = 7
0 <= score,average <= 100
Output Format
This is handled by the locked stub code in your editor. Your output will be correct if your Student class constructor and calculate() method are properly implemented.

Sample Input
1
2
3
Heraldo Memelli 8135627
2
100 80
Sample Output
1
2
3
Name: Memelli, Heraldo
ID: 8135627
Grade: O
Explanation
This student had 2 scores to average: 100 and 80. The student’s average grade is https://latex.codecogs.com/svg.latex?\frac{(100&space;+&space;80)}{2} = 90. An average grade of 90 corresponds to the letter grade O, so our calculate() method should return the character’O’.

*/

/*jshint esversion: 6 */

// solution 1
class Student extends Person {
    constructor(firstName, lastName, id, scores) {
        super(firstName, lastName, id, scores);

        this.scores = scores;
    }

    calculate() {
        const average = this.scores.reduce((target, score) => { return target + score }) / this.scores.length;

        const range = (average < 70) ?
            Math.ceil((100 - average) / 15) :
            Math.floor((100 - average - 1) / 10);
        let letter = '';

        switch (range) {
            case -1:
            case 0:
                letter = 'O';
                break;

            case 1:
                letter = 'E';
                break;

            case 2:
                letter = 'A';
                break;

            case 3:
                letter = 'P';
                break;

            case 4:
                letter = 'D';
                break;

            default:
                letter = 'T';
                break;
        }

        return letter;
    }
}

// solution 2
class Student extends Person {
    constructor(firstName, lastName, idNumber, testScores) {
        super(firstName, lastName, idNumber);
        this.testScores = testScores;
    }
    calculate() {
        let average = 0;
        let sum = 0;
        let grade = '';
        for (let i = 0, length = this.testScores.length; i < length; i++) {
            sum += this.testScores[i];
        }
        average = sum / this.testScores.length;
        if (90 <= average && average <= 100) {
            grade = 'O';
        } else if (80 <= average && average < 90) {
            grade = 'E';
        } else if (70 <= average && average < 80) {
            grade = 'A';
        } else if (55 <= average && average < 70) {
            grade = 'P';
        } else if (40 <= average && average < 55) {
            grade = 'D';
        } else {
            grade = 'T';
        }
        return grade;
    }
}