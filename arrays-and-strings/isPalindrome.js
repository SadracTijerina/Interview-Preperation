function isPalindrome(s) {
  // RegEx is saying grab all nonalpha numeric characters including _
  // And replace it with an empty string as we can see with second parameter
  s = s.toLowerCase().replace(/[\W_]/g, "");

  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (s[left] !== s[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}

module.exports = isPalindrome;

// Time Complexity O(N)
//Space Complexity O(1) left and right poiters take up constant space
