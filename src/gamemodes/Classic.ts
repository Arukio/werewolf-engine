import { GameMode } from '../Gamemode';
import { Role } from '../Role';
import { Roles } from '../types/roles';

export class ClassicGameMode extends GameMode {
  public static readonly NAME = 'classic';
  MIN_PLAYER = 4;
  MAX_PLAYER = 10;

  public roleSet: { [key: number]: Role[] };

  constructor() {
    super();

    this.roleSet = {
      4: [Roles.villager, Roles.villager, Roles.villager],
    };
  }
}
