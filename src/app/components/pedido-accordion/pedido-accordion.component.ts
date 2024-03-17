import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-pedido-accordion',
  templateUrl: './pedido-accordion.component.html',
  styleUrls: ['./pedido-accordion.component.css']
})
export class PedidoAccordionComponent {

  @Input()
  numPedido : String = '';
  @Input()
  dataPedido : String = '';
}
