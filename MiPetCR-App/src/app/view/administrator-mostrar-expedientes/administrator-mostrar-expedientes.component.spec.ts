import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministratorMostrarExpedientesComponent } from './administrator-mostrar-expedientes.component';

describe('AdministratorMostrarExpedientesComponent', () => {
  let component: AdministratorMostrarExpedientesComponent;
  let fixture: ComponentFixture<AdministratorMostrarExpedientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdministratorMostrarExpedientesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdministratorMostrarExpedientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
