import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FreeConsultationRoutingModule } from './free-consultation-routing.module';
import { FreeConsultationComponent } from './components/free-consultation/free-consultation.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    FreeConsultationRoutingModule,
    FormsModule,
    FreeConsultationComponent,
    ]
})
export class FreeConsultationModule { }
