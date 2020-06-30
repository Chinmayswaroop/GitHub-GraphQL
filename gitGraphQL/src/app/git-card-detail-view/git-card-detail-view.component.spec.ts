import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GitCardDetailViewComponent } from './git-card-detail-view.component';

describe('GitCardDetailViewComponent', () => {
  let component: GitCardDetailViewComponent;
  let fixture: ComponentFixture<GitCardDetailViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GitCardDetailViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GitCardDetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
