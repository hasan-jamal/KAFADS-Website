import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FreeConsultationComponent } from './components/free-consultation/free-consultation.component';

const routes: Routes = [
  { 
    path: '',
    pathMatch:'full',
    component:FreeConsultationComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FreeConsultationRoutingModule { }
