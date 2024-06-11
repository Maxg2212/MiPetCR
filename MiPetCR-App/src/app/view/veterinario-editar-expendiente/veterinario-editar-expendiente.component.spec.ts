import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeterinarioEditarExpendienteComponent } from './veterinario-editar-expendiente.component';

describe('VeterinarioEditarExpendienteComponent', () => {
  let component: VeterinarioEditarExpendienteComponent;
  let fixture: ComponentFixture<VeterinarioEditarExpendienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VeterinarioEditarExpendienteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VeterinarioEditarExpendienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
