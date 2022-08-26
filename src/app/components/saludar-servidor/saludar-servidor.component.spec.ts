import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaludarServidorComponent } from './saludar-servidor.component';

describe('SaludarServidorComponent', () => {
  let component: SaludarServidorComponent;
  let fixture: ComponentFixture<SaludarServidorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaludarServidorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaludarServidorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
