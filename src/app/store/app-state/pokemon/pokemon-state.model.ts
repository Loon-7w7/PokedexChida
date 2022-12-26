import { Pokemon } from "src/app/models/pokemon/pokemon.model";


export interface PokemonState extends Pokemon
{
  isLoading?: boolean;
}

export const inicialStatepokemonManager: PokemonState =
{
  name: "",
  types: [{ slot: 1, type: { name: "", url: "" } }],
  sprites: {
    other: {
      'official-artwork': {
          front_default: ''
      }
    }
  },
  stats: [
    {
      base_stat: 0,
      stat:
      {
        name:''
      }
    }
  ]
}
