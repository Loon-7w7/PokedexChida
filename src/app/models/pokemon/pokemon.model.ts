import { ElemnetalType } from "./elementaltype.model";
import { Sprites } from "./sprites.model";


export interface Pokemon
{
  name: string;
  sprites: Sprites;
  types: [{
    slot: number,
    type:ElemnetalType
  }];
}
