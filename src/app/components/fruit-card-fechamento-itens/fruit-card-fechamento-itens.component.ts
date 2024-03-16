import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-fruit-card-fechamento-itens',
  templateUrl: './fruit-card-fechamento-itens.component.html',
  styleUrls: ['./fruit-card-fechamento-itens.component.css']
})
export class FruitCardFechamentoItensComponent {

  @Input()
  fruitImg : String = '';
  @Input()
  fruitName : String = '';
  @Input()
  fruitDesc : String = '';
  @Input()
  fruitQuant : String = '';
  @Input()
  fruitPreco : String = '';
  
}
