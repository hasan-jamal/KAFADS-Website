import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../../shared/shared.module';

@Component({
  selector: 'app-home-kafads',
  imports: [CommonModule, RouterModule,SharedModule],
  templateUrl: './home-kafads.component.html',
  styleUrl: './home-kafads.component.css'
})
export class HomeKafadsComponent {

}
