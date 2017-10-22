import { Component } from '@angular/core';

class ITodo {
    constructor(
        public title: string,
        public completed: boolean = false) { }
}
const todos = [
    {
        title: 'Learn JavaScript!',
        completed: true
    },
    {
        title: 'Learn Angular',
        completed: false
    },
    {
        title: 'Create App',
        completed: false
    }
];

@Component({
    moduleId: module.id,
    selector: 'app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css']
})

export class AppComponent {
    title: string = 'Angular 2Do';
    todos: ITodo[] = todos;
    newTodoTitle: string = '';
    toggle(todo: ITodo) {
        todo.completed = !todo.completed;
    }
    delete(todo: ITodo) {
        let index = this.todos.indexOf(todo);
        if (index > -1) todos.splice(index, 1)
    }
    create() {
        let todo: ITodo = new ITodo(this.newTodoTitle);
        this.todos.push(todo);
        this.newTodoTitle = "";
    }
}
