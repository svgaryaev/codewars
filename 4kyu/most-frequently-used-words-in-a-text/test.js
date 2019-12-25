const generateHistogram = s => {
    const histogram = {};
    s.forEach(wd=> histogram[wd] ? histogram[wd]++ : histogram[wd] = 1 )
    return histogram
}

const sol = s => {
    const originalText = s.toLowerCase().replace(/[\/,\.]| ' /g,'').split(' ')
    const histo = generateHistogram(originalText)
    
    return [Object.keys(histo).sort((a,b)=> histo[b] - histo[a]).filter(n=>n).slice(0,3), histo]
}

const rand = () => Math.random() > 0.5

const   preps = ['with', 'at', 'from', 'into', 'of', 'among', 'against', 'above', 'for', 'on', 'by', 'to', 'in'],
        arts  = ['a', 'the'],
        nouns = ['cat', 'rat', 'doll', 'monster', 'jedi', 'frog', 'toad', 'dresser', 'CD', 'blanket', 'poster'],
        verbs = ['ran', 'ate', 'saw', 'spoke', 'bolted', 'jumped', 'dove', 'yelled', 'caved', 'exploded'],
        seq   = [arts, nouns, verbs, preps, arts, nouns, preps, arts, nouns];

Test.describe("Should pass fixed tests", ()=> {
    Test.assertDeepEquals(topThreeWords("a a a  b  c c  d d d d  e e e e e"), ['e','d','a'])
    Test.assertDeepEquals(topThreeWords("a a c b b"), ['a','b','c'])
    Test.assertDeepEquals(topThreeWords("e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e"),['e','ddd','aa'])
    Test.assertDeepEquals(topThreeWords("  //wont won't won't "), ["won't", "wont"])
    Test.assertDeepEquals(topThreeWords("  , e   .. "), ["e"])
    Test.assertDeepEquals(topThreeWords("  ...  "), [])
    Test.assertDeepEquals(topThreeWords("  '  "), [])
    Test.assertDeepEquals(topThreeWords(`In a village of La Mancha, the name of which I have no desire to call to
    mind, there lived not long since one of those gentlemen that keep a lance
    in the lance-rack, an old buckler, a lean hack, and a greyhound for
    coursing. An olla of rather more beef than mutton, a salad on most
    nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra
    on Sundays, made away with three-quarters of his income.`), ['a','of','on'])
});

Test.describe("Random tests", ()=> {
    it("short", () => {
    for (let i = 0; i < 50; i++) {
        let text = '';
        seq.forEach(arr=> text += arr[~~(Math.random() * arr.length)] + ' ');
        text = rand() ? text.replace(/[a-z]+/i,'').trim().replace(/[a-z]+/i, f=> f + 's') : text
        text = text.replace(/[a-z]/i, f=>f.toUpperCase())

        const ans = sol(text)
        const user = topThreeWords(text)
        console.log(text)
        if (ans[0] === user) {
            Test.assertDeepEquals(user, ans[0])
        } else {
            if (ans[0].map(word=> ans[1][word]).toString() === user.map(word=> ans[1][word]).toString()) {
                Test.assertDeepEquals(user, user)
            } else {
                Test.assertDeepEquals(user, ans[0])
            }
        }
    }
    })
    
    it("longer", () => {
    for (let i = 0; i < 50; i++) {
        let text = '';
        seq.slice(0,3).forEach(arr=> text += arr[~~(Math.random() * arr.length)] + ' ');
        
        for (let j = 0; j < 2; j++) {
            seq.slice(3,seq.length).forEach(arr=> text += arr[~~(Math.random() * arr.length)] + ' ');
        }
        
        text = rand() ? text.replace(/[a-z]+/i,'').trim().replace(/[a-z]+/i, f=> f + 's') : text
        text = text.replace(/[a-z]/i, f=>f.toUpperCase())

        const ans = sol(text)
        const user = topThreeWords(text)
        console.log(text)
        if (ans[0] === user) {
            Test.assertDeepEquals(user, ans[0])
        } else {
            if (ans[0].map(word=> ans[1][word]).toString() === user.map(word=> ans[1][word]).toString()) {
                Test.assertDeepEquals(user, user)
            } else {
                Test.assertDeepEquals(user, ans[0])
            }
        }
    }
    })
});
