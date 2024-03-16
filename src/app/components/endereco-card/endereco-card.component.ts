import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-endereco-card',
  templateUrl: './endereco-card.component.html',
  styleUrls: ['./endereco-card.component.css']
})
export class EnderecoCardComponent {

  

  @Input() 
  tipo_end: String = '';

  @Input()
  tipoLocal : String = '';
  @Input()
  usuario : String = '';
  @Input()
  rua_num : String = '';
  @Input()
  cidade_estado : String = '';
  @Input()
  cep : String = '';

}
