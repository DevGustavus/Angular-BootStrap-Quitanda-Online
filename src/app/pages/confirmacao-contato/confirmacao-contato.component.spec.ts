import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmacaoContatoComponent } from './confirmacao-contato.component';

describe('ConfirmacaoContatoComponent', () => {
  let component: ConfirmacaoContatoComponent;
  let fixture: ComponentFixture<ConfirmacaoContatoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfirmacaoContatoComponent]
    });
    fixture = TestBed.createComponent(ConfirmacaoContatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
