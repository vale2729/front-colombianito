import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuariosSucursalComponent } from './usuarios-sucursal.component';

describe('UsuariosSucursalComponent', () => {
  let component: UsuariosSucursalComponent;
  let fixture: ComponentFixture<UsuariosSucursalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuariosSucursalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuariosSucursalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
