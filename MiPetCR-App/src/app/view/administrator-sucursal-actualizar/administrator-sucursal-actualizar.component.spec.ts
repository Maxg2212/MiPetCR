import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministratorSucursalActualizarComponent } from './administrator-sucursal-actualizar.component';

describe('AdministratorSucursalActualizarComponent', () => {
  let component: AdministratorSucursalActualizarComponent;
  let fixture: ComponentFixture<AdministratorSucursalActualizarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdministratorSucursalActualizarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdministratorSucursalActualizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
