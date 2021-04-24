const assert = require('chai').assert;
const parseCSV = require('./solution');

describe('4kyu Complex CSV Parser', () => {
    describe('basic tests', () => {
        it('should handle simple inputs', () => {
            const input = '1,2,3\n4,5,6';
            const output = [['1','2','3'],['4','5','6']];
            assert.deepEqual(parseCSV(input), output);
        });

        it('should handle quoted fields', () => {
            const input = '1,"two was here",3\n4,5,6';
            const output = [['1','two was here','3'],['4','5','6']];
            assert.deepEqual(parseCSV(input), output);
        });

        it('should handle alternate separators', () => {
            const input = '1\t2\t3\n4\t5\t6';
            const output = [['1','2','3'],['4','5','6']];
            assert.deepEqual(parseCSV(input, '\t'), output);
        });

        it('should handle an empty file', () => {
            const input = '';
            const output = [['']];
            assert.deepEqual(parseCSV(input), output);
        });

        it('should handle a single row', () => {
            const input = '1,2,3';
            const output = [['1', '2', '3']];
            assert.deepEqual(parseCSV(input), output);
        });

        it('should handle simple input', () => {
            const input = '1,2,3\n4,5,6';
            const output = [['1', '2', '3'], ['4', '5', '6']];
            assert.deepEqual(parseCSV(input), output);
        });

        it('should handle empty fields', () => {
            const input = '1,,3\n4,5,\n,7,8';
            const output = [['1', '', '3'], ['4', '5', ''], ['', '7', '8']];
            assert.deepEqual(parseCSV(input), output);
        });

        it('should handle spaces within fields', () => {
            const input = '1, 2 ,3\n4,5,6';
            const output = [['1', ' 2 ', '3'], ['4', '5', '6']];
            assert.deepEqual(parseCSV(input), output);
        });

        it('should handle uneven rows', () => {
            const input = '1,2,3,4,5,6\n7,8\n9,10,11,12';
            const output = [
                ['1', '2', '3', '4', '5', '6'],
                ['7', '8'],
                ['9', '10', '11', '12']
            ];
            assert.deepEqual(parseCSV(input), output);
        });

        it('should handle empty rows', () => {
            const input = '1,2,3\n\n4,5,6';
            const output = [['1', '2', '3'], [''], ['4', '5', '6']];
            assert.deepEqual(parseCSV(input), output);
        });
    });

    describe('quoted fields', () => {
        it('should handle quoted fields', () => {
            const input = '1,"two was here",3\n4,5,6';
            const output = [['1', 'two was here', '3'], ['4', '5', '6']];
            assert.deepEqual(parseCSV(input), output);
        });

        it('should handle empty quoted fields', () => {
            const input = '1,"",3\n4,5,6';
            const output = [['1', '', '3'], ['4', '5', '6']];
            assert.deepEqual(parseCSV(input), output);
        });

        it('should handle leading and trailing spaces in quoted fields', () => {
            const input = '1," two ",3\n4,5,6';
            const output = [['1', ' two ', '3'], ['4', '5', '6']];
            assert.deepEqual(parseCSV(input), output);
        });

        it('should handle separators in quoted fields', () => {
            const input = '1,"two, too",3\n4,5,6';
            const output = [['1', 'two, too', '3'], ['4', '5', '6']];
            assert.deepEqual(parseCSV(input), output);
        });

        it('should handle multi-line quoted fields', () => {
            const input = '1,"two was\nup there",3\n4,5,6';
            const output = [['1', 'two was\nup there', '3'], ['4', '5', '6']];
            assert.deepEqual(parseCSV(input), output);
        });

        it('should handle multiple separators in multiline quoted fields', () => {
            const input = 'one,",,,,,..two,,,,,\n,,,,,,",three\n4,,6';
            const output = [
                ['one', ',,,,,..two,,,,,\n,,,,,,', 'three'],
                ['4', '', '6']
            ];
            assert.deepEqual(parseCSV(input), output);
        });

        it('should handle quote characters within quoted fields', () => {
            const input = '1,"two ""quote""",3\n4,5,6';
            const output = [['1', 'two "quote"', '3'], ['4', '5', '6']];
            assert.deepEqual(parseCSV(input), output);
        });
    });

    describe('alternate characters', () => {
        it('should handle alternate separators', () => {
            const input = '1\t2\t"3\tthree"\n4\t5\t6';
            const output = [['1', '2', '3\tthree'], ['4', '5', '6']];
            assert.deepEqual(parseCSV(input, '\t'), output);
        });

        it('should handle alternate quotes', () => {
            const input = '1,2,3\n4,\'this \'\'is\'\'\na test\',6';
            const output = [['1', '2', '3'], ['4', 'this \'is\'\na test', '6']];
            assert.deepEqual(parseCSV(input, ',', '\''), output);
        });
    });

    describe('regular expression special characters', () => {
        it('should handle using a dot (.) as a field separator', () => {
            const input = '1.2.3\n4.5.6';
            const output = [['1', '2', '3'], ['4', '5', '6']];
            assert.deepEqual(parseCSV(input, '.'), output);
        });

        it('should handle using a dollar sign ($) as a quote character', () => {
            const input = '$a $$string$$ using $$ as the quote$.$multi\nline$.\n$1.2$.3.4';
            const output = [
                ['a $string$ using $ as the quote', 'multi\nline', ''],
                ['1.2', '3', '4']
            ];
            assert.deepEqual(parseCSV(input, '.', '$'), output);
        });

        it('should handle using a backslash (\\) as the quote', () => {
            const input = '\\a \\\\string\\\\ using \\\\ as the quote\\.\\multi\nline\\.\n1.2.\\3.4\\';
            const output = [
                ['a \\string\\ using \\ as the quote', 'multi\nline', ''],
                ['1', '2', '3.4']
            ];
            assert.deepEqual(parseCSV(input, '.', '\\'), output);
        });
    });

    describe('random input', function() {
        it('should handle random input', () => {
            const randomString = () => {
                let ret = '';
                while (ret.length < 5) {
                    ret += 'bcdfghijklmnpqrstvwxz'[Math.floor(Math.random() * 20)];
                }
                return ret;
            };

            let output = [],
                input, arr;

            while (output.length < 3) {
                arr = [];
                while (arr.length < 6) arr.push(randomString());
                output.push(arr);
            }
            input = output.map(a => a.join(',')).join('\n');

            assert.deepEqual(parseCSV(input), output);
        });
    });
});
