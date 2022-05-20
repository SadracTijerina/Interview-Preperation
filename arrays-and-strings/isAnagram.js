/*
Summary: First introduction on anagram, we used an object find out how many different characters
there were in the string as well as how often it showed up. 

With one string we compared it the with second to see if the length was the same initially then
we started adding the different characters we found to the object as keys and how often we saw 
them as values in our initial for loop. Then in the following for loop we compared the second 
string to the object, we checked if the character showed up in the object as a key, and if it 
did we removed one value from it and continued going until we reached the length of the second
string (t)
*/

function isAnagram(s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const sCharCounts = {};

  // Adding the different characters have in string s as keys and how often they show up as values
  for (let i = 0; i < s.length; i++) {
    const sChar = s[i];
    sCharCounts[sChar] = sCharCounts[sChar] + 1 || 1;
  }

  // Comparing string t to s to see if the characters in t appear in s and the same amount of times
  for (let i = 0; i < t.length; i++) {
    const tChar = t[i];

    if (!sCharCounts[tChar]) {
      return false;
    } else {
      sCharCounts[tChar]--;
    }
  }

  return true;
}

module.exports = isAnagram;

// Time Complexity O(n)
// Space O(1) since hash table has 26 key value pairs at most
