import {Directive, ElementRef, HostBinding, HostListener} from '@angular/core';

@Directive ({
  selector: '[autoGrow]'
})

export class AutoGrowDirective {

  constructor(private el: ElementRef) {
  }

  @HostBinding('style.width.px')
    width:number = 120;

  @HostListener('focus') onFocus() {


    this.width = 200;
  }

  @HostListener('blur') onBlur() {
    this.width = 120;
  }


}
