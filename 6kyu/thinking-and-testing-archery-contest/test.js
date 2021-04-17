const testit = require('./solution');

const Test = {
    assertSimilar(fnRes, res) {
        console.log(fnRes === res);
    }
}

//I can shoot through 100 pieces of wood, and you?
var woods=
    "─ ─ ─ ─ ─"                                 +"\n"+
    "　 　 　 　 　"                                 +"\n"+
    "─ ─ ─ ─ ─"                                 +"\n"+
    "　 　 　 　 　"                                 +"\n"+
    "─ ─ ─ ─ ─"                                 +"\n"+
    "　 　 　 　 　"                                 +"\n"+
    "─ ─ ─ ─ ─"                                 +"\n"+
    "　 　 　 　 　"                                 +"\n"+
    "─ ─ ─ ─ ─"                                 +"\n"+
    "　 　 　 　 　",
// ▲ ▲ ▲ ▲ ▲
// ║ ║ ║ ║ ║
// S  H  O  O  T
    shoot=[0];
Test.assertSimilar(testit(woods,shoot), woods, "");
shoot=[1];
var answer=
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
Test.assertSimilar(testit(woods,shoot), answer, "");

shoot=[2],
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
Test.assertSimilar(testit(woods,shoot), answer, "");

shoot=[3],
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
Test.assertSimilar(testit(woods,shoot), answer, "");

shoot=[4],
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
Test.assertSimilar(testit(woods,shoot), answer, "");

shoot=[10],
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
Test.assertSimilar(testit(woods,shoot), answer, "");

shoot=[100],
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
Test.assertSimilar(testit(woods,shoot), answer, "");

shoot=[1,2,3,4,5],
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
Test.assertSimilar(testit(woods,shoot), answer, "");
//click "Submit" try more testcase...
