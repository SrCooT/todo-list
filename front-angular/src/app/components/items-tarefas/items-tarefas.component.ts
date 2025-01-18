import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../../Task';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCheck, faTimes, faPen } from '@fortawesome/free-solid-svg-icons'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-items-tarefas',
  imports: [FontAwesomeModule,CommonModule],
templateUrl: './items-tarefas.component.html',
  styleUrls: ['./items-tarefas.component.css']
})
// ItemsTarefasComponent é um componente que recebe uma tarefa e exibe na tela
// o input tarefa é do tipo Task porque o task é um objeto que contém as informações da tarefa
export class ItemsTarefasComponent {
  @Input() tarefa!:Task;//introduzindo a tarefa
  @Output() onDeleteTarefa= new EventEmitter<Task>(); //evento para deletar a tarefa
  @Output() onCompletedTarefa = new EventEmitter<Task>();//evento para completar a tarefa
  @Output() onEditTarefa= new EventEmitter<Task>();//evento para editar a tarefa



  onEdit() {
    this.onEditTarefa.emit(this.tarefa);
  }
  
  
//Icones''
  faTimes = faTimes
  faCheck = faCheck
  faPen = faPen
  

  //Eventos
  onDelete(tarefa: Task){
    this.onDeleteTarefa.emit(tarefa);
    console.log('clicada');
  }

  onCompleted(tarefa: Task){
    tarefa.concluido = !tarefa.concluido;  
    this.onCompletedTarefa.emit(tarefa);
    console.log('Tarefa concluída alterada');
  }

  onEdita(tarefa: Task){
    this.onEditTarefa.emit(tarefa);
    console.log('clicado');
  }
  
}

