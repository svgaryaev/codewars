[На главную](https://github.com/svgaryaev/codewars)

## Large Factorials

In mathematics, the factorial of integer n is written as n!. It is equal to the product of n and every integer preceding it. For example: 5! = 1 x 2 x 3 x 4 x 5 = 120

Your mission is simple: write a function that takes an integer n and returns the value of n!.

You are guaranteed an integer argument. For any values outside the non-negative range, return null, nil or None (return an empty string "" in C and C++). For non-negative numbers a full length number is expected for example, return 25! = "15511210043330985984000000" as a string.

For more on factorials, see http://en.wikipedia.org/wiki/Factorial

NOTES:
- The use of BigInteger or BigNumber functions has been disabled, this requires a complex solution
- I have removed the use of require in the javascript language.

## Solution

```js
function factorial(n) {
    if (n < 0) return null;
    let res = [1];
    for (let i = 1; i <= n; i++) {
        for (let j = 0, carry = 0; j < res.length || carry > 0; j++) {
            carry += (res[j] || 0) * i;
            res[j] = carry % 10;
            carry = carry / 10 | 0;
        }
    }
    return res.reverse().join('');
}
```

```js
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
```
