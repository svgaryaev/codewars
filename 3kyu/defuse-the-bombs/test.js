Test.assertEquals( Object.isFrozen(Bomb)||Object.isSealed(Bomb)||!Object.isExtensible(Bomb), false, 'The bomb refuses to be frozen and blew up anyway');
Test.assertEquals( Bomb.theBombsAreAllDiffused, true, 'Boom!');
