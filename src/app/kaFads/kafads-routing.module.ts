import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../app.component';
import { HomeKafadsComponent } from './components/home-kafads/home-kafads.component';
import { FreeConsultationComponent } from './pages/freeConsultation/components/free-consultation/free-consultation.component';
import { ProgramPageComponent } from './pages/programPage/components/program-page/program-page.component';
import { HomePageComponent } from './pages/index/components/home-page/home-page.component';

const routes: Routes = [

  {
  path:'',
  redirectTo:'home',
  pathMatch:'full'
},
  { path: 'home', component: HomeKafadsComponent,
      children: [
        { path: '', redirectTo: 'index', pathMatch: 'full' },
        // { path: 'index', loadChildren: () => import('../kaFads/pages/index/index.module').then(m => m.IndexModule) },
        { path: 'index', component:HomePageComponent },
        { path: 'programPage', component:ProgramPageComponent },
        // { path: 'programPage', loadChildren: () => import('../kaFads/pages/programPage/program-page.module').then(m => m.ProgramPageModule) },
        // { path: 'freeConsultation', loadChildren: () => import('../kaFads/pages/freeConsultation/free-consultation.module').then(m => m.FreeConsultationModule) }
        { path: 'freeConsultation', component: FreeConsultationComponent }
      ],
      
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KafadsRoutingModule { }
