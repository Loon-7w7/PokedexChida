import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { metaReducers, reducers } from './store/reducers';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { es_ES } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import es from '@angular/common/locales/es';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { EffectsModule } from '@ngrx/effects';
import { GetPokemonEffect } from './store/effects/pokemon/getPokemon.effect';
import { Maint_providers } from './main-providers.instances';
import { CartPokemonComponent } from './Components/cart-pokemon/cart-pokemon.component';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { environment } from 'src/environments/environment.prod';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { ListpokedexComponent } from './Components/listpokedex/listpokedex.component';
import { PokedexItemComponent } from './Components/pokedex-item/pokedex-item.component';
import { GetPokedexEffect } from './store/effects/pokedex/getPokedex.effect';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { listPokedexEffect } from './store/effects/pokedex/lispokedex.effect';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';

registerLocaleData(es);
@NgModule({
  declarations: [
    AppComponent,
    CartPokemonComponent,
    ListpokedexComponent,
    PokedexItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers,
      {
        metaReducers,
        runtimeChecks: {
          strictStateImmutability: true,
          strictActionImmutability: true
        }
      }),
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    NzButtonModule,
    EffectsModule.forRoot([GetPokemonEffect,GetPokedexEffect,listPokedexEffect]),
    NzImageModule,
    NzCollapseModule,
    NzCarouselModule,
    NzSelectModule,
    NzMessageModule,
    NzModalModule,
    NzDescriptionsModule,
    StoreDevtoolsModule.instrument({
      name: 'pokechafa',
      maxAge: 25,
      logOnly: environment.production
    })
  ],
  providers: [ ...Maint_providers,
    { provide: NZ_I18N, useValue: es_ES }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
