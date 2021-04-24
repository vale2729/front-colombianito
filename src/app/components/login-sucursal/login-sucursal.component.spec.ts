import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginSucursalComponent } from './login-sucursal.component';

describe('LoginSucursalComponent', () => {
  let component: LoginSucursalComponent;
  let fixture: ComponentFixture<LoginSucursalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginSucursalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginSucursalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
