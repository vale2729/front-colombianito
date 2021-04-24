import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavSucursalComponent } from './nav-sucursal.component';

describe('NavSucursalComponent', () => {
  let component: NavSucursalComponent;
  let fixture: ComponentFixture<NavSucursalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavSucursalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavSucursalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
