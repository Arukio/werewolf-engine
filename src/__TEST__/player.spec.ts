import test from 'ava';

import { Player } from '../Player';

test('player has a name', (t) => {
  const player = new Player('alice');

  t.truthy(player.name);
});

test('should throw when constructor not set', (t) => {
  t.throws(() => new Player(''));
});
