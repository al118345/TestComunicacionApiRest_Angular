import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescargarPDFComponent } from './descargar-pdf.component';

describe('DescargarPDFComponent', () => {
  let component: DescargarPDFComponent;
  let fixture: ComponentFixture<DescargarPDFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescargarPDFComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DescargarPDFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
