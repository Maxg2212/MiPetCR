import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarClienteComponent } from './sidebar-cliente.component';

describe('SidebarClienteComponent', () => {
  let component: SidebarClienteComponent;
  let fixture: ComponentFixture<SidebarClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SidebarClienteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SidebarClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
