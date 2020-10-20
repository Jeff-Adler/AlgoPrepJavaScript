/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

//Problem: you get two linkedlists. Each linked list represents its own non-negative integers. But, the digits are stored in reverse order. That is, the tail is the leftmost digit, head the rightmost digit. You need to add together the two integers represented by the linked lists, and return it as a linked list, also in reverse order.


//This solution works but gets messed up for gigantic inputs, because of how JS stores large values
var addTwoNumbers = function(l1, l2) {
    let currentNode = l1
    let integer1 = 0
    let exponent = 0
    while (currentNode !== null){
        integer1 += currentNode.val * (10 ** exponent)
        currentNode = currentNode.next
        exponent++
    } 
    currentNode = l2
    let integer2 = 0
    exponent = 0
    while (currentNode !== null){
        integer2 += currentNode.val * (10 ** exponent)
        currentNode = currentNode.next
        exponent++
    } 
    let sum = integer1 + integer2
    sum = sum.toString()
    let firstNode = new ListNode(sum[sum.length - 1])
    let lastNode = firstNode
    for (let i = sum.length - 2 ; i >= 0 ; i--) {
        let newNode = new ListNode(sum[i])
        lastNode.next = newNode
        lastNode = newNode
    }
    return firstNode
};
    
