import { NgModule } from "@angular/core";
//  import { MatSnackBarModule } from "@angular/material/snack-bar";
//  import { MatDialogModule } from "@angular/material/dialog"
//  import { MatIconModule } from "@angular/material/icon"
//  import { MatButtonModule } from "@angular/material/button"

@NgModule({
    declarations : [],
    imports : [
         MatSnackBarModule,
         MatDialogModule,
         MatIconModule,
        MatButtonModule
    ],
    exports : [
         MatSnackBarModule,
         MatDialogModule,
         MatIconModule,
      MatButtonModule
    ]
})
export class MaterialModule{

}