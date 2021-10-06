import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { RouterModule } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [SearchComponent],
  imports: [
    CommonModule,
    RouterModule,
    NgSelectModule,
    FormsModule, ReactiveFormsModule,
    RouterModule.forChild([
        { path: '', component: SearchComponent },
    ])
  ]
})
export class SearchModule { }
