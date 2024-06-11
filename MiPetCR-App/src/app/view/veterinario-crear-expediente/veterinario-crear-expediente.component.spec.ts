import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeterinarioCrearExpedienteComponent } from './veterinario-crear-expediente.component';

describe('VeterinarioCrearExpedienteComponent', () => {
  let component: VeterinarioCrearExpedienteComponent;
  let fixture: ComponentFixture<VeterinarioCrearExpedienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VeterinarioCrearExpedienteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VeterinarioCrearExpedienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
