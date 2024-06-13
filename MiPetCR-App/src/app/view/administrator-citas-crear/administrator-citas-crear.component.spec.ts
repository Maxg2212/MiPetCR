import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministratorCitasCrearComponent } from './administrator-citas-crear.component';

describe('AdministratorCitasCrearComponent', () => {
  let component: AdministratorCitasCrearComponent;
  let fixture: ComponentFixture<AdministratorCitasCrearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdministratorCitasCrearComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdministratorCitasCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
