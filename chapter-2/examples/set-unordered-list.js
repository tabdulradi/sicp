var emptySet = nil
var isEmptySet = isEmptyList

function addToSet(set, element) {
  return contains(set, element) ? set : prepend(element, set);
}

function union(set1, set2) {
  return isEmptySet(set2) ? set1 : union(addToSet(set1, head(set2)), tail(set2))
}

function intersection(set1, set2) {
  if (isEmptySet(set1) || isEmptySet(set2))
    return emptySet;
  else if (contains(set2, head(set1)))
    return prepend(head(set1), intersection(tail(set1), set2));
  else
    return intersection(tail(set1), set2)
}
