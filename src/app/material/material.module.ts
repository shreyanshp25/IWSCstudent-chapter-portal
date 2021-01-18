import { NgModule } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialogModule} from '@angular/material/dialog';
import {MatStepperModule} from '@angular/material/stepper';
import { ReactiveFormsModule } from '@angular/forms';
import {MatBadgeModule} from '@angular/material/badge';


@NgModule({
  exports: [
    MatTableModule, 
    MatFormFieldModule, 
    MatInputModule, 
    MatDialogModule, 
    MatStepperModule,
    ReactiveFormsModule,
    MatBadgeModule
  ],
})


export class MaterialModule { }
