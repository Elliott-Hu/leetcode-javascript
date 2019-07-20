/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const stack = [];
  const hash = {
    "(": ")",
    "[": "]",
    "{": "}"
  }
  for(let i = 0, len = s.length, a; i < len; i ++) {
    a = s[i]
    if (a === hash[stack.slice(-1)]) {
      stack.pop()
      continue
    }
    stack.push(a)
  }


  return !stack.length
};


