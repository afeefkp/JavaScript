/*
Question 3: FizzBuzz

Write a JavaScript program that prints the numbers from 1 to 100. 
However, for multiples of 3, print "Fizz" instead of the number, 
and for multiples of 5, print "Buzz" instead of the number. 
For numbers that are multiples of both 3 and 5, print "FizzBuzz."
*/


function fizzBuzz(){


    for(let i = 1; i <= 100; i++){

        if(i%3 === 0){
            if(i%5 === 0){
                console.log("fizz buzz");
            }else{
                console.log("fizz");
            }
            
        }else if(i%5 === 0){
            console.log("buzz");
        }
        else{
            console.log(i);
        }
    }
}

fizzBuzz();




// better way
/*
    function fizzBuzz() {
    for (let i = 1; i <= 100; i++) {
        let output = "";

        if (i % 3 === 0) output += "Fizz";
        if (i % 5 === 0) output += "Buzz";

        console.log(output || i);
    }
}

fizzBuzz();

*/

