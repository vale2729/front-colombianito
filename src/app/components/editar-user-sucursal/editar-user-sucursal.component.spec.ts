import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarUserSucursalComponent } from './editar-user-sucursal.component';

describe('EditarUserSucursalComponent', () => {
  let component: EditarUserSucursalComponent;
  let fixture: ComponentFixture<EditarUserSucursalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarUserSucursalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarUserSucursalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
