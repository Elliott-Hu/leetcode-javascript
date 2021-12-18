/*
 * @lc app=leetcode.cn id=217 lang=javascript
 *
 * [217] 存在重复元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  const hash = {}

  for (let i = 0, len = nums.length; i < len; i ++) {
    const x = nums[i];

    if (hash[x]) {
      return true;
    }

    hash[x] = true
  }
  return false;
};
// @lc code=end

