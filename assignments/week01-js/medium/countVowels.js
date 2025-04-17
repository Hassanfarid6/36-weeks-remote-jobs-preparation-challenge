/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  
  str = str.toLowerCase()

  let vowels = "aeiou"

  let vowelsLength = 0

  for (let i = 0; i < str.length; i++){

    if (vowels.includes(str[i])){
      vowelsLength++
    }
  }
  return vowelsLength
}
let res = countVowels("programming")
console.log(res)

console.log(countVowels("Python"))
console.log(countVowels("rhythm"))
console.log(countVowels("My name is Hassan ALi"))

module.exports = countVowels;