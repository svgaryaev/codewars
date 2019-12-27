[На главную](https://github.com/svgaryaev/codewars)

## Backspaces in string

Assume `"#"` is like a backspace in string. This means that string `"a#bc#d"` actually is `"bd"`

Your task is to process a string with `"#"` symbols.

### Examples

```js
"abc#d##c"      ==>  "ac"
"abc##d######"  ==>  ""
"#######"       ==>  ""
""              ==>  ""
```

## Solution

<details>
<summary>Spoiler warning</summary>

Awesome, best practice, not mine

```js
function cleanString(s) {
    return s.split('').reduce((res, c) => c == '#' ? res.slice(0, -1) : res + c, '');
};
```

```js
function cleanString(s) {
    while(/#/.test(s)) {
        s = s.replace(/[^#]#/,'').replace(/^#/,'');
    }
    return s;
};
```

</details>
