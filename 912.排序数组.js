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
  const len = nums.length;

  const swap = (a, b, log) => {
    const temp = nums[a]
    nums[a] = nums[b]
    nums[b] = temp
  }

  const sort = (pivotIndex, headIndex, tailIndex) => {
    if (pivotIndex === headIndex && headIndex === tailIndex) {
      return;
    }
    if (
      Math.min(pivotIndex, headIndex, tailIndex) < 0
      || Math.max(pivotIndex, headIndex, tailIndex) > len - 1
    ) {
      return;
    }


    const INITIAL_PIVOT_INDEX = pivotIndex;
    const INITIAL_HEAD_INDEX = headIndex;
    const INITIAL_TAIL_INDEX = tailIndex;

    headPointer:
    for (; headIndex <= INITIAL_PIVOT_INDEX; headIndex ++) {
      if (headIndex === INITIAL_PIVOT_INDEX) {
        if (INITIAL_TAIL_INDEX - 1 >= INITIAL_HEAD_INDEX) {
          sort(INITIAL_TAIL_INDEX, INITIAL_HEAD_INDEX, INITIAL_TAIL_INDEX - 1);
        }
        break headPointer;
      }

      if (nums[headIndex] < nums[INITIAL_PIVOT_INDEX]) {
        continue headPointer;
      }


      tailPointer:
      while (tailIndex >= INITIAL_HEAD_INDEX) {

        if (headIndex > tailIndex) {
          break tailPointer;
        }

        if (tailIndex === headIndex) {
          swap(tailIndex, INITIAL_PIVOT_INDEX);
          
          const leftPivotIndex = Math.max(tailIndex - 1, INITIAL_HEAD_INDEX)
          const leftTailIndex = Math.max(leftPivotIndex - 1, INITIAL_HEAD_INDEX)
          sort(leftPivotIndex, INITIAL_HEAD_INDEX, leftTailIndex);

          const rightPivotIndex = INITIAL_PIVOT_INDEX;
          const rightHeadIndex = tailIndex + 1;
          const rightTailIndex = Math.max(rightPivotIndex - 1, rightHeadIndex)
          sort(rightPivotIndex, rightHeadIndex, rightTailIndex);
          break headPointer;
        }

        if (nums[tailIndex] < nums[INITIAL_PIVOT_INDEX]) {
          break tailPointer;
        }

        -- tailIndex;
      }

      swap(headIndex, tailIndex);
      continue headPointer;
    }
  }

  sort(len - 1, 0, len - 2);
  return nums;
};

// @lc code=end

