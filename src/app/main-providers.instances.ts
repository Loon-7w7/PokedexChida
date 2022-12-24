import { Provider } from "@angular/core";
import { Pokedex_Endpoint_services } from "./interfaces/services/pokedex-endpoint-service.interface";
import { Pokemon_Endpoint_services } from "./interfaces/services/Pokemon-endpoint-service.interfaces";
import { DefaulPokedexService } from "./services/pokedex/default-podex-service";
import { DefaulPokemonService } from "./services/pokemon/default-pokemon-service";


export const Maint_providers: Provider[] =
[
  {
    provide: Pokemon_Endpoint_services,
    useClass: DefaulPokemonService
  },
  {
    provide: Pokedex_Endpoint_services,
    useClass: DefaulPokedexService
  }
];
