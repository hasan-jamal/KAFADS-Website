import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProgramPageRoutingModule } from './program-page-routing.module';
import { FormsModule } from '@angular/forms';
import { ProgramPageComponent } from './components/program-page/program-page.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ProgramPageRoutingModule,
    FormsModule,
    ProgramPageComponent
]
})
export class ProgramPageModule { }
