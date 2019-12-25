function factorial(n) {
    function bigMul(bigNum, k) {
        let carry = 0;
        for (let i = bigNum.length - 1; i >= 0; i--) {
            const prod = bigNum[i] * k + carry;
            bigNum[i] = prod % 10;
            carry = prod / 10 | 0;
        }
        while (carry != 0) {
            bigNum.unshift(carry % 10);
            carry = carry / 10 | 0;
        }
    }
  
    if (n < 0) return null;
    let acc = [1];
    for (let i = 1; i <= n; i++) {
        bigMul(acc, i);
    }
    return acc.join('');
}