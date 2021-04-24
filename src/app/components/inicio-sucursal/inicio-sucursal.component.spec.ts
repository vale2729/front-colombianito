import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioSucursalComponent } from './inicio-sucursal.component';

describe('InicioSucursalComponent', () => {
  let component: InicioSucursalComponent;
  let fixture: ComponentFixture<InicioSucursalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InicioSucursalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioSucursalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
