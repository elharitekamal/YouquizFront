import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignementComponent } from './assignement.component';

describe('AssignementComponent', () => {
  let component: AssignementComponent;
  let fixture: ComponentFixture<AssignementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssignementComponent]
    });
    fixture = TestBed.createComponent(AssignementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
