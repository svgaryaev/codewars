/** @see https://en.wikipedia.org/wiki/Shunting-yard_algorithm */
function calc(str) {
    if (!/^[\d+\-*/.() ]*$/.test(str)) throw new Error();

    const tokenize = (str) => {
        let tokens = [],
            last = '*',
            i = 0;

        while (str[i]) {
            const numRe = /[\d.]/;
            if (numRe.test(str[i])) {
                let strNum = str[i++];
                while (numRe.test(str[i])) strNum += str[i++];
                tokens.push({ v: +strNum, type: 'num' });
                last = strNum;
                continue;
            }
            if (/[*+\-/(]/.test(last) && str[i] === '-') {
                last = str[i];
                tokens.push({ v: str[i++], type: 'neg' });
                continue;
            }
            if (/[+\-*/]/.test(str[i])) {
                last = str[i];
                tokens.push({ v: str[i++], type: 'op' });
                continue;
            }
            if (/[()]/.test(str[i])) {
                last = str[i];
                tokens.push({ v: str[i++], type: 'par' });
                continue;
            }
            i++;
        }

        return tokens;
    };

    const parse = (tokens) => {
        const op = { '+': 0, '-': 1, '*': 2, '/': 3 };

        const operands = [];
        const operators = [];

        const addNode = () => {
            const exp = operators.pop();
            if (exp.type === 'neg') {
                exp.right = operands.pop();
                operands.push(exp);
            } else {
                exp.right = operands.pop();
                exp.left = operands.pop();
                operands.push(exp);
            }
        };

        let i = 0;

        while (i < tokens.length) {
            const token = tokens[i++];

            if (token.type === 'num') {
                operands.push(token);
                continue;
            }

            if (token.type === 'neg') {
                operators.push(token);
                continue;
            }

            if (token.type === 'op') {
                while (operators.length && op[token.v] <= op[operators[operators.length - 1].v]) {
                    addNode();
                }
                operators.push(token);
            }

            if (token.type === 'par') {
                if (token.v === '(') {
                    operators.push(token);
                    continue;
                }

                while (operators.length && operators[operators.length - 1].v !== '(') {
                    addNode();
                }
                operators.pop();
            }
        }

        while (operators.length) {
            addNode();
        }

        return operands.pop();
    };

    const evaluate = (ast) => {
        const op = {
            '+': (a, b) => a + b,
            '-': (a, b) => a - b,
            '*': (a, b) => a * b,
            '/': (a, b) => a / b,
        };
        if (ast.type === 'num') return ast.v;
        if (ast.type === 'neg') return -evaluate(ast.right);
        return op[ast.v](evaluate(ast.left), evaluate(ast.right));
    };

    return evaluate(parse(tokenize(str)));
}

module.exports = calc;
