import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesHeaderComponent } from './games-header.component';

describe('GamesHeaderComponent', () => {
  let component: GamesHeaderComponent;
  let fixture: ComponentFixture<GamesHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GamesHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamesHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
