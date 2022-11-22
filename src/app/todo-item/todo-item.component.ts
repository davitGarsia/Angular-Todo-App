import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';
import { Todo } from '../shared/todo.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent {
  @Input() todo: any = [];

  // onSubmit() {
  //   console.log(this.userInput);
  //   this.dataService.addTodo(new Todo(this.userInput.value.userInput));
  //   this.todos = this.dataService.getAllTodos();

  //   this.userInput.reset();
  // }
}
