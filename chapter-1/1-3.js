// Exercise 1.3.  Define a procedure that takes three numbers as arguments and returns the sum of the squares of the two larger numbers.
function square(x) {
  return x * x;
}

function sumOfSquares(x, y) {
  return square(x) + square(y);
}

function isMin(x, a, b) {
  return (x < a) && (x < b);
}

function f(x, y, z) {
  if (isMin(x, y, z))
    return sumOfSquares(y, z);
  else if (isMin(y, x, z))
    return sumOfSquares(x, z);
  else if (isMin(z, y, x))
    return sumOfSquares(y, x);
}
