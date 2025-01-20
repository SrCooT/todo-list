import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../../Task';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCheck, faTimes, faPen } from '@fortawesome/free-solid-svg-icons'
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-items-tarefas',
  imports: [FontAwesomeModule,CommonModule,FormsModule],
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


//Icones''
  faTimes = faTimes
  faCheck = faCheck
  faPen = faPen
  
//Propriedades
  editando = false;

  categoria: string[] = ['Casa', 'faculdade', 'academia', 'lazer', 'trabalho'];
  
  //Eventos
  onDelete(tarefa: Task){
    this.onDeleteTarefa.emit(tarefa);
    console.log('clicada');
  }


  onCompleted(tarefa: Task){
    tarefa.concluido = !tarefa.concluido;  
    this.onCompletedTarefa.emit(tarefa);
  }
  
  onEdit() {
    this.editando = true; // Ativa o modo de edição
  } 

  salvarEdicao() {
    this.onEditTarefa.emit(this.tarefa); // Emite a tarefa editada
    this.editando = false; // Sai do modo de edição
  }
  
  cancelarEdicao() {
    this.editando = false; // Sai do modo de edição sem salvar
  }
}

