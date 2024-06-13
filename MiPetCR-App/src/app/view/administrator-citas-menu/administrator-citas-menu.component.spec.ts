import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministratorCitasMenuComponent } from './administrator-citas-menu.component';

describe('AdministratorCitasMenuComponent', () => {
  let component: AdministratorCitasMenuComponent;
  let fixture: ComponentFixture<AdministratorCitasMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdministratorCitasMenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdministratorCitasMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
