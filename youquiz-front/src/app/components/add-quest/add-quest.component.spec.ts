import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddQuestComponent } from './add-quest.component';

describe('AddQuestComponent', () => {
  let component: AddQuestComponent;
  let fixture: ComponentFixture<AddQuestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddQuestComponent]
    });
    fixture = TestBed.createComponent(AddQuestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
