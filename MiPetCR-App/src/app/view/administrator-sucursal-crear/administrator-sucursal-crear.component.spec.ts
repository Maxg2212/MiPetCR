import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministratorSucursalCrearComponent } from './administrator-sucursal-crear.component';

describe('AdministratorSucursalCrearComponent', () => {
  let component: AdministratorSucursalCrearComponent;
  let fixture: ComponentFixture<AdministratorSucursalCrearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdministratorSucursalCrearComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdministratorSucursalCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
