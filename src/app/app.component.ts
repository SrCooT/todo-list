import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { TarefasComponent } from './components/tarefas/tarefas.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent,TarefasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todo-list';
}
