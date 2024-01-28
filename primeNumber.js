function isPrime(n) {
  if(n < 2) return false

// First possibility Big O = O(N)
//   for(let i = 2; i < n; i++) {
//     if (n % i === 0) return false
//   }

// Second possibility Big O = O(sqrt(N))
  for(let i = 2; i < Math.sqrt(n); i++) {
    if (n % i === 0) return false
  }

  return true
}

console.log(isPrime(1)) // false
console.log(isPrime(5)) // true
console.log(isPrime(11)) // true
