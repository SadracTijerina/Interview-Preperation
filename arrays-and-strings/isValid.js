/*
  Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', 
  determine if the input string is valid.
*/

const isValid = (s) => {
  let stack = [];
  const pairHashMap = {
    "{": "}",
    "(": ")",
    "[": "]",
  };

  for (let i = 0; i < s.length; i++) {
    let char = s[i];

    if (pairHashMap[char]) {
      stack.push(char);
    } else if (pairHashMap[stack.pop()] !== char) {
      return false;
    }
  }

  return stack.length === 0;
};

module.exports = isValid;

// Time and Space Complexity O(n)
