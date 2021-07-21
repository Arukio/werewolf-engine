import { GameMode } from './Gamemode';
import { Player } from './Player';
import { ClassicGameMode } from './gamemodes';

export type GameState = 'LOBBY' | 'PLAYING' | 'ENDED';

export class Game {
  public state: GameState = 'LOBBY';
  public mode: GameMode;

  get allPlayers() {
    return this.players;
  }

  private players: Player[] = [];

  constructor(playerNames: string[]) {
    this.mode = new ClassicGameMode();

    this.setPlayers(playerNames);

    this.newGame();
  }

  private newGame() {
    this.mode.asignRoles(this.players);
  }

  private setPlayers(players: string[]) {
    if (players.length < 2) {
      throw new Error('Min player is 2');
    }

    // check for duplicate players
    if (new Set(players).size !== players.length) {
      throw new Error('Found duplicate player names');
    }

    this.players = players.map((name) => new Player(name));
  }
}
