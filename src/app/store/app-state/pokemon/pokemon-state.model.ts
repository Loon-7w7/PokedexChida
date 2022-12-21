import { Pokemon } from "src/app/models/pokemon/pokemon.model";


export interface PokemonState extends Pokemon
{
  isLoading?: boolean;
}

export const inicialStatepokemonManager: PokemonState =
{
  name: "",
  sprites: {
    back_default: "",
    front_default: "",
    back_shiny: "",
    front_shiny: "",
  },
  types: [{slot:1, type:{name:"",url:""}}],
  moves:[{
    move: { name:''}
  }]
}
