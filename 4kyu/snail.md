[На главную](https://github.com/svgaryaev/codewars)

## Snail Sort

Given an `n x n` array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

```
array = [[1,2,3],
         [4,5,6],
         [7,8,9]]
snail(array) #=> [1,2,3,6,9,8,7,4,5]
```

For better understanding, please follow the numbers of the next array consecutively:

```
array = [[1,2,3],
         [8,9,4],
         [7,6,5]]
snail(array) #=> [1,2,3,4,5,6,7,8,9]
```

This image will illustrate things more clearly:

![](http://www.haan.lu/files/2513/8347/2456/snail.png)

NOTE: The idea is not sort the elements from the lowest value to the highest; the idea is to traverse the 2-d array in a clockwise snailshell pattern.
NOTE 2: The 0x0 (empty matrix) is represented as en empty array inside an array `[[]]`.

## Solution

<details>
<summary>Spoiler warning</summary>

```js
function snail(arr) {
    const next = ((step = 0) => (res, arr) => {
        switch (step++ % 4) {
            case 0:
                return res.push(...arr.shift());
            case 1:
                return arr.forEach(a => { res.push(a.pop()) });
            case 2:
                return res.push(...arr.pop().reverse());
            case 3:
                return arr.slice().reverse().forEach(a => { res.push(a.shift()) });
        }
    })();

    const res = [];

    while (arr.length > 0 && arr[0].length > 0) {
        next(res, arr);
    }

    return res;
}
```

</details>
