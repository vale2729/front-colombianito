import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadoProductoSucursalesComponent } from './estado-producto-sucursales.component';

describe('EstadoProductoSucursalesComponent', () => {
  let component: EstadoProductoSucursalesComponent;
  let fixture: ComponentFixture<EstadoProductoSucursalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstadoProductoSucursalesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadoProductoSucursalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
