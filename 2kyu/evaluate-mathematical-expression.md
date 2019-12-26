[На главную](https://github.com/svgaryaev/codewars)

## Evaluate mathematical expression

Given a mathematical expression as a string you must return the result as a number.

### Numbers

Number may be both whole numbers and/or decimal numbers. The same goes for the returned result.

### Operators

You need to support the following mathematical operators:

- Multiplication *
- Division / (as true division)
- Addition +
- Subtraction -

Operators are always evaluated from left-to-right, and * and / must be evaluated before + and -.

### Parentheses

You need to support multiple levels of nested parentheses, ex. (2 / (2 + 3.33) * 4) - -6

### Whitespace

There may or may not be whitespace between numbers and operators.

An addition to this rule is that the minus sign (-) used for negating numbers and parentheses will never be separated by whitespace. I.e., all of the following are valid expressions.

```js
1-1    // 0
1 -1   // 0
1- 1   // 0
1 - 1  // 0
1- -1  // 2
1 - -1 // 2

6 + -(4)   // 2
6 + -( -4) // 10
```

And the following are invalid expressions

```js
1 - - 1    // Invalid
1- - 1     // Invalid
6 + - (4)  // Invalid
6 + -(- 4) // Invalid
```

### Validation

You do not need to worry about validation - you will only receive valid mathematical expressions following the above rules.

NOTE: Both eval and Function are disabled. Same goes for String.match.

## Solution

<details>
<summary>Spoiler warning</summary>

### kinda cheating solutions

```js
const calc = expression => {
    const ev = (match, a, op, b) => {
        a = +a;
        b = +b;
        switch (op) {
            case '+': return a + b;
            case '-': return a - b;
            case '/': return a / b;
            case '*': return a * b;
        }
    }

    let re;
    
    while (!/^ *-?\w+\.?\w* *$/.exec(expression)) {
        if ((re = /(-?)\( ?(-?\w+\.?\w*) ?\)/g).exec(expression)) {
            expression = expression.replace(re, (match, sign, num) => sign ? -1 * num : num);
            continue;
        }
        if ((re = /(-?)\( ?(-?\w+\.?\w*) ?([+-/*]) ?(-?\w+\.?\w*) ?\)/g).exec(expression)) {
            expression = expression.replace(re, (match, sign, a, op, b) => (sign ? -1 : 1) * ev(match, a, op, b));
            continue;
        }
        if ((re = /(-?\w+\.?\w*) ?([/*]) ?(-?\w+\.?\w*)/g).exec(expression)) {
            expression = expression.replace(re, ev);
            continue;
        }
        if ((re = /(-?\w+\.?\w*) ?([+-]) ?(-?\w+\.?\w*)/g).exec(expression)) {
            expression = expression.replace(re, ev);
            continue;
        }
    }
    
    return Number(expression);
};
```

</details>
