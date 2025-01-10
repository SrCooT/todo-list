import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../../Task';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {
// Url corespondete ao servidor  json criado no db.json
  private apiUrl = 'http://localhost:3000/tarefas';

  getTarefas() : Observable<Task[]>{

    return this.http.get<Task[]>(this.apiUrl);
    
  }
// função para deletar tarefa
  deleteTarefa(tarefa: Task): Observable<Task>{
    return this.http.delete<Task>(`${this.apiUrl}/${tarefa.id}`); // deleta a tarefa pelo id
  }

// função para Concluir tarefa  
  updateTarefa(tarefa: Task): Observable<Task>{
    return this.http.put<Task>(`${this.apiUrl}/${tarefa.id}`, tarefa); // atualiza a tarefa
  }

 // função para adicionar tarefa
 addTarefa(tarefa: Task): Observable<Task>{
    return this.http.post<Task>(`${this.apiUrl}`,tarefa); //adiciona tarefas
 } 
 
  constructor(private http: HttpClient) { }
}
