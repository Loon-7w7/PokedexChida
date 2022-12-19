import { Provider } from "@angular/core";
import { Pokemon_Endpoint_services } from "./interfaces/services/Pokemon-endpoint-service.interfaces";
import { DefaulPokemonService } from "./services/pokemon/default-pokemon-service";


export const Maint_providers: Provider[] =
[
  {
    provide: Pokemon_Endpoint_services,
    useClass: DefaulPokemonService
  },
];
