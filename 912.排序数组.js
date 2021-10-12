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
  const sort = (pivotIndex, headIndex, tailIndex) => {
    const initHeadIndex = headIndex;

    if (pivotIndex === headIndex) {
      return;
    }

    const pivot = nums[pivotIndex];

    leftPointer:
    for (; headIndex <= pivotIndex; headIndex ++) {
      let head = nums[headIndex];
      if (headIndex === pivotIndex) {
        const _pivotIndex = tailIndex;
        const _headIndex = initHeadIndex
        const _tailIndex = _pivotIndex - 1;
        if (_tailIndex >= initHeadIndex) {
          sort(_pivotIndex, _headIndex, _tailIndex);
          break leftPointer;
        }
        
      }

      if (head < pivot) {
        continue leftPointer;
      }

      rightPointer:
      while (tailIndex >= headIndex) {
        if (tailIndex === headIndex) {
          nums[pivotIndex] = head;
          nums[headIndex] = pivot;

          if (tailIndex > 0) {
            const _pivotIndex = tailIndex - 1;
            const _headIndex = 0
            const _tailIndex = Math.max(_pivotIndex - 1, 0);
            sort(_pivotIndex, _headIndex, _tailIndex)
          }
          if (tailIndex < pivotIndex) {
            const _pivotIndex = pivotIndex;
            const _headIndex = tailIndex + 1;
            const _tailIndex = pivotIndex - 1;
            sort(_pivotIndex, _headIndex, _tailIndex);
          }
          break leftPointer;
        }

        const tail = nums[tailIndex];
        if (tail > pivot) {
          ++ tailIndex;
          continue rightPointer;
        }

        nums[headIndex] = tail;
        nums[tailIndex] = head;

        if (nums[headIndex] === pivot) {
          head = nums[headIndex];
          continue rightPointer;
        }
        break leftPointer;
      }
    }
  }

  if (nums.length < 2) {
    return nums;
  }

  const pivotIndex = nums.length - 1;
  const headIndex = 0;
  const tailIndex = pivotIndex - 1;

  sort(pivotIndex, headIndex, tailIndex);
  return nums;
};
// @lc code=end

