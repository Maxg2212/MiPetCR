import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientHubComponent } from './client-hub.component';

describe('ClientHubComponent', () => {
  let component: ClientHubComponent;
  let fixture: ComponentFixture<ClientHubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClientHubComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClientHubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
