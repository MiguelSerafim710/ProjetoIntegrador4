import { Component } from '@angular/core';

@Component({
  selector: 'app-ex9',
  standalone: false,
  templateUrl: './ex9.html',
  styleUrl: './ex9.scss',
})
export class Ex9 {
  produto = 'Teclado';
  estoque = 5;

  aumentar() {
    this.estoque++;
  }

  diminuir() {
    if (this.estoque > 0) {
      this.estoque--;
}
  }
}
