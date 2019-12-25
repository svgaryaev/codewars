Test.assertDeepEquals(divisors(15), [3,5], "The array is not what was expected");
Test.assertDeepEquals(divisors(253), [11,23], "The array is not what was expected");
Test.assertDeepEquals(divisors(24), [2,3,4,6,8,12], "The array is not what was expected");

Test.assertDeepEquals(divisors(13), "13 is prime", "The array is not what was expected");
Test.assertDeepEquals(divisors(3), "3 is prime", "The array is not what was expected");
Test.assertDeepEquals(divisors(29), "29 is prime", "The array is not what was expected");

function divisors1(i) {
  
  var div = [];

  for (var j = 2; j <= i / 2; j++) {
      var k = i % j;
    
      if  (k === 0) {
          div[div.length] = j;
      }
  }

  if (div.length === 0) {
	  return i.toString() + " is prime";
  } else {
	  return div;
  }
}

var a = Math.floor(Math.random() * 100 + 2);
var b = Math.floor(Math.random() * 100 + 2);
var c = Math.floor(Math.random() * 100 + 2);

Test.assertDeepEquals(divisors(a), divisors1(a));
Test.assertDeepEquals(divisors(b), divisors1(b));
Test.assertDeepEquals(divisors(c), divisors1(c));
