import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { TarefasComponent } from './components/tarefas/tarefas.component';
import { RouterOutlet } from '@angular/router';
import { Task } from '../Task';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, TarefasComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-list';
  tarefas: Task[] = [];
}
