import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartPokemonComponent } from './cart-pokemon.component';

describe('CartPokemonComponent', () => {
  let component: CartPokemonComponent;
  let fixture: ComponentFixture<CartPokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartPokemonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
