var node = triple;
var emptyTree = null

function leaf(value) {
  return node(value, emptyTree, emptyTree);
}

var value = first;
var left = second;
var right = third;

function isEmptyTree(tree) {
  return tree === emptyTree;
}

function isLeaf(node) {
  return isEmptyTree(left(node)) && isEmptyTree(right(node));
}

function length(t) {
  return (isEmptyTree(t)) ? 0 : 1 + length(left(t)) + length(right(t))
}
