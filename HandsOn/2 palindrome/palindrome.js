/* 
Question 2: Palindrome Checker

Write a JavaScript function that checks if a given string is a palindrome. 
A palindrome is a word, phrase, or sequence of characters that reads the 
same forwards and backwards. Your function should return true if the input 
is a palindrome and false if it's not.

For example, if the input is "racecar," the function should return true, 
but if the input is "hello," it should return false.
*/


function checkPalindrome(word){

    palindrome = true;
    const len = word.length;
    
    for(i = 0; i < len/2; i++){
        
        if(word[i] !== word[len-1-i]){
            
            palindrome = false;
        }


    }
    return palindrome;

}


const result = checkPalindrome('racecar');

if (result){
    console.log("It's a Palindrome")
}else{
    console.log("It's not a Palindrome")
}