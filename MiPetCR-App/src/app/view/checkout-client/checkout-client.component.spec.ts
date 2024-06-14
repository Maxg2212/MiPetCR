import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutClientComponent } from './checkout-client.component';

describe('CheckoutClientComponent', () => {
  let component: CheckoutClientComponent;
  let fixture: ComponentFixture<CheckoutClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CheckoutClientComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CheckoutClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
