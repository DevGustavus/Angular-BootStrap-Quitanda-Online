import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FechamentoItensComponent } from './fechamento-itens.component';

describe('FechamentoItensComponent', () => {
  let component: FechamentoItensComponent;
  let fixture: ComponentFixture<FechamentoItensComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FechamentoItensComponent]
    });
    fixture = TestBed.createComponent(FechamentoItensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
