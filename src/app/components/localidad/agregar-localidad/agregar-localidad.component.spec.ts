import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarLocalidadComponent } from './agregar-localidad.component';

describe('AgregarLocalidadComponent', () => {
  let component: AgregarLocalidadComponent;
  let fixture: ComponentFixture<AgregarLocalidadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgregarLocalidadComponent]
    });
    fixture = TestBed.createComponent(AgregarLocalidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
