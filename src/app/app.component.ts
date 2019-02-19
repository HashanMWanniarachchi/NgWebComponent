import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  @Input() text = 'This text will get highlighted!';
  @Output() mouseenter = new EventEmitter();
  @Output() mouseleave = new EventEmitter();

  handleMouseEnter(){
    this.mouseenter.emit();
  };

  handleMouseLeave(){
    this.mouseleave.emit();
  };

}
