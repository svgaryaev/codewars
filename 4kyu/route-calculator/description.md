[На главную](https://github.com/svgaryaev/codewars)

## Route Calculator

[origin](https://www.codewars.com/kata/581bc0629ad9ff9873000316)

This calculator takes values that could be written in a browsers route path as a single string. It then returns the result as a number (or an error message).

Route paths use the '/' symbol so this can't be in our calculator. Instead we are using the '$' symbol as our divide operator.

You will be passed a string of any length containing numbers and operators:

- '+' = add
- '-' = subtract
- '*' = multiply
- '$' = divide

Your task is to break the string down and calculate the expression using this order of operations. (division  //  multiplication  //  subtraction  //  addition)

If you are given an invalid input (i.e. any character except .0123456789+-*$) you should return the error message:'400: Bad request'

### Remember:

Operations are infinite  
Order of operations is imperitive  
No eval or equivalent functions  

### Examples:

```js
calculate('1+1')                // '2'
calculate('10$2')               // '5'
calculate('1.5*3')              // '4.5'
calculate('5+5+5+5')            // '20'
calculate('1000$2.5$5+5-5+6$6') // '81'
calculate('10-9p')              // '400: Bad request'
```

### Further Notes - Parameters outside of this challenge:

Brackets e.g. 10*(1+2)  
Square root, log, % or any other operators  
Unary minus (10*-1)  
Bad mathematical input (10**$10 or 5+5$)  
You may have to deal with floats  

## Solution

[solution.js](solution.js)
