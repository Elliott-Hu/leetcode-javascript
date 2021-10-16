/*
 * @lc app=leetcode.cn id=912 lang=javascript
 *
 * [912] 排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
  const swap = (a, b) => {
    const temp = nums[a]
    nums[a] = nums[b]
    nums[b] = temp
  }

  const partition = (A, lo, hi) => {
    const pivot = A[Math.floor((hi + lo) / 2)]

    let i = lo - 1
    let j = hi + 1

    while (true) {

      do { ++ i } while (A[i] < pivot)
      do { -- j } while (A[j] > pivot)

      if (i >= j) {
        return j
      }
      swap(i, j)
    }

  }

  const sort = (A, lo, hi) => {
    if (lo === hi) return

    const p = partition(A, lo, hi)
    
    sort(A, lo, p);
    sort(A, p + 1, hi);
  }

  const len = nums.length;
  sort(nums, 0, len - 1);
  return nums;
};


// @lc code=end

