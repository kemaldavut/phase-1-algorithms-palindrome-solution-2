function isPalindrome(word) {
  let le = word.length;
  if ( le === 0  || le === 1) {
    return true;
  }
  if (word[0] === word[le-1]) {
    return isPalindrome(word.slice(1, le-1));
  }
  return false;
  // Write your algorithm here
}

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
  1- function isPalindrome(word)
  2-save the length of the word
  3-if the length of the word is 0 or 1 return true
  4-if the first and last letter are equal return isPalindrome(word.slice(1, le-1))
  5-if the first and last letter are not equal return false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
