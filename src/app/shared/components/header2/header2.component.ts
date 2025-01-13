import { CommonModule } from '@angular/common';
import { Component, HostListener, OnDestroy, OnInit,ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterModule } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-header2',
  imports: [CommonModule, RouterModule],
  templateUrl: './header2.component.html',
  styleUrl: './header2.component.css',
    encapsulation: ViewEncapsulation.None
})
export class Header2Component {
 isSidenavActive = false;
  interval: any;
   isActive: boolean = false;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Detect navigation to 'aboutSection'
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        const fragment = this.route.snapshot.fragment;
        this.isActive = fragment === 'aboutSection';
      });
  }

  // Optional: Set active state manually if needed
  setActiveSection(fragment: string): void {
    this.isActive = fragment === 'aboutSection';
  }
  toggleSidenav() {
    this.isSidenavActive = !this.isSidenavActive;
    document.body.classList.toggle('sidenav-active', this.isSidenavActive);

    // Uncomment below line if you want to automatically toggle the sidenav every 1500ms
    // this.interval = setInterval(() => this.toggleSidenav(), 1500);
  }

  closeSidenav() {
    this.isSidenavActive = false;
    document.body.classList.remove('sidenav-active');
  }

  @HostListener('document:mousemove', ['$event'])
  @HostListener('document:click', ['$event'])
  removeInterval() {
    // This will remove the interval and event listeners once the mouse moves or the document is clicked
    clearInterval(this.interval);
  }

}
