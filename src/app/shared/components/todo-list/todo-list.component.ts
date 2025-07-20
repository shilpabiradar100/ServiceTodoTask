// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-todo-list',
//   templateUrl: './todo-list.component.html',
//   styleUrls: ['./todo-list.component.scss']
// })
// export class TodoListComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }


import { Component, OnInit } from '@angular/core';
//import { Itodo } from '../../models/todo.interface';
import { TodoService } from '../../services/todo.service';
import { SnackbarService } from '../../services/snackbar.service';
import { Itodo } from '../../models/todo.interface';
//import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
//import { GetConfirmComponent } from '../get-confirm/get-confirm.component';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todos : Array<Itodo> = [];

  constructor(private _todoService : TodoService,
              private _snackbar : SnackbarService,
              private _matdialog : MatDialog
  ) { }

  onRemoveTodo(todo : Itodo){
    const matConfig = new MatDialogConfig()
    matConfig.width = "400px";
    matConfig.maxWidth = "90%";

    let matDialog = this._matdialog.open(GetConfirmComponent, matConfig);

    matDialog.afterClosed()
    .subscribe(res => {
      if(res){
        this._todoService.removeTodo(todo);

        this._snackbar.openSnackBar(`Todo with id ${todo.todoId} removed successfully!!!`)
      }
    })
  }

  ngOnInit(): void {
    this.todos = this._todoService.fetchAllTodo()
  }

}
