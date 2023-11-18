import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContabilidadListComponent } from './contabilidad-list.component';

describe('ContabilidadListComponent', () => {
  let component: ContabilidadListComponent;
  let fixture: ComponentFixture<ContabilidadListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContabilidadListComponent]
    });
    fixture = TestBed.createComponent(ContabilidadListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
