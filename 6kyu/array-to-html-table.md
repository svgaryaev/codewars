[На главную](https://github.com/svgaryaev/codewars)

## Array to HTML table

The task is simple - given a 2D array (list), generate an HTML table representing the data from this array.

You need to write a function called `to_table`/`toTable`, that takes three arguments:

`data` - a 2D array (list),
`headers` - an optional boolean value. If `True`, the first row of the array is considered a header. Defaults to `False`,
`index` - an optional boolean value. If `True`, the first column in the table should contain 1-based indices of the corresponding row. If `headers` arguments is `True`, this column should have empty header. Defaults to False.
and returns a string containing HTML tags representing the table.
HTML table is structured like this:

```html
<table>
    <thead>                     <!-- an optional table header -->
        <tr>                    <!-- a header row -->
            <th>header1</th>    <!-- a single header cell -->
            <th>header2</th>
        </tr>
    </thead>
    <tbody>                     <!-- a table's body -->
        <tr>                    <!-- a table's row -->
            <td>row1, col1</td> <!-- a row's cell -->
            <td>row1, col2</td>
        </tr>
        <tr>
            <td>row2, col1</td>
            <td>row2, col2</td>
        </tr>
    </tbody>
</table>
```

The table header is optional. If header argument is False then the table starts with `<tbody>` tag, ommiting `<thead>`.

So, for example:

`toTable([["lorem", "ipsum"], ["dolor", "sit amet"]], true, true)`

returns

`"<table><thead><tr><th></th><th>lorem</th><th>ipsum</th></tr></thead><tbody><tr><td>1</td><td>dolor</td><td>sit amet</td></tr></tbody></table>"`

As you can see, no linebreaks or whitespaces (except for the ones present in the array values) are included, so the HTML code is minified.
IMPORTANT NOTE: if the value in the array happens to be None, the value of the according cell in the table should be en ampty string ("")!

## Solution

<details>
<summary>Spoiler warning</summary>

```js
function toTable(data, headers = false, index = false) {
    return `<table>${
        headers
            ? `<thead><tr>${
                (index ? '<th></th>' : '') + data.splice(0,1)[0].map(th => `<th>${th}</th>`).join``
            }</tr></thead>`
            : ''
    }<tbody>${
        data.map((tr, i) =>
            `<tr>${
                (index ? `<td>${i + 1}</td>` : '') + tr.map(td => `<td>${td === null ? '' : td}</td>`).join``
            }</tr>`
        ).join``
    }</tbody></table>`;
}
```

</details>
