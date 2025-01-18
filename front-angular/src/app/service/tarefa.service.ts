import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../../Task';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {
// Url corespondete ao servidor  json criado no django
  private apiUrl = 'http://localhost:8000/';
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  getTarefas(): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.apiUrl}Tarefa/`, { headers: this.httpHeaders }).pipe(
      catchError(err => {
        console.error('Erro ao buscar tarefas:', err);
        return throwError(() => new Error('Erro ao buscar tarefas'));
      })
    );
  }
  
// função para deletar tarefa
  deleteTarefa(tarefa: Task): Observable<any>{
    return this.http.delete<Task>(`${this.apiUrl}Tarefa/${tarefa.id}`);
; // deleta a tarefa pelo id
  }

// função para Concluir tarefa  
updateTarefa(tarefa: Task): Observable<Task> {
  const url = `${this.apiUrl}/${tarefa.id}`;
  return this.http.put<Task>(url, tarefa, {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  });
}

 // função para adicionar tarefa
addTarefa(tarefa: Task): Observable<any>{
    return this.http.post<Task>(`${this.apiUrl + 'Tarefa/'}`,tarefa); //adiciona tarefas
} 
  constructor(private http: HttpClient) { }
}
