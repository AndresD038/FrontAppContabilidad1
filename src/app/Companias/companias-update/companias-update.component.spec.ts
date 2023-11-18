import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompaniasUpdateComponent } from './companias-update.component';

describe('CompaniasUpdateComponent', () => {
  let component: CompaniasUpdateComponent;
  let fixture: ComponentFixture<CompaniasUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompaniasUpdateComponent]
    });
    fixture = TestBed.createComponent(CompaniasUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
