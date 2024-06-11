import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeterinarioRegistrarVisitaComponent } from './veterinario-registrar-visita.component';

describe('VeterinarioRegistrarVisitaComponent', () => {
  let component: VeterinarioRegistrarVisitaComponent;
  let fixture: ComponentFixture<VeterinarioRegistrarVisitaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VeterinarioRegistrarVisitaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VeterinarioRegistrarVisitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
