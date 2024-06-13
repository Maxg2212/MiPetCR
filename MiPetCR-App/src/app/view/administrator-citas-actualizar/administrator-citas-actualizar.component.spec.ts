import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministratorCitasActualizarComponent } from './administrator-citas-actualizar.component';

describe('AdministratorCitasActualizarComponent', () => {
  let component: AdministratorCitasActualizarComponent;
  let fixture: ComponentFixture<AdministratorCitasActualizarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdministratorCitasActualizarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdministratorCitasActualizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
