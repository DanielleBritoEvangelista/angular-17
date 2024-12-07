import { Component } from '@angular/core';

@Component({
  selector: 'app-componente03',
  standalone: true,
  imports: [],
  templateUrl: './componente03.component.html',
  styleUrl: './componente03.component.css'
})
export class Componente03Component {
  imagem:string = 'assets/teste.jpg';

  alterarImagem(){
    if(this.imagem === 'assets/teste.jpg'){
      this.imagem = 'assets/backgroud.png';
    }else {
      this.imagem = 'assets/teste.jpg';
    }
  }
}
