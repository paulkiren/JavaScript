/*

Task 3
Consider examples below.
Example 1:
Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807

Example 2:
Input: (8 -> 3) + (1 -> 9 -> 2)
Output: 9 -> 2 -> 3
Explanation: 38 + 291 = 329

Continue the code below

// Data structure definition
*/

function LinkedList() {
   

}


LinkedList.prototype.addToHead = function (value) {
    const newNode = new Node(value, this.head, null);
    if (this.head) this.head.prev = newNode;
    else this.tail = newNode;
    this.head = newNode;
}


function ListNode(val) {
    this.val = val;
    this.next = null;
}


/* @param {ListNode} l1
* @param {ListNode} l2
* @return {ListNode}
*/


function sumLinkedList(l1, l2) {
    // Write code here

    let carry = 0;
    var curr;
    let p = (curr = new ListNode(0));
    var sum = 0;
    while (l1 || l2) {

        if (l1 && l2) {
            sum = l1.val + l2.val + carry;
            l1 = l1.next;
            l2 = l2.next;
        } else if (l1) {
            sum = l1.val + carry;
            l1 = l1.next;
        } else if (l2) {
            sum = l2.val + carry;
            l2 = l2.next;
        }

        carry = Math.floor(sum / 10);
        sum = Math.floor(sum) % 10;
        curr.next = new ListNode(sum);
        curr = curr.next;

    }

    if (carry === 1)
        curr.next = new ListNode(carry);
    return p.next;
};

// https://www.geeksforgeeks.org/implementation-linkedlist-javascript/
  // NOTE:
  // - Input will always two non-empty linked lists representing two non-negative integers.
  // - The digits are stored in reverse order and each of their nodes contain a single digit.
  // - Return it as a linked list.