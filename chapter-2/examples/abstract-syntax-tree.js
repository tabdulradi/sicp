function plus(a, b) {
  return a + b;
}

function minus(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function execute(op, a, b) {
  return op(a, b);
}

function evaluate(node){
  return isLeaf(node) ?
            value(node) :
            execute(value(node), evaluate(left(node)), evaluate(right(node)));
}
