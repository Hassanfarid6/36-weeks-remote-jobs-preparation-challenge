/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

// split(""): This is like dumping all the letter blocks out of the word. If your word is "cat", it turns it into three separate blocks: "c", "a", "t".
// .sort(): Now, you take those blocks and line them up in alphabetical order, like how you’d arrange them from A to Z. So "c", "a", "t" becomes "a", "c", "t".
// .join(""): Finally, you glue all the blocks back together to make one word again. So "a", "c", "t" becomes "act".
function isAnagram(str1, str2) {

  let strval1 = str1.toLowerCase().trim().split("").sort().join("")
  let strval2 = str2.toLowerCase().trim().split("").sort().join("")

  if (strval1 === strval2){
    return true
  }else{
    return false
  }

}
console.log(isAnagram("hello!@", "hlleO"))
module.exports = isAnagram;
