// Given two strings write a method to decide if one is a permutation of the other
// Its case sensitive and space as well

const isPermutation = (string1, string2) => {
  if (string1.length !== string2.length) return false;

  let s = string1.split("").sort().join("");

  let t = string2.split("").sort().join("");

  if (s !== t) return false;

  return true;
};

// Time complexity: O(max(s,t))
// Space complexity: O(max(s,t))
