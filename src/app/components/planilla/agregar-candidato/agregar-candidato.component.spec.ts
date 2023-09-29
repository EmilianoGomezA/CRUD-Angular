import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarCandidatoComponent } from './agregar-candidato.component';

describe('AgregarCandidatoComponent', () => {
  let component: AgregarCandidatoComponent;
  let fixture: ComponentFixture<AgregarCandidatoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgregarCandidatoComponent]
    });
    fixture = TestBed.createComponent(AgregarCandidatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
