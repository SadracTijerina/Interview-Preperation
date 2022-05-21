// Write a method to replace all soaces in a string with %20. You may assume that the string has sufficient space
// at the end to hold additional characters, and that you are given "true" length of the string

const URLify = (s, l) => {
  // we slice it since the last character is not actually part of the string, the length (l) would include
  //that character
  s = s.slice(0, -1);

  return s.replaceAll(" ", "%20");
};

// Time complexity O(n) since its dependent on size of the string for slice and replace all
// Space complexity O(n) I believe for the same purposes.
