import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CatalogComponent } from './catalog.component';



@NgModule({
  declarations: [CatalogComponent],
  imports: [
    CommonModule,
    RouterModule,
    NgSelectModule,
    FormsModule, ReactiveFormsModule,
    RouterModule.forChild([
        { path: '', component: CatalogComponent },
    ])
  ]
})
export class CatalogModule { }
