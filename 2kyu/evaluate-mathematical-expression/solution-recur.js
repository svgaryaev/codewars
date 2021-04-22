/** @see http://en.wikipedia.org/wiki/Recursive_descent_parser */
function calc(str) {
    str = str.replace(/\s+/g, '');
    if (!/^[\d+\-*/.()]*$/.test(str)) throw new Error();

    let i = 0;

    const peek = () => str[i];
    const consume = () => str[i++];
    const skip = () => { i++ };
    
    const number = () => {
        let result = consume();
        while (/[\d.]/.test(peek())) {
            result += consume();
        }
        return parseFloat(result);
    };

    const factor = () => {
        if (/\d/.test(peek())) {
            return number();
        }
        if (peek() === '(') {
            skip(); // '('
            const result = expression();
            skip(); // ')'
            return result;
        }
        if (peek() === '-') {
            skip();
            return -factor();
        }
        throw new Error();
    }

    const term = () => {
        let result = factor();
        while (peek() === '*' || peek() === '/') {
            if (consume() === '*') {
                result *= factor();
            } else {
                result /= factor();
            }
        }
        return result;
    }

    const expression = () => {
        let result = term();
        while (peek() === '+' || peek() === '-') {
            if (consume() === '+') {
                result += term();
            } else {
                result -= term();
            }
        }
        return result;
    }

    return expression();
}

module.exports = calc;
