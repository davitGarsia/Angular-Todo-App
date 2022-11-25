import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DataService } from '../shared/data.service';
import { Todo } from '../shared/todo.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent {
  @Input() todo: any = [];
  @Output() todoClicked = new EventEmitter<void>();
  @Output() editClicked = new EventEmitter<void>();
  @Output() deleteClicked = new EventEmitter<void>();

  onClicked() {
    this.todoClicked.emit();
  }

  onEdit() {
    this.editClicked.emit();
  }

  onDeleteTodo() {
    this.deleteClicked.emit();
  }
}
