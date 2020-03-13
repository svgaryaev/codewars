[На главную](https://github.com/svgaryaev/codewars)

## Valid Parentheses

Write a function called that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return `true` if the string is valid, and `false` if it's invalid.

Examples
```
"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true
```

## Solution

<details>
<summary>Spoiler warning</summary>

```js
function validParentheses(parens) {
  let opened = 0;
  for (const c of parens) {
    if (c === '(') {
      ++opened;
    } else if (!opened--) {
      return false;
    }
  }
  return !opened;
}
```

</details>
