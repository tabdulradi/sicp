function expt(b, n) {
  if (n === 0)
    return 1;
  else
    return b * expt(b, n - 1);
}

expt(3, 4);​
