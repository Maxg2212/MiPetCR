import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministratorProductosMostrarComponent } from './administrator-productos-mostrar.component';

describe('AdministratorProductosMostrarComponent', () => {
  let component: AdministratorProductosMostrarComponent;
  let fixture: ComponentFixture<AdministratorProductosMostrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdministratorProductosMostrarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdministratorProductosMostrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
