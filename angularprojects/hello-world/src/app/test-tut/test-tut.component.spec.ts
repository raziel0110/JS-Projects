import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestTutComponent } from './test-tut.component';

describe('TestTutComponent', () => {
  let component: TestTutComponent;
  let fixture: ComponentFixture<TestTutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestTutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestTutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
