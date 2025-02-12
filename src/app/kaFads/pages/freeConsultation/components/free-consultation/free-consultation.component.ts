import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { Header2Component } from '../../../../../shared/components/header2/header2.component';
import Swal from 'sweetalert2';
import * as AOS from 'aos';

@Component({
  selector: 'app-free-consultation',
    standalone: true,
  imports: [CommonModule,FormsModule,Header2Component],
  templateUrl: './free-consultation.component.html',
  styleUrls: ['./free-consultation.component.css',
    '../../../../../../assets/css/style.css',
    '../../../../../../assets/css/header.css',
    '../../../../../../assets/css/footer.css',
    '../../../../../../assets/css/general.css',
    '../../../../../../assets/css/pages.css',
    '../../../../../../assets/css/footer.css'
],
})
export class FreeConsultationComponent implements OnInit{
   formData = {
    fullName: '',
    email: '',
    companyName: '',
    taxNumber: '',
    subject: '',
  };

  loading = false;
 ngOnInit(): void {
       AOS.init();
 }
  // Submit function
  onSubmit() {
    // Check if all fields are filled
    if (
      !this.formData.fullName ||
      !this.formData.email ||
      !this.formData.companyName ||
      !this.formData.taxNumber ||
      !this.formData.subject
    ) {
      // Show error if any field is empty
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please fill out all the fields!',
      });
      return;
    }

    this.loading = true;  // Disable the button
    const serviceID = 'service_5qn4hid'; // Replace with your EmailJS Service ID
    const templateID = 'template_46937u3'; // Replace with your EmailJS Template ID
    const userID = 'Cy4_if_gNEt__Z3_i'; // Replace with your EmailJS User ID

    emailjs
      .send(
        serviceID,
        templateID,
        {
          fullName: this.formData.fullName,
          email: this.formData.email,
          companyName: this.formData.companyName,
          taxNumber: this.formData.taxNumber,
          subject: this.formData.subject,
          recipientEmail: 'hasanjamalabusharekh@gmail.com', // Hardcoded recipient email
        },
        userID
      )
      .then(
        (response) => {
          // On success
          Swal.fire({
            title: 'Success!',
            text: 'Your action was successful.',
            icon: 'success',
            confirmButtonText: 'Cool',
          });

          // Reset form data after successful submission
          this.formData = {
            fullName: '',
            email: '',
            companyName: '',
            taxNumber: '',
            subject: '',
          };

          // Re-enable the button after operation completes
          this.loading = false;
        },
        (error) => {
          // On error
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
          });
          this.loading = false;  // Re-enable the button in case of an error
        }
      );
  }

}
