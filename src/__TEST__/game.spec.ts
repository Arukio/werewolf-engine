import test from 'ava';

import { Game } from '../Game';

test('should throw error if started with less then 2 players', (t) => {
  t.throws(() => new Game(['bob']));
});

test('should throw error if started with duplicate players', (t) => {
  t.throws(() => new Game(['bob', 'alice', 'bob']));
});

test('should return correct players length', (t) => {
  const players = ['p1', 'p2', 'p3', 'p4'];

  const game = new Game(players);

  t.is(game.allPlayers.length, players.length);
});

test('should give all players roles', (t) => {
  const players = ['p1', 'p2', 'p3', 'p4'];

  const game = new Game(players);

  const allP = game.allPlayers;

  allP.forEach((p) => t.truthy(p.role));
});
