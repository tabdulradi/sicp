function nil(){}; // Represents an empty list!
nil.toString = function(){return "[nil]"} // Trick for better debugging!

function isEmptyList(l) {
  notImplemented("isEmptyList");
}

function range(start, stop) {
  notImplemented("range");
}

function last(l) {
  notImplemented("last");
}

var prepend = pair;

function append(l, e) {
  notImplemented("append");
}

function reverse(l) {
  notImplemented("reverse");
}

//Get the nth element in the list
function get(l, i) {
  notImplemented("get");
}

function length(l) {
  notImplemented("length");
}

function contains(l, e) {
  notImplemented("contains");
}

function merge(l1, l2) {
  notImplemented("merge");
}

function map(l, f) { // Returns a list, with f applied on each element
  notImplemented("map");
}

function filter(l, p) { // Returns new list, with only elements that matches p()
  notImplemented("filter");
}

function reduce(initial, l, f) {
  notImplemented("reduce");
}

function map2(l, f) { // Using reduce
  notImplemented("map2");
}
