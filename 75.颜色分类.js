/*
 * @lc app=leetcode.cn id=75 lang=javascript
 *
 * [75] 颜色分类
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
  let pointer = 0;
  const len = nums.length;
	
  // 第一次循环将所有的 0 交换到指针对应下标
  for (let i = 0; i < len; i ++) {
    if (nums[i]) {
      continue;
    }
    const c = nums[pointer];
    nums[pointer] = nums[i]
    nums[i] = c;
    // 交换后递进指针
    ++ pointer;
  }
	
  // 第二次循环把所有 1 扔到指针对应位置
  for (let i = pointer; i < len; i ++) {
    if (nums[i] !== 1) {
      continue
    }
    const c = nums[pointer];
    nums[pointer] = nums[i]
    nums[i] = c;
    ++ pointer;
  }
};
// @lc code=end

