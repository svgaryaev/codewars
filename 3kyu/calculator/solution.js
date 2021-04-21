function calculate(str) {
    const tokenize = (str) => {
        const numRe = /[\d.]/;
        let tokens = [],
            i = 0;

        while (str[i]) {
            if (numRe.test(str[i])) {
                let strNum = '';
                while (numRe.test(str[i])) strNum += str[i++];
                tokens.push({ v: +strNum, type: 'num' });
                continue;
            }
            if (/[*+-/]/.test(str[i])) {
                tokens.push({ v: str[i++], type: 'op' })
            }
            i++;
        }

        return tokens;
    };

    const parse = (tokens) => {
        const op = { '+': 0, '-': 1, '*': 2, '/': 3 };

        let head = null,
            last = null,
            i = 0;

        tokens.forEach(token => {
            if (token.type === 'num') return last ? last.right = token : head = last = token;

            if (last.type === 'num') {
                token.left = last;
                head = token;
            } else if (op[token.v] > op[head.v]) {
                let next = head;
                while (next.right && next.right.type === 'op' && op[token.v] > op[next.right.v]) next = next.right;
                token.left = next.right;
                next.right = token;
            } else {
                token.left = head;
                head = token;
            }
            last = token;
        });

        return head;
    };

    const evaluate = (ast) => {
        const op = {
            '+': (a, b) => a + b,
            '-': (a, b) => a - b,
            '*': (a, b) => a * b,
            '/': (a, b) => a / b,
        };
        if (ast.type === 'num') return ast.v;
        return op[ast.v](evaluate(ast.left), evaluate(ast.right));
    };

    return evaluate(parse(tokenize(str)));
}


const Calculator = function() {
    this.evaluate = calculate;
};

module.exports = Calculator;
