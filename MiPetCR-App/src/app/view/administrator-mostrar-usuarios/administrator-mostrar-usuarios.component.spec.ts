import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministratorMostrarUsuariosComponent } from './administrator-mostrar-usuarios.component';

describe('AdministratorMostrarUsuariosComponent', () => {
  let component: AdministratorMostrarUsuariosComponent;
  let fixture: ComponentFixture<AdministratorMostrarUsuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdministratorMostrarUsuariosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdministratorMostrarUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
