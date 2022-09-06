import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargarficheroComponent } from './cargarfichero.component';

describe('CargarficheroComponent', () => {
  let component: CargarficheroComponent;
  let fixture: ComponentFixture<CargarficheroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CargarficheroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CargarficheroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
