import { CommonModule } from '@angular/common';
import { AfterViewInit, Component,ViewEncapsulation  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

declare var intlTelInput: any;

@Component({
  selector: 'app-form-home-page',
  imports: [CommonModule, RouterModule,FormsModule],
  templateUrl: './form-home-page.component.html',
  styleUrl: './form-home-page.component.css'
})
export class FormHomePageComponent implements AfterViewInit {
  
ngAfterViewInit(): void {
    const input = document.querySelector("#phoneNumber") as HTMLInputElement | null;

    if (input) {
      const iti = intlTelInput(input, {
        initialCountry: "sa", 
        preferredCountries: ['sa'],
        separateDialCode: true,
      });

      input.addEventListener("input", () => {
        const dialCode = iti.getSelectedCountryData().dialCode;
       localStorage.setItem('dialCode', dialCode);
        console.log(localStorage); 
      });
    } else {
      console.error("Input element not found");
    }
  }

  formData = {
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    companyName: '',
    websiteLink: '',
    officeCountry: '',
    referredByEntity: '',
    isStartupFounder: '',
    isPortfolioCompany: '',
    lookingFor: ''
  };
  loading = false;

onSubmit() {
  if (
    !this.formData.firstName ||
    !this.formData.lastName ||
    !this.formData.phoneNumber ||
    !this.formData.email ||
    !this.formData.companyName ||
    !this.formData.websiteLink ||
    !this.formData.officeCountry ||
    !this.formData.referredByEntity ||
    !this.formData.isStartupFounder ||
    !this.formData.isPortfolioCompany ||
    !this.formData.lookingFor
  ) {
    Swal.fire({
      icon: 'error',
      title: this.formData,
      text: 'Please fill out all the fields!',
    });
    return;
  }

  this.loading = true; 
  const serviceID = 'service_865eqql'; 
  const templateID = 'template_ywldkio'; 
  const userID = 'AjD7kjzCo8enF0G4s'; 
  const storedDialCode = localStorage.getItem('dialCode');
  this.formData.phoneNumber = `+${storedDialCode} ${this.formData.phoneNumber}`; 
  console.log(this.formData.phoneNumber);
  emailjs
    .send(
      serviceID,
      templateID,
      this.formData,
      userID
    )
    .then(
      (response) => {
        Swal.fire({
          title: 'Success!',
          text: 'Your action was successful.',
          icon: 'success',
          confirmButtonText: 'Cool',
        });

        // Reset form
        this.formData = {
          firstName: '',
          lastName: '',
          phoneNumber: '',
          email: '',
          companyName: '',
          websiteLink: '',
          officeCountry: '',
          referredByEntity: '',
          isStartupFounder: '',
          isPortfolioCompany: '',
          lookingFor: ''
        };
        localStorage.removeItem('dialCode');
        localStorage.clear();

        this.loading = false;
      },
      (error) => {
        console.log('Error:', error);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        });
        this.loading = false;
      }
    );
}

}
