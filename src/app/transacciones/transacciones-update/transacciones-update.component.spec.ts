import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransaccionesUpdateComponent } from './transacciones-update.component';

describe('TransaccionesUpdateComponent', () => {
  let component: TransaccionesUpdateComponent;
  let fixture: ComponentFixture<TransaccionesUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TransaccionesUpdateComponent]
    });
    fixture = TestBed.createComponent(TransaccionesUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
