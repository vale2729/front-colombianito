import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarModificadorComponent } from './editar-modificador.component';

describe('EditarModificadorComponent', () => {
  let component: EditarModificadorComponent;
  let fixture: ComponentFixture<EditarModificadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarModificadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarModificadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
