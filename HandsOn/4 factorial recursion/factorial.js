/*
Question 4: Factorial Calculation

Write a JavaScript function that calculates the factorial of a given number 
using recursion. The factorial of a non-negative integer n is the product 
of all positive integers less than or equal to n.
*/



function factorial(num){

    if (num==1 || num==0){
        return 1;
    }
    return num * factorial(num-1)
    
}

console.log(factorial(5))