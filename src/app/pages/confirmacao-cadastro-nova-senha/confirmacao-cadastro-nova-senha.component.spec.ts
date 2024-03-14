import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmacaoCadastroNovaSenhaComponent } from './confirmacao-cadastro-nova-senha.component';

describe('ConfirmacaoCadastroNovaSenhaComponent', () => {
  let component: ConfirmacaoCadastroNovaSenhaComponent;
  let fixture: ComponentFixture<ConfirmacaoCadastroNovaSenhaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfirmacaoCadastroNovaSenhaComponent]
    });
    fixture = TestBed.createComponent(ConfirmacaoCadastroNovaSenhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
