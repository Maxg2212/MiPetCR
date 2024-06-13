import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministratorProductoMenuComponent } from './administrator-producto-menu.component';

describe('AdministratorProductoMenuComponent', () => {
  let component: AdministratorProductoMenuComponent;
  let fixture: ComponentFixture<AdministratorProductoMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdministratorProductoMenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdministratorProductoMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
