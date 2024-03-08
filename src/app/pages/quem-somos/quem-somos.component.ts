import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-quem-somos',
  templateUrl: './quem-somos.component.html',
  styleUrls: ['./quem-somos.component.css']
})
export class QuemSomosComponent {

  @Input()
  photoCover: String = './../../../assets/img/vetores/undraw_tree_swing_re_pqee.svg';
}
