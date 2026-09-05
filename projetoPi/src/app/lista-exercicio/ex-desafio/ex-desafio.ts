import { Component } from '@angular/core';

@Component({
  selector: 'app-ex-desafio',
  standalone: false,
  templateUrl: './ex-desafio.html',
  styleUrl: './ex-desafio.scss',
})
export class ExDesafio {

   nomeAluno = '';
  quantidadeDisciplinas = 1;
  mensagem = '';

  aumentarDisciplinas() {
    this.quantidadeDisciplinas++;
  }

  diminuirDisciplinas() {
    if (this.quantidadeDisciplinas > 1) {
      this.quantidadeDisciplinas--;
    }
  }

  realizarMatricula() {
    this.mensagem = `Matrícula realizada para ${this.nomeAluno} em ${this.quantidadeDisciplinas} disciplinas.`;
  }
}

