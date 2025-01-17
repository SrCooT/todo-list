import { Component, OnInit } from '@angular/core';
import { TarefaService } from './../../service/tarefa.service';
import { Task } from '../../../Task';
import { CommonModule } from '@angular/common';
import { AddTarefasComponent } from '../add-tarefas/add-tarefas.component';
import { ItemsTarefasComponent } from '../items-tarefas/items-tarefas.component';


@Component({
  selector: 'app-tarefas',
  imports: [CommonModule,AddTarefasComponent,ItemsTarefasComponent,],

templateUrl: './tarefas.component.html',
  styleUrls: ['./tarefas.component.css']
})
export class TarefasComponent implements OnInit {
  tarefas: Task[] = [];

  // construtor criado para chamar o serviço de tarefas
  constructor(private tarefaService: TarefaService) {}

  // ngOnInit é utilizado para chamar o serviço de tarefas quando iniciar a tarefa
  ngOnInit(): void {
    this.getTarefas();
    
  }

  getTarefas(): void {
    this.tarefaService.getTarefas().subscribe({
      next: (data: Task[]) => {
        this.tarefas = data;
      },
      error: (error: any) => {
        console.log("aconteceu um erro", error.message);
      }
    });
  }


addTarefa(tarefa: Task) {
  this.tarefaService.addTarefa(tarefa).subscribe((tarefa) => {
    this.tarefas.push(tarefa);
  });
}

deleteTarefa(tarefa: Task) {
  this.tarefaService.deleteTarefa(tarefa).subscribe(() => {
    this.tarefas = this.tarefas.filter((t) => t.id !== tarefa.id);
  });
}

updateTarefa(tarefa: Task) {
  tarefa.concluido = !tarefa.concluido;
  this.tarefaService.updateTarefa(tarefa).subscribe();
}

}