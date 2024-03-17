import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent {

  @ViewChild('imgProduto') imgProdutoRef!: ElementRef;

  nomeFruta : String = 'Banana Prata';

  trocarNome(url : String) : void{
    if(url === './../../../assets/img/produtos/000001.jpg'){
      this.nomeFruta = 'Banana Prata';
    }
    if(url === './../../../assets/img/produtos/000002.jpg'){
      this.nomeFruta = 'Abacaxi';
    }
    if(url === './../../../assets/img/produtos/000003.jpg'){
      this.nomeFruta = 'Mamão';
    }
    if(url === './../../../assets/img/produtos/000004.jpg'){
      this.nomeFruta = 'Maçã';
    }
  }

  trocarImagem(url: string): void {
    const imgProduto = document.getElementById("imgProduto") as HTMLImageElement;
    if (imgProduto) {
      imgProduto.src = url;
    }

    this.trocarNome(url);
  }
}
