/*
7. Write a JavaScript function that calculates the nth Fibonacci number. 
The Fibonacci sequence is a series of numbers in which each number is 
the sum of the two preceding ones, usually starting with 0 and 1. 

In mathematical terms, it can be defined as:

F(0) = 0
F(1) = 1
F(n) = F(n-1) + F(n-2) for n > 1
Your task is to write a function that takes an integer n as input 
and returns the nth Fibonacci number. For example, if n is 5, 
the function should return 5 because the 5th Fibonacci number is 5 (0, 1, 1, 2, 3, 5, ...).
*/


function fibo(n){

    let fib = [];

    fib[0] = 0;
    fib[1] = 1;

    if(n===0){
        
        return fib[0];

    }
    else if(n===1){
        
        return fib[1];

    }
    else if(n>1){
        
        for(let i = 2; i <= n;i++){
            
            fib[i] = fib[i-1]+fib[i-2];
            
        }
    }
    else{
        console.log("enter a valid number");
    }
    
    return fib[n];
}

const number =fibo(5);
console.log(`${number} is the requested element`);


//using built-in methods 

let arr = [3, 1, 5, 9, 2, 8];

function findSmLg(arr) {
    const smallest = Math.min(...arr);
    const largest = Math.max(...arr);

    return { smallest, largest };
}

let result = findSmLg(arr);
console.log(result);

