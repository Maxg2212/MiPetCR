import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministratorSucursalObtenerTodasComponent } from './administrator-sucursal-obtener-todas.component';

describe('AdministratorSucursalObtenerTodasComponent', () => {
  let component: AdministratorSucursalObtenerTodasComponent;
  let fixture: ComponentFixture<AdministratorSucursalObtenerTodasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdministratorSucursalObtenerTodasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdministratorSucursalObtenerTodasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
