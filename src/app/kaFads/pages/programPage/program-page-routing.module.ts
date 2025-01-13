import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProgramPageComponent } from './components/program-page/program-page.component';

const routes: Routes = [
  { 
    path: '',
    pathMatch:'full',
    component:ProgramPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProgramPageRoutingModule { }
