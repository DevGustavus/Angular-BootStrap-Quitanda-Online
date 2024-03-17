import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteMenuCardComponent } from './cliente-menu-card.component';

describe('ClienteMenuCardComponent', () => {
  let component: ClienteMenuCardComponent;
  let fixture: ComponentFixture<ClienteMenuCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClienteMenuCardComponent]
    });
    fixture = TestBed.createComponent(ClienteMenuCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
