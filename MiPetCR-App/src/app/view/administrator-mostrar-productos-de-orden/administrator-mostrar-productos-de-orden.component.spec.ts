import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministratorMostrarProductosDeOrdenComponent } from './administrator-mostrar-productos-de-orden.component';

describe('AdministratorMostrarProductosDeOrdenComponent', () => {
  let component: AdministratorMostrarProductosDeOrdenComponent;
  let fixture: ComponentFixture<AdministratorMostrarProductosDeOrdenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdministratorMostrarProductosDeOrdenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdministratorMostrarProductosDeOrdenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
