import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  todoArray = [];
  todo;
  //todoForm;

  addTodo(value) {
    if (value !== "") {
      this.todoArray.push(value)
      console.log(this.todoArray)
    } else {
      alert('Enter a todo task')
    }
  }

  // delete item
  deleteItem(todo) {
    console.log("delete item")

    for (let i = 0; i <= this.todoArray.length; i++) {
      if (todo == this.todoArray[i]) {
        this.todoArray.splice(i, 1)
      }
    }
  }

  // submit Form
  todoSubmit(value: any) {
    if (value !== "") {
      this.todoArray.push(value.todo)
      //this.todoForm.reset();
    } else {
      alert('A todo item must be entered')
    }
  }
}