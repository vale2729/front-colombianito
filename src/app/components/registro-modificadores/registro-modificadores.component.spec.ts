import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroModificadoresComponent } from './registro-modificadores.component';

describe('RegistroModificadoresComponent', () => {
  let component: RegistroModificadoresComponent;
  let fixture: ComponentFixture<RegistroModificadoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroModificadoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroModificadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
