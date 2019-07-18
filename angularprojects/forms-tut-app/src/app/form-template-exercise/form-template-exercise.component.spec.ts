import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTemplateExerciseComponent } from './form-template-exercise.component';

describe('FormTemplateExerciseComponent', () => {
  let component: FormTemplateExerciseComponent;
  let fixture: ComponentFixture<FormTemplateExerciseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormTemplateExerciseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormTemplateExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
