function nil(){}; // Represents an empty list!
nil.toString = function(){return "[nil]"} // Trick for better debugging!

function isEmptyList(l) {
  return l === nil;
}

function range(start, stop) {
  return (start > stop) ? nil : pair(start, range(start + 1, stop));
}

function last(l) {
  var t = tail(l);
  return (isEmptyList(t))? head(l) : last(t);
}

var prepend = pair;

function append(l, e) {
  return (isEmptyList(l)) ? pair(e, nil) : pair(head(l), append(tail(l), e));
}

function reverse(l) {
  return (isEmptyList(l)) ? l : append(reverse(tail(l)), head(l));
}

//Get the nth element in the list
function get(l, i) {
  return (i === 0) ? head(l) : get(tail(l), i - 1)
}

function length(l) {
  return (isEmptyList(l)) ? 0 : 1 + length(tail(l))
}

function contains(l, e) {
  if (isEmptyList(l))
    return false;
  else if (head(l) === e)
    return true;
  else
    return contains(tail(l), e);
}

function merge(l1, l2) {
  return isEmptyList(l1) ? l2 : pair(head(l1), merge(tail(l1), l2))
}

function map(l, f) { // Returns a list, with f applied on each element
  return (isEmptyList(l)) ? l : pair(f(head(l)), map(tail(l), f))
}

function filter(l, p) { // Returns new list, with only elements that matches p()
  if (isEmptyList(l))
    return l;
  else if (p(head(l)))
    return pair(head(l), filter(tail(l), p));
  else
    return filter(tail(l), p);
}

function reduce(initial, l, f) {
  return (isEmptyList(l)) ? initial : reduce(f(initial, head(l)), tail(l), f);
}

function map2(l, f) { // Using reduce
  return reduce(nil, l, function(acc, e){
    return append(acc, f(e));
  });
}
