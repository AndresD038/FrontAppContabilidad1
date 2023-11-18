import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransaccionesInicioComponent } from './transacciones-inicio.component';

describe('TransaccionesInicioComponent', () => {
  let component: TransaccionesInicioComponent;
  let fixture: ComponentFixture<TransaccionesInicioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TransaccionesInicioComponent]
    });
    fixture = TestBed.createComponent(TransaccionesInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
