import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { KafadsRoutingModule } from './kafads-routing.module';
import { HomePageComponent } from './pages/index/components/home-page/home-page.component';
import { SharedModule } from '../shared/shared.module';
import { HomeKafadsComponent } from './components/home-kafads/home-kafads.component';


@NgModule({
    declarations: [
        
    ],
    imports: [
        CommonModule,
        KafadsRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        SharedModule,
        HomeKafadsComponent
     ],
    exports:[
        SharedModule,
        HomeKafadsComponent
    ],
    providers:[HomePageComponent]
})
export class KafadsModule { }
