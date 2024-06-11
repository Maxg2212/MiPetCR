import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeterinarioConsultarExpedienteMedicoComponent } from './veterinario-consultar-expediente-medico.component';

describe('VeterinarioConsultarExpedienteMedicoComponent', () => {
  let component: VeterinarioConsultarExpedienteMedicoComponent;
  let fixture: ComponentFixture<VeterinarioConsultarExpedienteMedicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VeterinarioConsultarExpedienteMedicoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VeterinarioConsultarExpedienteMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
