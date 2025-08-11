function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

var reverseList = function (head) {
  let result = [];
  while (true) {
    if (head == null) {
      break;
    }
    result.push(head.val);
    head = head.next;
  }
  dummy = new ListNode(0);
  current = dummy;
  for (let val of result.reverse()) {
    current.next = new ListNode(val);
    current = current.next;
  }
  return dummy.next;
};