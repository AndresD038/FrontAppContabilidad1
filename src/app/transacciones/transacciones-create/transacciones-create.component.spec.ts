import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransaccionesCreateComponent } from './transacciones-create.component';

describe('TransaccionesCreateComponent', () => {
  let component: TransaccionesCreateComponent;
  let fixture: ComponentFixture<TransaccionesCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TransaccionesCreateComponent]
    });
    fixture = TestBed.createComponent(TransaccionesCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
