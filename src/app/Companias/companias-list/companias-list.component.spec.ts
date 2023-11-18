import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompaniasListComponent } from './companias-list.component';

describe('CompaniasListComponent', () => {
  let component: CompaniasListComponent;
  let fixture: ComponentFixture<CompaniasListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompaniasListComponent]
    });
    fixture = TestBed.createComponent(CompaniasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
