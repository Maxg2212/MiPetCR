import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministratorCitasMostrarComponent } from './administrator-citas-mostrar.component';

describe('AdministratorCitasMostrarComponent', () => {
  let component: AdministratorCitasMostrarComponent;
  let fixture: ComponentFixture<AdministratorCitasMostrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdministratorCitasMostrarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdministratorCitasMostrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
