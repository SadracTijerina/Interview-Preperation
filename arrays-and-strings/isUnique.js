// Implement an algorithm to determine if a string has all unique characters.

const isUnique = (s) => {
  if (s.length > 128) {
    return false;
  }

  const chars = {};

  for (let i = 0; i < s.length; i++) {
    let letter = s(i);

    if (chars[letter]) {
      return false;
    } else {
      chars[letter] = 1;
    }
  }

  return true;
};

/*
  The space complexity we could argue O(1) since we checked if the length.
  of the string is over the amount of possible character.
  The time complexity is O(n) since we only iterate through the loop once.
*/
