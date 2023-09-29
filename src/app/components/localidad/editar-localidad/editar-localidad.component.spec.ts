import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarLocalidadComponent } from './editar-localidad.component';

describe('EditarLocalidadComponent', () => {
  let component: EditarLocalidadComponent;
  let fixture: ComponentFixture<EditarLocalidadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarLocalidadComponent]
    });
    fixture = TestBed.createComponent(EditarLocalidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
