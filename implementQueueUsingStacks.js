
var MyQueue = function() {
  this.stack = [];
};

MyQueue.prototype.push = function(x) {
  this.stack.push(x);
};

MyQueue.prototype.pop = function () {
  this.stack.reverse();
  const e = this.stack.pop();
  this.stack.reverse();
  return e;
};

MyQueue.prototype.peek = function() {
  return this.stack[0];
};

MyQueue.prototype.empty = function() {
  return this.stack.length == 0 ? true : false;
};