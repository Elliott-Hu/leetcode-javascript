/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (!strs.length) return ""
  let first = strs[0]
  let prefix


  for (let i = first.length, accumulator, len = strs.length; i > 0; i --) {
    prefix = first.slice(0, i)
    accumulator = 0

    for (let j = 1; j < len; j ++) {
      if(strs[j].indexOf(prefix)) {
        break
      }
      accumulator ++
    }

    if (accumulator === (len - 1)) return prefix
  }

  return ""
}
