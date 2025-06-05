function ListNode(val) {
  this.val = val;
  this.next = null;
}

var getIntersectionNode = function (headA, headB) {
  let pointerA = headA;
  let pointerB = headB;
  while (true) {
    if (pointerB == pointerA) {
      break;
    } else {
      if (pointerB.next) {
        pointerB = pointerB.next;
      } else {
        if (pointerA.next) {
          pointerA = pointerA.next;
          pointerB = headB;
        } else {
          return null;
        }
      }
    }
  }
  return pointerA;
};