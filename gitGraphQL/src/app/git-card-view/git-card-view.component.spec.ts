import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GitCardViewComponent } from './git-card-view.component';

describe('GitCardViewComponent', () => {
  let component: GitCardViewComponent;
  let fixture: ComponentFixture<GitCardViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GitCardViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GitCardViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
