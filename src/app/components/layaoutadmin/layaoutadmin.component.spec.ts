import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayaoutadminComponent } from './layaoutadmin.component';

describe('LayaoutadminComponent', () => {
  let component: LayaoutadminComponent;
  let fixture: ComponentFixture<LayaoutadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayaoutadminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayaoutadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
