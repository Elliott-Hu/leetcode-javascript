/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  nums.sort((a, b) => a - b)

  const result = [];
  
  let hPointer = null;
  let tPointer = null;

  for (let i = 0, len = nums.length; i < len; i ++) {
    const f = nums[i];
    if (f > 0) {
      break;
    }

    if (i && nums[i - 1] === nums[i]) {
      continue;
    }
    let head = i + 1;
    let tail = len - 1;


    while (head < tail) {
      hPointer = nums[head];
      tPointer = nums[tail];

      const sum = f + hPointer + tPointer


      if (sum === 0) { 
        result.push([f, hPointer, tPointer]) 
        while (tail > head && nums[tail] === nums[tail - 1]) -- tail;
        while (tail > head && nums[head] === nums[head + 1]) ++ head;

        -- tail;
        ++ head;
        continue;
      }
      sum > 0 ? (-- tail) : (++ head);

    }
  }

  return result;
};
// @lc code=end

