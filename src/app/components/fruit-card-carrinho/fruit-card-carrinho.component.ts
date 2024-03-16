import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-fruit-card-carrinho',
  templateUrl: './fruit-card-carrinho.component.html',
  styleUrls: ['./fruit-card-carrinho.component.css']
})
export class FruitCardCarrinhoComponent {

  @Input()
  fruitImg : String = '';
  @Input()
  fruitName : String = '';
  @Input()
  fruitDesc : String = '';
  @Input()
  precoKg : String = '';
  @Input()
  precoItem : String = '';

}
