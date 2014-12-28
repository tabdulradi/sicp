function fib(n) {
  function iter(a, b, count) {
    if (count === 0)
      return b;
    else
      return iter(a + b, a, count - 1);
  }

  return iter(1,0,n);
}
