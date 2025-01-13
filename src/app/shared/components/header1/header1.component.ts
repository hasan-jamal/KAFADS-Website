import { CommonModule } from '@angular/common';
import { Component, HostListener, OnDestroy, OnInit,ViewEncapsulation } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header1',
  standalone:true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header1.component.html',
    styleUrls: ['./header1.component.css',
              '../../../../assets/css/style.css',
              '../../../../assets/css/header.css',
              '../../../../assets/css/footer.css',
              '../../../../assets/css/general.css'
         ],
      encapsulation: ViewEncapsulation.None
})
export class Header1Component {
isSidenavActive = false;
interval: any;
 scrollToSection(): void {
    const section = document.getElementById('aboutSection');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
   scrollToSectionContact(): void {
    const section = document.getElementById('Contact');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
toggleSidenav() {
  clearInterval(this.interval); // Ensure interval is cleared before toggling
  this.isSidenavActive = !this.isSidenavActive;
  document.body.classList.toggle('sidenav-active', this.isSidenavActive);
  console.log('toggleSidenav called. isSidenavActive:', this.isSidenavActive, 'classList:', document.body.classList);
}

closeSidenav() {
  clearInterval(this.interval); // Ensure interval is cleared
  this.isSidenavActive = false;
  document.body.classList.remove('sidenav-active');
  console.log('After closeSidenav:', document.body.classList);
}

@HostListener('document:mousemove', ['$event'])
@HostListener('document:click', ['$event'])
removeInterval() {
  if (this.interval) {
    clearInterval(this.interval);
    this.interval = null;
    console.log('Interval cleared by event listener.');
  }
}

}

