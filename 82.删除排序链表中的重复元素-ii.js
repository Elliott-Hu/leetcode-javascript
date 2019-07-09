/*
 * @lc app=leetcode.cn id=82 lang=javascript
 *
 * [82] 删除排序链表中的重复元素 II
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
  if (!head || !head.next) return head
  let p1, p2, headless = false
  p1 = head
  p2 = p1.next
  if (p1.val === p2.val) {
    headless = true
    if (!p2.next) { return p2.next }
  }

  while (!!p2.next) {
    if (p1.next.val !== p2.next.val) {
      p1 = p1.next
      p2 = p2.next
      continue
    }
    
    p2 = p2.next
    if (!p2.next) { 
      p1.next = p2.next
      break
    }
    if (p1.next.val !== p2.next.val) {
      p1.next = p2.next
      p2 = p1.next
    }
  }

  if (!!head.next && head.val === head.next.val) {
    return head.next.next
  }
  return headless ? head.next : head
};

