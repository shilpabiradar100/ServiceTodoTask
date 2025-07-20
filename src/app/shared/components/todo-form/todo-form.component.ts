


import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TodoService } from '../../services/todo.service';

import { SnackbarService } from '../../services/snackbar.service';
import { UuidService } from '../../services/uuid.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {
  @ViewChild('todoForm') todoForm !: NgForm;

  constructor(private _todoService : TodoService,
              private _uuidService : UuidService,
              private _snackbar : SnackbarService
  ) { }

  onAddTodo(){
    if(this.todoForm.valid){
      let todoObj = this.todoForm.value;
      todoObj.todoId = this._uuidService.generateUuid();

      this.todoForm.reset();

      this._todoService.createTodo(todoObj);
      this._snackbar.openSnackBar(`New todo ${todoObj.todoItem} added successfully!!!`)
    }
  }

  ngOnInit(): void {
  }

}
