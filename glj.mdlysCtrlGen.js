autowatch = 1;

var p = this.patcher;

var numbers = [];
var prepends = [];

var ctrllist = [];
var modalys = this.patcher.getnamed("modalys");

function createNumberObject(index) {
  var maxObj = p.newdefault(100, 100 + index * 25, "number");
  maxObj.set(0);
  maxObj.setattr("format", 6);
  maxObj.setattr("minimum", 0.0);
  numbers.push(maxObj);
}

function createPrependObject(index, name) {
  var maxObj = p.newdefault(180, 100 + index * 25, "prepend", name);
  prepends.push(maxObj);
}

function connectObjects(obj1, obj2) {
  p.connect(obj1, 0, obj2, 0);
}

function createCommentObject(index, name) {
  var maxObj = p.newdefault(50, 100 + index * 25, "comment");
  maxObj.set(name);
  comments.push(maxObj);
}

function deleteObjects() {
  var num = numbers.length;
  for (var i = 0; i < num; i++) {
    p.remove(numbers[i]);
    p.remove(prepends[i]);
  }
  numbers = [];
  prepends = [];
}

function createModalysController(val) {
  for (var i = 0; i < arguments.length; i++) {
    createControl(i, arguments[i]);
    connectObjects(numbers[i], prepends[i]);
    connectObjects(prepends[i], modalys);
  }
}

function createControl(index, name) {
  createNumberObject(index);
  // createCommentObject(index, name);
  createPrependObject(index, name);
}
// function Control(x, y, type) {
//   this.x = x;
//   this.y = y;
//   this.type = type;
//   this.range;
//   this.val;
//   this.display;
// }
