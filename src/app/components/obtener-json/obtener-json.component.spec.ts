import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObtenerJsonComponent } from './obtener-json.component';

describe('ObtenerJsonComponent', () => {
  let component: ObtenerJsonComponent;
  let fixture: ComponentFixture<ObtenerJsonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObtenerJsonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObtenerJsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
