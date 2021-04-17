// function testit(woods, shoot) {
//     return woods.split('\n').reverse().map((wood, woodIdx) => {
//         wood = wood.split('');
//         shoot.slice(0, Math.ceil(wood.length / 2)).forEach((shoot, shootIdx) => {
//             shootIdx = shootIdx * 2;
//             if (shoot === woodIdx + 1) {
//                 wood[shootIdx] = wood[shootIdx] === '─' ? '┼' : '│';
//             }
//             if (shoot > woodIdx && wood[shootIdx] === '─') {
//                 wood[shootIdx] = '╌';
//             }
//         })
//         return wood.join('');
//     }).reverse().join('\n')
// }

function testit(woods, shoot) {
    return woods.split('\n').reverse().map((row, rowIdx) =>
        row.split('').map(
            (w, i) =>
                (i % 2 === 0)
                    ? shoot[i / 2] === rowIdx + 1
                        ? (row[i] === '─' ? '┼' : '│')
                        : (rowIdx < shoot[i / 2] && row[i] === '─' ? '╌' : w)
                    : w
        ).join('')).reverse().join('\n');
}

module.exports = testit;
