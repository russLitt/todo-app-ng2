import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  todoArray = [];
  todo;
  completedArray = [];
  completed;
  todoForm;
  displayItemsLeft = false;
  itemsLeft = 0;

  addTodo(value) {
    if (value !== "") {
      this.todoArray.push(value)
      // this.todoForm.resetForm();
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

  // submit Form by enter key
  todoSubmit(value: any) {
    if (value.todo !== "") {
      this.todoArray.push(value.todo)
      //this.todoForm.reset();
    } else if (value.todo == "") {
      alert('A todo item must be entered')
    }
  }

  //add item to completed list
  addToCompleted(value) {
    this.completedArray.push(value)
    console.log(this.completedArray)
    console.log("completed")
    this.deleteItem(value)
  }

  removeCompleted(completed) {
    for (let i = 0; i <= this.completedArray.length; i++) {
      if (completed == this.completedArray[i]) {
        this.completedArray.splice(i, 1)
      }
    }
  }

  removeAllCompleted() {
    this.completedArray.length = 0;
  }
}