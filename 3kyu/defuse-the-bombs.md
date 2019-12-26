[На главную](https://github.com/svgaryaev/codewars)

## Defuse the bombs!

There are a series of 10 bombs about to go off! Defuse them all! Simple, right?

Note: This is not an ordinary Kata, but more of a series of puzzles. The point is to figure out what you are supposed to do, then how to do it. Instructions are intentionally left vague.

## Solution

<details>
<summary>Spoiler warning</summary>

```js
Bomb.diffuse( 42 );

Bomb.diffuse();
Bomb.diffuse();
Bomb.diffuse();
Bomb.diffuse();
Bomb.diffuse();

Bomb.diffuse(global.BombKey);

const diffuseTheBomb = () => true;
Bomb.diffuse();

Bomb.diffuse('3.14159');

const date = new Date();
Bomb.diffuse(date.setFullYear(date.getFullYear() - 4));

Bomb.diffuse(Object.freeze({ key: 43 }));

const obj = {
  a: 9.5,
  valueOf: () => obj.a++
};
Bomb.diffuse(obj);

Math.random = ((a = 0.5, first = true) => () => first ? (first = false, a) : 1)();
Bomb.diffuse(42);

// console.log( Bomb );
// console.log( Bomb.diffuse.toString() );

Array.prototype.toString = function() { return this.reduce((acc, next) => acc += next, 0) }
Bomb.diffuse('eWVz'); // shitty moment
```

</details>
