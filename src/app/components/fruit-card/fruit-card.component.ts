import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-fruit-card',
  templateUrl: './fruit-card.component.html',
  styleUrls: ['./fruit-card.component.css']
})
export class FruitCardComponent {

  @Input()
  frutaImg : String = '';
  @Input()
  preco : String = '';
  @Input()
  frutaNome : String = '';
  @Input()
  descricao : String = '';
  @Input()
  descEstoque : String = '';
}
