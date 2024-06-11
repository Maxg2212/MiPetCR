import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeterinarioCrearCitaComponent } from './veterinario-crear-cita.component';

describe('VeterinarioCrearCitaComponent', () => {
  let component: VeterinarioCrearCitaComponent;
  let fixture: ComponentFixture<VeterinarioCrearCitaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VeterinarioCrearCitaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VeterinarioCrearCitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
