import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContabilidadCreateComponent } from './contabilidad-create.component';

describe('ContabilidadCreateComponent', () => {
  let component: ContabilidadCreateComponent;
  let fixture: ComponentFixture<ContabilidadCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContabilidadCreateComponent]
    });
    fixture = TestBed.createComponent(ContabilidadCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
