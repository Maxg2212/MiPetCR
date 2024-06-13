import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministratorSucursalBuscarComponent } from './administrator-sucursal-buscar.component';

describe('AdministratorSucursalBuscarComponent', () => {
  let component: AdministratorSucursalBuscarComponent;
  let fixture: ComponentFixture<AdministratorSucursalBuscarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdministratorSucursalBuscarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdministratorSucursalBuscarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
