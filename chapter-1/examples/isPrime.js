function isPrime(n) {
  return n === smallestDivisor(n);
}

function smallestDivisor(n) {
  return findDivisor(n,2);
}

function findDivisor(n,testDivisor) {
  if (square(testDivisor) > n)
    return n;
  else if (divides(testDivisor,n))
    return testDivisor;
  else return findDivisor(n, testDivisor + 1);
}

function divides(a,b) {
  return b % a === 0;
}

function square(x) {
  return x * x;
}
