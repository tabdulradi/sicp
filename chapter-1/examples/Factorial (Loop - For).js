function factorial(n) {
  var product = 1;
  for (var counter = 1; counter <= n; counter++) {
    product *= counter;
  }
  return product;
}

factorial(6);
