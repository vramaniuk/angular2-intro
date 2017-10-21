import { Component } from '@angular/core';

interface ITodo {
    title: string;
    completed: boolean
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
    toggle(todo: ITodo) {
        todo.completed = !todo.completed;
    }
    delete(todo: ITodo) {
        let index = this.todos.indexOf(todo);
        if (index > -1) todos.splice(index, 1)
    }
}
