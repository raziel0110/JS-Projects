import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CursComponent } from './curs.component';

describe('CursComponent', () => {
  let component: CursComponent;
  let fixture: ComponentFixture<CursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
