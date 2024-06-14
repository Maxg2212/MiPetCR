import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCartGuestComponent } from './view-cart-guest.component';

describe('ViewCartGuestComponent', () => {
  let component: ViewCartGuestComponent;
  let fixture: ComponentFixture<ViewCartGuestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewCartGuestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewCartGuestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
