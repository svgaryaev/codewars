/**
 * A little enhanced AST parser and interpreter.
 * Original idea belongs to Minko Gechev's tiny.js
 * https://github.com/mgechev/tiny-compiler/blob/master/tiny.js
 */
function calculate(str) {
    if (!/^[*$.0123456789+-]*$/.test(str)) return '400: Bad request';

    const parse = (tokens) => {
        const op = { '+': 0, '-': 1, '*': 2, '$': 3 };

        tokens = tokens.split('');

        let head = null,
            last = null,
            i = 0;

        const peek = () => tokens[i];
        const consume = () => tokens[i++];

        const parseNum = (strNum) => {
            const node = { v: parseFloat(strNum), type: 'num' };
            last ? last.right = node : head = last = node;
        };

        const parseOp = () => {
            const node = { v: consume(), type: 'op', left: null, right: null };
            if (last.type === 'num') {
                node.left = last;
                head = node;
            } else if (op[node.v] > op[head.v]) {
                let next = head;
                while (next.right && next.right.type === 'op' && op[node.v] > op[next.right.v]) next = next.right;
                node.left = next.right;
                next.right = node;
            } else {
                node.left = head;
                head = node;
            }
            last = node;
        };

        while (peek()) {
            if (/[\d.]/.test(peek())) {
                let strNum = '';
                while (peek() && /[\d.]/.test(peek())) strNum += consume();
                parseNum(strNum);
            } else {
                parseOp();
            }
        }

        return head;
    };

    const evaluate = (ast) => {
        const op = {
            '+': (a, b) => a + b,
            '-': (a, b) => a - b,
            '*': (a, b) => a * b,
            '$': (a, b) => a / b,
        };
        if (ast.type === 'num') return ast.v;
        return op[ast.v](evaluate(ast.left), evaluate(ast.right));
    };

    return evaluate(parse(str));
}

module.exports = calculate;
