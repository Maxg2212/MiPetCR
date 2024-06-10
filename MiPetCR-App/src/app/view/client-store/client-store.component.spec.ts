import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientStoreComponent } from './client-store.component';

describe('ClientStoreComponent', () => {
  let component: ClientStoreComponent;
  let fixture: ComponentFixture<ClientStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClientStoreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClientStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
