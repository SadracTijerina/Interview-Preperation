// Given a string, write a function to check if it is a permutation of a palindrome
// A palindrome is a word or phrase that is the same fowards and backwards. A
// permutation is a rearrangement of laters. The palindrome does not need to be limited
// to just dictionary words. You can ignore casing and non-letter characters.

// Example: Input: Tact Coa       Output: True (permutations: "taco cat", "atco cta")

const palindromePermutation = (s) => {
  const characters = {};

  for (let i = 0; i < s.length; i++) {
    let currentChar = s(i);
    if (!characters[currentChar]) {
      characters[currentChar] = 1;
    } else {
      characters[currentChar] = +1;
    }
  }

  let numOfOdd = 0;

  for (const key in characters) {
    if (characters[key] % 2 !== 0) {
      numOfOdd += 1;
    }
  }

  return numOfOdd <= 1;
};

// Time Complexity O(n)
// Space Complexity O(n)
