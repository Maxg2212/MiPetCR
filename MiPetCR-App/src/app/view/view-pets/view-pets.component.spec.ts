import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPetsComponent } from './view-pets.component';

describe('ViewPetsComponent', () => {
  let component: ViewPetsComponent;
  let fixture: ComponentFixture<ViewPetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewPetsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewPetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
