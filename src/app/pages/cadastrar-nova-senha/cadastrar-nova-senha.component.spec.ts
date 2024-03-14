import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarNovaSenhaComponent } from './cadastrar-nova-senha.component';

describe('CadastrarNovaSenhaComponent', () => {
  let component: CadastrarNovaSenhaComponent;
  let fixture: ComponentFixture<CadastrarNovaSenhaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastrarNovaSenhaComponent]
    });
    fixture = TestBed.createComponent(CadastrarNovaSenhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
