describe("toCamelCase", function() {
  it ("should handle empty values", function(){
    Test.assertEquals(toCamelCase(''), '', "An empty string was provided but not returned")
  })
  
  it ("should remove underscores and convert first letter of word to upper case", function(){
    Test.assertEquals(toCamelCase("the_stealth_warrior"), "theStealthWarrior", "toCamelCase('the_stealth_warrior') did not return correct value")
    Test.assertEquals(toCamelCase("The_stealth_warrior"), "TheStealthWarrior", "toCamelCase('The_stealth_warrior') did not return correct value")
  });
  
  it ("should remove hyphens and convert first letter of word to upper case", function(){
    Test.assertEquals(toCamelCase("The-Stealth-Warrior"), "TheStealthWarrior", "toCamelCase('The-Stealth-Warrior') did not return correct value")
    Test.assertEquals(toCamelCase("the-Stealth-Warrior"), "theStealthWarrior", "toCamelCase('the-Stealth-Warrior') did not return correct value")
    Test.assertEquals(toCamelCase("A-B-C"), "ABC", "toCamelCase('A-B-C') did not return correct value")
    Test.assertEquals(toCamelCase("I-am-a-programmer"), "IAmAProgrammer")
    Test.assertEquals(toCamelCase("i-am-a-programmer"), "iAmAProgrammer")
  });
});
