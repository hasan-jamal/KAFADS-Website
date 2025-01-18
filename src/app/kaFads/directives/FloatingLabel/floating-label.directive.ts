import {
  Directive,
  ElementRef,
  Renderer2,
  HostListener,
  HostBinding
} from '@angular/core';

@Directive({
  selector: '[appFloatingLabel]'
})
export class FloatingLabelDirective {
 @HostBinding('class.floating-label-container') hostClass = true;

  private label: HTMLElement;

  constructor(private el: ElementRef, private renderer: Renderer2) {
    // Find the label inside the host element
    this.label = this.el.nativeElement.querySelector('label');

    // Apply initial styles to the label
    if (this.label) {
      this.renderer.setStyle(this.label, 'opacity', '0');
      this.renderer.setStyle(this.label, 'position', 'absolute');
      this.renderer.setStyle(this.label, 'top', '10px');
      this.renderer.setStyle(
        this.label,
        'transition',
        'opacity 0.3s ease, top 0.3s ease, font-size 0.3s ease'
      );
    }
  }

  @HostListener('focusin') onFocus(): void {
    if (this.label) {
      this.renderer.setStyle(this.label, 'opacity', '1');
      this.renderer.setStyle(this.label, 'top', '-20px');
    }
  }

  @HostListener('focusout') onBlur(): void {
    const inputElement = this.el.nativeElement.querySelector('input, textarea');
    if (this.label && inputElement && !inputElement.value) {
      this.renderer.setStyle(this.label, 'opacity', '0');
      this.renderer.setStyle(this.label, 'top', '10px');
    }
  }
}
