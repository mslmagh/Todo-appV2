import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo',
  imports: [CommonModule, FormsModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
  todos: { name: string, completed: boolean }[] = [];
  newTodo: string = '';
  addTodo(todoName: string) {
    if (todoName) {
      this.todos.push({ name: todoName, completed: false });
      this.newTodo = '';
    }
  }
  // toggleTodoCompletion(index: number): void {
  //   this.todos[index].completed = !this.todos[index].completed;
  // }
}
