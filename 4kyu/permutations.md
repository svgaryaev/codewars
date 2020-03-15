[На главную](https://github.com/svgaryaev/codewars)

## Permutations

In this kata you have to create all permutations of an input string and remove duplicates, if present. This means, you have to shuffle all letters from the input in all possible orders.

Examples:

```js
permutations('a');    // ['a']
permutations('ab');   // ['ab', 'ba']
permutations('aabb'); // ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']
```

The order of the permutations doesn't matter.

## Solution

<details>
<summary>Spoiler warning</summary>

```js
function permutations(str) {
  const res = new Set();
  const findPermutations = (chars, word = '') => {
    if (chars.length === 1) res.add(word + chars[0]);
    chars.forEach((c, i) => findPermutations(chars.filter((_, _i) =>  _i !== i), word + c));
  };
  findPermutations(str.split``);
  return [...res];
}
```

</details>
