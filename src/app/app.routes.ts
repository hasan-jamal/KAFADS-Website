import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
 {
    path:'',
    redirectTo:'kaFads',
    pathMatch:'full'
  },
  {
      path: 'kaFads',
      loadChildren:()=> import('./kaFads/kafads.module').then(m =>m.KafadsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true,
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }