import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from '../shared/data.service';
import { Todo } from '../shared/todo.model';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent {
  @ViewChild('f') userInput!: NgForm;

  todos: Todo[] = [];

  constructor(private dataService: DataService) {}

  onSubmit() {
    console.log(this.userInput);
    this.dataService.addTodo(new Todo(this.userInput.value.userInput));
    this.todos = this.dataService.getAllTodos();

    this.userInput.reset();
  }
}
