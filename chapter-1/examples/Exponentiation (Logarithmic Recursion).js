
function square(x) {
  return x * x;
}

function isEven(n) {
  return n % 2 === 0;
}

function expt(b, n) {
  if (n === 0)
    return 1;
  else if (isEven(n))
    return square(expt(b, n / 2));
  else
    return b * expt(b, n - 1);
}

expt(3, 4);​
