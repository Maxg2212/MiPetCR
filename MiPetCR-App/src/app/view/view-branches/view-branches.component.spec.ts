import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBranchesComponent } from './view-branches.component';

describe('ViewBranchesComponent', () => {
  let component: ViewBranchesComponent;
  let fixture: ComponentFixture<ViewBranchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewBranchesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewBranchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
