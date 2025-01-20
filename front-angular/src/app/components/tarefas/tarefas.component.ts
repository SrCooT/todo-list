import { Component, OnInit } from '@angular/core';
import { TarefaService } from './../../service/tarefa.service';
import { Task } from '../../../Task';
import { CommonModule } from '@angular/common';
import { AddTarefasComponent } from '../add-tarefas/add-tarefas.component';
import { ItemsTarefasComponent } from '../items-tarefas/items-tarefas.component';
import { RouterOutlet } from '@angular/router';



@Component({
  selector: 'app-tarefas',
  imports: [CommonModule,AddTarefasComponent,ItemsTarefasComponent,RouterOutlet],


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


deleteTarefa(tarefa: Task) {
  this.tarefaService.deleteTarefa(tarefa).subscribe({
    next: () => {
      this.tarefas = this.tarefas.filter((t: Task) => t.id !== tarefa.id); // utilizado chatgpt para adicionar o next que veio como a nova atualização //
      console.log("Tarefa deletada com sucesso");
    },
    error: (error: any) => {
      console.log("aconteceu um erro ao deletar a tarefa", error.message);
    }
  });
}

updateTarefa(tarefa: Task): void {
  this.tarefaService.updateTarefa(tarefa).subscribe({
    next: (updatedTarefa: Task) => {
      this.tarefas = this.tarefas.map((t: Task) => t.id === updatedTarefa.id ? updatedTarefa : t);
    },
    error: (error: any) => {
      console.error("Erro ao atualizar a tarefa", error);
    }
  });
}

editTarefa(tarefa: Task): void {
  this.tarefaService.alterarTarefa(tarefa).subscribe({
    next: (updatedTask: Task) => {
      // Atualizar a lista de tarefas com a tarefa editada
      this.tarefas = this.tarefas.map((t: Task) =>
        t.id === updatedTask.id ? updatedTask : t
      );
      console.log('Tarefa editada com sucesso:', updatedTask);
    },
    error: (err: any) => {
      console.error('Erro ao editar tarefa:', err.message);
    }
  });
}
}