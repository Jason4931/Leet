function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

var removeElements = function (head, val) {
  let result = [];
  while (true) {
    if (head == null) {
      break;
    }
    if (head.val != val) {
      result.push(head.val);
    }
    head = head.next;
  }
  let dummy = new ListNode(0);
  let current = dummy;
  for (let val of result) {
    current.next = new ListNode(val);
    current = current.next;
  }
  return dummy.next;
};