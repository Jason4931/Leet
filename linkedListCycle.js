function ListNode(val) {
  this.val = val;
  this.next = null;
}

var hasCycle = function (head) {
  let stack = [];
  while (head) {
    if (stack.includes(head)) {
      return true;
    }
    stack.push(head);
    head = head.next;
  }
  return false;
};