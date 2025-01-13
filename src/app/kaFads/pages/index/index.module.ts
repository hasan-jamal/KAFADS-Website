import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexRoutingModule } from './index-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { Header1Component } from '../../../shared/components/header1/header1.component';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    IndexRoutingModule,
    FormsModule,
    ReactiveFormsModule, 
    RouterModule,
    HomePageComponent,
  ],
    exports:[
    
    ]
})
export class IndexModule { }
