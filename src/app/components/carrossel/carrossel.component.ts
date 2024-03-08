import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-carrossel',
  templateUrl: './carrossel.component.html',
  styleUrls: ['./carrossel.component.css']
})
export class CarrosselComponent {
  
  @Input()
  slide1: String = './../../../assets/img/slides/slide01.jpg';
  slideSmall1: String = './../../../assets/img/slides/slide01small.jpg';
}
