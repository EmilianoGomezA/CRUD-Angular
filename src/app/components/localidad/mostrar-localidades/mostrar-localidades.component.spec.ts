import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarLocalidadesComponent } from './mostrar-localidades.component';

describe('MostrarLocalidadesComponent', () => {
  let component: MostrarLocalidadesComponent;
  let fixture: ComponentFixture<MostrarLocalidadesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MostrarLocalidadesComponent]
    });
    fixture = TestBed.createComponent(MostrarLocalidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
