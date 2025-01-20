import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app.routes';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { FooterComponent } from './shared/components/footer/footer.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    AppComponent,
    RouterModule,
    FooterComponent,
    FormsModule,
    BrowserAnimationsModule
  ],
  exports:[
    SharedModule
  ],
  providers: [
  ]
})
export class AppModule { }
