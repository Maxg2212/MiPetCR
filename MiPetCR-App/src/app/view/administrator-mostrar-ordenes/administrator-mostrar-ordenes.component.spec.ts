import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministratorMostrarOrdenesComponent } from './administrator-mostrar-ordenes.component';

describe('AdministratorMostrarOrdenesComponent', () => {
  let component: AdministratorMostrarOrdenesComponent;
  let fixture: ComponentFixture<AdministratorMostrarOrdenesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdministratorMostrarOrdenesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdministratorMostrarOrdenesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
