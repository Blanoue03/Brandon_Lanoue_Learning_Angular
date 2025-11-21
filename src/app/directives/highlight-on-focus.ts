import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appHighlightOnFocus]'
})
export class HighlightOnFocus {

  @Input() appHighlightOnFocus = '';
  constructor(private el: ElementRef) {



  }
  @HostListener('focusin') focus(){
    this.highlight(this.appHighlightOnFocus || 'yellow');
    console.log("Focus in")
  }
  @HostListener('focusout') focusout(){
    this.highlight('');
    console.log("Focus Out")
  }
  private highlight(color: String){
    this.el.nativeElement.style.backgroundColor = color;

  }

}
