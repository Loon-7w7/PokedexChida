import { Attack } from "src/app/models/attack/attack.model";

export interface AttackState extends Attack
{
  isLoading?: boolean;
}

export const inicialStateAttackManager: AttackState=
{
  name: "",
  accuracy: 0,
  pp: 0,
  power: 0,
  priority: false,
  meta: {
    aliment: {name: ''},
    category: {name: ''}
  }
}
