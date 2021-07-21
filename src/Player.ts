import { Role } from './Role';

export class Player {
  public role?: Role;

  constructor(public name: string) {
    if (!name || name === '') {
      throw new Error('Player must have a name!');
    }
  }
}
