import { Component, HostListener, Input, OnInit } from '@angular/core';
import { ResizeEvent } from 'angular-resizable-element';

@Component({
  selector: 'app-resizable-container',
  templateUrl: './resizable-container.component.html',
  styleUrls: ['./resizable-container.component.scss']
})
export class ResizableContainerComponent implements OnInit {


  @Input()
  disabled: boolean = false;
  @Input()
  width: number = 0;
  @Input()
  height: number = 0;
  @Input()
  top: number = 0;
  @Input()
  left: number = 0;
  @Input()
  index: number = 0;

  @Input()
  borders: ('top' | 'right' | 'left' | 'bottom')[] | undefined;

  public style: { [klass: string]: any } = {};

  constructor() { }
  ngOnInit(): void {
    this.style = {
      width: `${this.width}px`,
      height: `${this.height}px`,
      top: `${this.top}px`,
      left: `${this.left}px`,
    };
    this.style[`border-left-width`] = '0px';
    this.style[`border-right-width`] = '0px';
    this.style[`border-top-width`] = '0px';
    this.style[`border-bottom-width`] = '0px';


    this.borders?.forEach(border => {
      this.style[`border-${border}-width`] = '3px';
    });
    if (this.index) this.style[`z-index`] = this.index;
  }


  validate(event: ResizeEvent): boolean {
    return event.rectangle.top >= 0 && event.rectangle.left >= 0;
  }

  onResizeEnd(event: ResizeEvent): void {
    this.style = {
      ...this.style,
      left: `${event.rectangle.left}px`,
      top: `${event.rectangle.top}px`,
      width: `${event.rectangle.width}px`,
      height: `${event.rectangle.height}px`
    };
  }
}
