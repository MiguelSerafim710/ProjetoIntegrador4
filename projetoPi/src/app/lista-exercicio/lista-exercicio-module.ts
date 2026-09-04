import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ListaExercicioRoutingModule } from './lista-exercicio-routing-module';
import { Ex1 } from './ex1/ex1';

@NgModule({
  declarations: [Ex1],
  imports: [CommonModule, ListaExercicioRoutingModule, FormsModule],
})
export class ListaExercicioModule {}
