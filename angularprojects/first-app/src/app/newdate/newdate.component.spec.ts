import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewdateComponent } from './newdate.component';

describe('NewdateComponent', () => {
  let component: NewdateComponent;
  let fixture: ComponentFixture<NewdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
