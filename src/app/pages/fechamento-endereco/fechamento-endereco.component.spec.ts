import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FechamentoEnderecoComponent } from './fechamento-endereco.component';

describe('FechamentoEnderecoComponent', () => {
  let component: FechamentoEnderecoComponent;
  let fixture: ComponentFixture<FechamentoEnderecoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FechamentoEnderecoComponent]
    });
    fixture = TestBed.createComponent(FechamentoEnderecoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
