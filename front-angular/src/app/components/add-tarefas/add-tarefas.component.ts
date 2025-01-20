import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from '../../../Task';
import { ButtonComponent } from '../button/button.component';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-add-tarefas',
  standalone:true,
  imports: [FormsModule, ButtonComponent,CommonModule],
templateUrl: './add-tarefas.component.html',
  styleUrls: ['./add-tarefas.component.css']
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

  constructor(private http: HttpClient) {}

  onSubmit() {
    if (!this.tarefa) {
      alert("adicione uma tarefa");
      return;
    }
    const novaTarefa = {
      tarefa: this.tarefa,
      categoria: this.categoria,
      concluido: this.concluido
    };
    this.http.post('http://localhost:8000/Tarefa/', novaTarefa).subscribe(response => {
      console.log('Tarefa adicionada com sucesso', response);
      location.reload();
      this.tarefa = "";
      this.categoria = "";
      this.concluido = false;
    }, error => {
      console.error('Erro ao adicionar tarefa', error);
    });
  }
}
