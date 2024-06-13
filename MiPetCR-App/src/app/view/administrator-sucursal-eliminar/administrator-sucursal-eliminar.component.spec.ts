import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministratorSucursalEliminarComponent } from './administrator-sucursal-eliminar.component';

describe('AdministratorSucursalEliminarComponent', () => {
  let component: AdministratorSucursalEliminarComponent;
  let fixture: ComponentFixture<AdministratorSucursalEliminarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdministratorSucursalEliminarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdministratorSucursalEliminarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
