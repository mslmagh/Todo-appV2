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
  currentDate: string = new Date().toLocaleDateString();
  addTodo(todoName: string) {
    if (todoName.trim()) {
      this.todos.push({ name: todoName, completed: false });
      this.newTodo = '';
    }
  }
  deleteTodo(index: number): void {
    this.todos.splice(index, 1);
  }
  clearCompleted(): void {
    this.todos = this.todos.filter(todo => !todo.completed);
  }
  // toggleTodoCompletion(index: number): void {
  //   this.todos[index].completed = !this.todos[index].completed;
  // }
}
