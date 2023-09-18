/*
Question 8: Find the largest and smallest elements in an array.

Write a JavaScript function that takes an array of numbers as input 
and returns both the largest and smallest numbers in the array.
For example, if you have an array [3, 1, 5, 9, 2, 8], the function 
should return an object like { smallest: 1, largest: 9 }, indicating that 
1 is the smallest number in the array, and 9 is the largest.

Your task is to write a JavaScript function to find and return the largest 
and smallest elements in an array.
*/


let arr = [3, 1, 5, 9, 2, 8];



function findSmLg(arr){

    let large = arr[0];
    let small = arr[0];

    for(let i=1; i<arr.length; i++){

        if(arr[i]<small){
            small = arr[i];
        }
        if(arr[i]>large){
            large = arr[i];
        }


    }
    // console.log(small,large);

    return {smallest:small,largest:large};



}

let result = findSmLg(arr);
console.log(result);


