import { NgModule } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
  exports: [MatTableModule, MatFormFieldModule, MatInputModule, MatDialogModule],
})
export class MaterialModule { }
