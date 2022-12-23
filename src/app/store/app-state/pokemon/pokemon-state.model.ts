import { Pokemon } from "src/app/models/pokemon/pokemon.model";


export interface PokemonState extends Pokemon
{
  isLoading?: boolean;
}

export const inicialStatepokemonManager: PokemonState =
{
  name: "",
  types: [{ slot: 1, type: { name: "", url: "" } }],
  moves: [{
    move: { name: '' }
  }],
  sprites: {
    versions:{
      'generation-vi':{
        'x-y':{
          front_default: '',
          front_shiny: ''
        }
      }
    }
  }
}
