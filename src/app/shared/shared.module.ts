import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';



@NgModule({
  declarations: [
    
    ],
  imports: [
    CommonModule,
    RouterModule,
    FooterComponent
    ],
    exports:[
      FooterComponent
    ]
})
export class SharedModule { }
