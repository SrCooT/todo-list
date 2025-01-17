import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from '../../../Task';
import { ButtonComponent } from '../button/button.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-add-tarefas',
  imports: [FormsModule, ButtonComponent,CommonModule],
templateUrl: './add-tarefas.component.html',
  styleUrl: './add-tarefas.component.css'
})
export class AddTarefasComponent {

  @Output() onAddTarefa = new EventEmitter<Task>();

  tarefa:string ="";
  categoria: string ="";
  concluido: boolean = false;
  mostrarAddTarefa: boolean = false;


  alteraVisualizcao(valor: boolean){
    this.mostrarAddTarefa = valor;
  }

  onSubmit(){
  if(!this.tarefa){
    alert("adicione uma tarefa")
    return;
  }
  console.log(this.onSubmit);
  const novaTarefa = {
    tarefa: this.tarefa,
    categoria: this.categoria,
    concluido: this.concluido
  }
  this.onAddTarefa.emit(novaTarefa);
  this.tarefa = "";
  this.categoria = "";
  this.concluido = false;
  
  }
}
