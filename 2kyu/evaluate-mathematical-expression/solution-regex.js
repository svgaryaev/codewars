/** Bizarre realisation */
function calc(expression) {
    if (!/^[\d+\-*/.() ]*$/.test(expression)) throw new Error();

    const evaluate = (match, a, op, b) => {
        a = +a;
        b = +b;
        switch (op) {
            case '+': return a + b;
            case '-': return a - b;
            case '/': return a / b;
            case '*': return a * b;
        }
    }

    let re;

    while (!/^ *-?\w+\.?\w* *$/.exec(expression)) {
        if ((re = /(-?)\( ?(-?\w+\.?\w*) ?\)/g).exec(expression)) {
            expression = expression.replace(re, (match, sign, num) => sign ? -1 * num : num);
            continue;
        }
        if ((re = /(-?)\( ?(-?\w+\.?\w*) ?([+-/*]) ?(-?\w+\.?\w*) ?\)/g).exec(expression)) {
            expression = expression.replace(
                re,
                (match, sign, a, op, b) => (sign ? -1 : 1) * evaluate(match, a, op, b)
            );
            continue;
        }
        if ((re = /(-?\w+\.?\w*) ?([/*]) ?(-?\w+\.?\w*)/).exec(expression)) {
            expression = expression.replace(re, evaluate);
            continue;
        }
        if ((re = /(-?\w+\.?\w*) ?([+-]) ?(-?\w+\.?\w*)/).exec(expression)) {
            expression = expression.replace(re, evaluate);
        }
    }

    return Number(expression);
}

module.exports = calc;
