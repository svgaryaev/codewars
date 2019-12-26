[На главную](https://github.com/svgaryaev/codewars)

## parseInt() reloaded

In this kata we want to convert a string into an integer. The strings simply represent the numbers in words.

Examples:

- "one" => 1
- "twenty" => 20
- "two hundred forty-six" => 246
- "seven hundred eighty-three thousand nine hundred and nineteen" => 783919

Additional Notes:

- The minimum number is "zero" (inclusively)
- The maximum number, which must be supported is 1 million (inclusively)
- The "and" in e.g. "one hundred and twenty-four" is optional, in some cases it's present and in others it's not
- All tested numbers are valid, you don't need to validate them

## Solution

```js
function parseInt(string) {
    const digits = {
        'zero': 0,
        'one': 1,
        'tw': 2,
        'th': 3,
        'fo': 4,
        'fi': 5,
        'si': 6,
        'se': 7,
        'eig': 8,
        'nine': 9
    };
    const exclusions = {
        'ten': 10,
        'eleven': 11,
        'twelve': 12
    };
    const modifiers = {
        'million': 1000000,
        'thousand': 1000,
        'hundred': 100
    };
    const words = string.split(/-| /);
    let result = 0;
    let modifier = 1;

    mainloop:
    while (words.length > 0) {
        const word = words.pop();
        if (word.match(/^and/)) continue;
        if (word in modifiers) {
            modifier = modifier < modifiers[word] ? modifiers[word] : modifier * modifiers[word];
            continue;
        }
        if (word in exclusions) {
            result += exclusions[word] * modifier;
            continue;
        }
        for (let digit in digits) {
            if (word.match(digit)) {
            result += word.match('ty') ?
                digits[digit] * 10 * modifier :
                word.match('teen') ?
                    (digits[digit] + 10) * modifier :
                    digits[digit]  * modifier
            continue mainloop;
            }
        }
    }

    return result;
}
```
