function triple(first, second, third) {
  return pair(first, pair(second, third));
}

function first(triple) {
  return head(triple);
}

function second(triple) {
  return head(tail(triple));
}

function third(triple) {
  return tail(tail(triple));
}
