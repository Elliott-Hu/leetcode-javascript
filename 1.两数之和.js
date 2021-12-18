/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const hash = {};

  for (let i = 0, len = nums.length; i < len; i ++) {
    const x = nums[i];
    if (hash[target - x] !== undefined) {
      return [hash[target - x], i]
    }
    hash[x] = i;
  }
};
// @lc code=end

