import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarCandidatosComponent } from './mostrar-candidatos.component';

describe('MostrarCandidatosComponent', () => {
  let component: MostrarCandidatosComponent;
  let fixture: ComponentFixture<MostrarCandidatosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MostrarCandidatosComponent]
    });
    fixture = TestBed.createComponent(MostrarCandidatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
