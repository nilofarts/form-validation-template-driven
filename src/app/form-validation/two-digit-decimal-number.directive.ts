
import { Directive, ElementRef, HostListener } from '@angular/core';
@Directive({
  selector: '[appTwoDigitDecimalNum]'
})
export class TwoDigitDecimalNumberDirective {
  // private pattern: RegExp = new RegExp(/^\d*\.?\d{0,2}$/g);
  private pattern: RegExp = new RegExp(/^\d{0,2}\.?\d{0,2}$/g);
  private specialKeys: Array<string> = ['Backspace', 'Tab', 'End', 'Home', '-', 'ArrowLeft', 'ArrowRight', 'Del', 'Delete'];
  constructor(private el: ElementRef) {
  }
  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    console.log(this.el.nativeElement.value);
    //Allow Backspace, tab, end, and home keys
    if (this.specialKeys.indexOf(event.key) !== -1) {
      return;
    }
    let previous: string = this.el.nativeElement.value;
    let next: string = previous.concat(event.key);
    if (next && !String(next).match(this.pattern)) {
      event.preventDefault();
    }
  }
}

// / / : the beginning and end of the expression
// ^ : whatever follows should be at the beginning of the string you're testing
// \d+ : there should be at least one digit
// ( )? : this part is optional
// \. : here goes a dot
// \d{1,2} : there should be between one and two digits here
// $ : whatever precedes this should be at the end of the string you're testing

//pattern for password
//pattern('^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=\\D*\\d)[A-Za-z\\d!$%@#£€*?&]{8,}$');
//the password should have:

// 1 uppercase letter
// 1 lowercase letter
// A number
// A minimum length of 8.