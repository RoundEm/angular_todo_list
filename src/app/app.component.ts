import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Todo List';
  input = '';
  todos = [];

  onAddItem() {
    this.todos.push({
      description: this.input,
      id: Date.now(),
      completed: false
    })
    this.input = '';
    document.getElementById('todo-input').focus()
  }

  onInputChange(event: Event) {
    this.input = (<HTMLInputElement>event.target).value;
  }
  
  clearTodos() {
    this.todos = []
  }

  toggleItemComplete(event: Event) {
    let todos = this.todos
    let targetId = +(<HTMLUListElement>event.target).id
    for (let i = 0, len = todos.length; i < len; i++) {
      if (todos[i].id === targetId) {
        this.todos[i].completed = !todos[i].completed
        break
      }
    }

    // YOU CAN USE ONE OF THESE IF YOU'D RATHER DELETE ITEMS INSTEAD OF TOGGLE:

    // this.todos = this.todos.filter(todo => {
    //   return todo.id !== targetId
    // })

    // for (let i = 0; i < this.todos.length; i++) {
    //   if (this.todos[i].id === targetId) {
    //     return this.todos.splice(i, 1)
    //   }
    // }
  }
}
