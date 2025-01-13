import { Component, Renderer2 } from '@angular/core';
import { NavigationStart, Router, RouterOutlet } from '@angular/router';
import { FooterComponent } from './shared/components/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'KAFADSProject';
    constructor(private router: Router, private renderer: Renderer2) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        // Remove 'sidenav-active' class from body
        this.renderer.removeClass(document.body, 'sidenav-active');
      }
    });
  }
}
