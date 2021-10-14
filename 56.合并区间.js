/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  return intervals.sort((a, b) => a[0] - b[0]).reduce((r, c) => {
    const len = r.length;

    if (!len) {
      r.push(c)
      return r;
    }

    if (r[len - 1][1] >= c[0]) {
      r[len - 1][1] = Math.max(r[len - 1][1], c[1]);
      return r;
    }

    r.push(c)
    return r;
  }, [])
};
// @lc code=end

