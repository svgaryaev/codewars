function divisors(num) {
  let res = [], n = 1;
  
  while (++n < num) {
    if (num % n === 0) res.push(n);
  }
  
  return res.length ? res : num + ' is prime';
};
