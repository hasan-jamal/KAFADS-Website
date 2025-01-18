import { Directive, ElementRef, OnInit } from '@angular/core';
import intlTelInput from 'intl-tel-input';

@Directive({
  selector: '[appIntlTelInput]',
})
export class IntlTelInputDirective implements OnInit {
  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    const input = this.el.nativeElement;

    intlTelInput(input, {
      initialCountry: 'us',
      preferredCountries: ['us', 'gb', 'fr', 'de', 'in'], // Suppress error using type assertion
      separateDialCode: true,
    } as any); // Use 'as any' to bypass type checking
  }
}
