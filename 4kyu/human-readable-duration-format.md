[На главную](https://github.com/svgaryaev/codewars)

## Human readable duration format

Your task in order to complete this Kata is to write a function which formats a duration, given as a number of seconds, in a human-friendly way.

The function must accept a non-negative integer. If it is zero, it just returns `"now"`. Otherwise, the duration is expressed as a combination of `years`, `days`, `hours`, `minutes` and `seconds`.

It is much easier to understand with an example:

```js
formatDuration(62)    // returns "1 minute and 2 seconds"
formatDuration(3662)  // returns "1 hour, 1 minute and 2 seconds"
```

### For the purpose of this Kata, a year is 365 days and a day is 24 hours.

Note that spaces are important.

### Detailed rules

The resulting expression is made of components like `4 seconds`, `1 year`, etc. In general, a positive integer and one of the valid units of time, separated by a space. The unit of time is used in plural if the integer is greater than 1.

The components are separated by a comma and a space (`", "`). Except the last component, which is separated by `" and "`, just like it would be written in English.

A more significant units of time will occur before than a least significant one. Therefore, `1 second and 1 year` is not correct, but `1 year and 1 second` is.

Different components have different unit of times. So there is not repeated units like in `5 seconds and 1 second`.

A component will not appear at all if its value happens to be zero. Hence, `1 minute and 0 seconds` is not valid, but it should be just `1 minute`.

A unit of time must be used "as much as possible". It means that the function should not return `61 seconds`, but `1 minute and 1 second` instead. Formally, the duration specified by of a component must not be greater than any valid more significant unit of time.

## Solution

<details>
<summary>Spoiler warning</summary>

```js
function formatDuration (seconds) {
  if (seconds === 0) return 'now';
  const date = { year: 31536000, day: 86400, hour: 3600, minute: 60, second: 1 };
  const res = [];
  for (const key in date) {
    let curr = Math.floor(seconds / date[key]);
    if (curr) res.push(`${curr} ${key}${curr !== 1 ? 's' : ''}`);
    seconds %= date[key];
  }
  return res.length > 1 ? res.join(', ').replace(/, ([^,]+)$/, ' and $1') : res[0];
}
```

```js
function formatDuration (seconds) {
  if (seconds === 0) return 'now';
  const y = Math.floor(seconds / 31536000);
  const d = Math.floor((seconds -= y * 31536000) / 86400);
  const h = Math.floor((seconds -= d * 86400) / 3600);
  const m = Math.floor((seconds -= h * 3600) / 60);
  const s = seconds % 60;
  const res = [];
  const add = (t, str) => {
    if (t > 0) res.push(`${t} ${str}${t !== 1 ? 's' : ''}`);
  };
  add(y, 'year');
  add(d, 'day');
  add(h, 'hour');
  add(m, 'minute');
  add(s, 'second');
  return (res.length > 1 ? `${res.slice(0,-1).join(', ')} and ` : '') + res.slice(-1).pop();
}
```

</details>
