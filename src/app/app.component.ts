import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  display: string = '';

  adicionar(valor: string) {
    this.display += valor;
  }

  limpar() {
    this.display = '';
  }

  calcular() {
    try {
      this.display = eval(this.display);
    } catch (e) {
      this.display = 'Erro';
    }
  }
}