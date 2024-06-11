import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeterinarioCobrarComponent } from './veterinario-cobrar.component';

describe('VeterinarioCobrarComponent', () => {
  let component: VeterinarioCobrarComponent;
  let fixture: ComponentFixture<VeterinarioCobrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VeterinarioCobrarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VeterinarioCobrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
