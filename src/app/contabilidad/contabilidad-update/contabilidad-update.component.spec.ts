import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContabilidadUpdateComponent } from './contabilidad-update.component';

describe('ContabilidadUpdateComponent', () => {
  let component: ContabilidadUpdateComponent;
  let fixture: ComponentFixture<ContabilidadUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContabilidadUpdateComponent]
    });
    fixture = TestBed.createComponent(ContabilidadUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
