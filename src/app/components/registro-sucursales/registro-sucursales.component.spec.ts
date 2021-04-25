import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroSucursalesComponent } from './registro-sucursales.component';

describe('RegistroSucursalesComponent', () => {
  let component: RegistroSucursalesComponent;
  let fixture: ComponentFixture<RegistroSucursalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroSucursalesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroSucursalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
