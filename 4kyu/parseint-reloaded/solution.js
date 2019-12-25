function parseInt(string) {
    const digits = {
        'zero': 0,
        'one': 1,
        'tw': 2,
        'th': 3,
        'fo': 4,
        'fi': 5,
        'si': 6,
        'se': 7,
        'eig': 8,
        'nine': 9
    };
    const exclusions = {
        'ten': 10,
        'eleven': 11,
        'twelve': 12
    };
    const modifiers = {
        'million': 1000000,
        'thousand': 1000,
        'hundred': 100
    };
    const words = string.split(/-| /);
    let result = 0;
    let modifier = 1;
    
    mainloop:
    while (words.length > 0) {
        const word = words.pop();
        if (word.match(/^and/)) continue;
        if (word in modifiers) {
            modifier = modifier < modifiers[word] ? modifiers[word] : modifier * modifiers[word];
            continue;
        }
        if (word in exclusions) {
            result += exclusions[word] * modifier;
            continue;
        }
        for (let digit in digits) {
            if (word.match(digit)) {
            result += word.match('ty') ?
                digits[digit] * 10 * modifier :
                word.match('teen') ?
                    (digits[digit] + 10) * modifier :
                    digits[digit]  * modifier
            continue mainloop;
            }
        }
    }
    
    return result;
}

/*
function parseInt(string) {
    const digits = {
        'zero': 0,
        'one': 1,
        'tw': 2,
        'th': 3,
        'fo': 4,
        'fi': 5,
        'si': 6,
        'se': 7,
        'eig': 8,
        'nine': 9
    };
    const exclusions = {
        'ten': 10,
        'eleven': 11,
        'twelve': 12
    };
    const multipliers = {
        'million': 1000000,
        'thousand': 1000,
        'hundred': 100
    };
    const words = string.split(/-| /).filter(word => word !== 'and');
    let result = 0;
    let multiplier = 1;
    
    mainloop:
    while (words.length > 0) {
        const word = words.pop();
        if (word in multipliers) {
            multiplier = multiplier < multipliers[word] ? multipliers[word] : multiplier * multipliers[word];
            continue;
        }
        if (word in exclusions) {
            result += exclusions[word] * multiplier;
            continue;
        }
        for (let digit in digits) {
            if (word.match(digit)) {
            result += word.match('ty') ?
                digits[digit] * 10 * multiplier :
                word.match('teen') ?
                    (digits[digit] + 10) * multiplier :
                    digits[digit] * multiplier;
            continue mainloop;
            }
        }
    }
    
    return result;
}
*/
