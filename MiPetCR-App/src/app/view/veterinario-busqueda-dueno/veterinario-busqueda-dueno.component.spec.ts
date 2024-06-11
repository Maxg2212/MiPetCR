import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeterinarioBusquedaDuenoComponent } from './veterinario-busqueda-dueno.component';

describe('VeterinarioBusquedaDuenoComponent', () => {
  let component: VeterinarioBusquedaDuenoComponent;
  let fixture: ComponentFixture<VeterinarioBusquedaDuenoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VeterinarioBusquedaDuenoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VeterinarioBusquedaDuenoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
