import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministratorMostrarDuenosComponent } from './administrator-mostrar-duenos.component';

describe('AdministratorMostrarDuenosComponent', () => {
  let component: AdministratorMostrarDuenosComponent;
  let fixture: ComponentFixture<AdministratorMostrarDuenosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdministratorMostrarDuenosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdministratorMostrarDuenosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
