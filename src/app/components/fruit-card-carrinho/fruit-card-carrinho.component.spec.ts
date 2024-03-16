import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FruitCardCarrinhoComponent } from './fruit-card-carrinho.component';

describe('FruitCardCarrinhoComponent', () => {
  let component: FruitCardCarrinhoComponent;
  let fixture: ComponentFixture<FruitCardCarrinhoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FruitCardCarrinhoComponent]
    });
    fixture = TestBed.createComponent(FruitCardCarrinhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
