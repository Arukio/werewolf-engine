import { Role } from '../Role';
import { Villager } from '../roles';

export type RoleType = 'villager';

export type RoleList = {
  [key in RoleType]: Role;
};

export const Roles: RoleList = {
  villager: Villager,
};
