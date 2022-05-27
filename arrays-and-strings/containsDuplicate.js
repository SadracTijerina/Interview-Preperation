// LC: 217

const containsDuplicate = (nums) => {
  const visitedNums = {};

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    if (visitedNums[num]) {
      return true;
    } else {
      visitedNums[num] = true;
    }
  }

  return false;
};

// Time complexity: O(n)
// Space Complexity: O(n)