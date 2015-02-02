function sum(a, b) {
  return a + b
}

function square(x) {
  return x * x
}

function isPrime(n) {
  if (n < 2) throw "isPrime("+ n+") is illegal, must be bigger than 2"
  function iter(d) {
    if (d === n)
    return true
    else if (n % d == 0)
    return false
    else
    return iter(d + 1)
  }
  return iter(2)
}

function sumSquaresOfPrimes(l) {
  return reduce(0, map(filter(l, isPrime), square), sum)
}
