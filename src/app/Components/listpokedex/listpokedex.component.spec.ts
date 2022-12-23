import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListpokedexComponent } from './listpokedex.component';

describe('ListpokedexComponent', () => {
  let component: ListpokedexComponent;
  let fixture: ComponentFixture<ListpokedexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListpokedexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListpokedexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
