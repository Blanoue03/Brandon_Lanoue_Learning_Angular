import {Directive, ElementRef, HostListener, Input} from '@angular/core';


@Directive({
  selector: '[appHoverHighlight]'
})
export class HoverHighlight {

  @Input() appHoverHighlight = '';
  constructor(private el: ElementRef) {



  }
  @HostListener('mouseenter') onmouseenter(){
    this.highlight(this.appHoverHighlight || 'yellow');
  }
  @HostListener('mouseleave') onmouseleave(){
    this.highlight('');
  }
  private highlight(color: String){
    this.el.nativeElement.style.backgroundColor = color;
  }

}
