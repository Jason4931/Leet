function ListNode(val) {
  this.val = val;
  this.next = null;
}

var isPalindrome = function (head) {
  let length = 0;
  let current = head;
  while (current) {
    length++;
    current = current.next;
  }
  if (length <= 1) {
    return true;
  }
  let leftHalf = [];
  current = head;
  for (let i = 0; i < Math.floor(length / 2); i++) {
    leftHalf.push(current.val);
    current = current.next;
  }
  if (length % 2 === 1) {
    current = current.next;
  }
  let rightHalf = [];
  while (current) {
    rightHalf.push(current.val);
    current = current.next;
  }
  rightHalf.reverse();
  for (let i = 0; i < leftHalf.length; i++) {
    if (leftHalf[i] !== rightHalf[i]) {
      return false;
    }
  }
  return true;
};