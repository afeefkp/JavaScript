
/*
Question 5: Find the Longest Word

Write a JavaScript function that takes a sentence (a string) as input and 
returns the longest word in that sentence. If there are multiple words with 
the same maximum length, return the first one encountered.

For example, if the input is "The quick brown fox jumped over the lazy dog," 
the function should return "jumped."
*/



function longestWord(sentence){

    // console.log(sentence.length);
    words = sentence.split(' ');
    len = 0;
    for(let i=0; i<words.length;i++){
        
        if (words[i].length>len){
            var word = words[i];
            len = words[i].length;
        }


    }
    console.log(word);
}

let sentence = "The quick brown fox jumped over the lazy dog";

longestWord(sentence);