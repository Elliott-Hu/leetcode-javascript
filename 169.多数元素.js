/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 多数元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  let r;
  let count = 0

  for (const num of nums) {
    if (count === 0) {
      r = num;
    }

    count += (num === r) ? 1 : -1 
  }

  return r;
};
// @lc code=end

