//Given a string s, find the longest palindromic substring in s
// --- Example
// longestPalindrome("cbbd") --> "bb"
// longestPalindrome("abba") --> "abba"
// longestPalindrome("a") --> "a"

function longestPalindrome(s) {
  // These two variables are to get the starting index of
  // where the the longest palindrome is and how long it is
  let startIndex = 0;
  let maxLength = 1;

  // this function looks at the palindrome from the middle and spreads outwards
  // We pass the starting left character and ending right character
  function expandAroundMiddle(left, right) {
    // the starting character cant be negative or else it wont be in the string
    // the right character has to be less than the length of the string
    // the left character and right one have to equal eachother in order for it
    // to be considered a palindrome
    while (left >= 0 && right < s.length && s[left] == s[right]) {
      // This checks the length when we iterate through the loop
      const currentPalLength = right - left + 1;

      // If this is true, then max length changes and, if we continue
      // to iterate through the same call of the function than max length
      // shouldn't change
      if (currentPalLength > maxLength) {
        maxLength = currentPalLength;
        startIndex = left;
      }

      // Here since we are starting from middle we subtract from left and add from right
      left -= 1;
      right += 1;
    }
  }

  //This loop is where we call the function
  for (let i = 0; i < s.length; i++) {
    // This code is for odd letter string
    expandAroundMiddle(i - 1, i + 1);

    // This code is for even letter string
    expandAroundMiddle(i, i + 1);
  }

  return s.slice(startIndex, startIndex + maxLength);
}

module.exports = longestPalindrome;

// Time Complexity O(n^2)
// Space complexity O(1)
