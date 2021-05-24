import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoModificadorComponent } from './producto-modificador.component';

describe('ProductoModificadorComponent', () => {
  let component: ProductoModificadorComponent;
  let fixture: ComponentFixture<ProductoModificadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductoModificadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductoModificadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
