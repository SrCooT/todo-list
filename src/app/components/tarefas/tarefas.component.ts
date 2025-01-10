import { Component, OnInit } from '@angular/core';
import { TarefaService } from './../../service/tarefa.service';
import { Task } from '../../../Task';
import { CommonModule } from '@angular/common';
import { ItemsTarefasComponent } from '../items-tarefas/items-tarefas.component';
import { AddTarefasComponent } from '../add-tarefas/add-tarefas.component';

@Component({
  selector: 'app-tarefas',
  imports: [CommonModule, ItemsTarefasComponent,AddTarefasComponent],
templateUrl: './tarefas.component.html',
  styleUrl: './tarefas.component.css'
})
export class TarefasComponent implements OnInit {

  tarefas: Task[] = [];

// construtor criado para chamar o serviço de tarefas
  constructor(private TarefaService: TarefaService) { }
//ngOnInit é utilizado para chamar o serviço de tarefas quando iniciar a tarefa
  ngOnInit(): void{
    this.TarefaService.getTarefas().subscribe((dado) => {
      this.tarefas = dado;
      console.log(dado);
    })
  }

  addTarefa(tarefa: Task){
    this.TarefaService.addTarefa(tarefa).subscribe((tarefa) => {
      this.tarefas.push(tarefa);
    });
  }
  deleteTarefa(tarefa: Task){
    this.TarefaService.deleteTarefa(tarefa).subscribe(() => {
      this.tarefas = this.tarefas.filter((t) => t.id !== tarefa.id);
    });
  }
  completedTarefa(tarefa: Task){
    tarefa.concluido = !tarefa.concluido;
    this.TarefaService.updateTarefa(tarefa).subscribe();
}

}