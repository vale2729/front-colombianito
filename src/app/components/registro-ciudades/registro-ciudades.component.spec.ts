import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroCiudadesComponent } from './registro-ciudades.component';

describe('RegistroCiudadesComponent', () => {
  let component: RegistroCiudadesComponent;
  let fixture: ComponentFixture<RegistroCiudadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroCiudadesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroCiudadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
