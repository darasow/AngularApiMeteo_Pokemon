import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonFormeComponent } from './pokemon-forme.component';

describe('PokemonFormeComponent', () => {
  let component: PokemonFormeComponent;
  let fixture: ComponentFixture<PokemonFormeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PokemonFormeComponent]
    });
    fixture = TestBed.createComponent(PokemonFormeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
