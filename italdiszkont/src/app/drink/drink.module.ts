import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DrinkRoutingModule } from './drink-routing.module';
import { DrinkComponent } from './drink.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { HufseparatorPipe } from '../shared/pipes/hufseparator.pipe';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DrinkComponent,
    HufseparatorPipe
    
  ],
  imports: [
    CommonModule,
    DrinkRoutingModule,
    MatCardModule, 
    MatButtonModule,
    MatGridListModule,
    MatInputModule,
    FormsModule
  ]
})
export class DrinkModule { }
