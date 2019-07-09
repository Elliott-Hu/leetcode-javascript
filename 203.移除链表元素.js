/*
 * @lc app=leetcode.cn id=203 lang=javascript
 *
 * [203] 移除链表元素
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
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
  if (!head) return head
  let point = head

  while (point.next) {
    if (point.next.val === val) {
      point.next = point.next.next
      continue
    }
    point = point.next
  }

  return head.val === val ? head.next : head
};

