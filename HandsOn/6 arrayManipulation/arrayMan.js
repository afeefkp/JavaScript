
/*
Question 6: Array Manipulation

Write a JavaScript function that performs various array manipulation tasks. 
You can choose one or more of the following tasks to implement*/ 

// 1. Find the sum of all numbers in an array.

let arr = [23234,5434,23234,56765345,78689,8067,56765345,2345,32534,345345,8067];

function sumArray(arr){
    let sum = 0;

    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum;
}

let sum = sumArray(arr);

console.log(`sum = ${sum}`);

//using reduce method

const sum1 = arr.reduce((accumulator,current)=>{
    return accumulator + current;
},0)

console.log(sum1)





// 2. Find the average of all numbers in an array.

let average = sum/arr.length;


console.log(`average = ${average}`)


// 3. Reverse the elements of an array.

function reverseArr(arr){

    let reversed = [];
    let j = 0;
    for(let i = arr.length-1; i>=0; i--){

    reversed[j] = arr[i];
    j++;
    
    }
    return reversed;

}

let reversed = reverseArr(arr);

console.log(arr);
console.log(reversed);

// using built-in method 

console.log(`using built-in method: ${arr.reverse()}`)


// 


function remDuplicate(arr){
    return Array.from(new Set(arr));
}


const result = remDuplicate(arr);

console.log(`with duplicate ${arr}`);
console.log(`without duplicate ${result}`);


function removeDuplicates(arr) {
    const uniqueArray = [];
    
    for (let i = 0; i < arr.length; i++) {
        let isDuplicate = false;
        
        for (let j = 0; j < uniqueArray.length; j++) {
            if (arr[i] === uniqueArray[j]) {
                isDuplicate = true;
                break;
            }
        }
        
        if (!isDuplicate) {
            uniqueArray.push(arr[i]);
        }
    }
    
    return uniqueArray;
}

const uniqueArray = removeDuplicates(arr);

console.log("Original array:", arr);
console.log("Array without duplicates:", uniqueArray);



// 5. Sort an array in ascending or descending order.


function sortArray(arr){
    for(let i=0; i<arr.length; i++){

        for(let j=i+1; j<arr.length-i-1; j++){

            if(arr[i]>arr[j]){
                let currInd = i; 
                i = j;
                j = currInd;

                arr[j],arr[i] = arr[i],arr[j];
            }

        }
        return arr;

    }
}

const sortedArr = sortArray(arr);
console.log('sorted array is : ',sortedArr);