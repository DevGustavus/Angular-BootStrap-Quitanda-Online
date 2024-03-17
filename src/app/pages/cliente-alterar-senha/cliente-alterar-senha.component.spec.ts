import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteAlterarSenhaComponent } from './cliente-alterar-senha.component';

describe('ClienteAlterarSenhaComponent', () => {
  let component: ClienteAlterarSenhaComponent;
  let fixture: ComponentFixture<ClienteAlterarSenhaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClienteAlterarSenhaComponent]
    });
    fixture = TestBed.createComponent(ClienteAlterarSenhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
