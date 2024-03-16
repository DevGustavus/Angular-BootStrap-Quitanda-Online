import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FruitCardFechamentoItensComponent } from './fruit-card-fechamento-itens.component';

describe('FruitCardFechamentoItensComponent', () => {
  let component: FruitCardFechamentoItensComponent;
  let fixture: ComponentFixture<FruitCardFechamentoItensComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FruitCardFechamentoItensComponent]
    });
    fixture = TestBed.createComponent(FruitCardFechamentoItensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
