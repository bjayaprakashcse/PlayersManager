import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreatescreenComponent } from './createscreen.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import { MaterialElevationDirective } from './material-elevation.directive';


@NgModule({
  declarations: [CreatescreenComponent,MaterialElevationDirective],
  imports: [
    CommonModule,
    RouterModule,
    NgSelectModule,
    FormsModule, 
    ReactiveFormsModule,
    MatExpansionModule,
    MatCheckboxModule,
    
    MatRadioModule,
    MatCardModule,MatToolbarModule,MatButtonModule,MatInputModule,MatIconModule,
    RouterModule.forChild([
        { path: '', component: CreatescreenComponent },
    ])
  ]
})
export class CreatescreenModule { }
