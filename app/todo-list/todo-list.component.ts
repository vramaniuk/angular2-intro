import { Component } from '@angular/core';
import { Todo } from '../shared/todo';
import { todos } from '../shared/data';


@Component({
  moduleId: module.id,
  selector: 'todo-list',
  templateUrl: 'todo-list.component.html',
  styleUrls: ['todo-list.component.css']
})

export class TodoListComponent {
  todos: Todo[] = todos;
  toggle(todo: Todo) {
    todo.completed = !todo.completed;
  }
  delete(todo: Todo) {
    let index = this.todos.indexOf(todo);
    if (index > -1) todos.splice(index, 1)
  }
}
