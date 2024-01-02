import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllquizesComponent } from './allquizes.component';

describe('AllquizesComponent', () => {
  let component: AllquizesComponent;
  let fixture: ComponentFixture<AllquizesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllquizesComponent]
    });
    fixture = TestBed.createComponent(AllquizesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
