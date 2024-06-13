import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministratorProductosCrearComponent } from './administrator-productos-crear.component';

describe('AdministratorProductosCrearComponent', () => {
  let component: AdministratorProductosCrearComponent;
  let fixture: ComponentFixture<AdministratorProductosCrearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdministratorProductosCrearComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdministratorProductosCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
