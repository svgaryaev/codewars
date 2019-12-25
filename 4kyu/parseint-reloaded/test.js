Test.describe("Fixed tests", function() {
    Test.it("Tests", function() {
        Test.assertEquals(parseInt('zero'), 0);
        Test.assertEquals(parseInt('one'), 1);
        Test.assertEquals(parseInt('two'), 2);
        Test.assertEquals(parseInt('three'), 3);
        Test.assertEquals(parseInt('four'), 4);
        Test.assertEquals(parseInt('five'), 5);
        Test.assertEquals(parseInt('six'), 6);
        Test.assertEquals(parseInt('seven'), 7);
        Test.assertEquals(parseInt('eight'), 8);
        Test.assertEquals(parseInt('nine'), 9);
        Test.assertEquals(parseInt('ten'), 10);
        Test.assertEquals(parseInt('twenty'), 20);
        Test.assertEquals(parseInt('twenty-one'), 21);
        Test.assertEquals(parseInt('thirty-seven'), 37);
        Test.assertEquals(parseInt('forty-six'), 46);
        Test.assertEquals(parseInt('fifty-nine'), 59);
        Test.assertEquals(parseInt('sixty-eight'), 68);
        Test.assertEquals(parseInt('seventy-two'), 72);
        Test.assertEquals(parseInt('eighty-three'), 83);
        Test.assertEquals(parseInt('ninety-four'), 94);
        Test.assertEquals(parseInt('one hundred'), 100);
        Test.assertEquals(parseInt('one hundred one'), 101);
        Test.assertEquals(parseInt('one hundred and one'), 101);
        Test.assertEquals(parseInt('one hundred sixty-nine'), 169);
        Test.assertEquals(parseInt('two hundred and ninety-nine'), 299);
        Test.assertEquals(parseInt('seven hundred thirty-six'), 736);
        Test.assertEquals(parseInt('two thousand'), 2000);
        Test.assertEquals(parseInt('one thousand three hundred and thirty-seven'), 1337);
        Test.assertEquals(parseInt('twenty-six thousand three hundred and fifty-nine'), 26359);
        Test.assertEquals(parseInt('thirty-five thousand'), 35000);
        Test.assertEquals(parseInt('ninety-nine thousand nine hundred and ninety-nine'), 99999);
        Test.assertEquals(parseInt('six hundred sixty-six thousand six hundred sixty-six'), 666666);
        Test.assertEquals(parseInt('seven hundred thousand'), 700000);
        Test.assertEquals(parseInt('two hundred thousand three'), 200003);
        Test.assertEquals(parseInt('two hundred thousand and three'), 200003);
        Test.assertEquals(parseInt('two hundred three thousand'), 203000);
        Test.assertEquals(parseInt('five hundred thousand three hundred'), 500300);
        Test.assertEquals(parseInt('eight hundred eighty-eight thousand eight hundred and eighty-eight'), 888888);
        Test.assertEquals(parseInt('one million'), 1000000);
    });
});

function solution(string) {
    let r = 0, temp = 0, d = {"zero":0, "one":1,"two":2,"three":3,"four":4,"five":5,"six":6,"seven":7,"eight":8,"nine":9,"ten":10,"eleven":11,"twelve":12,"thirteen":13,"fourteen":14,"fifteen":15,"sixteen":16,"seventeen":17,"eighteen":18,"nineteen":19,"twenty":20,"thirty":30,"forty":40,"fifty":50,"sixty":60,"seventy":70,"eighty":80,"ninety":90, "hundred":100, "thousand":1000, "million":1000000};
    string = string.replace(/ and /g, " ").replace(/-/g, " ").split(" ");
    for (let i = 0; i < string.length; i++) {
        let x = string[i];
        if (["hundred", "thousand", "million"].includes(string[i])) {
            temp *= d[x];
            if (["thousand", "million"].includes(x) || !(string.slice(i+1).includes("thousand") || string.slice(i+1).includes("million"))) {
            r += temp;
            temp = 0;
            }
        } else {
            temp += d[x];
        }
    }
    return r + temp;
}

function format(s, a) {
    for (let x of a) {
        s = s.replace("{}", x[~~(Math.random() * x.length)])
    }
    return s;
}

Test.describe("Random tests", function() {
    Test.it("Tests", function() {
        const ones = ["one","two","three","four","five","six","seven","eight","nine"];
        const teens = ["ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"];
        const tens = ["twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"];
        
        for (let i = 0; i < 50; i++) {
            let line = format("{}", [Math.random() > 0.5 ? ones : teens]);
            Test.assertEquals(parseInt(line), solution(line));
        }
        
        for (let i = 0; i < 100; i++) {
            let line = format("{}-{}", [tens, ones]);
            Test.assertEquals(parseInt(line), solution(line));
        }
        
        for (let i = 0; i < 100; i++) {
            let line = format("{} hundred{}{}-{}", [ones, [" ", " and "], tens, ones]);
            Test.assertEquals(parseInt(line), solution(line));
        }
        
        for (let i = 0; i < 100; i++) {
            let line = format("{} thousand {} hundred{}{}-{}", [ones, ones, [" ", " and "], tens, ones]);
            Test.assertEquals(parseInt(line), solution(line));
        }
        
        for (let i = 0; i < 100; i++) {
            let line = format("{}-{} thousand {} hundred{}{}-{}", [tens, ones, ones, [" ", " and "], tens, ones]);
            Test.assertEquals(parseInt(line), solution(line));
        }
        
        for (let i = 0; i < 100; i++) {
            let line = format("{} hundred{}{}-{} thousand {} hundred{}{}-{}", [ones, [" ", " and "], tens, ones, ones, [" ", " and "], tens, ones]);
            Test.assertEquals(parseInt(line), solution(line));
        }
        
        for (let i = 0; i < 100; i++) {
            let line = format("{} hundred{}{}-{} thousand {} hundred{}{}", [ones, [" ", " and "], tens, ones, ones, [" ", " and "], teens]);
            Test.assertEquals(parseInt(line), solution(line));
        }
    });
});
