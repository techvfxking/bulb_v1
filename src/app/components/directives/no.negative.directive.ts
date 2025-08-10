import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appNoNegativeAlpha]',
  standalone: false
})
export class NoNegativeAlphaDirective {

  constructor(private el: ElementRef) {}

  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent): void {
    const input = event.target as HTMLInputElement;
    const key = event.key;
    
    const controlKeys = [
      'Backspace', 'Delete', 'Tab', 'Escape', 'Enter',
      'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown',
      'Home', 'End'
    ];
    
    if (controlKeys.includes(key)) {
      return;
    }
    
    if (event.ctrlKey && ['a', 'c', 'v', 'x', 'z'].includes(key.toLowerCase())) {
      return;
    }
    
    if (/[a-zA-Z]/.test(key)) {
      event.preventDefault();
      return;
    }
    
    if (key === '-' || key === 'Minus' || key === '.' || key === 'Decimal') {
      event.preventDefault();
      return;
    }
    
    if (/[0-9]/.test(key)) {
      return;
    }
    
    event.preventDefault();
  }

  @HostListener('paste', ['$event'])
  onPaste(event: ClipboardEvent): void {
    const clipboardData = event.clipboardData?.getData('text') || '';
    
    if (/[a-zA-Z-]/.test(clipboardData) || !/^[0-9]*\.?[0-9]*$/.test(clipboardData)) {
      event.preventDefault();
    }
  }
}
