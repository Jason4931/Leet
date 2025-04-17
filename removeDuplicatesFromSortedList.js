function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}
var deleteDuplicates = function (head) {
  if (!head) return null;
  nums = convert(head, true);
  nums.sort((a, b) => (a - b));
  let currentnumber = nums[0];
  let duplicate = 0;
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    if (currentnumber > nums[i]) {
      duplicate++;
    } else {
      currentnumber = nums[i] + 1;
      result = [...result, nums[i]];
    }
  }
  for (let i = 0; i < result.length; i++) {
    nums[i] = result[i];
  }
  return convert(result, false);
};
function convert(e, action) {
  if (action) {
    let result = [];
    let current = e;
    while (true) {
      result = [...result, current.val];
      current = current.next;
      if (current == null) {
        break;
      }
    }
    return result;
  } else {
    let head = new ListNode(e[0]);
    let current = head;
    for (let i = 1; i < e.length; i++) {
      current.next = new ListNode(e[i]);
      current = current.next;
    }
    return head;
  }
}