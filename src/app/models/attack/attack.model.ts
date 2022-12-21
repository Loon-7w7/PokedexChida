import { BaseName } from "./baseName.model";

export interface Attack
{
  name: string;
  accuracy: number;
  pp: number;
  power: number;
  priority: boolean;
  meta:
  {
    aliment: BaseName,
    category: BaseName
  }
}
