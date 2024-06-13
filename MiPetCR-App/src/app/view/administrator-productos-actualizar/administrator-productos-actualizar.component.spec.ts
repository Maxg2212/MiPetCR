import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministratorProductosActualizarComponent } from './administrator-productos-actualizar.component';

describe('AdministratorProductosActualizarComponent', () => {
  let component: AdministratorProductosActualizarComponent;
  let fixture: ComponentFixture<AdministratorProductosActualizarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdministratorProductosActualizarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdministratorProductosActualizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
