const productExceptSelf = (nums) => {
  let output = nums.map((n) => 1);
  let product = 1;

  // Multiply from the left
  // nums = [1, 2, 3, 4]
  // output = [1, 1, 1, 1]
  for (let i = 0; i < nums.length; i++) {
    // i= 3
    output[i] = output[i] * product; // 1 1 2 6
    product = product * nums[i]; // 1 2 6 24  I dont understand this line
  }

  product = 1;

  // Multiply from the right

  for (let j = nums.length - 1; j >= 0; j--) {
    output[j] = output[j] * product;
    product = product * nums[j];
  }

  return output;
};

// Time Complexity: O(n)
// Space Complexity: O(1)
