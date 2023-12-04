import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsidesComponent } from './asides.component';

describe('AsidesComponent', () => {
  let component: AsidesComponent;
  let fixture: ComponentFixture<AsidesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AsidesComponent]
    });
    fixture = TestBed.createComponent(AsidesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
