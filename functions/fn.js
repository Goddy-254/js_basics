let primes = "";
function primeNumbers(num1, num2) {
  for (let i = num1; i <= num2; i++) {
    let isPrime = true;
    if (i < 2) {
      isPrime = false;
    }
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        isPrime = false;
      }
    }
    if (isPrime) {
      primes = primes + i + " ";

    }
  }
}

primeNumbers(50,100);
console.log(primes);

