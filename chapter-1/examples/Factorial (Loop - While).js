function factorial(n) {
  var product = 1;
  var counter = 1;
  while (counter <= n) {
    product *= counter;
    counter++;
  }
  return product;
}

factorial(6);
