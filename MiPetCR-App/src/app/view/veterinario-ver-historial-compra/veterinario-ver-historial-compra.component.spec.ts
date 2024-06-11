import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeterinarioVerHistorialCompraComponent } from './veterinario-ver-historial-compra.component';

describe('VeterinarioVerHistorialCompraComponent', () => {
  let component: VeterinarioVerHistorialCompraComponent;
  let fixture: ComponentFixture<VeterinarioVerHistorialCompraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VeterinarioVerHistorialCompraComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VeterinarioVerHistorialCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
