function expt(b, n) {
  function iter(b, counter, product) {
    if (counter === 0)
      return product;
    else
      return iter(b, counter - 1, b * product);
  }
  return iter(b, n, 1);
}
// example
expt(3, 4);​
