Is palindrome
Given a string, write the recursive function to check if it is palindrome or not. A string is said to be palindrome if reverse of the string is same as string. For example, “radar” is palindrome, but “radix” is not palindrome.

Steps
Write the pseudocode first
Think of the base case(s). For an example, what if the input-string is empty or length of the input string is equal to 1?
/**
 * @param word
 * @returns {boolean}
 */
const palindrome = (word) => {
}

console.log(palindrome('eve'));
console.log(palindrome('maria'));
console.log(palindrome('racecar'));
console.log(palindrome('kayak'));
console.log(palindrome('important'));