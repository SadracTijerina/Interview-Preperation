// Given a string, return the length of the longest substring without
// repeating characters.
// --- Example
// lengthOfLongestSubstring("abcabcbb") --> 3 since length of "abc"
// lengthOfLongestSubstring("bbbbb") --> 1 since length of "b"

function lengthOfLongestSubstring(s) {
  let windowCharsMap = {};
  let windowStart = 0;
  let maxLength = 0;

  for (i = 0; i < s.length; i++) {
    const endChar = s[i];

    // If we see the character again, lets go the next index (+1) where
    // we last it since it repeated, we dont care about all the previous
    // characters. Basically start at this new part
    if (windowCharsMap[endChar] >= windowStart) {
      windowStart = windowCharsMap[endChar] + 1; // 2
    }

    // Now lets set the current character to current index
    windowCharsMap[endChar] = i;

    // Compare maxLength that we have to now our window start which we
    // could have potentially been now changed in the if statement
    maxLength = Math.max(maxLength, i - windowStart + 1); // 3
  }

  return maxLength;
}
module.exports = lengthOfLongestSubstring;

// Time Complexity O(n) Space Complexity O(min(m,n))
