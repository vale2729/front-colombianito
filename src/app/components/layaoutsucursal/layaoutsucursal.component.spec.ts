import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayaoutsucursalComponent } from './layaoutsucursal.component';

describe('LayaoutsucursalComponent', () => {
  let component: LayaoutsucursalComponent;
  let fixture: ComponentFixture<LayaoutsucursalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayaoutsucursalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayaoutsucursalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
