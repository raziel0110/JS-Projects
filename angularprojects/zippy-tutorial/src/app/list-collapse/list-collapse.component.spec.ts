import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCollapseComponent } from './list-collapse.component';

describe('ListCollapseComponent', () => {
  let component: ListCollapseComponent;
  let fixture: ComponentFixture<ListCollapseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCollapseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCollapseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
