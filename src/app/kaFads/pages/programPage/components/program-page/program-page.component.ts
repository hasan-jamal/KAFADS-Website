import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { Header2Component } from '../../../../../shared/components/header2/header2.component';
@Component({
  selector: 'app-program-page',
  imports: [CommonModule,FormsModule,Header2Component],
  templateUrl: './program-page.component.html',
  styleUrls: ['./program-page.component.css',
              '../../../../../../assets/css/style.css',
              '../../../../../../assets/css/header.css',
              '../../../../../../assets/css/footer.css',
              '../../../../../../assets/css/general.css',
              '../../../../../../assets/css/pages.css',
              '../../../../../../assets/css/footer.css'
         ],
})
export class ProgramPageComponent  {
  formData = {
    email: '',
  };
  private hoverTimeout: any;

  constructor(private renderer: Renderer2) {}

  onSubmit() {
    const serviceID = 'hasan_service'; // Replace with your EmailJS Service ID
    const templateID = 'template_0dfeblp'; // Replace with your EmailJS Template ID
    const userID = 'H2Do7rfMzzSM3A4mI'; // Replace with your EmailJS User ID

    emailjs
      .send(
        serviceID,
        templateID,
        {
          email: this.formData.email, // Sender's email
          recipientEmail: 'hasanjamalabusharekh@gmail.com', // Hardcoded recipient email
        },
        userID
      )
      .then(
        (response) => {
          alert('Your consultation request has been sent successfully!');
        },
        (error) => {
          alert('There was an error sending your email. Please try again later.');
        }
      );
  }

}
