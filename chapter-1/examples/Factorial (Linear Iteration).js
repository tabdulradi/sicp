function factorial(n) {
  if (n < 2)
    return 1;
   else 
    return n * factorial(n-1);
}

factorial(5);
factorial(0);