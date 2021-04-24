function parseCSV(input, separator = ',', quote = '"') {
    const res = [];
    let row = [],
        qc = 0,
        i = 0,
        cell = '';

    while (i < input.length) {
        let char = input[i++];
        if (char === quote) {
            if (!input[i]) break;
            if (input[i] === quote) {
                if (input[i + 1] && input[i + 1] === separator) {
                    i++;
                    continue;
                }
            } else {
                qc ? qc-- : qc++;
            }
            char = input[i++];
        }
        if (char === separator && qc === 0) {
            row.push(cell);
            cell = '';
            continue;
        }
        if (char === '\n' && qc === 0) {
            row.push(cell);
            cell = '';
            res.push(row);
            row = [];
            continue;
        }
        cell += char;
    }

    row.push(cell);
    res.push(row);

    return res;
}

module.exports = parseCSV;
