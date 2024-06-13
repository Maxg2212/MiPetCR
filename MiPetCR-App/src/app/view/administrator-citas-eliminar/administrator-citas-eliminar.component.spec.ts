import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministratorCitasEliminarComponent } from './administrator-citas-eliminar.component';

describe('AdministratorCitasEliminarComponent', () => {
  let component: AdministratorCitasEliminarComponent;
  let fixture: ComponentFixture<AdministratorCitasEliminarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdministratorCitasEliminarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdministratorCitasEliminarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
