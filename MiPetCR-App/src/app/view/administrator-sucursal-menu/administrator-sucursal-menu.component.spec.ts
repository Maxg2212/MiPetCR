import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministratorSucursalMenuComponent } from './administrator-sucursal-menu.component';

describe('AdministratorSucursalMenuComponent', () => {
  let component: AdministratorSucursalMenuComponent;
  let fixture: ComponentFixture<AdministratorSucursalMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdministratorSucursalMenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdministratorSucursalMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
