import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollapseAttacksComponent } from './collapse-attacks.component';

describe('CollapseAttacksComponent', () => {
  let component: CollapseAttacksComponent;
  let fixture: ComponentFixture<CollapseAttacksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollapseAttacksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollapseAttacksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
