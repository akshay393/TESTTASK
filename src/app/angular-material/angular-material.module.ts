import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';
import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule} from '@angular/material/grid-list';
import { MatSlideToggleModule} from '@angular/material/slide-toggle';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatAutocompleteModule, MatCheckboxModule, MatDatepickerModule, MatInputModule,
    MatSelectModule, MatListModule, MatRadioModule,
    MatIconModule, MatGridListModule, MatSlideToggleModule
  ],
  exports : [
    MatAutocompleteModule, MatCheckboxModule, MatDatepickerModule, MatInputModule,
    MatSelectModule, MatListModule, MatRadioModule,
    MatIconModule, MatGridListModule, MatSlideToggleModule
  ]
})
export class AngularMaterialModule { }
