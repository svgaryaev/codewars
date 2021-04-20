const assert = require('chai').assert;
const testit = require('./solution');

//I can shoot through 100 pieces of wood, and you?
const woods =
    "─ ─ ─ ─ ─"                                 +"\n"+
    "　 　 　 　 　"                                 +"\n"+
    "─ ─ ─ ─ ─"                                 +"\n"+
    "　 　 　 　 　"                                 +"\n"+
    "─ ─ ─ ─ ─"                                 +"\n"+
    "　 　 　 　 　"                                 +"\n"+
    "─ ─ ─ ─ ─"                                 +"\n"+
    "　 　 　 　 　"                                 +"\n"+
    "─ ─ ─ ─ ─"                                 +"\n"+
    "　 　 　 　 　";
// ▲ ▲ ▲ ▲ ▲
// ║ ║ ║ ║ ║
// S  H  O  O  T

let shoot, answer;

describe('6kyu Thinking & Testing: Archery contest', () => {
    it('some', () => {
        shoot=[0];
        assert.equal(testit(woods,shoot), woods, "");
    });

    it('some', () => {
        shoot=[1];
        answer =
            "─ ─ ─ ─ ─"                                 +"\n"+
            "　 　 　 　 　"                                 +"\n"+
            "─ ─ ─ ─ ─"                                 +"\n"+
            "　 　 　 　 　"                                 +"\n"+
            "─ ─ ─ ─ ─"                                 +"\n"+
            "　 　 　 　 　"                                 +"\n"+
            "─ ─ ─ ─ ─"                                 +"\n"+
            "　 　 　 　 　"                                 +"\n"+
            "─ ─ ─ ─ ─"                                 +"\n"+
            "│ 　 　 　 　";
        assert.equal(testit(woods,shoot), answer, "");
    });

    it('some', () => {
        shoot=[2];
        answer=
            "─ ─ ─ ─ ─"                                 +"\n"+
            "　 　 　 　 　"                                 +"\n"+
            "─ ─ ─ ─ ─"                                 +"\n"+
            "　 　 　 　 　"                                 +"\n"+
            "─ ─ ─ ─ ─"                                 +"\n"+
            "　 　 　 　 　"                                 +"\n"+
            "─ ─ ─ ─ ─"                                 +"\n"+
            "　 　 　 　 　"                                 +"\n"+
            "┼ ─ ─ ─ ─"                                 +"\n"+
            "　 　 　 　 　";
        assert.equal(testit(woods,shoot), answer, "");
    });

    it('some', () => {
        shoot=[3];
        answer=
            "─ ─ ─ ─ ─"                                 +"\n"+
            "　 　 　 　 　"                                 +"\n"+
            "─ ─ ─ ─ ─"                                 +"\n"+
            "　 　 　 　 　"                                 +"\n"+
            "─ ─ ─ ─ ─"                                 +"\n"+
            "　 　 　 　 　"                                 +"\n"+
            "─ ─ ─ ─ ─"                                 +"\n"+
            "│ 　 　 　 　"                                 +"\n"+
            "╌ ─ ─ ─ ─"                                 +"\n"+
            "　 　 　 　 　";
        assert.equal(testit(woods,shoot), answer, "");
    });

    it('some', () => {
        shoot=[4];
        answer=
            "─ ─ ─ ─ ─"                                 +"\n"+
            "　 　 　 　 　"                                 +"\n"+
            "─ ─ ─ ─ ─"                                 +"\n"+
            "　 　 　 　 　"                                 +"\n"+
            "─ ─ ─ ─ ─"                                 +"\n"+
            "　 　 　 　 　"                                 +"\n"+
            "┼ ─ ─ ─ ─"                                 +"\n"+
            "　 　 　 　 　"                                 +"\n"+
            "╌ ─ ─ ─ ─"                                 +"\n"+
            "　 　 　 　 　";
        assert.equal(testit(woods,shoot), answer, "");
    });

    it('some', () => {
        shoot=[10];
        answer=
            "┼ ─ ─ ─ ─"                                 +"\n"+
            "　 　 　 　 　"                                 +"\n"+
            "╌ ─ ─ ─ ─"                                 +"\n"+
            "　 　 　 　 　"                                 +"\n"+
            "╌ ─ ─ ─ ─"                                 +"\n"+
            "　 　 　 　 　"                                 +"\n"+
            "╌ ─ ─ ─ ─"                                 +"\n"+
            "　 　 　 　 　"                                 +"\n"+
            "╌ ─ ─ ─ ─"                                 +"\n"+
            "　 　 　 　 　";
        assert.equal(testit(woods,shoot), answer, "");
    });

    it('some', () => {
        shoot=[100];
        answer=
            "╌ ─ ─ ─ ─"                                 +"\n"+
            "　 　 　 　 　"                                 +"\n"+
            "╌ ─ ─ ─ ─"                                 +"\n"+
            "　 　 　 　 　"                                 +"\n"+
            "╌ ─ ─ ─ ─"                                 +"\n"+
            "　 　 　 　 　"                                 +"\n"+
            "╌ ─ ─ ─ ─"                                 +"\n"+
            "　 　 　 　 　"                                 +"\n"+
            "╌ ─ ─ ─ ─"                                 +"\n"+
            "　 　 　 　 　";
        assert.equal(testit(woods,shoot), answer, "");
    });

    it('some', () => {
        shoot=[1,2,3,4,5];
        answer=
            "─ ─ ─ ─ ─"                                 +"\n"+
            "　 　 　 　 　"                                 +"\n"+
            "─ ─ ─ ─ ─"                                 +"\n"+
            "　 　 　 　 　"                                 +"\n"+
            "─ ─ ─ ─ ─"                                 +"\n"+
            "　 　 　 　 │"                                 +"\n"+
            "─ ─ ─ ┼ ╌"                                 +"\n"+
            "　 　 │ 　 　"                                 +"\n"+
            "─ ┼ ╌ ╌ ╌"                                 +"\n"+
            "│ 　 　 　 　";
        assert.equal(testit(woods,shoot), answer, "");
    });
});