import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificadoresComponent } from './modificadores.component';

describe('ModificadoresComponent', () => {
  let component: ModificadoresComponent;
  let fixture: ComponentFixture<ModificadoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificadoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
