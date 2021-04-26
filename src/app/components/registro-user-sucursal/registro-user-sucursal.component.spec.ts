import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroUserSucursalComponent } from './registro-user-sucursal.component';

describe('RegistroUserSucursalComponent', () => {
  let component: RegistroUserSucursalComponent;
  let fixture: ComponentFixture<RegistroUserSucursalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroUserSucursalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroUserSucursalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
