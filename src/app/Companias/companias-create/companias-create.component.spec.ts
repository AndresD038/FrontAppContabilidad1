import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompaniasCreateComponent } from './companias-create.component';

describe('CompaniasCreateComponent', () => {
  let component: CompaniasCreateComponent;
  let fixture: ComponentFixture<CompaniasCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompaniasCreateComponent]
    });
    fixture = TestBed.createComponent(CompaniasCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
