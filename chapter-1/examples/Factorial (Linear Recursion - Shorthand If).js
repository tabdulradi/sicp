function factorial(n) {
  return n < 2 ? 1 : n * factorial(n-1);
}

factorial(6);
factorial(0);