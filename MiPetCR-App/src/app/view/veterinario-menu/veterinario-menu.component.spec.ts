import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeterinarioMenuComponent } from './veterinario-menu.component';

describe('AdminMenuComponent', () => {
  let component: VeterinarioMenuComponent;
  let fixture: ComponentFixture<VeterinarioMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VeterinarioMenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VeterinarioMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
