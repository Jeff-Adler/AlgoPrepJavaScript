/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function(head) {
    let base10 = ""
    let node = head
    while (node) {
        base10 = base10 + node.val
        node = node.next
    }
    return parseInt(base10,2)
};