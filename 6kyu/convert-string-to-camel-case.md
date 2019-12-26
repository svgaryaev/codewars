[На главную](https://github.com/svgaryaev/codewars)

## Convert string to camel case

Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

Examples

```js
toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"
toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"
```

## Solution

```js
function toCamelCase(str) {
  return str.replace(/[-_](.)/g, (_, c) => c.toUpperCase());
}
```

```js
function toCamelCase(str) {
  return (subs = str.split(/[-_]/))[0] + subs.slice(1).map(word => word[0].toUpperCase() + word.slice(1)).join('');
}
```
