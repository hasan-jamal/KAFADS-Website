import { CommonModule } from '@angular/common';
import { Component,OnInit,ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { ActivatedRoute, NavigationEnd, Router, RouterModule } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-footer',
  imports: [CommonModule, RouterModule,FormsModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css',
              '../../../../assets/css/style.css',
              '../../../../assets/css/header.css',
              '../../../../assets/css/footer.css',
              '../../../../assets/css/general.css'
         ],
     encapsulation: ViewEncapsulation.None
})
export class FooterComponent implements OnInit {
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


















  formData = {
    email: '',
  };
  
  onSubmit() {
    // Validate the email format before sending
    if (!this.isValidEmail(this.formData.email)) {
      // this.toastr.error('Please enter a valid email address.', 'Validation Error');
      return;
    }

    const serviceID = 'hasan_service';
    const templateID = 'template_0dfeblp'; 
    const userID = 'H2Do7rfMzzSM3A4mI'; 

    emailjs
      .send(
        serviceID,
        templateID,
        {
          email: this.formData.email, 
          recipientEmail: 'hasanjamalabusharekh@gmail.com',
        },
        userID
      )
      .then(
        (response) => {
          console.log('Email successfully sent:', response);
          // this.toastr.success('Your consultation request has been sent successfully!', 'Success');
          this.formData.email = '';
        },
        (error) => {
          console.error('Email sending failed:', error);
          // this.toastr.error('There was an error sending your email. Please try again later.', 'Error');
        }
      );
  }

  // Helper method to validate email format
  private isValidEmail(email: string): boolean {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  }

}

