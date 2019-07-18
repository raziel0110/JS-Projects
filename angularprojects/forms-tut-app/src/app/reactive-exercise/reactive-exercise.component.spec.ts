import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveExerciseComponent } from './reactive-exercise.component';

describe('ReactiveExerciseComponent', () => {
  let component: ReactiveExerciseComponent;
  let fixture: ComponentFixture<ReactiveExerciseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveExerciseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
