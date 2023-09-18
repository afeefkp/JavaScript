/* Question 1: Reverse a String

Write a JavaScript function that takes a string as input and 
returns the string reversed. For example, if the input is "Hello, World!", 
the function should return "!dlroW ,olleH".

*/


function reverseString(word){
    let reversed = ' ';
    let j=0;
    const len=word.length;

    for(let i = len-1; i >= 0; i--){
        reversed += word[i];
        j++;
    }
    return reversed;
}

const rev = reverseString('working');

console.log(rev)