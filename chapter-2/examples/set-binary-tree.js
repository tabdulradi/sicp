// depends on tree.js
var emptySet = emptyTree
var isEmptySet = isEmptyTree

function contains(set, element) {
  if (isEmptySet(set))
    return false;
  else if (element === value(set))
    return true;
  else if (element < value(set))
    return contains(left(set), element);
  else if (element > value(set))
    return contains(right(set), element);
  else
    throw Exception("Bug?")
}

function addToSet(set, element) {
  if (isEmptySet(set))
    return leaf(element);
  else if (element === value(set))
    return set;
  else if (element < value(set))
    return node(value(set), addToSet(left(set), element), right(set));
  else if (element > value(set))
    return node(value(set), left(set), addToSet(right(set), element));
  else
    throw Exception("Bug?")
}

function union(set1, set2) {
  return isEmptySet(set2) ?
          set1 :
          union(
            union(
              addToSet(set1, value(set2)),
              left(set2)),
            right(set2))
}

function intersection(set1, set2) {
  if (isEmptySet(set1) || isEmptySet(set2))
    return emptySet;

  var element = value(set1)
  var rest = union(intersection(left(set1), set2), intersection(right(set1), set2))
  return contains(set2, value(set1)) ? addToSet(rest, element) : rest;
}
