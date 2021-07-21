import { Player } from './Player';
import { Role } from './Role';
import { Villager } from './roles';
import { Roles } from './types/roles';

export type GameModeName = 'classic' | 'chaos' | 'random' | undefined;

export abstract class GameMode {
  public static readonly NAME: GameModeName = undefined;

  public readonly MIN_PLAYER: number = 4;
  public readonly MAX_PLAYER: number = 24;

  protected defaultRole = Roles.villager;

  abstract roleSet: { [key: number]: Role[] };

  public asignRoles(players: Player[]) {
    players.forEach((player) => {
      const role = new Villager();

      player.role = role;
    });
  }
}
